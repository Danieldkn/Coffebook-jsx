import { useCartContext } from "../../context/CartContext"

const Cart = () => {

  const { cartList, borrarCarrito, precioTotal, eliminarItem  } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
      {cartList.length !== 0 && <>
      <ul>
        {cartList.map((product) =>  <li key={product.id}>
                                    <img src={product.foto} className="w-25" />
                                      Nombre: {product.name} - Precio {product.price} - cantidad: {product.cantidad}
                                      <button onClick={ () => eliminarItem(product.id)}> x </button>
                                    </li>
        )}
      </ul>
      <label htmlFor="">{precioTotal()}</label>
      <button onClick={borrarCarrito}>Vaciar carrito</button>
      </> 
      :
      <h2>No hay productos <link to="/">Ir a comprar</link></h2>
      }
    </div>
  )
}

export default Cart