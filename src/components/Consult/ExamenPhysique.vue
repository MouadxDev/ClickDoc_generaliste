<script setup lang="ts">
    import { Ref , onBeforeMount, ref } from "vue";
    import {useConsultStore} from "../../../core/Data/stores/consultation"
    import { ExamenPhysique } from '../../../core/Clients/Examen';

    const consult = useConsultStore();
    const examenClient = new ExamenPhysique()
    const examen : Ref<any> = ref({})

const sys1 = [
	{label:"Toux",value:"Toux"},
	{label:"Douleur thoracique",value:"Douleur thoracique"},
	{label:"Crachats (avec ou sans sang)",value:"Crachats (avec ou sans sang)"},
	{label:"Sifflements respiratoires (sibilants)",value:"Sifflements respiratoires (sibilants)"},
	{label:"Ronflement nocturne",value:"Ronflement nocturne"},
	{label:"Essoufflement (dyspnée)",value:"Essoufflement (dyspnée)"},
]
const sys2  = [
    {label:"Douleur thoracique ou oppression",value:"Douleur thoracique ou oppression"},
	{label:"Palpitations",value:"Palpitations"},
	{label:"Fatigue",value:"Fatigue"},
	{label:"Œdème des membres inférieurs",value:"Œdème des membres inférieurs"},
	{label:"Essoufflement à l'effort",value:"Essoufflement à l'effort"},
	{label:"Étourdissements ou évanouissements",value:"Étourdissements ou évanouissements"},
]
const sys3 = [
    {label:"Maux de tête",value:"Maux de tête"},
	{label:"Étourdissements ou vertiges",value:"Étourdissements ou vertiges"},
	{label:"Engourdissement ou faiblesse",value:"Engourdissement ou faiblesse"},
	{label:"Changements de vision",value:"Changements de vision"},
	{label:"Problèmes d'élocution",value:"Problèmes d'élocution"},
	{label:"Convulsions ou crises",value:"Convulsions ou crises"},
]
const sys4= [
    {label:"Douleur articulaire",value:"Douleur articulaire"},
	{label:"Raideur articulaire",value:"Raideur articulaire"},
	{label:"Gonflement des articulations",value:"Gonflement des articulations"},
	{label:"Difficulté à bouger ou à effectuer certaines actions",value:"Difficulté à bouger ou à effectuer certaines actions"},
	{label:"Déformation des articulations",value:"Déformation des articulations"},
]
const sys5= [
    {label:"Douleur abdominale",value:"Douleur abdominale"},
	{label:"Nausées ou vomissements",value:"Nausées ou vomissements"},
	{label:"Changements dans les habitudes intestinales (constipation, diarrhée)",value:"Changements dans les habitudes intestinales (constipation, diarrhée)"},
	{label:"Sang dans les selles",value:"Sang dans les selles"},
	{label:"Brûlures d'estomac",value:"Brûlures d'estomac"},
	{label:"Ballonnements ou gaz excessif",value:"Ballonnements ou gaz excessif"},
]

const sys6= [
    {label:"Douleur ou brûlure en urinant",value:"Douleur ou brûlure en urinant"},
	{label:"Changements dans la fréquence urinaire",value:"Changements dans la fréquence urinaire"},
	{label:"Sang dans l'urine",value:"Sang dans l'urine"},
	{label:"Incontinence urinaire",value:"Incontinence urinaire"},
	{label:"Douleur pelvienne",value:"Douleur pelvienne"},
	{label:"Changements dans les caractéristiques menstruelles (chez les femmes)",value:"Changements dans les caractéristiques menstruelles (chez les femmes)"},
]


const sys7= [
	{label:"Fatigue",value:"Fatigue"},
	{label:"Changements de poids inexpliqués",value:"Changements de poids inexpliqués"},
	{label:"Sensibilité au froid ou à la chaleur",value:"Sensibilité au froid ou à la chaleur"},
	{label:"Soif excessive ou mictions fréquentes",value:"Soif excessive ou mictions fréquentes"},
	{label:"Changements dans la texture de la peau ou des cheveux",value:"Changements dans la texture de la peau ou des cheveux"},
	{label:"Modifications de l'humeur",value:"Modifications de l'humeur"},
]
const sys8= [
    {label:"Gonflement des ganglions lymphatiques",value:"Gonflement des ganglions lymphatiques"},
	{label:"Rougeur ou chaleur dans la région des ganglions lymphatiques",value:"Rougeur ou chaleur dans la région des ganglions lymphatiques"},
	{label:"Douleur ou sensibilité au toucher",value:"Douleur ou sensibilité au toucher"},
	{label:"Fatigue ou malaise généralisé",value:"Fatigue ou malaise généralisé"},
	{label:"Fièvre inexpliquée",value:"Fièvre inexpliquée"},
	{label:"Perte de poids inexpliquée",value:"Perte de poids inexpliquée"},
]
const sys9= [
    {label:"Fatigue",value:"Fatigue"},
	{label:"Pallor (peau pâle)",value:"Pallor (peau pâle)"},
	{label:"Ecchymoses ou saignements inhabituels",value:"Ecchymoses ou saignements inhabituels"},
	{label:"Ganglions lymphatiques enflés",value:"Ganglions lymphatiques enflés"},
	{label:"Fièvre inexpliquée",value:"Fièvre inexpliquée"},
	{label:"Perte de poids inexpliquée",value:"Perte de poids inexpliquée"},
]
const sys10= [
    {label:"Éruptions cutanées",value:"Éruptions cutanées"},
	{label:"Démangeaisons (prurit)",value:"Démangeaisons (prurit)"},
	{label:"Modifications de la couleur de la peau",value:"Modifications de la couleur de la peau"},
	{label:"Modifications de la texture de la peau",value:"Modifications de la texture de la peau"},
	{label:"Blessures cutanées qui ne guérissent pas",value:"Blessures cutanées qui ne guérissent pas"},
	{label:"Douleur ou sensibilité cutanée",value:"Douleur ou sensibilité cutanée"},
]

const sys11= [
    {label:"Perte auditive",value:"Perte auditive"},
	{label:"Douleur auriculaire",value:"Douleur auriculaire"},
	{label:"Écoulement auriculaire",value:"Écoulement auriculaire"},
	{label:"Sensation de plénitude auriculaire",value:"Sensation de plénitude auriculaire"},
	{label:"Acouphènes (bourdonnements d'oreilles)",value:"Acouphènes (bourdonnements d'oreilles)"},
	{label:"Vertiges",value:"Vertiges"},
]

const sys12= [
    {label:"Diminution de l'acuité visuelle",value:"Diminution de l'acuité visuelle"},
	{label:"Vision floue",value:"Vision floue"},
	{label:"Douleur oculaire",value:"Douleur oculaire"},
	{label:"Rougeur ou irritation oculaire",value:"Rougeur ou irritation oculaire"},
	{label:"Sensibilité à la lumière",value:"Sensibilité à la lumière"},
	{label:"Halos autour des lumières",value:"Halos autour des lumières"},
]
    

    async function getExamenPhysique(){
        const data :any =  await examenClient.getByID(consult.examen_id)
        return {
            id:data.id,
            sys1 : JSON.parse(data.respiratory_system),
			sys2 : JSON.parse(data.cardiovascular_system),
			sys3 : JSON.parse(data.neurological_system),
			sys4 : JSON.parse(data.musculoskeletal_system),
			sys5 : JSON.parse(data.gastrointestinal_system),
			sys6 : JSON.parse(data.genitourinary_system),
            sys7 : JSON.parse(data.endocrine_system),
			sys8 : JSON.parse(data.lymphatic_system),
			sys9 : JSON.parse(data.hematologic_system),
			sys10 : JSON.parse(data.cutaneous_system),
			sys11 : JSON.parse(data.auditory_system),
			sys12 : JSON.parse(data.visual_system)
        }
        
        
    }
 
    async function setExamenPhysique() {
    const payload = {
        id: examen.value.id,
        sys1: examen.value.sys1, // Already an array
        sys2: examen.value.sys2,
        sys3: examen.value.sys3,
        sys4: examen.value.sys4,
        sys5: examen.value.sys5,
        sys6: examen.value.sys6,
        sys7: examen.value.sys7,
        sys8: examen.value.sys8,
        sys9: examen.value.sys9,
        sys10: examen.value.sys10,
        sys11: examen.value.sys11,
        sys12: examen.value.sys12,
    };
    
    await examenClient.update(payload);
    examen.value = await getExamenPhysique();
}


    onBeforeMount(async ()=>{
        examen.value = await getExamenPhysique()
    })

     // Add a new value dynamically to the dropdown if it doesn't exist
    function addOption(newOption: string, dropdownList: Ref<any[]>) {
        if (!dropdownList.value.find((option) => option.value === newOption)) {
            dropdownList.value.push({ label: newOption, value: newOption });
            ElMessage.success(`"${newOption}" a été ajouté à la liste.`);
        }
    }

    
</script>

<template>
    <el-form label-position="top">
        <el-form-item label="Système respiratoire ">
            <el-select-v2
                v-model="examen.sys1"
                :options="sys1"
                placeholder="Selectionner"
                allow-create
                multiple
				filterable
                class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
        <el-form-item label="Système cardiovasculaire">
            <el-select-v2
                v-model="examen.sys2"
                :options="sys2"
                placeholder="Selectionner"
                multiple
                allow-create
				filterable
                class="w-full"
                clearable
                @change="async()=>{await setExamenPhysique()} "
                :disabled="!consult.edit"
            />
        </el-form-item>
        <el-form-item label="Système neurologique">
            <el-select-v2
                v-model="examen.sys3"
                :options="sys3"
                placeholder="Selectionner"
				filterable
                allow-create
                multiple
                class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
        <el-form-item label="Système musculo-squelettique">
            <el-select-v2
                v-model="examen.sys4"
                :options="sys4"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système gastro-intestinal">
            <el-select-v2
                v-model="examen.sys5"
                :options="sys5"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système génito-urinaire">
            <el-select-v2
                v-model="examen.sys6"
                :options="sys6"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système endocrinien">
            <el-select-v2
                v-model="examen.sys7"
                :options="sys7"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système lymphatique">
            <el-select-v2
                v-model="examen.sys8"
                :options="sys8"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système hématologique">
            <el-select-v2
                v-model="examen.sys9"
                :options="sys9"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système cutané">
            <el-select-v2
                v-model="examen.sys10"
                :options="sys10"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système auditif">
            <el-select-v2
                v-model="examen.sys11"
                :options="sys11"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
		<el-form-item label="Système visuel">
            <el-select-v2
                v-model="examen.sys12"
                :options="sys12"
                placeholder="Selectionner"
                multiple
                allow-create
                filterable
				class="w-full"
                clearable
                @change="async ()=>{await setExamenPhysique()}"
                :disabled="!consult.edit"
            />
        </el-form-item>
    </el-form>
</template>