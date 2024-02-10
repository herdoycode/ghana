import { Avatar, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center" direction="column" gap="2">
        <Avatar size="6" radius="full" src="/t3.jpg" fallback="user" />
        <Heading as="h3" size="4">
          {" "}
          Gright Kavi{" "}
        </Heading>
        <p>Admin role</p>
      </Flex>
      <ul className="space-y-3 mt-3">
        <li>
          <Link href="/admin">Messages</Link>
        </li>

        <li>
          <Link href="/admin/subscribers">Subscribers</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
