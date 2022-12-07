import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    //estados y funciones globales
    const [cartList, setCartList] = useState([])

    const isInCart = (newProduct) => cartList.findIndex(producto => producto.id === id)

    const agregarAlCarrito = (newProductCart) => {
        let index = isInCart (newProductCart)
        if (index === -1){
            setCartList( [...cartList, newProductCart ])
        }else{
            cartList[index], cantidad += newProductCart.cantidad
            setCartList(  [...cartList] )
        }
        
    }

    const borrarCarrito = () => {
        setCartList([])
    }


    const cantidadTotal = ()=>{
        return cartList.reduce ((count, producto) => count += producto.cantidad, 0)
    }

    const precioTotal = () =>{
        return cartList.reduce ((sumPrecio, producto)=> count += (producto.cantidad*producto.price))
    }

    const eliminarItem = () => {
        setCartList( cartList.filter( producto => producto.id != id))
    }

    return(
        <CartContext.Provider value={{
            cartList, // estado
            agregarAlCarrito, // función para modificar el estado
            borrarCarrito,
            cantidadTotal,
            precioTotal


        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider