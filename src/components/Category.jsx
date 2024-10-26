import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Category(props) {
    // console.log(props);
    // console.log(props2);
    return (
        <>
            <div className='px-8'>
                <div className='text-center'>
                    <button onClick={() => {props.filterdata("all")}} class="rounded px-3 py-2 m-5 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white">All</button>
                    {props.cat.map((val, i) => {
                        return (
                            <>
                                <button onClick={() => { props.filterdata(val) }} class="rounded px-3 py-2 m-5 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white" key={i}>
                                    {val}
                                </button>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Category