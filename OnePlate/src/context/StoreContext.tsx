import {  createContext , useContext, useEffect, useState, type ReactNode} from "react";
import { food_list } from "../assets/assets";

type StoreContextProviderProps = {
    children: ReactNode;
};

type StoreContextType = {
    food_list: typeof food_list;
    cartItems: Record<string,number>;
    setCartItems: React.Dispatch<
    React.SetStateAction<Record<string,number>>>;

    addToCart: (itemId: string) => void;
    removeFromCart: (itemId: string) => void;
} 
export const StoreContext = createContext<StoreContextType | null>(null);
 

const StoreContextProvider = ({children}:StoreContextProviderProps) => {

    const [cartItems,setCartItems] = useState<Record<string,number>>({});

    const addToCart = (itemId:string) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId:string) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const contextValue: StoreContextType = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};



export default StoreContextProvider;