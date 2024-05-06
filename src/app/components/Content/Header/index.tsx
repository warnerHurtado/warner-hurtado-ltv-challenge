"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import VercelIcon from "/public/icons/favicon.svg";

type LinkType = {
  id: number;
  url: string;
  label: string;
};

type LayoutProps = {
  linksList: LinkType[];
};

export const Header: React.FC<LayoutProps> = ({ linksList = [] }) => {
  const pathname = usePathname() || "";

  return (
    <nav className="bg-slate-900 text-white px-2">
        <ul className="flex items-center p-2">
          <li className="flex items-center md:mr-12">
            <Image src={VercelIcon} width={80} alt="Dev Icon" priority />
            <label className="block sm:hidden">Warner</label>
            <label className="hidden sm:block">Warner Hurtado Laguna</label>
          </li>
          {linksList.map((link) => (
            <li
              className={`${
                pathname == link.url
                  ? "border-b-2 border-black dark:border-white"
                  : "hover:border-b-2 border-yellow-800 dark:border-yellow-200"
              }  ml-10 text-center`}
              key={link.id}
            >
              <Link href={`${link.url}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
    </nav>
  );
};
