<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '@/store/product';
import Product from '@/components/website/main/Product.vue'
const store = useProductStore();
const {getNearbyProducts} = store;
const {popularProducts} = storeToRefs(store)
onMounted(()=>{
   getNearbyProducts();
})
</script>
<template>
    <div class=" tw-my-12 lg:tw-px-20">
        <h1 class="tw-my-5">
            Popular Products 
        </h1>
        <div class="tw-flex tw-justify-center tw-items-cetner tw-flex-wrap  tw-lg:px-20 tw-grid tw-grid-flow-col  lg:tw-grid-rows-2  tw-gap-x-3 tw-gap-y-3 tw-overflow-scroll no-scroll tw-pb-8 tw-px-2">
<Product  v-for="(product , index) in popularProducts" :key="index" :product="product"/>
        </div>
    </div>
</template>