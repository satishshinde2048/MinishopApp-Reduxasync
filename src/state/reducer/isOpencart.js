import { OPEN_CART,CLOSE_CART } from "../../constant/actionType";


const STATE_INIT=false;

const Isopencartreducer=(state=STATE_INIT,action)=>{
  switch(action.type){
    case OPEN_CART:
        return true;

    case CLOSE_CART:
        return false;

    default:
        return state;    
  }
}

export {Isopencartreducer};