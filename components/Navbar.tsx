"use client";
import { Box, Container, Flex } from "@radix-ui/themes";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DonateButton from "./DonateButton";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <Box py="2" className="border-b">
      <Container>
        <Flex align="center" justify="between">
          <nav className="flex items-center gap-4">
            <Link href="/">
              <Image width={50} height={50} src="/logo.png" alt="logo" />
            </Link>
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-2xl">
                    <MdMenu />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href="/">Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/about">About</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/gallery">Gallery</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/contact">Contact</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ul className="hidden gap-4 md:flex">
              <li>
                <Link href="/">Home</Link>
              </li>
              <div>
                <Link href="/about">About</Link>
              </div>
              <div>
                <Link href="/gallery">Gallery</Link>
              </div>
              <div>
                <Link href="/contact">Contact</Link>
              </div>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {false && (
              <>
                <div>
                  <Link href="/admin">Dashboard</Link>
                </div>
                <div onClick={() => signOut({ callbackUrl: "/" })}>
                  <Link href="/login">Logout</Link>
                </div>
              </>
            )}
            <div>
              <Link href="/login">Login</Link>
            </div>
            <DonateButton />
            <ThemeSwitch />
          </div>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
