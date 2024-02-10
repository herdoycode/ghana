import { Heading } from "@radix-ui/themes";
import Messages from "./Messages";

const Admin = () => {
  return (
    <div>
      <Heading as="h1" size="7" mb="2">
        Messages
      </Heading>
      <Messages />
    </div>
  );
};

export default Admin;
