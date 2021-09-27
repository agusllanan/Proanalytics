import Layout from "../../components/Layout";
import Link from "next/link";

export const basicSmartTraining = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-Quick-Smart.png)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-96 w-4/5 lg:w-1/4 sm:rounded-t-xl rounded-l-xl items-center self-center">
            <h3 className="justify-center text-2xl mx-auto py-10 font-bold text-scooter-500">
              BASIC QUICK
              <br />
              <span className="text-curious-blue-500">SMART TRAININGS</span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-justify flex">
              lorem Ipsuonoce cuáles son los factores que generan insatisfacción
              en tus colaboradores y estrategias para trabajar en la retención y
              engagement de personal.
            </p>
          </div>
          <div className="flex flex-col container bg-curious-blue-500 shadow-2xl h-96 lg:w-1/4 lg:rounded-r-xl w-4/5">
            <label
              htmlFor="footer-field"
              className="ml-4 mt-28 leading-7 text-base text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out"
            />
            <button className="ml-4 mt-2 text-white bg-keppel-500 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-600 rounded w-2/3">
              Acceder a la encuesta
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold place-self-center">
            ¿POR QUÉ APLICAR NUESTRA <br />
            <span className="text-scooter-600 mx-1">
              ENCUESTA DE CLIMA LABORAL?
            </span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-full flex-col py-6 ">
            <li className="text-scooter-500 text-xl ">Gestión de la calidad</li>
            <li className="text-scooter-500 text-xl">Analisis de procesos</li>
            <li className="text-scooter-500 text-xl">
              Detección de fallas de calidad
            </li>
            <li className="text-scooter-500 text-xl">
              Identificacion y correción de retrabajos
            </li>
            <li className="text-scooter-500 text-xl">Ahorros</li>
            <li className="text-scooter-500 text-xl">
              Problemas administrativos
            </li>
            <li className="text-scooter-500 text-xl">Mejora continua</li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="bg-blue-500 text-justify flex sm:w-1/2 w-full">
          <h3 className="sm:py-24 text-xl sm:text-4xl text-white font-bold place-self-center mx-auto">
            {" "}
            NUESTRO PROCESO METODOLOGICO
          </h3>
        </div>
        <div className="bg-scooter-500 w-full sm:w-1/2 text-justify flex flex-col">
          <h3 className="sm:py-24 text-xl sm:text-4xl text-white font-bold place-self-center">
            {" "}
            +500 PROYECTOS IMPLEMENTADOS
          </h3>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-blue-500">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                  ¿QUIERES SABER CÓMO ESTÁ
                  <br />{" "}
                  <span className="text-keppel-700">
                    TU EMPRESA EN CLIMA LABORAL?
                  </span>
                </h3>
                <p className="text-gray-500">
                  Conoce cuáles son los factores que generan insatisfacción en
                  tus colaboradores y estrategias para trabajar en la retención
                  y engagement de personal.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-scooter-500  hover:bg-keppel-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
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
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4">
            QUIERES SABER MAS <br />
            <span className="text-4xl text-scooter-600 text-center mx-auto pb-4">
              DE CLIMA LABORAL?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular py-8">
            Lorem loremoadosi dasioashd oiahsdoi aoihas doihasdoihas
            oiasjdoiasjdlkfja sasopdijaosihfo;sihfaso; uio haoish f;oasfh;i
            asa;soihfo;asihf
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default basicSmartTraining;
