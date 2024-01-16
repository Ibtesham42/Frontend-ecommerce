import React, {createContext, useState} from "react";
import all_products from '../Components/Assets/all_product'
export const HomeContext = createContext(null);



const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
  

    const addToCart = (itemid) => {
        setCartItems((prev) => ({...prev,[itemid]:prev[itemid]+1}))
    }
    
    const removeFromCart = (itemid) => {
        setCartItems((prev) => ({...prev,[itemid]:prev[itemid]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product) => product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
        return totalAmount;
        
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;

        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
    return(
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
};
export default HomeContextProvider;