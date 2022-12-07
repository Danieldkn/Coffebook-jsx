import { memo } from "react"
import { Link } from "react-router-dom"
import Item from "../Item/Item"

const ItemList = memo( ( { products } ) => {
      console.log('itemList')
      return (
        products.map( product =>  <Item key={product.id} product={product}  />)
      )
    }
)

export default ItemList