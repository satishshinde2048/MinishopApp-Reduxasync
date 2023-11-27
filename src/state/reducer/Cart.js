import {ADD_TO_CART,REMOVE_FROM_CART} from './../../constant/actionType';

const STATE_INIT=[];
const Cartreducer=(state=STATE_INIT,action)=>{
  
    switch(action.type){
     case ADD_TO_CART:
       
      const isinCart=state.find((cartitem)=> cartitem.id===action.payload.id);
      
     return isinCart
       ?state.map((cartitem)=>cartitem.id===action.payload.id
       ?{...cartitem,quantity:cartitem.quantity+1}
       :cartitem)
       :[...state,{...action.payload,quantity:1}];

     case REMOVE_FROM_CART:
        
       const cartitemtoremove=state.find((cartitem)=>cartitem.id===action.payload.id);

       return cartitemtoremove.quantity===1
       ?state.filter((cartitem)=>cartitem.id!==action.payload.id)
       :state.map((cartitem)=>cartitem.id===action.payload.id
       ?{...cartitem,quantity:cartitem.quantity-1}
       :cartitem)
  
      default:
        return state


    }
}

export {Cartreducer};