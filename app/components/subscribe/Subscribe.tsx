"use client";
import Image from "next/image";
import "./Subscribe.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

interface FormData {
  email: string;
}

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe">
        {errors.email && <p className="error"> {errors.email.message} </p>}
        <Image src="/envelope.png" width="120" height="120" alt="mail-icon" />
        <h2>SUBSCRIBE</h2>
        <p>Subscribe to our newsletter & stay updated</p>
        <div className="subscribe-input">
          <form
            onSubmit={handleSubmit((data) => {
              setLoading(true);
              axios
                .post("/api/subscribe", data)
                .then(() => {
                  reset();
                  setLoading(false);
                  toast.success("Subscribed.");
                })
                .catch((err) => {
                  setLoading(false);
                  toast.success("Something went wrong!");
                });
            })}
          >
            <div>
              <input
                {...register("email")}
                type="text"
                placeholder="Your Email"
              />
            </div>
            <button disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
