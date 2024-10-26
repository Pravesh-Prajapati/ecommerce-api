import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { AddToCart } from '../Redux/Actions/CartActions';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Productdetail() {
    let pos = useParams()
    let [singleitem, setsingleitem] = useState({})
    let userdata = useSelector((state) => state.SignInReducers.data)

    let dispatch = useDispatch()
    
    const [rates, setrates] = useState("")
   
    // console.log(pos);
    useEffect(() => {
        let items = axios.get("https://fakestoreapi.com/products/" + pos.id)
        items.then((res) => {
            // console.log(res.data);
            setsingleitem(res.data)
            setrates(res.data.rating.rate)
        })
    }, [])


    let submit = async(e) => {
        e.preventDefault()
        let cartdetail = {
            productids: pos.id,
            quantity: e.target.quantity.value,
            userid: userdata.id
        }
        let checkcartdata= await axios.get(`http://localhost:3000/cartdata?productids=${pos.id}&userid=${userdata.id}`)
        if (checkcartdata.data.length==0) {
            toast.success("Item Added To Cart")
            dispatch(AddToCart(cartdetail))
            setTimeout(() => {
                window.location='/cart'
            }, 1000);
        }
        else{
            toast.error("Item Already In cart")
            setTimeout(() => {
                window.location='/cart'
            }, 1000);
        }
    
        // console.log(cartdetail);
        
    }


    return (
        <>
            <div className='bg-slate-100 h-screen'>
                <div className="container mx-auto bg-white h-screen">
                    <div>
                        <div className='p-7 flex'>
                            <div className='w-1/3 flex justify-center'>
                                <div>
                                    <img src={singleitem.image} alt="" className='block  object-contain' style={{ height: "500px" }} />
                                    <div className='text-center'>
                                        {/* <form action="">
                                            <button class="rounded px-16 py-2 mt-2 border-b-4  border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                                                Add To Cart
                                            </button>
                                        </form> */}
                                    </div>
                                </div>
                            </div>
                            <div className='w-2/3 p-5'>
                                <div className='pe-20 pt-20'>
                                    <div>
                                        {/* <h1 className='text-slate-700 text-4xl mt-2'>Shirt</h1> */}
                                        <h1 className='mt-2'>{singleitem.title}</h1>
                                        <h2 className='text-green-700 font-semibold mt-2'>Special Price</h2>
                                        <h1 className='mt-2 text-3xl '>{singleitem.price} $</h1>
                                        <h2 className='bg-green-500 w-max text-white rounded-lg px-2 mt-3'>{rates} &#9734;</h2>
                                        <p className='text-black text-xl mt-2'>{singleitem.description}</p>
                                        <form action="" className='mt-2 flex gap-4' onSubmit={(e) => { submit(e) }}>
                                            <div className='mt-2'>
                                                <h1>Select Quantity</h1>
                                                <select name="quantity" id="" className='mt-2'>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <button type='submit' class="rounded px-3 py-0 mt-2 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                                                Add To Cart
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Productdetail