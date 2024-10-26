import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products(props) {

    return (
        <>
            <div>
                <div className='flex flex-wrap'>
                    {props.item.map((val,i) => {
                        // console.log(val);
                        return (
                            <>
                                 <div className='w-1/4'>
                                    <Link to={"/productdetail/"+val.id} key={i}>
                                        <div className='m-4 shadow-xl shadow-zinc-500 rounded-md'>
                                            <div className='shadow-slate-300 shadow-2xl'>
                                                <img src={val.image} alt="" className='block w-full h-96' />
                                            </div>
                                            <div className="p-4 flex-1 flex flex-col  h-48">
                                                <h2 className="mb-4">{val.title}</h2>
                                                {/* <h5 class="mb-4 text-2xl">{val.description}</h5> */}
                                                <h5 className='text-2xl'>{val.price} $</h5>
                                                <div className="mb-4 text-grey-darker text-sm flex-1">
                                                    <button className="rounded px-3 py-2 m-2 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">
                                                        Shop Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                            </>
                        )
                    })
                    }
                </div>
            </div >
        </>
    )
}

export default Products