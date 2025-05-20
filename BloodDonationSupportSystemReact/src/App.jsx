import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import News from './pages/News'


function App() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
             <Route path='/news' element={<News/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
