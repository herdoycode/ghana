"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(8).required(),
});

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = handleSubmit((data) =>
    signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/admin",
    })
  );

  return (
    <>
      <Button className="w-full bg-green-500 mb-4 hover:bg-green-600">
        <BsGoogle className="me-2" /> Continue with google
      </Button>
      <Button className="w-full bg-blue-500 hover:bg-blue-600">
        <BsFacebook className="me-2" /> Continue with Facebook
      </Button>

      <div className="flex items-center gap-3 w-full py-3">
        <div className="w-full h-[2px] bg-gray-400" />
        <p>or</p>
        <div className="w-full h-[2px] bg-gray-400" />
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <Input {...register("email")} type="email" placeholder="Email" />
          {errors.email && (
            <p className="text-red-600"> {errors.email.message} </p>
          )}
        </div>
        <div>
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-600"> {errors.password.message} </p>
          )}
        </div>

        <Button className="w-full">Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
