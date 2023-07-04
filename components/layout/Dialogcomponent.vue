<script setup lang="ts">
import {useAppStore} from '@/store/app';
import { storeToRefs } from 'pinia';

const store  = useAppStore();
const  {dialog} = storeToRefs(store);
// const {toggleDialog} = store;
</script>
<template>
    <div>
              <!--dialog-->
     
        <div  v-if="dialog"  class="wrapper tw-top-[0px] tw-left-0 tw-fixed tw-w-full tw-h-full  tw-z-50 tw-flex tw-justify-center tw-items-center">
 

 
       

<VCard   class="  tw-bg-red-500 tw-z-50 tw-w-auto tw-h-auto relative tw-min-w-[300px]  tw-min-h-[300px]  "  >
    <slot name="dialog">
        <!-- add your dialog here -->
  <!-- closing btn-->
  <!-- <VBtn  class="  tw-absolute tw-right-1 tw-top-3" variant="text" @click="toggleDialog"> <VIcon>mdi-close</VIcon> </VBtn> -->
</slot>
</VCard>


</div> 



   
    <slot name="main">
<!-- add your main content here -->

</slot>
</div>
</template>
<style>
.wrapper {
  /* Rectangle 934 */


background: rgba(162, 162, 162, 0.53);

}
</style>