import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/myComponents/PrivateRoute'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
