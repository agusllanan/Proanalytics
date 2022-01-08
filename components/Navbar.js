import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";

const Navbar = ({ toggle }) => {
  return (
    <Menu
      className="flex flex-nowrap items-center justify-between bg-white relative shadow-sm h-20 px-6"
      as="div"
    >
      {({ open }) => (
        <Fragment>
          <Link href="/">
            <a className="ml-8">
              <img className="w-48" src="/img/logo.png"></img>
            </a>
          </Link>
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
              <a className="mr-5 text-base hover:text-keppel-600 font-mont">
                INICIO
              </a>
            </Link>
            <Link href="/nosotros">
              <a className="mr-3 text-base hover:text-keppel-600 font-mont">
                NOSOTROS
              </a>
            </Link>
            <Menu.Button className="relative inline-flex justify-center items-center w-full rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-keppel-500 focus-visible:ring-opacity-75 lg:px-2 lg:py-2 mr-2 ">
              <Link href="#">
                <a className="text-base hover:text-keppel-600 divide-y-2 divide-keppel-600 font-mont">
                  SERVICIOS
                </a>
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
              <Menu.Items className="origin-top-right absolute right-12 top-16 mt-2 flex flex-col z-20 w-auto h-auto rounded-md shadow-xl bg-white ring-1 ring-keppel-600 ring-opacity-5 focus:outline-none justify-center">
                <div className="py-1 px-1 flex flex-row divide-x-2 divide-keppel-500">
                  <div className="px-4">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-500"
                              : "text-gray-500"
                          } group font-bold flex rounded-md  w-full px-2 py-2 text-sm `}
                        >
                          <Link href="/climaLaboral">Clima Laboral</Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-500"
                              : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/climaLaboral/estudios-clima-laboral">
                            Estudios de clima laboral
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-3/4 px-2 py-2 text-sm`}
                        >
                          <Link href="/climaLaboral/auditorias-nom-035">
                            Asesoría en NOM-035-STPS-2018 y NMX-R-025-SCFI-2015
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/climaLaboral/consultorias-capacitaciones">
                            Consultoría y Capacitación
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  {/* <div className="px-4">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos">
                            Diseño y automatización de Procesos
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos/nivel1-desing-deploy">
                            Nivel 1 - Desing & Deploy
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos/nivel2-create-do">
                            Nivel 2 - Create & Do
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos/nivel3-project-management">
                            Nivel 3 - Project Management
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div> */}
                  <div className="px-4 pb-2">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma">Six Sigma</Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/basic-quick-smart-trainings">
                            Basic Quick Smart Trainings
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel1-lean-6sigma-white-belt">
                            Nivel 1 - White Belt
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel2-lean-6sigma-yellow-belt">
                            Nivel 2 - Yellow Belt
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100 text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel3-lean-6sigma-green-belt">
                            Nivel 3 - Green Belt
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                            ? "bg-gray-100   text-gray-500"
                            : "text-gray-500"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma/nivel4-lean-6sigma-black-belt">
                            Nivel 4 - Black Belt
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
            {/* <Link href="/aprendizaje">
              <a className="mr-5 text-base hover:text-keppel-600 font-mont">
                APRENDIZAJE
              </a>
            </Link> */}
            <Link href="/blog">
              <a className="mr-5 text-base hover:text-keppel-600 font-mont">
                BLOG
              </a>
            </Link>
            <Link href="/contactanos">
              <button className="inline-flex text-base items-center text-white bg-keppel-500 border-0 py-2 px-4 focus:outline-none hover:bg-keppel-600 rounded-md mt-4 md:mt-0 font-mont">
                CONTÁCTANOS
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
