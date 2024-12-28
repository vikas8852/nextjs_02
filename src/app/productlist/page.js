"use client"
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
        <ul>
            {products.map((product) => (
                <li key={product.id}> title :{product.title}, id: {product.id}</li>
            ))}
        </ul>
    </div>
    )

}