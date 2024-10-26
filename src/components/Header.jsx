import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getuser, logoutuser } from '../Redux/Actions/SignInActions';
import axios from 'axios';
import { getCartData } from '../Redux/Actions/CartActions';

function Header() {
    const [ham, setham] = useState(false)
    let dispatch = useDispatch()

    let getlogin = useSelector((state) => {
        return state.SignInReducers.data
    })

    let cartitem = useSelector((state) => state.CartReducers.cartrecord)
    // console.log(cartitem);


    useEffect(() => {
        setTimeout(() => {
            dispatch(getuser())
        }, 1000);
    }, [getuser])

    useEffect(() => {
        let userdata = JSON.parse(localStorage.getItem("userlogin"))
        if (userdata) {
            dispatch(getCartData(userdata.id))
        }
    }, [])

    let logout = () => {
        dispatch(logoutuser())
    }

    // console.log(cartitem);







    return (
        <>
            <header className=' bg-black text-white'>
                <div className="container mx-auto">
                    <div className='py-5'>
                        <div className='flex justify-between items-center px-4 md:px-0'>
                            <button className="sidebar-header md:hidden px-3  text-black" onClick={() => { setham(!ham) }}>
                                {!ham &&
                                    <RxHamburgerMenu className='text-white' />
                                }
                                {ham &&
                                    <RxCross2 />
                                }
                            </button>
                            <nav>
                                <ul className='md:flex hidden'>
                                    <li className='px-4'>
                                        <Link to={"/"}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className='px-4'>
                                        <a href='#'>About</a>
                                    </li>
                                    <li className='px-4'>
                                        <a href='#'>Services</a>
                                    </li>
                                    <li className='px-4'>
                                        <a href='#'>Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className='flex items-center'>
                                <div className='hidden md:block'>
                                    {getlogin ?
                                        <>
                                            <div className='flex items-center'>
                                                <h2 className='me-4'>{getlogin.username}</h2>
                                                <Link to={'/signin'}>
                                                    <button className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded me-4" onClick={() => { logout() }}>Sign Out</button>
                                                </Link>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <Link to={"/signup"}>
                                                <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded me-4">SignUp</button>
                                            </Link>
                                            <Link to={'/signin'}>
                                                <button>Sign In</button>
                                            </Link>
                                        </>
                                    }
                                </div>
                                <Link to={"/cart"}>
                                    <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-white hover:text-gray-700">
                                        <a href="#" role="button" class="relative flex">
                                            <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24" >
                                                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                            </svg>
                                            {getlogin.username ?
                                              <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartitem.length}
                                                </span>
                                                : ""
                                            }
                                        </a>
                                    </li>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                {ham &&
                    <div className={`fixed bg-black top-0 left-0 right-0 bottom-0 opacity-45 `} onClick={() => { setham(!ham) }}></div>
                }
                <div className={`side-header fixed w-2/3 top-0 bg-black h-full md:hidden block left-[-500px]  transition-all duration-200  ${ham ? "left-[0px]" : ""}`} style={{ borderRight: "1px solid white" }}>
                    <nav className='bg-white text-black h-full pt-4 relative'>
                        <h1 className='text-center pb-4' style={{ borderBottom: "1px solid slate", margin: "0px 10px" }}>Menu</h1>
                        <div>
                            <ul className='ms-4'>
                                <li className='py-4'>
                                    <a href='#'>Home</a>
                                </li>
                                <li className='py-4'>
                                    <a href='#'>About</a>
                                </li>
                                <li className='py-4'>
                                    <a href='#'>Services</a>
                                </li>
                                <li className='py-4'>
                                    <a href='#'>Contact</a>
                                </li>
                                <div>
                                    <Link to={"/signup"}>
                                        <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded me-4" onClick={() => { setham(!ham) }}>SignUp</button>
                                    </Link>
                                </div>
                                <Link to={'/signin'}>
                                    <button className='py-2 px-4' onClick={() => { setham(!ham) }}>Sign In</button>
                                </Link>
                            </ul>
                            <button className=' absolute top-3 left-2  text-3xl' onClick={() => { setham(!ham) }}> <RxCross2 /></button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header