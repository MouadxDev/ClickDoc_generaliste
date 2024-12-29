<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import { DoughnutChart, BarChart, PieChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import { Reporting } from '../../core/Clients/Reporting';

const client = new Reporting();

Chart.register(...registerables);

const demographic_reports = ref();
const date_reports = ref();
const hours_reports = ref();
const consultation_reports = ref();
const billing_reports = ref();
const patient_reports = ref();
const pathology_reports = ref();

interface DateReport {
  date: string;
  count: number;
}

interface HourReport {
  heure: string;
  count: number;
}

async function getData() {
  const data = await client.getAll();
  
  // Demographics report
  demographic_reports.value = {
    labels: ['Hommes', 'Femmes'],
    datasets: [
      {
        data: [data.demo.male, data.demo.females],
        backgroundColor: ['#6495ED', '#FF5733'],
      },
    ],
  };

  // Date-based report
  let dates = {
    labels: [] as string[],
    data: [] as number[],
  };

  data.date.forEach((element: DateReport) => {
    dates.labels.push(element.date);
    dates.data.push(element.count);
  });

  date_reports.value = {
    labels: dates.labels,
    datasets: [
      {
        label: 'Consultations par date',
        data: dates.data,
        backgroundColor: '#76C7C0',
      },
    ],
  };

  // Hour-based report
  let hours = {
    labels: [] as string[],
    data: [] as number[],
  };

  data.horaires.forEach((element: HourReport) => {
    hours.labels.push(element.heure);
    hours.data.push(element.count);
  });

  hours_reports.value = {
    labels: hours.labels,
    datasets: [
      {
        label: 'Consultations par heure',
        data: hours.data,
        backgroundColor : [
          '#3498DB', // Sky Blue
          '#1ABC9C', // Sea Green
          '#F1C40F', // Sunflower Yellow
          '#E67E22', // Carrot Orange
          '#9B59B6', // Amethyst
          '#16A085'  // Green Sea
        ]
      },
    ],
  };

  // Consultation report
  consultation_reports.value = {
    labels: data.consultations.map((c: any) => c.type),
    datasets: [
      {
        data: data.consultations.map((c: any) => c.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Billing report
  billing_reports.value = {
    labels: data.billing.monthly_trends.map((t:any) => `Mois ${t.month}`),
    datasets: [
        {
            label: 'Revenus Mensuels',
            data: data.billing.monthly_trends.map((t:any) => t.total),
            backgroundColor: '#4BC0C0',
            borderColor: '#36A2EB',
            borderWidth: 2,
        },
    ],
};
  console.log('Total Revenue:', data.billing.total_revenue);
  console.log('Payments Received:', data.billing.payments_received);
  console.log('Pending Invoices:', data.billing.pending_invoices);

  // Patient report
  patient_reports.value = {
    labels: ['Nouveaux', 'Réguliers'],
    datasets: [
      {
        data: [data.patients.new, data.patients.regular],
        backgroundColor: ['#5DADE2', '#48C9B0'],
      },
    ],
  };

  // Pathology report
  // pathology_reports.value = {
  //   labels: data.pathologies.map((p: any) => p.diagnosis),
  //   datasets: [
  //     {
  //       data: data.pathologies.map((p: any) => p.count),
  //       backgroundColor: [
  //         '#F1948A', '#D7BDE2', '#85C1E9', '#76D7C4', '#F7DC6F', '#F8C471'
  //       ],
  //     },
  //   ],
  // };
}

onMounted(async () => {
  await getData();
});
</script>

<template>
  <main-layout>
    <div class="container mx-auto">
      <ui-sheet title="Rapports">
        <el-row :gap="10">
          <!-- Demographics Report -->
          <el-col :span="8">
            <div class="font-bold text-2xl text-center"> Patient/Sexe </div>
            <DoughnutChart :chartData="demographic_reports" title="Demographie" />
          </el-col>

          <!-- Date Report -->
          <el-col :span="16">
            <div class="font-bold text-2xl text-center"> Rendez-vous/Date </div>
            <BarChart :chartData="date_reports" />
          </el-col>

          <!-- Hour Report -->
          <el-col :span="24" class="mt-4">
            <div class="font-bold text-2xl text-center"> Rendez-vous/Heure </div>
            <PieChart :chartData="hours_reports" />
          </el-col>

          <!-- Consultation Report -->
          <el-col :span="12" class="mt-4">
            <div class="font-bold text-2xl text-center"> Type de Consultations </div>
            <PieChart :chartData="consultation_reports" />
          </el-col>

          <!-- Billing Report -->
          <el-col :span="24" class="mt-4">
            <div class="font-bold text-2xl text-center"> Revenus Mensuels </div>
            <LineChart :chartData="billing_reports" />
          </el-col>

          <!-- Patient Report -->
          <el-col :span="12" class="mt-4">
            <div class="font-bold text-2xl text-center"> Nouveaux vs Réguliers </div>
            <DoughnutChart :chartData="patient_reports" />
          </el-col>

          <!-- Pathology Report -->
          <!-- <el-col :span="24" class="mt-4">
            <div class="font-bold text-2xl text-center"> Pathologies Fréquentes </div>
            <BarChart :chartData="pathology_reports" />
          </el-col> -->
        </el-row>
      </ui-sheet>
    </div>
  </main-layout>
</template>
