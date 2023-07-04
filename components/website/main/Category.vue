<script setup lang="ts">
import { MainCategory } from '~/api/categories';
import { useCategoryStore } from '~/store/category';
const store = useCategoryStore();
const {setCategory} = store;
const props = defineProps({
  category:{
    type:MainCategory, 
    default : new MainCategory()
  }
});

</script>
<template>
  <RouterLink  @click="setCategory(category)" :to="`/categories/${category.category}`">
<div class="category-box tw-overflow-hidden tw-w-[150px] tw-pt-[20px] tw-h-[150px] tw-rounded-3xl">
 <div class="tw-w-full tw-h-[100px]  tw-flex tw-justify-center tw-items-center ">
  <div class=" tw-w-[70px] tw-h-[70px] tw-flex tw-justify-center tw-items-center tw-p-5 tw-rounded-full tw-bg-day-blueGrey">
    <img  class="tw-w-[40px] tw-h-[40px] tw-object-contain" :src="category.image" alt="">
  </div>
</div>
<p class=" tw-flex tw-justify-center tw-items-center tw-h-[30px] bg-blueGrey tw-text-black tw-w-full tw-text-center tw-text-sm">{{ category.category }}</p>
</div>
  </RouterLink>  
</template>
<style scoped>
.category-box{
  /* Rectangle 969 */



box-shadow: 0px -0.5px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05);

}
</style>