import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  let [data, setdata] = useState({})
  let navigate= useNavigate()

  let setinput = (e) => {
    let { name, value } = e.target
    setdata({ ...data, [name]: value })
  }
  let submit = async (e) => {
    e.preventDefault()
    let signupdata = await axios.get("http://localhost:3000/users?email=" + data.email)
    console.log(signupdata.data);
    if (signupdata.data.length == 0) {
      if (data.password == data.confirmpassword) {
        let signup = await axios.post("http://localhost:3000/users/", data)
        if (signup) {
          toast.success("Register Successfully")
          setTimeout(() => {
            navigate("/signin")
          }, 1000);
        }
      }
      else {
        toast.error("Password Doesn't match")
      }
    }
    else {
      toast.error("Email Already Exist")
    }

    // console.log(data);
  }
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
        <form method='post' onSubmit={(e) => { submit(e) }}>
          <div className="mb-4">
            <label for="name" className="block text-sm font-medium text-gray-600">UserName</label>
            <input type="text" name="username" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e) => { setinput(e) }} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" name="email" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e) => { setinput(e) }} />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e) => { setinput(e) }} />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input type="password" name="confirmpassword" className="mt-1 p-2 w-full border rounded-md text-gray-800" onChange={(e) => { setinput(e) }} />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
          <p className="mt-4 text-sm text-center">Already Have An Account? <span className="underline  cursor-pointer"> Sign In</span></p>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Signup