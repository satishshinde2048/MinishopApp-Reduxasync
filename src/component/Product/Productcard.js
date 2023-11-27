import { useDispatch } from "react-redux";
import { Addtocart } from "../../state/action/Cart";

const Productcard=({key,id,title,price,image})=>{
    const product={key,id,title,price,image};
    const dispatch=useDispatch();

    return(
        <div className="flex flex-col rounded-lg text-xl bg-white border border-slate-800">
        <div className="h-72 p-12 my-0 mx-auto">
        <img className="h-full" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-between gap-4 p-4 h-full border-t border-t-slate-800">
            <div className="flex flex-col justify-between h-full gap-4">
            <div className="font-bold">{title}</div>
            <div>${price.toFixed(2)}</div>
         </div>
         <button  className="flex items-center justify-center p-2 font-bold w-full bg-black text-white hover:bg-slate-800"
           onClick={()=>dispatch(Addtocart(product))}
         >
            Add to cart
         </button>
        </div>
        </div>
    )
}

export {Productcard};