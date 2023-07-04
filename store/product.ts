import { log } from "console";
import { defineStore } from "pinia";
import { MainCategory, Subcategory } from "~/api/categories";
import { Product } from "~/api/products";
import { PRODUCT_API } from "~/api/products/endpoitns";
const  {GET,POST,DELETE} =useApi()
export const useProductStore = defineStore('product',()=>{
    const popularProducts= ref<Product[]>([]);
    const productsList= ref<Product[]>([]);
    const nearbyProducts= ref<Product[]>([]);
    const product = ref<Product> ( new Product())
    const loading = ref<boolean> (false)
    const selectedCatsList = ref<any>([])
    //functions . . . 
    async function getPopularProducts (){
        product.value= new Product()
        try {
            
            loading.value = true
            const res = await GET<Product[]>(PRODUCT_API.GET_POPULAR_PRODUCTS);
            popularProducts.value=res.data.data;
        loading.value= false   
        } catch (error) {
            loading.value= false   
            throw(error)
        }
    }
    async function getNearbyProducts (){
        try {
            loading.value = true
            const location = ref< GeolocationCoordinates | null>();

            //we have to get userlocation at firsh .. . 
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                async  (position: GeolocationPosition) => {
                    location.value = position.coords;
                    const res = await GET<Product[]>(PRODUCT_API.GET_NEARBY_PRODUCTS+`/${location.value.latitude}/${location.value.longitude}`);
                   
                    nearbyProducts.value=res.data.data;
                    loading.value= false   
                    //temporary jst to show products . . . 
               if(nearbyProducts.value.length==0){
                const res = await GET<Product[]>(PRODUCT_API.GET_NEARBY_PRODUCTS+`/25.2741703/55.3448986`);
                nearbyProducts.value=res.data.data;    
               }
                  },
                  (error: GeolocationPositionError) => {
                    console.error('Error:', error);
                  }
                );
              } else {
                loading.value= false   
                console.error('Geolocation is not supported by this browser.');
              }
            
          
        
        
        
            // const res = await GET<Product[]>(PRODUCT_API.get_popular_products);
            // nearbyProducts.value=res.data.data;
        } catch (error) {
            loading.value= false   
            throw(error)
        }
    }
    async function filterProducts (){
        productsList.value = []
        loading.value = true
const catIds = ref<string[]>([]);
selectedCatsList.value.forEach((sc:Subcategory)=>{
catIds.value.push(sc.id);
})
try {
    const res = await POST (PRODUCT_API.FILTER_PRODUCT, {...catIds.value},{error:true});
    productsList.value = res.data.data;
    loading.value= false   
} catch (error) {

    loading.value= false   
    throw(error)
}
    }
    
    async function getProductDetails (id:string){
        loading.value= true;
        
        try {
            const res = await GET<Product>(PRODUCT_API.GET_PRODUCT_DETAILS+`/${id}`)
            product.value = res.data.data;
            loading.value= false;
        } catch (error) {
            loading.value= false;
            
        }
    }
    async function getSuggestedProducts () {
        productsList.value  = []
        try {
            loading.value= true

const res  = await POST <Product[]>(PRODUCT_API.GET_SUGGESTED_PRODUCTS,{
    sub_category_id:product.value.category.sub_categories[0].id,
    product_id:product.value.id
});
productsList.value = res.data.data;

            loading.value= false
            
        } catch (error) {
            throw(error)
           loading.value= false
        
       } 
    }
    async function addtoFavourite (){
        try {
            const res = await POST (PRODUCT_API.ADD_TO_FAVOURITE,{id:product.value.id},{success:true, error:true})
        } catch (error) {
          throw(error)  
        }
    }
    // async function getQuestions (){
    //     try {
    //         const res = await GET<>
    //     } catch (error) {
            
    //     }
    // }
    watch(selectedCatsList,()=>{
     filterProducts();
    })
    
    return{
        product, 
        nearbyProducts,
        popularProducts,loading,
        selectedCatsList,
        productsList,
        addtoFavourite,
        getSuggestedProducts,
        getProductDetails,
        getPopularProducts,
        getNearbyProducts,
        filterProducts
    }
})
