"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.scss";
import DonateBtn from "../donateBtn/DonateBtn";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const { status } = useSession();
  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="navbar">
          <div className="left">
            <div className="logo">
              <Image width={50} height={50} src="/logo.png" alt="logo" />
            </div>
            <div onClick={() => setNavActive(!navActive)} className="toggler">
              {navActive ? <MdClose /> : <RxHamburgerMenu />}
            </div>
            <div className={navActive ? "menu active-menu" : "menu"}>
              <div className="item">
                <Link href="/">Home</Link>
              </div>
              <div className="item">
                <Link href="/about">About</Link>
              </div>
              <div className="item">
                <Link href="/gallery">Gallery</Link>
              </div>
              <div className="item">
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="right">
            {status === "authenticated" && (
              <>
                <div className="item">
                  <Link href="/login">Dashboard</Link>
                </div>
                <div
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="item"
                >
                  <Link href="/login">Logout</Link>
                </div>
              </>
            )}
            {status === "unauthenticated" && (
              <div className="item">
                <Link href="/login">Login</Link>
              </div>
            )}

            <DonateBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
