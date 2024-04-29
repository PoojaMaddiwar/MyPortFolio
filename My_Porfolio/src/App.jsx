import './App.css'
import DefaultComp from './components/Default'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
 

  return (
    <>
  
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
    </>
  )
}

export default App
