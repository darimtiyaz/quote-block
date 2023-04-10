import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
//import AddEdit from "./pages/AddEdit"
import Home from "./pages/Home"
//import View from "./pages/View"
import Records from "./pages/records"
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/records" element={<Records/>}/>
          {/* <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<View/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
