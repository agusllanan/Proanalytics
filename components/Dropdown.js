import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import "animate.css"

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Menu
      className={
        isOpen
          ? "absolute h-full grid grid-rows-6 text-center items-center bg-keppel-600 animate__animated animate__fadeInRight w-full z-10"
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
      <Menu.Button className="">
        <Link href="/servicios">
          <a className="text-xl text-white hover:bg-keppel-400">Servicios</a>
        </Link>
      </Menu.Button>
      <Menu.Items className="text-white text-xl my-2 bg-keppel-400">
        Clima Laboral
      </Menu.Items>
      <Menu.Items className="text-white text-xl my-2 bg-keppel-400">
        Diseño y automatización de procesos
      </Menu.Items>
      <Menu.Items className="text-white text-xl my-2 bg-keppel-400">
        Six Sigma
      </Menu.Items>
      <Link href="/diferenciadores">
        <a className="text-xl text-white hover:bg-keppel-400">Aprendizaje</a>
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
