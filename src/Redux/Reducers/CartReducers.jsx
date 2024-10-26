import { AddToCart, getCartData } from "../Actions/CartActions";
import { CARTDATA, GET_CART_DATA } from "../ActionTypes";

let InitialValue={
    cartrecord:[]
}
export const CartReducers=(state=InitialValue,action)=>{
    // console.log(state);
    switch (action.type) {
        case CARTDATA:
            return{
                ...state,cartrecord:[...state.cartrecord,action.payload]
            }   
        case GET_CART_DATA:
            return{
                ...state,cartrecord:action.payload
            }
        default:
        return state;
    }
}