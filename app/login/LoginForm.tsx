"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";

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
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="f-g">
        <div>
          <input {...register("email")} type="email" placeholder="Email" />
          {errors.email && <p className="error"> {errors.email.message} </p>}
        </div>
        <div>
          <input {...register("password")} type="text" placeholder="Name" />
          {errors.password && (
            <p className="error"> {errors.password.message} </p>
          )}
        </div>
      </div>

      <button>Send a message</button>
    </form>
  );
};

export default LoginForm;
