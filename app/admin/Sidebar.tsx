"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const { data } = useSession();
  return (
    <>
      <div className="auth">
        <Image width="60" height="60" src={data?.user?.image!} alt="user" />
        <h2> {data?.user?.name} </h2>
        <p>Admin role</p>
      </div>
      <div className="menu">
        <Link href="/admin">Messages</Link>
        <Link href="/admin/subscribers">Subscribers</Link>
      </div>
    </>
  );
};

export default Sidebar;
