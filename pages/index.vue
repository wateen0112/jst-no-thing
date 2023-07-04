<script lang="ts" setup>
import { useProductStore } from '~/store/product';
import Slider from '@/components/website/home/Slider.vue';
import Intro from '@/components/website/home/Intro.vue';
import Guarantee from '@/components/website/home/Guarantee.vue';
import Categories from '@/components/website/home/Categories.vue';
import About from '@/components/website/home/About.vue';
import NearbyProducts from '@/components/website/home/NearbyProducts.vue';
import PopularProducts from '@/components/website/home/PopularProducts.vue';
// import { useAppStore } from "@/store/app";
// import { storeToRefs } from "pinia";
// const store = useAppStore();
const productStore = useProductStore();
onMounted(()=>{
  productStore.getPopularProducts()
})
definePageMeta({
  layout: "default",
});
</script>  

<template>
  <div class="">

  <div class="lg:tw-px-20">
    <Slider></Slider>
  </div>
<div class="lg:tw-px-20"><Intro/></div>
<Guarantee/>
<div class="lg:tw-px-20 ">
  <Categories/>
</div>
<NearbyProducts/>
<About/>
<PopularProducts/>
  </div>
</template>
<style>

</style>
