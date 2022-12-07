import Titulo from "../Titulo/Titulo"

const Form = ({tituloForm}) => {

    return  <form>
                <Titulo 
                    titulo={tituloForm}
                />
                <input type="text" placeholder='ingrese nombre' />
                <br />
                <input type="text" placeholder='ingrese apellido' />
            </form>
}

export default Form