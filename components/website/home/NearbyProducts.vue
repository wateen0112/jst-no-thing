<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/store/product';
import Product from '@/components/website/main/Product.vue'
const store = useProductStore();
const {getNearbyProducts} = store;
const {nearbyProducts} = storeToRefs(store)
onMounted(()=>{
   getNearbyProducts();
})
</script>
<template>
       <div class=" lg:tw-px-20 tw-px-10 tw-my-12">
        <h1 class="tw-my-5">
            Nearby  Products 
        </h1>
        <div class="  tw-grid tw-grid-flow-col  lg:tw-grid-rows-2  tw-gap-x-3 tw-gap-y-3 tw-overflow-scroll no-scroll tw-pb-8 tw-px-2">
<Product  v-for="(product , index) in nearbyProducts" :key="index" :product="product" :width="400"/>
        </div>
    </div>
</template>