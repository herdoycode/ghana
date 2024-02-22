import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/authOptions";
import LoginForm from "./LoginForm";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/admin");
  return (
    <div className="px-2">
      <Container>
        <Flex align="center" justify="center" className="py-52">
          <Box className="w-full md:w-[400px]">
            <Heading as="h1" size="7" mb="4" align="center">
              Login
            </Heading>
            <LoginForm />
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default LoginPage;
