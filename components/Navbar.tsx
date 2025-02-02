import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Container, Flex } from "@radix-ui/themes";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="bg-primary text-white py-2">
      <Container className="px-3">
        <Flex align="center" justify="between">
          <Flex align="center" gap="8">
            <Link href="/">
              <Image src="/logo.png" width={65} height={65} alt="Logo" />
            </Link>
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}> {item.label} </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Flex align="center" gap="3">
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-black dark:text-white"
                  >
                    <AlignJustify />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {navItems.map((item) => (
                    <Link key={item.id} href={item.link}>
                      <DropdownMenuItem> {item.label} </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export const navItems = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Programs", link: "/programs" },
  { id: 4, label: "Events", link: "/events" },
  { id: 5, label: "Gallery", link: "/gallery" },
  { id: 6, label: "Contact", link: "/contact" },
];
