import './App.css'
//import Loading from './components/loaders/Loading.jsx'
import { Route,  BrowserRouter, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout.jsx'
//import Login from "./components/auth/Login.jsx"
//import SignUp from "./components/auth/SignUp.jsx"
//import Home from "../pages/Home.jsx"
import AddPost from "../pages/AddPost.jsx"
import AllPost from '../pages/AllPost.jsx'
import HomePage from './components/root/HomePage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import SignupPage from '../pages/SignupPage.jsx'


function App() {


  return  (

    <BrowserRouter>
        <Routes>
          <Route element={ <AuthLayout /> }>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/sign-up' element={<SignupPage/>}/>
          // authenticated route
            <Route path='/add-post' element={<AddPost/>}/>
          
            <Route path='/all-post' element={<AllPost/>}/>

          </Route>
        
          
        </Routes>
    </BrowserRouter>
     
  )

  
}

export default App
