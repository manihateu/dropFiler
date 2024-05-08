import React from 'react'
import OnBoard from './OnBoard'
import Forms from './Forms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Forms/>} path={"/order"}/>
        <Route element={<OnBoard/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App