import { GETUSER, LOGOUTUSER, SETUSER } from "../ActionTypes";
let InitialValue={
    data:{}
}
export const SignInReducers=(state=InitialValue,action)=>{
    // console.log(action.payload);
    // console.log(state);
     switch (action.type) {
        case SETUSER:
             localStorage.setItem("userlogin" ,JSON.stringify(action.payload))    
            return{
                ...state,data:action.payload
            }
        case GETUSER:
            let newdata= JSON.parse(localStorage.getItem("userlogin"))
            // console.log(newdata);
            return{
                ...state,data:newdata?newdata:{}    
            }
        case LOGOUTUSER:
            localStorage.removeItem("userlogin")
            return{
                ...state,data:{}
            }
        default:
            return state;
     }
}