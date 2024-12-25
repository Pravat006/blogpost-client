import Loading from "../loaders/Loading.jsx"
import React, { useEffect, useState } from 'react'
import { login, logout } from "../../store/Authslice.js"
import { Outlet, useNavigate } from 'react-router-dom'
import Header from "../root/Header.jsx"
import Footer from "../root/Footer.jsx"
import userServices from "../../services/user.services.js"
import { useDispatch } from "react-redux"

export default function AuthLayout(
 ) {

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {

    userServices.getUser().then((res)=>{
        if(res){
          dispatch(login(res))
          navigate('/')
        }else{
          dispatch(logout())
          navigate('/login')
        }
    }).finally(()=> setLoader(false) )


  }, [])

  return (

    loader ? <Loading /> : (


      <div lassName='min-h-screen flex flex-wrap content-between bg-white rounded-md'>
        <div className="w-full block" >
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </div>)

  )
}

