import React from 'react'
import { useDispatch } from 'react-redux'
// AuthService for server update  and logout for state update
import AuthService from "../../services/auth.services.js"
import {logout} from "../../store/Authslice.js"
import { useSession } from '../../config/session.js'

function LogoutBtn() {
     const dispatch = useDispatch()
    const {destroySession }= useSession()

    const logoutHandler=async()=>{
        await AuthService.logout().then(()=>{
            dispatch(logout())
        }).then(()=> destroySession())
        
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
export default LogoutBtn
