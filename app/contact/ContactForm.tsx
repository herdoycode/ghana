"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import { Flex } from "@radix-ui/themes";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";

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
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onsubmit = handleSubmit((data) => {
    setLoading(true);
    axios
      .post("/api/messages", data)
      .then(() => {
        reset();
        setLoading(false);
        toast.success("Message sent successfully.");
      })
      .catch((err) => {
        setLoading(false);
        toast.success("Something went wrong!");
      });
  });

  return (
    <form className="w-full space-y-3" onSubmit={onsubmit}>
      <Flex align="center" justify="between" gap="2">
        <div className="w-full">
          <Input {...register("name")} type="text" placeholder="Name" />
          {errors.name && (
            <p className="text-red-600"> {errors.name.message} </p>
          )}
        </div>
        <div className="w-full">
          <Input {...register("email")} type="email" placeholder="Email" />
          {errors.email && (
            <p className="text-red-600"> {errors.email.message} </p>
          )}
        </div>
      </Flex>

      <div>
        <Input {...register("phone")} type="text" placeholder="Phone" />
        {errors.phone && (
          <p className="text-red-600"> {errors.phone.message} </p>
        )}
      </div>
      <div>
        <Input {...register("subject")} type="text" placeholder="Subject" />
        {errors.subject && (
          <p className="text-red-600"> {errors.subject.message} </p>
        )}
      </div>

      <Textarea
        {...register("message")}
        placeholder="Message"
        cols={1}
        rows={10}
      />
      {errors.message && (
        <p className="text-red-600"> {errors.message.message} </p>
      )}
      <Button className="w-full">
        {loading ? "Loading..." : "Send a message"}
      </Button>
    </form>
  );
};

export default ContactForm;
