<script setup lang="ts">
import {useProductStore} from '@/store/product'
import { storeToRefs } from 'pinia';
const store = useProductStore();
const {product}= storeToRefs(store);
</script>
<template>
   <div></div>
</template>