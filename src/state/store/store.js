import { Rootreducer } from "../reducer";
import { createStore } from "redux";
import { applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';

const store=createStore(Rootreducer
    ,compose(applyMiddleware(thunk))
    );

export {store} ;