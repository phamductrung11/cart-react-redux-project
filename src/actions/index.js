import * as types from "../constants/ActionType";

export const addtocart=(product,quantity)=>{
    return{
       type :types.ADD_TO_CART,
       product,
       quantity
    }
}
export const massage=(message)=>{
    return{
       type :types.CHANGE_MESSAGE,
       message
    }
}
export const deletecartbutton=(product)=>{
    return{
       type :types.CHANGE_DELETE_CART_BUTTON,
       product
    }
}
export const onupdatequantity=(product,quantity)=>{
    return{
       type :types.ON_UPDATE_QUANTITY,
       product,
       quantity
    }
}
