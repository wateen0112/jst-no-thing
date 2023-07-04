<script setup lang="ts">
import {useProductStore} from '@/store/product';
import { storeToRefs } from 'pinia';
import LocationPicker from '@/components/website/main/LocationPicker.vue'
import OwnerCard from '@/components/website/product/OwnerCard.vue'
import OwnerReviews from '@/components/website/product/OwnerReviews.vue'
import  WButton from '@/components/website/main/WButton.vue'
import QuestionsCard from '@/components/website/product/QuestionsCard.vue';
import Heart from '@/assets/svg/icons/red-heart.svg'
import Share from '@/assets/svg/icons/share.svg'
import { Product } from '~/api/products';
import ProductItem from '~/components/website/main/Product.vue';
const store = useProductStore();
const route = useRoute();
const subCat = ref("")

const  {getProductDetails,getSuggestedProducts,addtoFavourite} = store ; 
const {product ,productsList} = storeToRefs(store);
onMounted(()=>{
    getProductDetails(route.params.id.toString()).then(()=>{
       if( product.value.category.sub_categories){
        subCat.value = product.value.category.sub_categories[0].category
       }
       getSuggestedProducts()
    })


})

</script>
<template>
  <div class="lg:tw-px-40  tw-px-10">
      <div class="tw-grid   tw-gric-cols-1 lg:tw-grid-cols-2 tw-pt-10 lg:tw-gap-x-24">
<!--fst column-->

<div class="">
<div class="tw-relative tw-shadow-lg tw-mb-3  slider"> 
    <div class="tw-absolute tw-z-20 tw-top-5 tw-right-5  tw-w-[140px] tw-h-[50px] tw-flex tw-justify-center tw-items-center tw-gap-5">
<span @click="addtoFavourite()" class="tw-bg-surface tw-p-2 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-shadow-lg"> <img class="tw-w-[24px]" :src="Heart" alt=""></span>
<span class="tw-bg-surface tw-p-2 tw-flex tw-justify-center tw-items-center tw-rounded-full tw-shadow-lg"><img class="tw-w-[20px]" :src="Share" alt=""></span>

        </div>
<div class="tw-w-full tw-overflow-hidden">
    <VCarousel height="400px"     hide-delimiter-background>
    <VCarouselItem v-for="img in product.images">
    
     
        <img class="tw-object-center" :src="img" alt="">
    </VCarouselItem>
</VCarousel>
 
</div>
</div>
<div> <VChip>{{product.status}} </VChip> vertified by Yjoz</div>
<!-- description section-->

<div>
    <h2>Description</h2>
    <p> {{  product.category.category}}  
        <span v-if="product.category.sub_categories">  <VIcon>mdi-chevron-right</VIcon>  {{ subCat }}</span>
       </p>
<!--description-->
<p>{{product.description}}</p>

</div >

<!-- location section-->
<div >
    <!-- <LocationPicker class="tw-h-[400px]" :default-location="
    { lat: parseFloat(product.address.latitude), lng: parseFloat( product.address.longitude )}" api-key="AIzaSyDigy7JFuzq8xNoKdQf8hsYWL3bi-QPfZA" :has-search="false" /> -->

</div>


<!-- owner card -->  
<div>
    <OwnerCard/>
</div>
<!--  owner review -->
<div>
    <OwnerReviews/>
</div>
<!-- questions -->
<div>
    <QuestionsCard/>
</div>
</div>
<!-- scnd column-->
<div>
    <!-- product card -->
<div class="product-card tw-z-20">    
    <h1>{{ product.title }}</h1> {{ fixedCard }}
    <p class="tw-text-leightGrey tw-pb-2">{{product.owner.first_name}}</p>
    <div class="tw-bg-blueGrey tw-min-w-[300px] lg:tw-w-[440px] tw-shadow-sm tw-rounded-2xl tw-p-6">
<!-- prices card -->

<div class="tw-w-full tw-flex tw-flex-col tw-justify-start tw-items-center">
    <!-- prices title and rating -->
<div class="tw-w-full tw-flex tw-justify-between tw-items-center tw-flex-row">
    <p>Prices</p>
    <div  v-if=" product.rate" > <VIcon color="secondary">mdi-star</VIcon>{{ product.rate }}</div>
</div>


</div>
<!-- rental prices -->
<div class="tw-w-full tw-mt-4 tw-flex tw-flex-row tw-justify-start tw-items-center tw-gap-x-5">
    
<!-- prices cards -->
<div v-if="product.prices.day_price!=0" class="product-price-card tw-cursor-pointer tw-p-3 tw-w-[100px] tw-h-[90px]">
    <p class="tw-text-gray-400 hover:tw-text-white">Day</p>
    <p>{{product.prices.day_price}} AED</p>
    <div class="tw-absolute tw-bottom-[-3px] tw-right-[-3px]   save-chip"> <span class="tw-text-xs tw-px-1">Save 7 AED</span></div>
</div>
<div   v-if="product.prices.week_price!=0" class="product-price-card tw-cursor-pointer tw-p-3 tw-w-[100px] tw-h-[90px]">
    <p class="tw-text-gray-400 hover:tw-text-white">+7 Days</p>
    <p>{{product.prices.week_price}} AED</p>
    <div class="tw-absolute tw-bottom-[-3px] tw-right-[-3px]   save-chip"> <span class="tw-text-xs tw-px-1">Save 7 AED</span></div>
</div>
<div   v-if="product.prices.month_price!=0" class="product-price-card tw-cursor-pointer tw-p-3 tw-w-[100px] tw-h-[90px]">
    <p class="tw-text-gray-400 hover:tw-text-white">+30 Days</p>
    <p>{{product.prices.month_price}} AED</p>
    <div class="tw-absolute tw-bottom-[-3px] tw-right-[-3px]   save-chip"> <span class="tw-text-xs tw-px-1">Save 7 AED</span></div>
</div>
</div>
<!-- add to cart WButton-->
<div class="tw-mt-8  tw-flex tw-justify-center tw-items-center">
    
    <WButton  variant="elevated" width="340" class="add-to-cart-btn " > <VIcon>mdi-cart</VIcon><span class=" tw-capitalize">Book Now</span></WButton>
</div>


</div></div>
</div>

<!-- second row-->

</div>
<div class="tw-bg-surface tw-z-30">
    <h1 class="tw-my-6 suggested-products">Suggested Products</h1>
</div>  
<div class=" tw-overflow-x-scroll tw-w-full tw-flex tw-pb-8 tw-justify-center  tw-gap-8 tw-grid-flow-col ">
    <ProductItem :width="300"  v-for="(p , index) in productsList" :product="p" :key="index" />
</div>  
    </div>
<div></div>
</template>
<style  lang="scss">
.add-to-cart-btn {


height:44px !important;
background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
/* WButton_shadow */
box-shadow: 0px 15px 25px rgba(238, 46, 83, 0.25);
border-radius: 16px;
color:#fff


}
.product-price-card{
    border:3px solid rgb(198, 198, 198);
    position: relative;
    border-radius: 16px; 
}
.product-price-card:hover{
    background: #EE2E53;
    color: white;
}
.product-price-card:hover p {
    color: white;
}
.save-chip {
    color:white;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    background: radial-gradient(86.09% 235.32% at 7.86% 13.67%, #EE5C2E 0%, #EE2E53 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
}
.product-card {
  position: sticky;
  top: 70px;
}
.v-window__controls{
    .v-btn:hover{
      color: white;
    }
    .v-btn:hover{
        .v-btn__content i{ 
color: black;
}
    }
  
}

</style>