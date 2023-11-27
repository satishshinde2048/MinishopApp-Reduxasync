import { useDispatch, useSelector } from "react-redux";
import {FaShoppingCart} from "react-icons/fa";
import { Opencart } from "../state/action/isOpencart";

const Navbar=()=>{
      let Cart=useSelector((state)=>state.Cart); 
      console.log('cart at Navbar',Cart);
      const dispatch=useDispatch();  
      const  sumQuantity=()=>{
       return Cart.reduce((quantity,cartItem)=>
              quantity+cartItem.quantity,
              0
       );
      };
       
       return( 
       <header className="bg-black px-4">
        <div className="flex flex-col items-center justify-between w-full max-w-[140rem] my-0 mx-auto p-4 md:flex-row">
        <h1 className="font-bold text-2xl text-[#46ffd3] min-w-min">
          Redux-Shop
        </h1>     
        <nav className="flex items-center w-full justify-end text-lg">
              <div className="relative cursor-pointer hover:scale-110 active:scale-105"
               onClick={()=>dispatch(Opencart())}> 
                     <button className=" rounded-full flex items-center justify-center p-2 font-bold bg-white">
                     <FaShoppingCart />
                     </button>
                {sumQuantity()>0?   
              <div className="absolute top-5 right-5 flex items-center justify-center w-6 h-6 rounded-full font-bold text-lg bg-red-400">
                {sumQuantity()}
              </div>
               :("")
               }
              </div>
        </nav>
        </div>
        </header> 
       );
}

export {Navbar};