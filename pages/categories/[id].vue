<script  setup lang="ts">
import { storeToRefs } from 'pinia';
import {watch,onMounted,onBeforeUnmount} from 'vue'
import { useCategoryStore } from '@/store/category';
import  {useProductStore} from '@/store/product';
import  Product from '@/components/website/main/Product.vue';
import  Loading from '@/components/website/main/Loading.vue'
const productStore =  useProductStore();

const store = useCategoryStore();
const {category , subCategories} = storeToRefs(store)
const  {selectedCatsList,productsList,loading}  = storeToRefs(productStore)
const props = defineProps(['id']);



</script>
<template>
   <div class="tw-grid lg:tw-grid-cols-6 tw-w-full tw-h-full ">
       <div class=" tw-min-h-[120vh] tw-flex tw-justify-start tw-items-start tw-px-2 tw-flex-col tw-gap-3 tw-pt-8 tw-bg-opacity-30 tw-bg-day-leightGrey">
<h2>Sub Categories</h2>
 <!--VBtn toggleer-->
 <v-btn-toggle  v-model="selectedCatsList" multiple>
    <v-btn v-for="(item, index) in subCategories" :key="index" :value="item">
      {{ item.category }}
    </v-btn>
  </v-btn-toggle>
        <!-- sub category container-->


 <!----->
        <!-- <div class="  hover:tw-shadow-none tw-cursor-pointer tw-bg-day-blueGrey tw-px-3 tw-rounded-full tw-shadow-md"  v-for="cat in subCategories">
 <div class="tw-flex tw-justify-center tw-items-center">
<div class="tw-p-2 tw-bg-slate-300 tw-rounded-full tw-flex tw-justify-center tw-items-center">
    <img  class="tw-w-[20px] tw-h-[20px] tw-object-contain" :src="cat.image" alt="">
</div> <span class=" tw-text-[18px] tw-py-2 tw-px-8">{{ cat.category }}</span>
 </div>
</div> -->
</div>
<div v-if="loading" class=" tw-col-span-5 tw-flex tw-justify-center tw-items-center"  >
<Loading/>
</div>

      
<div class=" tw-w-full tw-h-full tw-col-span-5 tw-flex tw-justify-center tw-items-center"  v-if="productsList.length==0 && !loading">
<h1>No Proucts found !</h1>
</div>
    <div  v-else class=" tw-my-10 lg:tw-px-20 tw-col-span-5  tw-grid lg:tw-gap-5 lg:tw-grid-cols-3 tw-grid-cols-1">

    <Product :width="400" v-for="(product , index) in productsList" :key="index" :product="product"/>
    </div>
   </div>
</template>
<style>
.v-btn-toggle
{ 
    width: auto !important;
    display:  flex;
    justify-content: start;
    align-content: start;
    flex-direction: column;
    height: auto !important;
    gap:8px;
    background-color: rgba(255, 228, 196, 0) !important;
    padding: 8px;
    overflow: visible !important;

}
 .v-btn-toggle  .v-btn {
    border-radius: 100px;
    padding: 5px 11px;
    text-transform: capitalize;
 }
 .v-btn-toggle .v-btn--active{
    background-color: #EE2E53 !important;
    color: white;
 }
 
 </style>