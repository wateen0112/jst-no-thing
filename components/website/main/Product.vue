<script setup lang="ts">
import { Product } from '~/api/products';

const prpos = defineProps({
    product : {
        type:Product,
        default:new Product()
    },
     width:{
      type:Number,
  default:320
     }
});
</script>
<template>
 

        <!-- product item-->
      <RouterLink class="" :to="`/products/${product.id}`">
        <div :class="`tw-h-[280px] tw-block tw-w-[342px] product-box tw-overflow-hidden tw-rounded-3xl`">
            <div class=" tw-h-[180px] tw-relative">
<img   class="tw-w-full tw-h-full tw-object-cover" :src="product.images[0]" alt="">
<VChip variant="elevated" color="green" class="tw-absolute tw-bottom-10 tw-left-2"><span class="tw-text-md">
    {{  product.status}}
</span></VChip>
            </div>
  <div class="tw-w-full tw-h-[90px] tw-block tw-p-5">
    <h2 class="text-secondGrey">{{  product.title}}</h2>

    <p class="text-black">{{  product.prices.day_price}}AED/Day</p>     
</div>
  
</div>
    
      </RouterLink>
</template>
<style scoped>

.product-box{
  /* Rectangle 969 */



box-shadow: 0px -0.5px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.05);

}
.product-box:hover{
    box-shadow: none;
}
</style>