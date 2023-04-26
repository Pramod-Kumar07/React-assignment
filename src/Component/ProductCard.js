import React from "react";
import "./ProductCard.css"

export default function ProductCard({details}){
    const {
        productId,
        productPic,
        productName,
        Brand,
        productDescription,
        Price,
        Rating
    }= details

    function handleClick(){
        alert("This is Product of Id "+ productId +", which is " + productName + " of brand " + Brand + " costing " + Price + " has been added in the cart, Please proceed to Pay!")
    }
    return(
        <div className="product">
        <div className="innerdiv">
        <img className="image" src={productPic} alt="Product" />
        <h3>{productName}</h3>
        <h3>{Brand}</h3>
        <p>{productDescription}</p>
        <h2>{Price}</h2>
        <p>Ratings : {Rating}</p>
        </div>
        <button onClick={handleClick}>ADD TO CART</button>
        </div>
    )
}