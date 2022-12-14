import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../../utils/gFetch'
import ItemList from '../ItemList'

import { getFirestore, doc, getDoc, collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore'


const ItemListContainer = (obj) => {  
    const [products, setProducts] = useState([])
    
    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    const [ bool, setBool] = useState(false)

    //filtro de categoria

    useEffect(() => {

        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'items')

        let queryFilter = query(queryCollection, where('price', '>=', 1500), limit(2), orderBy('price', 'asc') )  

        getDocs(queryFilter)
        .then((resp) => setProducts( resp.docs.map(doc => ( { id: doc.id, ...doc.data() } ) ) ))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false)) 
        .then((doc) => setProduct(   { id: doc.id, ...doc.data() }  ))
    },[])
        
    const agregarProducto = () => {
        setProducts([...products, {id: products.length, name: `Producto ${products.length}`}])
    }

    const cambiarEstado = () => {
        setBool(!bool)
    }

    console.log(products)
    return (
        loading 
            ? 
                <h2>Cargando</h2>            
            :
                <div>
                    <h1>ItemListContainer</h1>  
                    <ItemList products={products} />
                    <button onClick={cambiarEstado}>Me gusta</button>
                    <button onClick={agregarProducto}>Agregar Productos</button>
                </div>
    )
}

export default ItemListContainer