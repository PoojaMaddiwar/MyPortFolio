import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import DefaultComp from './components/Default/Default'
import Education from './components/Education/Education'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'

function App() {
 

  return (
    <>
  <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DefaultComp></DefaultComp>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/Education' element={<Education></Education>}></Route>
            <Route path='/Skills' element={<Skills></Skills>}></Route>
            <Route path='Contact' element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
