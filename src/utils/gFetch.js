
// fetch -> promise
let obj = [
    {id: '1', name: 'Libro', categoria: 'Libros',stock: '10',price: '1500',  foto:'../img/libro1.png'},
    {id: '2', name: 'Libro', categoria: 'Libros',stock: '7',price: '1500',  foto:'../img/libro2.png'},
    {id: '5', name: 'Revista', categoria: 'Revistas',stock: '9',price: '1500',  foto:'../img/libro3.png'}
]

export const gFetch = (id) => {
    return new Promise( ( resuleto, rechazada ) => {
        setTimeout(()=>{
            resuleto( id ? obj.find( item => item.id === id ) : obj )
        }, 2000)
    })
}