<script setup lang="ts">
import {useCategoryStore} from '@/store/category'
import  {storeToRefs} from 'pinia';
import Category from '@/components/website/main/Category'
const store = useCategoryStore();
const {availableCategories}  = storeToRefs(store);
onMounted(()=>{
    store.getAvailableCategories();
})
</script>
<template>
   <div class="tw-mt-10 tw-px-10">
    <h1  class="tw-my-5" >
        Explore our categories  
    </h1>
    <div class=" tw-grid tw-grid-flow-col  lg:tw-grid-rows-2  tw-gap-x-3 tw-gap-y-3 tw-overflow-scroll no-scroll tw-pb-8 tw-px-2">
      
<Category v-for="(category , index) in availableCategories " :key="index" :category="category" />

    </div>
   </div>
</template>
<style>
.no-scroll::-webkit-scrollbar{
display: none !important; 
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>