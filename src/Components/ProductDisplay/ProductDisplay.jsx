import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { HomeContext } from "../../Context/HomeContext";
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                        <img src={product.image}/>
                        <img src={product.image}/>
                        <img src={product.image}/>
                        <img src={product.image}/>
                </div>
                <div className="productdisplay-image">
                <img className="productdisplay-main-img" src={product.image}/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_dull_icon}/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-rightprice-old"> ₹{product.old_price}</div>
                    <div className="productdisplay-rightprice-new"> ₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-decriprion">
                    good n weel product nic waw how 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                   <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>Xl</div>
                        <div>XXl</div>
                   </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category: </span> Women , T-Shirt, Crop Top<br/>
                    <span>Tags: </span> Modern, Latest
                </p>
             </div>

        </div>
    )
}

export default ProductDisplay;