"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { LuMailOpen } from "react-icons/lu";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FormSchema = z.object({
  email: z.string().email("Invalid email format"),
});

const Subscribe = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="py-16 bg-secondary px-2">
      <Flex align="center" justify="center">
        <Flex
          align="center"
          justify="center"
          direction="column"
          className="w-full md:w-[600px] bg-white dark:bg-[#000] shadow-2xl px-5 py-10 rounded-lg"
          gap="3"
        >
          <LuMailOpen className="text-primary text-[300px]" />
          <Heading as="h2" size="6">
            SUBSCRIBE
          </Heading>
          <Text as="p">Subscribe to our newsletter & stay updated</Text>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full py-6" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </Flex>
      </Flex>
    </div>
  );
};

export default Subscribe;
