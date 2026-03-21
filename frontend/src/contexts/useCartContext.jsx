import { createContext, useContext, useState} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemToAdd) => {{
        const checkItemAlready = cartItems.find((cartItem) => 
            {return cartItem._id === itemToAdd._id}
        )
        if (!checkItemAlready){
            itemToAdd.quantity = 1

            setCartItems([...cartItems, itemToAdd])
            console.log("Item adicionado ao carrinho:", itemToAdd)
        } else {
            
            console.log("Esse item já está no carrinho")
        }
        console.log(cartItems)
    }}

    const removeFromCart = (itemId) => {{
        const cartItemsSanitized = cartItems.filter((item) => {
            return item._id !== itemId
        })
        setCartItems(cartItemsSanitized)
    }}

    const updateCartItems = (item) => {{

        setCartItems(item)
        
    }}
    
    return(
        <CartContext.Provider value={{ addToCart, removeFromCart, cartItems, updateCartItems }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("You are out of CartContext");
    }
    return context;
};
