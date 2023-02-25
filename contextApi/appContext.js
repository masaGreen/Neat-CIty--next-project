

import { createContext, useState } from "react";

 const AppContext = createContext()

export function ContextProvider({children}){
    const [cartItem, setCartItem] = useState(0)
    const cartItems =[]
    return(
        <AppContext.Provider value={{cartItem,setCartItem, cartItems}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContext

