import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './Home.jsx'
import About from './About.jsx'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import Number from './Number.jsx'
import InputComponent from './InputComponent.jsx'
import TodoList from './Todo.jsx'
import TemperatureConverter from './Temprature.jsx'
import SearchAndFilter from './Search.jsx'
import ShoppingCart from './Shopping.jsx'
function App() {
 
  const [count, setCount] = useState(0)
  // function qq(arg1){
  //   console.log(arg1);
  // }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>,
  //   },
  //   {
  //     path: "/about/:id",
  //     element: <About/>,
  //   },
  // ]);


  return (
    
    <>
     {/* <TodoList/> */}
     {/* <TemperatureConverter/> */}
     {/* <SearchAndFilter/> */}
    <ShoppingCart/>
    </>
    //  {/* <button onClick={()=>qq("func called")}>click me</button> */}
    //  <button>click me</button>
    // </>
    // <RouterProvider router={router} />
    // <Number/>
    // <InputComponent/>
   
  )
}

export default App
