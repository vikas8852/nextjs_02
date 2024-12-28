"use client"
import Product from "./product_s";
import {useEffect,useState} from 'react'
export default function Page(){
    const[products,setProducts]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch("https://dummyjson.com/products");
                data = await data.json();
                console.log(data);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the async function
    }, []);

    return (
        <div>
        <h1>Product List</h1>
     
            {products.map((product) => (
                <div key={product.id}>
                <h3 > title :{product.title}, id: {product.id}</h3>
                <Product price={product.price}/>
                </div>
            ))}
          
       
    </div>
    )

}