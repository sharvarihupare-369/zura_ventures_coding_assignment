import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Widgets from './Widgets'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/widget' element={<Widgets/>} />
        </Routes>
    </div>
  )
}

export default Mainroutes