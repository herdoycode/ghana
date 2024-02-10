import { Heading } from "@radix-ui/themes";
import Subscribers from "./Sbuscribers";
const Admin = () => {
  return (
    <div>
      <Heading as="h1" size="7" mb="2">
        Subscriber
      </Heading>
      <Subscribers />
    </div>
  );
};

export default Admin;
