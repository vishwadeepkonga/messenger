"use client";

import React, { useCallback, useEffect, useState } from "react";
import Input from "@/app/components/input/input";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from "@/app/components/Button";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Authsocialbutton from "./Authsocialbutton";
import axios from "axios";
// import { data } from "autoprefixer";
import toast from "react-hot-toast";
import {signIn} from 'next-auth/react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type Variant = "LOGIN" | "REGISTER";

function Authform() {
  const session =useSession()
  const router=useRouter()
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  useEffect(()=>{
    if(session.status==='authenticated')
router.push('/users')
  },[session?.status,router])
  const toggleVariant = useCallback(() => {
    console.log("toggle");

    if (variant === "LOGIN") {
      // axios.post('/api/register',data)
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    
    setIsLoading(true);
    if (variant === "REGISTER") {
      axios
         .post("/api/register", data)
         .then(()=>signIn('credentials',data))
        .catch(() => toast.error("something went wrong"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      signIn('credentials',{
        ...data,
        redirect:false
      }).then((callback)=>{
        if(callback?.error){
          toast.error('invalid credentials')
        }
        if(callback?.ok){
          toast.success('Logged in!')
          // router.push('/users')
        }
      }).finally(()=>setIsLoading(false))
    }
  };

  const socialAction=(action:string)=>{
    console.log(action);
    
    setIsLoading(true);
    signIn(action,{redirect:false}).then((callback)=>{
      if(callback?.error){
        toast.error('Invalid crenedtials')
      }
    })
  }
  return (
    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4  w-ful">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        {variant === "REGISTER" && (
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="name"
              label="Name"
            />
          )}

          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            type="email"
            label="email address"
          />
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password"
            type="password"
            label="password"
          />
          <div>          <Button disabled={isLoading} fullwidth type="submit">
            {variant === "LOGIN" ? "Sign in" : "Register"}
          </Button>
</div>
        </form>
        <div className="mt-8 flex justify-center">
          <div className="divided-solid">-or-</div>
        </div>
        <div className="flex justify-center gap-14">
          <Authsocialbutton icon={BsGithub} onClick={()=>socialAction('github')}/>
          <Authsocialbutton icon={BsGoogle} onClick={()=>socialAction('google')}/>
        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>
            {variant === "LOGIN"
              ? "New to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Authform;
