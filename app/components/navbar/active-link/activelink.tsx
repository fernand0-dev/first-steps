"use client";

import Link from "next/link";

import styled from "./activelink.module.css";
import { usePathname } from "next/navigation";

interface Prop {
  title: string;
  path: string;
  key: string;
}

export const ActiveLink = ({ title, path }: Prop) => {
  const pathname = usePathname();

  return (
    <Link
      className={` ${styled.link}  ${pathname == path && styled.activeLink}   `}
      href={path}
    >
      {title}
    </Link>
  );
};
