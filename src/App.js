import './App.css';
import {Navbar} from './component/Navbar';
import {Product} from './component/Product/index';
import {Cart} from "./component/Cart/index";


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Product></Product>
      </div>
      <Cart></Cart>
    </div>
  );
}


// const Sample=()=>{
//  const products=useSelector((state)=>state.Products);
//  console.log(products);
//  const dispatch=useDispatch();

//  const handlechange=()=>{
//   let arr=[
//     {id:23,name:"t-shirt"},
//     {id:24,name:"shirt"}
//   ]

//   dispatch(Setproduct(arr));
//  }

//  return (
//   <div>
//     <h1>redux testing</h1>
//  <button onClick={ handlechange}>change data</button>
//    </div>
//  )
// }


export default App;
