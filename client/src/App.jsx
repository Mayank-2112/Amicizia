import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/SignIn'
import PrivateRoute from './components/ui/myComponents/PrivateRoute'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route element={<PrivateRoute/>}>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
