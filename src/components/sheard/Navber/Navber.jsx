"use client"
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from '../../../images/logo.png'
import { FaGithub } from "react-icons/fa";

const Navber = () => {
    const path = usePathname();
  return (
    <nav className="sticky top-0 z-40 w-full shadow-sm border-gray-400 py-5 bg-background/70 backdrop-blur-lg ">
      <header className="flex container mx-auto items-center justify-between px-6">
        <div className="flex items-center gap-3">
            <Image src={Logo} width={25} height={25} alt="nav logo img" />
          <p className="font-bold">HERO .IO</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link className={path == '/' && 'border-b text-purple-500'} href="/">Home</Link>
          </li>
          <li>
            <Link className={path == '/apps' && 'border-b text-purple-500'} href="/apps">Apps</Link>
          </li>
          <li>
            <Link className={path == '/installation' && 'border-b text-purple-500'} href="/installation">Installed</Link>
          </li>
          <li>
            <Link className={path === '/deshboard' && 'border-b text-purple-500'} href="/deshboard">DeshBoard</Link>
          </li>
        </ul>
      <div className="">
        <button className="flex items-center gap-1 btn btn-ghost primary-linear-color text-white border-none"><FaGithub /> Contribute</button>
      </div>
      </header>
    </nav>
  );
};

export default Navber;
