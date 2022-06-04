import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const nivel1DesingDeploy = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/portadaClimaLaboral.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl w-4/5 lg:w-1/3 rounded-t-xl md:rounded-tr-none md:rounded-l-xl self-center">
            <h3 className="w-4/5 mx-auto text-2xl py-12 font-bold text-scooter-500">
              NIVEL 2 -{" "}
              <span className="font-bold text-keppel-500">CREATE & DO</span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-justify pb-10">
            En este nivel de entrenamiento tú y tu equipo podrán formular e integrar hojas de trabajo. Establecer flujos de información como autorizaciones, automatizaciones y bloqueos. Podrán crear Dashboards y programar sus principales indicadores.
              <br /> <br />
              Para lograr el certificado de cumplimiento de nivel, los participantes deberán aprobar un examen práctico.
            </p>
          </div>
          <div className="flex flex-col container bg-curious-blue-500 shadow-2xl lg:w-1/3 lg:rounded-r-xl w-4/5">
            <p className="w-4/5 mx-auto md:ml-4 justify-center text-white text-justify text-lg pt-4 pb-4">
              ¿Quieres saber si tu empresa necesita{" "}
              <span className="font-bold text-scooter-400">SMARTSHEETS?</span>
            </p>
            <label
              htmlFor="footer-field"
              className="ml-4 mt-2 text-base text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out"
            />
            <label
              htmlFor="footer-field"
              className="ml-4 text-base mt-1 text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out"
            />
            <label
              htmlFor="footer-field"
              className="ml-4 mt-1 text-base text-white"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 mb-1 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out"
            />
            {/* <textarea className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out">Escríbenos tus inquietudes y horario de contacto</textarea> */}
            <button className="ml-4 text-white font-bold bg-keppel-500 border-0 py-2 mb-4 mt-4 focus:outline-none hover:bg-keppel-600 rounded w-4/5">
              SOLICITA TU DIAGNOSTICO GRATUITO
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold place-self-center">
            LO QUE VAS A APRENDER EN EL NIVEL 2 -{" "}
            <span className="font-bold text-keppel-500">CREATE & DO</span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-4/5 mx-auto list-disc pb-6 place-self-center my-4">
            <li className="text-scooter-500 text-lg font-bold">Formulación</li>
            <li className="text-scooter-500 text-lg ml-4">Cruces y Referencias</li>
            <li className="text-scooter-500 text-lg ml-4">Textos y Fechas</li>
            <li className="text-scooter-500 text-lg ml-4">Numéricas y Avanzadas</li>
            <li className="text-scooter-500 text-lg font-bold">Automatización</li>
            <li className="text-scooter-500 text-lg ml-4">Establecer flujos</li>
            <li className="text-scooter-500 text-lg ml-4">Autorizaciones</li>
            <li className="text-scooter-500 text-lg ml-4">Bloqueos</li>
            <li className="text-scooter-500 text-lg ml-4">Alertas y Notificaciones</li>
            <li className="text-scooter-500 text-lg font-bold">
            Paneles de Control
            </li>
            <li className="text-scooter-500 text-lg ml-4">Dashboards</li>
            <li className="text-scooter-500 text-lg ml-4">Indicadores</li>
            <li className="text-scooter-500 text-lg ml-4">Gráficos</li>
          </ul>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400 h-96"
        style={{
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle font-mont">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-4/5 h-auto">
              <div className="mb-4 divide-y-4 divide-scooter-500">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold text-keppel-500">
                    DISEÑO Y AUTOMATIZACIÓN DE PROCESOS?
                  </span>
                </h3>
                <p className="text-gray-500 py-2">
                  Encuentra en nuestro contenido; soluciones, tips y
                  herramientas para la{" "}
                  <span className="font-bold text-keppel-500">
                    creación, gestión y automatización de procesos en tu
                    empresa.
                  </span>
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/contactanos">
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-scooter-500  hover:bg-keppel-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      SOLICITA TU DIAGNÓSTICO GRATUITO
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row h-56">
        <div className="w-full sm:w-1/2 flex">
          {/* <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4 items">
          ¿Quieres saber más sobre los temas que impactan al <span className="font-bold text-4xl text-scooter-600 text-center mx-auto pb-4">CLIMA ORGANIZACIONAL?
            </span>
          </h3> */}
        </div>
        <div className="w-full sm:w-1/2 flex"></div>
      </div>
    </Layout>
  );
};

export default nivel1DesingDeploy;
