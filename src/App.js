import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TakeId from './TakeId'
import Converter from './Converter'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={TakeId}></Route>
        <Route path='/Converter/:id' Component={Converter}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App