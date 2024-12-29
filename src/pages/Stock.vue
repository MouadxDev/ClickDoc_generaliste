<script lang="ts" setup>
import { Ref, ref, onBeforeMount } from 'vue';

import { Stock } from '../../core/Clients/Stock';

const client = new Stock();
const newStock = ref(false);
const showDetails = ref(false);
const stockItem: Ref<any> = ref({
    name: "",
    stock: 0,
    expiration_date: ""
});
const stockDetails: Ref<Array<any>> = ref([]);
const table: Ref<any> = ref(null);

async function show(n: any) {
    stockDetails.value = await client.getByID(n);
    showDetails.value = true;
}

const fields = [
    { prop: 'name', label: 'Name' },
    { prop: 'stock', label: 'Stock' },
    { prop: 'expiration_date', label: 'Expiration Date'}
];

const actions = [
    {
        icon: "View",
        text: "View",
        action: (n: any) => { show(n.id); }
    }
];

onBeforeMount(async () => {
    const response = await client.getAll(); 
    table.value.setData(response.data); 
});


async function addStockItem() {
    await client.add(stockItem.value);
    stockItem.value = {
        name: "",
        stock: 0,
        expiration_date: ""
    };
    newStock.value = false;
    table.value.getData();
}
</script>

<template>
    <main-layout>
        <div class="container mx-auto">
            <ui-table 
                :is-main="true"
                :hasButton="true" 
                :client="client" 
                :add="true"  
                :onAdd="() => { newStock = true; }"
                title="Stock List" 
                :fields="fields" 
                :actions="actions"
                ref="table"
            />
            <el-dialog
                title="New Stock Item"
                v-model="newStock"
            >
                <el-form label-position="top">
                    <el-form-item label="Name">
                        <el-input v-model="stockItem.name" />
                    </el-form-item>
                    <el-form-item label="Stock">
                        <el-input type="number" v-model="stockItem.stock" />
                    </el-form-item>
                    <el-form-item label="Expiration Date" style="width: 100%;">
                        <el-date-picker v-model="stockItem.expiration_date" type="date" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="primary" @click="async () => { await addStockItem(); }">
                            Save
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </main-layout>
</template>
