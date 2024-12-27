import React, { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../store/Authslice.js";
import Button from "../root/Button.jsx";
import Input from "../root/Input.jsx";
import { useDispatch } from "react-redux";
import AuthService from "../../services/auth.services.js";
//import UserService from "../../services/user.services.js";
import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.png";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues:{
        email:"",
        password:""
    }
  });
  const [error, setError] = useState();

  const login = async (data) => {

    
    setError(" ");
    try {
      const res = await AuthService.login(data);
      if (res.success) {
        
          dispatch(authLogin(res.data));
          //console.log(res)
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-sm w-full text-gray-600 backdrop-blur-sm p-4">
      <div className="text-center">
        <img src={logo} width={150} className="mx-auto" />
        <div className="mt-5 space-y-2">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Log in to your account
          </h3>
          <p className="text-black">
            Don't have an account?{" "}
            <Link
              to={"/sign-up"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(login)} className="mt-8 space-y-5 bg-white p-9 sm:rounded-lg">
       
          {/* input */}
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
       
          {/* input */}
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
     

        {/* button */}
        <Button type="submit" text="Login" />
      </form>
      {error && <p className="text-red-600 mt-8">{error}</p>}
    </div>
  );
}

export default Login;
