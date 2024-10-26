import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { setuser } from '../../Redux/Actions/SignInActions';

function Signin() {
  let [data, setdata] = useState({})
  let dispatch = useDispatch()
  let navigate=useNavigate()

  
  let setinput=(e)=>{
    let {name,value}=e.target
    setdata({...data,[name]:value})
  }
  let submit= async(e)=>{
    // console.log(data);
    
    e.preventDefault()
    let signindata= await axios.get("http://localhost:3000/users?email="+data.email)
    if (signindata.data.length==1) {
        if (signindata.data[0].password==data.password) {
           toast.success("Login Success")
           dispatch(setuser(signindata.data[0]))
           setTimeout(() => {
            window.location="/"
            // navigate('/')
           }, 1000);
        }
        else{
          toast.error("Wrong Password")
        }
    }
    else{
      toast.error("Invalid Email")
    }
    
  }

  return (
    <>
      <form action="" method='post' onSubmit={(e)=>{submit(e)}}>
        <div className="w-full mx-auto my-16 max-w-md ">
          {/* <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div> */}
          {/* <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div> */}
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div className='mt-8'>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
            </div>
            <div className="space-y-4 mt-8">
              <input type="text" placeholder="Email Addres" name='email' className="block text-sm py-3 px-4 mt-8 rounded-lg w-full border outline-purple-500" onChange={(e)=>{setinput(e)}}  />
              <input type="text" placeholder="Password" name='password' className="block text-sm py-3 px-4 mt-8 rounded-lg w-full border outline-purple-500" onChange={(e)=>{setinput(e)}} />
            </div>
            <div className="text-right text-sm mt-6">
              <a href="#" classNameName="text-blue-500 ">Forgot your password?</a>
            </div>
            <div className="text-center mt-8">
              <button className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">Sign In</button>
              <p className="mt-8 text-sm">Don't Have An Account? <span className="underline  cursor-pointer">Register</span></p>
            </div>
          </div>
          {/* <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div> */}
          {/* <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div> */}
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

export default Signin