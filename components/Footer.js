import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
const [email, setEmail] = useState("");
const [state, setState] = useState("IDLE");
const [errorMesagge, setErrorMesagge] = useState(null)

const subscribe = async () => {
  setState("Cargando");
  setErrorMesagge(null);
  console.log("Esta entrando al onClick")
  try {
    const response = await axios.post("/api/newsletter", { email });
    setState("EXITOSO");
  } catch (e) {
    setErrorMesagge(e.response.data.error);
    setState("ERROR")
  }
};

  return (
    <footer className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 flex">
            <div className="flex xl:flex-nowrap lg:flex-wrap flex-wrap justify-center items-center">
              <div className="w-full lg:w-2/3 xl:mr-4 lg:mr-4 sm:mr-2">
                <img className="w-full" src="/img/logo.png"></img>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <nav className="list-none flex flex-col mb-10 mx-2">
              <Link href="/">
                <a className="py-2 text-gray-600 hover:text-keppel-700">
                  Inicio
                </a>
              </Link>
              <Link href="/nosotros">
                <a className="py-2 text-gray-600 hover:text-keppel-700">
                  Nosotros
                </a>
              </Link>
              <Link href="/servicios">
                <a className="py-2 text-gray-600 hover:text-keppel-700">
                  Servicio
                </a>
              </Link>
              <Link href="/diferenciadores">
                <a className="py-2 text-gray-600 hover:text-keppel-700">
                  Diferenciadores
                </a>
              </Link>
              <Link href="/experiencia">
                <a className="py-2 text-gray-600 hover:text-keppel-700">
                  Experiencia
                </a>
              </Link>
              <Link href="/mas">
                <a className="py-2 text-gray-600 hover:text-keppel-700">Más</a>
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 items-center">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Suscribete a nuestro newsletter
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className={`lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-keppel-500 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-600 rounded
              {state = "Cargando" ? "button-gradient-loading" : "" 
              }`}
              type="button"
              disabled={state === "CARGANDO"}
              onClick={subscribe}
              >
                Suscribirse
              </button>
            </div>
            {state === "ERROR" && (
              <p className="w-1/2 mt-2 text-red-600">{errorMesagge}</p>
            )}
            {state === "EXITOSO" && (
              <p className="w-1/2 mt-2 text-green-600">¡Agregado con éxito!</p>
            )}
            <p className="text-gray-700 text-sm mt-2 md:text-left text-center">
              Enterate de nuestra ultimas novedades
              <br className="lg:block hidden" />y promociones en nuestros
              servicios
            </p>
          </div>
        </div>
      </div>
      {/* --- Aca comienza la parte inferior del footer --- */}
      <div className="bg-keppel-600 h-20">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"></a>
          <p className="flex text-sm text-white sm:ml-6 sm:justify-center sm:mt-0 mt-4">
            © 2021 Proanalytics
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mr-24">
            <a
              className="text-white"
              href="https://www.facebook.com/ProanalyticsConsultoria"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
