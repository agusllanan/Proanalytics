import Link from "next/link";
import { Menu } from "@headlessui/react";
import "animate.css";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Menu
      className={
        isOpen
          ? "absolute h-full grid grid-rows-6 text-center items-center bg-keppel-600 animate__animated animate__fadeInRight w-full z-20"
          : "hidden animate__animated animate__fadeInLeft"
      }
      as="nav"
      onClick={toggle}
    >
      <Link href="/">
        <a className="text-xl text-white hover:bg-keppel-400">Inicio</a>
      </Link>
      <Link href="/nosotros">
        <a className="text-xl text-white hover:bg-keppel-400">Nosotros</a>
      </Link>
      <Link href="/climaLaboral">
        <a className="text-xl text-white hover:bg-keppel-400">Clima Laboral</a>
      </Link>
      <Link href="/six-sigma">
        <a className="text-xl text-white hover:bg-keppel-400">Six Sigma</a>
      </Link>
      <Link href="/blog">
        <a className="text-xl text-white hover:bg-keppel-400">Blog</a>
      </Link>
      <Link href="/contactanos">
        <a className="text-xl text-white hover:bg-keppel-400">Contáctanos</a>
      </Link>
    </Menu>
  );
};

export default Dropdown;
