import React, {useRef} from 'react'
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import NotFound404 from "./Pages/NotFound404"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes,  useNavigate} from 'react-router-dom'

const App = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const getEmail = localStorage.getItem('emailData');
  const getPassword = localStorage.getItem('passwordData');

  const login = (e)=>{
  e.preventDefault()

  if(email.current.value === process.env.REACT_APP_EMAIL && password.current.value === process.env.REACT_APP_PASSWORD)
  localStorage.setItem('emailData' , process.env.REACT_APP_EMAIL)
  localStorage.setItem('passwordData' , process.env.REACT_APP_PASSWORD)
  toast.success("kirish mumkin")
  navigate('/admin')
  }


  const logOut = ()=> {
    localStorage.clear()
    navigate('/')
  }
  return <React.Fragment>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home login={login} email={email} password={password}/>}/>
      {
        getEmail && getPassword ? <Route path='/admin' element={<Admin logOut={logOut}/>}/> : ""
      }

      <Route path='*' element={<NotFound404/>}/>
    </Routes>
  </React.Fragment>
}

export default App