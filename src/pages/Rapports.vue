<script lang='ts' setup>
import { ref,onMounted } from 'vue';
import { DoughnutChart, BarChart , PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import { Reporting } from '../../core/Clients/Reporting';
	
const client = new Reporting();

	Chart.register(...registerables);
	const demographic_reports = ref()
	const date_reports = ref()
	const hours_reports = ref()

	async function getData () {
		const data = await client.getAll()
		demographic_reports.value = {
			labels: ['Hommes', 'Femmes'],
			datasets: [
				{
					data: [data.demo.male, data.demo.females],
					backgroundColor: ['#6495ED', ' #FF5733 '],
				},
			],
		}
		
		let dates = {
			labels:[],
			data:[]
		}
	
		data.date.forEach(element=>{
			dates.labels.push(element.date)
			dates.data.push(element.count)
		})
		
		date_reports.value = {
			labels: dates.labels,
			datasets: [
				{
					data: dates.data
				},
			],
		}
		
		let hours = {
			labels:[],
			data:[]
		}
	
		data.horaires.forEach(element=>{
			hours.labels.push(element.heure)
			hours.data.push(element.count)
		})
		
		hours_reports.value = {
			labels: hours.labels,
			datasets: [
				{
					data: hours.data
				},
			],
		}
		
    }

onMounted(async ()=>{
	await getData()
})
	
</script>
<template>
    <main-layout>
		<div class="container mx-auto">
			<ui-sheet title="Rapports">
				<el-row :gap="10">
					<el-col :span="8">
						<div class="font-bold text-2xl text-center"> Patient/Sexe </div>
						<DoughnutChart :chartData="demographic_reports" title="Demographie" />
					</el-col>
					<el-col :span="16">
						<div class="font-bold text-2xl text-center"> Rendez-vous/Date </div>
						<BarChart :chartData="date_reports" />
					</el-col>
					<el-col :span="24" class="mt-4">
						<div class="font-bold text-2xl text-center"> Rendez-vous/Heure </div>
						<PieChart :chartData="hours_reports" />
					</el-col>
				</el-row>

			</ui-sheet>
		</div>
	</main-layout>
</template>