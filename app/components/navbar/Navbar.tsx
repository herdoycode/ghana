"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.scss";

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
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
                <Link href="/home">Home</Link>
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
            <div className="item">
              <Link href="/login">Login</Link>
            </div>
            <div className="donate-btn">
              <span>Donate now</span>
              <div className="icon">
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
