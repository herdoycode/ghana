"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="f-g">
        <div>
          <input {...register("name")} type="text" placeholder="Name" />
          {errors.name && <p className="error"> {errors.name.message} </p>}
        </div>
        <div>
          <input {...register("email")} type="email" placeholder="Email" />
          {errors.email && <p className="error"> {errors.email.message} </p>}
        </div>
      </div>
      <div className="f-g">
        <div>
          <input {...register("phone")} type="text" placeholder="Phone" />
          {errors.phone && <p className="error"> {errors.phone.message} </p>}
        </div>
        <div>
          <input {...register("subject")} type="text" placeholder="Subject" />
          {errors.subject && (
            <p className="error"> {errors.subject.message} </p>
          )}
        </div>
      </div>
      <textarea
        {...register("message")}
        placeholder="Message"
        cols={1}
        rows={10}
      />
      {errors.message && <p className="error"> {errors.message.message} </p>}
      <button>Send a message</button>
    </form>
  );
};

export default ContactForm;
