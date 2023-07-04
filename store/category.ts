import { Product } from './../api/products/index';
import { Subcategory } from './../api/categories/index';
import { defineStore, storeToRefs } from "pinia";
import { MainCategory } from "~/api/categories";
import { CATEGORIES_API } from "~/api/categories/endpointes";
import { useProductStore } from './product';
const {GET , POST  ,DELETE} = useApi(); 
export const useCategoryStore  = defineStore('category',()=>{
const availableCategories = ref<MainCategory[]>([]);
const category = ref<MainCategory>(new MainCategory());
const subCategories = ref<Subcategory[]>([]);
const productStore = useProductStore();
const  {selectedCatsList} = storeToRefs(productStore)
async function getAvailableCategories (){
    try {
        const res = await GET<MainCategory[]> (CATEGORIES_API.GET_AVAILABLE_CATEGORIES);
        availableCategories.value  = res.data.data;
    } catch (error) {
        throw(error)
    }
}
function setCategory (cat :MainCategory){
category.value = cat ; 
subCategories.value = cat.sub_categories;

}selectedCatsList.value.push(category.value.id)








 return{ availableCategories ,
    
    category,
    subCategories
    ,setCategory,
    
    getAvailableCategories}   
})