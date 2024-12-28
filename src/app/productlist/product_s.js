"use client"
export default function Product({price}){
    return(
        <div>
            <button onClick={()=>alert(price)}> check price</button>
        </div>
    )
}