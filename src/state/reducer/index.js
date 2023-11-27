import { Cartreducer } from "./Cart";
import { Isopencartreducer } from "./isOpencart";
import { Productreducer } from "./Product";
import {combineReducers} from 'redux';

const Rootreducer=combineReducers({
    Cart:Cartreducer,
   isOpencart: Isopencartreducer,
   Products:Productreducer
})

export {Rootreducer};