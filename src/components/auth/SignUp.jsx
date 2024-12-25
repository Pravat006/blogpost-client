import React, { useState } from 'react'
import AuthService from "../../services/auth.services"
import UserService from '../../services/user.services.js'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from "../../store/Authslice.js"
import Button from '../root/Button.jsx'
import Input from '../root/Input.jsx'
import logo from '../../assets/Logo.png'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function SignUp() {

  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const createAccount = async (data) => {
    try {
      const userData = await AuthService.register(data)
      if (userData) {
        const currentUserData = await UserService.getUser()
        if (currentUserData) dispatch(authLogin(userData));
        navigate("/")

      }
    } catch (error) {
      setError(error.message)
    }

  }


  return (
    <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
      <div className="text-center">
        <img src={logo} width={150} className="mx-auto" />
        <div className="mt-5 space-y-2">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
          <p className="">Already have an account? <Link to={"/login"} className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
        </div>
      </div>
      <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
        <form
          onSubmit={handleSubmit(createAccount())}
          className="space-y-5"

        >

          {/* Fullname input */}
          <Input
            label="Fullname"
            placeholder="Enter your Fullname"
            type="text"
            {
            ...register("fullname", {
              required: true
            })
            }

          />


          {/* Email input */}
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(
                    value
                  ) || "Email addresss must be a valid address",
              },
            })}
          />


          {/* Password input */}
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
            })}

          />

          {/* submit button */}
          <Button
            type='submit'
            text="Create account"

          />
        </form>
        {error && <p className="text-red-600 mt-8">{error} </p>}
      </div>
    </div>
  )
}

export default SignUp