import Loading from "../loaders/Loading.jsx" 
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function AuthLayout(
  { children, authentication = true }) {

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector((state) => state.auth.status)
    useEffect(()=>{


      // true && true!==true(false) ----> false
      // true && false!==true(true) ----> true ----> navigate to login page
        if(authentication && authStatus !== authentication){
          navigate("/login")
        }
        // false && true !== true(false) ----> false ---> navigate to "/"
        // false && false !== true(true)  -----> false 
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
          setLoader(false)
    },[authStatus, navigate, authentication])

  return (

    loader ? <Loading/> : <>{children}</>

  )
}

