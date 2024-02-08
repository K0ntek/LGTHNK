import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
  }

  type CartItem = {
    id: number
    quantity: number
  }

  type ShoppingCartContext = {
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CartItem[]
  }

  const ShoppingCartContext = createContext({} as ShoppingCartContext)

  export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  }

    export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
      const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
      )

      function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function removeFromCart(id: number) {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }

      return (
        <ShoppingCartContext.Provider
          value={{
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
          }}
        >
          {children}
        </ShoppingCartContext.Provider>
      )
    
    }