import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { gFetch } from "../../utils/gFetch"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()


      useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = doc(dbFirestore, 'items', productId)
        getDoc(queryCollection)
        .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))
        .catch(err => consl.log
          .finally(()=> setLoading(false)))
    },[])


    console.log(product)
  return (
    <div className="border border-5 border-success">
        {loading ? 
                <h2>Cargando...</h2> 
            : 
                <ItemDetail product={product} />
        }
        
    </div>
  )
}

export default ItemDetailContainer