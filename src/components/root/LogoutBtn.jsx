import React from 'react'
import { useDispatch } from 'react-redux'
// AuthService for server update  and logout for state update
import AuthService from "../../services/auth.services.js"
import {logout} from "../../store/Authslice.js"

function LogoutBtn() {
     const dispatch = useDispatch()
    const logoutHandler=()=>{
        AuthService.logout().then(()=>{
            dispatch(logout())
        })
    }

    
  return (
    <button  className="block py-3 px-4 font-medium text-center text-white bg-[#e62222] hover:bg-red-500 active:bg-red-500 active:shadow-none rounded-lg shadow md:inline"
      onClick={()=>logoutHandler()}
      type='button'
      >
        <span>Logout</span>
       
        </button>
  )
}
//e62222
export default LogoutBtn



