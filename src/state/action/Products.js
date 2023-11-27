import { SET_PRODUCT,FETCH_PROUDUCT } from "../../constant/actionType";


const Setproduct=(products)=>{
return {
  type:SET_PRODUCT,
  payload:products
}
}

const Fetchproduct=()=>{

  return async function(dispatch,getState){
    const response=await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    const filterProduct=filterProducts(data);
 dispatch({type:FETCH_PROUDUCT,payload:filterProduct});
  }
}

 const filterProducts=(products)=>{
     return products.filter((product)=>
         product.category === `men's clothing` ||
         product.category === `women's clothing`
     )
 
 }

export {Setproduct,Fetchproduct};