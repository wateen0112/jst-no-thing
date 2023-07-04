<script setup lang="ts">
import SearchBar from '@/components/website/home/SearchBar.vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '~/store/app';
const store = useAppStore();
const {searchBarAtTheTop} =storeToRefs(store)


onMounted(()=>{


window.addEventListener('scroll',()=>{
   // const windowScroll =  window.scrollY??0;
   const item = document.querySelector('.intro-searchBar')
const scrolltop =item?.getBoundingClientRect().top ??0;
// console.log(scrolltop,windowScroll);

  if(Math.floor(scrolltop)<0){
   searchBarAtTheTop.value=true;
  }
  else {
   searchBarAtTheTop.value=false;
  }
})
})
</script>
<template>
    
   <div class="tw-px-5 tw-py-10 ">
    <p class=" tw-text-lg lg:tw-text-2xl tw-mt-10 lg:tw-w-[50%]">
    Get items on rent from other people for home tasks, fun experiences, or work-related projects.
   </p>
   <div class="tw-flex tw-justify-center tw-flex-col tw-items-center  tw-mt-8">
<SearchBar  class="intro-searchBar"/>
<div class=" lg:tw-w-[500px]  tw-flex tw-justify-center tw-items-center">
<p class="tw-text-xl tw-mt-4">or   <VBtn color="blueGrey" class="tw-text-black tw-mx-6 " rounded> <RouterLink  class="tw-capitalize "  to="items/new">Start Listing</RouterLink></VBtn> </p>

</div>
   </div>
   </div>
</template>
<style lang="scss">
    .search-btn {

text-transform: capitalize;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* VBtn_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 100px;
color:#fff


}
</style>