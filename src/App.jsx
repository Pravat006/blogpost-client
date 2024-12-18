import { useDispatch } from 'react-redux'
import './App.css'
import UserService from './services/user.services.js'
import { useEffect, useState, } from 'react'
import {login, logout} from "./store/Authslice.js"


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
   <div className='bg-blue-950 text-white p-4 rounded-2xl'>A fullstack blog app</div>
  ) : <h1>Loading...</h1>

  
}

export default App
