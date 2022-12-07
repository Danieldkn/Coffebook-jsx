import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Menu from './components/Menu/Menu'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/CartContext'
// import { LoadingComponent, TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from './clases/clase11/ComponenteEjemplosCondicionales'

function App() {
    console.log('App')
    return (
        // Me da el contexto para poder usar todas las funciones de la librería

        <div 
            className='border border-3 border-info'
            // onClick={()=>alert('hola soy evento de app')}
        >
            <BrowserRouter>
                <CartContextProvider>
                    <Menu  />    
                    <Routes>
                        <Route path='/' element={<ItemListContainer  />} />
                        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                        <Route path='/detail/:productId' element={  
                                                                        <ItemDetailContainer />
                                                                    } />
                        <Route path='/cart'  element={<Cart />}/>
                        {/* <Route path='/404Notfound' element={<NotFound404 />} />    */}

                        <Route path='*' element={<Navigate to='/' />} />             
                    </Routes>
                </CartContextProvider>                
            </BrowserRouter> 
            
        </div>
    )
}
export default App




