import { FETCH_PROUDUCT, SET_PRODUCT } from "../../constant/actionType";

const STATE_INIT=[];

const Productreducer=(state=STATE_INIT,action)=>{
  switch(action.type){
    case SET_PRODUCT:
        return [...action.payload];
    
    case FETCH_PROUDUCT:
      return [...action.payload];    
    default:
        return state;    
  }
}

export {Productreducer};
