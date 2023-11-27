import { ADD_TO_CART,REMOVE_FROM_CART } from "../../constant/actionType";

const Addtocart=(product)=>{
    return {
        type:ADD_TO_CART,
        payload:product
    }
}

const Removefromcart=(product)=>{
    return {
        type:REMOVE_FROM_CART,
        payload:product
    }
}

export {Addtocart,Removefromcart};