import React, { useContext } from "react";
import './Css/HomeCategory.css'
import { HomeContext } from "../Context/HomeContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
const HomeCategory = (props) => {
    const {all_products} = useContext(HomeContext)
    
    return(
        <div className="home-category">
            <img className="shopcategory-banner" src={props.banner}/>
            
            <div className="homecategory-indexsort">
                <p>
                 <span>Showing 1-12</span>  out of 36 products
                </p>
                <div className="homecategory-sort">
                    sort by<img src={dropdown_icon}/>
                    
                </div>
            </div>
            <div className="homecategory_products">
            {all_products.map((item, i) => {
                    if(props.category === item.category)
                    {
                        return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            
            
                 
            
                    
            </div>
            <div className="homecategory-loadmore">
                Explore More
            </div>
        </div>
    )
}
export default HomeCategory