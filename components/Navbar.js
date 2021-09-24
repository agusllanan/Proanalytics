import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";

const Navbar = ({ toggle }) => {
  return (
    <Menu
      className="flex flex-nowrap items-center justify-between bg-white relative shadow-sm h-20"
      as="div"
    >
      {({ open }) => (
        <Fragment>
          <a className="ml-4">
            <img className="w-48" src="/img/logo.png"></img>
          </a>
          <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-keppel-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <Dropdown />
          <div className="pr-8 lg:flex hidden lg:items-center">
            <Link href="/">
              <a className="mr-5 text-lg hover:text-keppel-600">INICIO</a>
            </Link>
            <Link href="/nosotros">
              <a className="mr-3 text-lg hover:text-keppel-600">NOSOTROS</a>
            </Link>
            <Menu.Button className="bg-keppel-400 relative inline-flex justify-center items-center w-full rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-keppel-500 focus-visible:ring-opacity-75 lg:px-2 lg:py-2 mr-2 ">
              <Link href="#">
                <a className="text-lg hover:text-keppel-600 divide-y-2 divide-keppel-600">SERVICIOS</a>
              </Link>
              <ChevronDownIcon
                className="w-5 h-5 ml-1 text-keppel-600 hover:text-violet-500"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              show={open}
              enter="transform transition duratin-100 ease-in"
              enterfrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-12 top-14 mt-2 flex flex-col z-20 w-auto h-auto rounded-md shadow-xl bg-gray-100 ring-1 ring-keppel-600 ring-opacity-5 focus:outline-none justify-center">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-keppel-200 text-keppel-600"
                            : "text-keppel-600"
                        } group font-bold flex rounded-md items-center w-full px-2 py-2 text-lg justify-center`}
                      >
                        <Link href="/servicios">SERVICIOS</Link>
                      </button>
                    )}
                  </Menu.Item>
                <div className="py-1 px-1 flex flex-row">
                  <div className="bg-curious-blue-100">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-curious-blue-200 text-curious-blue-600"
                              : "text-curious-blue-600"
                          } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                        >
                          <Link href="/climaLaboral">CLIMA LABORAL</Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-curious-blue-200 text-curious-blue-600"
                              : "text-curious-blue-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/climaLaboral/estudios-clima-laboral">
                            ESTUDIOS CLIMA LABORAL
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-curious-blue-200 text-curious-blue-600"
                              : "text-curious-blue-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/climaLaboral/consultorias-capacitaciones">
                            CONSULTORIAS Y CAPACITACIONES
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-curious-blue-200 text-curious-blue-600"
                              : "text-curious-blue-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/climaLaboral/auditorias-nom-035">
                            AUDITORIAS NOM 035 Y NOM 025
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="bg-keppel-100 px-2">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos">
                            DISEÑO Y AUTOMATIZACIÓN DE PROCESOS
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos/nivel1-desing-deploy">
                            NIVEL 1 - DESING & DEPLOY
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos/nivel2-create-do">
                            NIVEL 2 - CREATE & DO
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos/nivel3-project-management">
                            NIVEL 3 - PROJECT MANAGEMENT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="bg-green-50">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group font-bold justify-center flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma">SIX SIGMA</Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/basic-quick-smart-trainings">
                            BASIC QUICK SMART TRAININGS
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel1-lean-6sigma-white-belt">
                            NIVEL 1 - WHITE BELT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel2-lean-6sigma-yellow-belt">
                            NIVEL 2 - YELLOW BELT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel3-lean-6sigma-green-belt">
                            NIVEL 3 - GREEN BELT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-keppel-200 text-keppel-600"
                              : "text-keppel-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel4-lean-6sigma-black-belt">
                            NIVEL 4 - BLACK BELT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
            <Link href="/aprendizaje">
              <a className="mr-5 text-lg hover:text-keppel-600">APRENDIZAJE</a>
            </Link>
            <Link href="/blog">
              <a className="mr-5 text-lg hover:text-keppel-600">BLOG</a>
            </Link>
            <Link href="/contactanos">
              <button className="inline-flex text-lg items-center text-white bg-keppel-500 border-0 py-2 px-4 focus:outline-none hover:bg-keppel-600 rounded-md mt-4 md:mt-0">
                CONTACTANOS
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </Fragment>
      )}
    </Menu>
  );
};
export default Navbar;
