"use client";
import { joiResolver } from "@hookform/resolvers/joi";
import { Flex, Heading, Text } from "@radix-ui/themes";
import axios from "axios";
import Joi from "joi";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
    <div className="py-16 bg-secondary px-2">
      <Flex align="center" justify="center">
        <Flex
          align="center"
          justify="center"
          direction="column"
          className="w-full md:w-[600px] bg-white dark:bg-[#000] p-5 rounded-lg"
          gap="3"
        >
          {errors.email && (
            <p className="text-red-500"> {errors.email.message} </p>
          )}
          <Image src="/envelope.png" width="120" height="120" alt="mail-icon" />
          <Heading as="h2" size="6">
            SUBSCRIBE
          </Heading>
          <Text as="p">Subscribe to our newsletter & stay updated</Text>
          <form
            className="w-full space-y-3"
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
              <Input
                {...register("email")}
                type="text"
                placeholder="Your Email"
              />
            </div>
            <Button className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Flex>
      </Flex>
    </div>
  );
};

export default Subscribe;
