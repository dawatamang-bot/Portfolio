import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react"
import Home from "./pages/Home/index.js"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Home/>}  />  </Routes>
    </BrowserRouter>
    
  )
}
export default App