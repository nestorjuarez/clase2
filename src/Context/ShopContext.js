import React, {createContext, useState} from 'react'


export const Shop = createContext();

export const ShopProvider = ({children}) => {
    const [estadoA, setEstadoA] = useState('Valor por defecto')

    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad)=>{
      console.log(producto, cantidad)
     const productoRepetido=isInCart(producto)
      if (productoRepetido){
        productoRepetido.quantity += cantidad
        setCart([...cart])
      }else{
      setCart([...cart, {...producto, quantity: cantidad}])
      }
    }

    const isInCart = (producto)=>{
        return cart.find(elemento => elemento.id === producto.id)
    }
        
  return (

    
        <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, setCart}}>
            {children}
        </Shop.Provider>
      
  )
}
