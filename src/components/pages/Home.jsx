import React, { useEffect, useState } from 'react'
import Products from '../Products'
import Category from '../Category'
import axios from 'axios'

function Home() {
    let [category, setcategory] = useState([])
    const [items, setitems] = useState([])
    useEffect(() => {
        let categoryitem = axios.get("https://fakestoreapi.com/products/categories")
        categoryitem.then((res) => {
            setcategory(res.data)
        })
    }, [])
   
    useEffect(() => {
        fetchdata()
    }, [])
    let fetchdata = () => {
        let product = axios.get("https://fakestoreapi.com/products");
        product.then((res) => {
            // console.log(res.data);
            setitems(res.data)
        })
    }
    let filtereditems=(val)=>{
        console.log(val);
        if (val=="all") {
            fetchdata()
        }   
        else{
        let filterdata = axios.get("https://fakestoreapi.com/products/category/"+val)
        filterdata.then((res) => {
            // console.log(res.data);
            setitems(res.data)
        })
    }
    }
    return (
        <div className="container mx-auto">
            <Category cat={category} filterdata={filtereditems}/>
            <Products  item={items} />
        </div>
    )
}

export default Home