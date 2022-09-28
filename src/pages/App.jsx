import { Outlet } from 'react-router-dom'

// componentes
import Navbar from '../components/Navbar'

// funciones propias

function App () {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App

/* Reglas de los hooks
    --Van en el cuerpo del componente
    --No se pueden ejecutar dentro de un scope
    */

// Side effects
// Este es el hook
// const [number, setNumber] = useState(0)
// const [test, setTest] = useState(true)
/* Cambiar un estado a partir de un side effect o evento de escucha
  Se ejecuta cada que cambia cualquier estado */
/* useEffect(() => {
    setNumber(10)
    // Un setter no se ejecuta si el estado inicial no sufre cambios
    console.log(number)
  })
  */

// Se ejecuta solo la primera vez que se monta el componente
/* useEffect(() => {
     setNumber(10)
    console.log(number)
   }, [])
   */

/* Se ejecuta cada vez que hay un cambio en cualquiera de las dependecnias
  useEffect(() => {
    setNumber(10)
    console.log(number)
  }, [test])
  */

//   return (
//     <section>
//       <p>Reset App</p>
//       <p>{number}</p>
//       <button onClick={() => setNumber(number + 1)}>Cambiar</button>
//     </section>
//   )
