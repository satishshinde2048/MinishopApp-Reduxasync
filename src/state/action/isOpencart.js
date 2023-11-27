import { OPEN_CART,CLOSE_CART } from "../../constant/actionType";

const Opencart=()=>{
    return {
        type:OPEN_CART
    }
}

const Closecart=()=>{
    return {
        type:CLOSE_CART
    }
}


export {Opencart,Closecart};