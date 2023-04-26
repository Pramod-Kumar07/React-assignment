import React from "react";
import "./ProductCard.css"

export default function ProductCard({data}){
    const {
        productId,
        productPic,
        productName,
        Brand,
        productDescription,
        Price,
        Rating
    }=data;
    
    function handleClick(){
        alert("Product added to cart")
    }
    return(
        <div className="product">
            <div className="innerDiv">
            <img src={productPic} alt="Product" />
            <h2>{productName}</h2>
            <h2>{Brand}</h2>
            <p>{productDescription}</p>
            <h3>{Price}</h3>
            </div>
            <button onClick={handleClick}>ADD TO CART</button>            
        </div>
    )
}