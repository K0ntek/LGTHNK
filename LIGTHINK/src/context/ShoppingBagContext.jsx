import { useContext } from "react";
import { createContext } from "vm";

const ShoppingBagContext = createContext({})

export function useShoppingBag(){
    return useContext(ShoppingBagContext)
}

export function ShoppingBagProvider( {children}){
    return <ShoppingBagContext.Provider />
}