import {combineReducers} from "redux";
import products from "./products";
import cart from "./cart";
import message from "./message";

const Appreducers = combineReducers({
    products,
    cart,
    message
    
});

export default Appreducers;