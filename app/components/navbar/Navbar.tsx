"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import "./Navbar.scss";

const Navbar = () => {
  const currentPath = usePathname();
  const [active, setActive] = useState<boolean>(false);

  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Gallery", link: "/gallery" },
    { id: 4, label: "Contact", link: "/contact" },
  ];

  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="nav">
          <div className="left">
            <Link href="/" className="logo">
              <Image src="/logo.png" width={60} height={60} alt="logo" />
            </Link>
            <div onClick={() => setActive(!active)} className="toggle-icon">
              {active ? <MdClose /> : <MdOutlineMenu />}
            </div>
            <nav className={active ? "active" : ""}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className={
                        currentPath === item.link
                          ? "nav-link active"
                          : "nav-link"
                      }
                      href={item.link}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="right">
            <nav>
              <ul>
                <li>
                  <Link
                    className={
                      currentPath === "/login" ? "nav-link active" : "nav-link"
                    }
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <div className="donate-now">
                    <Link href="/">Donate now</Link>
                    <div className="icon">
                      <FaHeart />
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
