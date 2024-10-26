import { useDispatch } from "react-redux";
import { CARTDATA, GET_CART_DATA } from "../ActionTypes";
import axios from "axios";
// let dispatch = useDispatch()

export const AddToCart = (data) => async (dispatch) => {
    let cartitem = await axios.post("http://localhost:3000/cartdata", data)
    dispatch({
        type: CARTDATA,
        payload: cartitem
    })
}
export const getCartData = (userid) => async (dispatch) =>{
    // console.log(userid);
    let getUserData = await axios.get("http://localhost:3000/cartdata?userid="+userid);
    // console.log(getUserData.data)

    dispatch({
        type : GET_CART_DATA,
        payload : getUserData.data
    })

}