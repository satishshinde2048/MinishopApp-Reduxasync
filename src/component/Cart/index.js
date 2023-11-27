import { useDispatch, useSelector } from "react-redux";
import { Closecart } from "../../state/action/isOpencart";
import { Cartitemcard } from "./Cartitemcard";

const Cart=()=>{
   const Cart=useSelector((state)=>state.Cart);
   const isopencart=useSelector((state)=>state.isOpencart);
   console.log("At cart",isopencart);
   console.log("At cart",Cart);
   let dispatch=useDispatch();

   const sumTotal=()=>{
    return Cart.reduce((total,cartitem)=>
         total+cartitem.quantity*cartitem.price,
         0
    )
    .toFixed(2);
   }
   
   const cartItems=Cart.map((cartItem)=>{
    return <Cartitemcard
    key={Math.random()}
    id={cartItem.id}
    title={cartItem.title}
    price={cartItem.price}
    image={cartItem.image}
    quantity={cartItem.quantity}></Cartitemcard>
   })


if (isopencart){
    return( 
    <div>
    <div className="fixed z-50 top-0 right-0 flex flex-col items-center gap-8 w-full h-full p-6 bg-white text-xl md:w-[30rem]"
          isOpen={isopencart}>
   
     <div className="font-bold mb-6 text-xl">
            Your shopping cart
     </div>
     <div className="flex flex-col gap-8 w-full overflow-auto">
            {cartItems}
      </div>
      <div className="font-bold">Total: ${sumTotal()}</div>
      <button className="flex items-center justify-center p-4 font-bold w-3/4 bg-[#46FFD3] hover:bg-[#35eec2]">
            Checkout
          </button>
          <button
            className="flex items-center justify-center p-4 font-bold w-3/4 bg-red-500 hover:bg-red-300"
            onClick={() => dispatch( Closecart())}
          >
            Close
          </button>
    </div>
    <div
          className="fixed top-0 w-full h-full opacity-60 bg-black"
          onClick={() => dispatch(Closecart())}
        />
    </div>
    );
}
}

export {Cart};