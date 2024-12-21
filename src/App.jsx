import { useDispatch } from 'react-redux'
import './App.css'
import UserService from './services/user.services.js'
import { useEffect, useState, } from 'react'
import {login, logout} from "./store/Authslice.js"
import Loading from './components/loaders/Loading.jsx'
import Header from './components/root/Header.jsx'


function App() {

const [loading, setLoading] = useState(true)
const dispatch = useDispatch()


useEffect(()=>{
  UserService.getUser()
              .then((userData)=>{
                if(userData){
                  dispatch(login({userData}))
                  console.log(userData)
                }else{
                  dispatch(logout())
                }
              })
              .finally(()=> setLoading(false))
}, [])

  return !loading ? (
   <div >
      <Header/>
    
    </div>
  ) : <Loading/>

  
}

export default App
