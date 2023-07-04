<script setup lang="ts">
import { useAppStore } from "@/store/app";
import {storeToRefs}  from "pinia";
import axios from 'axios';
const store = useAppStore();

const { sliderItems } = storeToRefs(store);

onMounted(()=>{
    store.getSliderItems()

})
</script>

<template>

 <div class="tw-shadow-md tw-rounded-2xl  tw-m-5">

    <v-carousel
    height="500px"
  interval="5000"
  cycle
    hide-delimiter-background
    :show-arrows="false" class="tw-rounded-2xl">
  <v-carousel-item   class="tw-rounded-2xl" v-for="(item , index) in sliderItems" :key="index">
<div class="carousel-item tw-rounded-2xl" >
  <img :src="item.image" class="tw-w-full tw-h-full tw-object-cover" alt="">
</div>
</v-carousel-item>

</v-carousel>
 </div>
</template>
<style>
.carousel-item{
  /* Rectangle 4 */


background: linear-gradient(95.93deg, #FF6A2B 6.34%, #EE2E53 95.91%);
box-shadow: 0px 4px 15px rgba(255, 92, 0, 0.15);
height: 100%;

}
</style>