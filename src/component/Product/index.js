import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchproduct, Setproduct } from "../../state/action/Products";
import { Productcard } from "./Productcard";


const Product=()=>{
  let products=useSelector((state)=>state.Products);
  console.log('product',products);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(Fetchproduct());
    // loadproducts();
  },[])

  

// const loadproducts=async()=>{

//  dispatch(Setproduct(filterProducts(await fetchproducts())));
// }
// // console.log("load product",loadproducts());

// const fetchproducts=async()=>{
//   const response = await fetch('https://fakestoreapi.com/products');
//   let data = await response.json();
//   return data;
// }
// const filterProducts=(products)=>{
//     return products.filter((product)=>
//         product.category === `men's clothing` ||
//         product.category === `women's clothing`
//     )

// }

let productCards=products.map((product)=>{
    return <Productcard key={Math.random()}
                 id={product.id}      
                 title={product.title}   
                 price={product.price}   
                 image={product.image}      
                       ></Productcard>
})

    return (
        <div className="grid grid-cols-1 gap-16 justify-center mt-16 md:grid-cols-2 lg:grid-cols-3">
        {productCards}
        </div>
    );
}

export {Product};