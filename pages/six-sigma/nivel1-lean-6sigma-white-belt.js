import Layout from "../../components/Layout";
import Link from "next/link";

export const whiteBelt = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-gray-500"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-White.png)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont mx-16">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-96 w-4/5 lg:w-1/4 sm:rounded-t-xl rounded-l-xl items-center self-center">
            <h3 className="flex flex-col justify-center text-2xl mx-auto font-light py-8 font-jost text-gray-600 place-self-center">
              NIVEL 1 {" "}
              <span className="font-bold text-gray-600">
                LEAN 6 SIGMA WHITE BELT
              </span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-gray-500">
              Este nivel es la primera etapa de entrenamiento y certificación
              donde se aprenden y practican conceptos y herramientas básicas de{" "}
              <span className="font-bold text-gray-500">Lean Six Sigma.</span>{" "}
              El curso será la base para el entendimiento de la{" "}
              <span className="font-bold text-gray-500">
                metodología DMAIC.
              </span>
            </p>
          </div>
          <div className="flex flex-col container bg-gray-500 shadow-2xl h-96 lg:w-1/4 lg:rounded-r-xl w-4/5 justify-center">
            <p className="flex self-center w-4/5 text-white">
              Si deseas obtener más información acerca de esta certificación, ingresa tu correo electrónico.
            </p>
            <label
              htmlFor="footer-field"
              className="ml-10 mt-6 leading-7 text-base text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 my-3 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
            />
            <button className="mt-2 text-white bg-transparent border-2 border-white py-2 px-6 focus:outline-none hover:bg-white hover:text-gray-500 rounded w-4/5 self-center transition ease-in duration-250">
              QUIERO MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 font-light sm:h-72 text-xl sm:text-4xl text-gray-500 font-jost place-self-center">
            LO QUE VAS A APRENDER{" "} <br />
            <span className="font-bold text-gray-500">EN EL NIVEL 1 WHITE BELT</span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-4/5 mx-auto list-disc pb-6 space-y-2 py-6 place-self-center my-4 font-mont">
            <li className="text-gray-500 text-lg ">
              Introducción al mundo{" "}
              <span className="font-bold text-gray-500">White Belt </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-gray-500">
                Análisis de Causa Raíz
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Ishikawa</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Pareto</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">5 Por qué</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">FTA</span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-gray-500">
                Eficiencia de Procesos
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-gray-500">5S’s </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-gray-500">
                Trabajo Estandarizado
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-gray-500">
                Sistema de Control Andon
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-gray-500"
        style={{
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}

        <div className="flex sm:flex-row flex-col h-auto">
          <div className="bg-gray-500 text-center flex sm:w-1/2 w-full ">
            <h3 className="mx-auto text-xl sm:text-4xl text-white font-bold self-center">
              ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
            </h3>
          </div>
          <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
            <ul className="w-4/5 flex-col py-10 space-y-2 font-mont list-disc">
              <li className="text-gray-500 text-lg ">
                Las exigencias de los clientes demandan un alto nivel de calidad
                en productos y servicios.
              </li>
              <li className="text-gray-500 text-lg">
                <span className="font-bold text-gray-500">
                  Capacita a tu personal
                </span>{" "}
                para adquirir el conocimiento y poder cumplir con los
                requerimientos de clientes internos y externos.
              </li>
              <li className="text-gray-500 text-lg">
                Tu personal podrá resolver los problemas de forma metódica,
                eficaz y contundente.
              </li>
              <li className="text-gray-500 text-lg">
                Te preparamos junto con tu equipo, de forma personalizada para
                cubrir las necesidades y garantizar el éxito de tus proyectos.
              </li>
              <li className="text-gray-500 text-lg">
                Todos los proyectos estarán alineados a la estrategia de tu
                empresa.
              </li>
              <li className="text-gray-500 text-lg">
                Tu equipo de trabajo podrá identificar{" "}
                <span className="font-bold textgray-500">
                  oportunidades de mejora, optimizar recursos,
                </span>{" "}
                incrementar la eficiencia y ejecutar la mejor solución.
              </li>
              <li className="text-gray-500 text-lg">
                Tu equipo podrá usar un lenguaje global común de trabajo.
              </li>
              <li className="text-gray-500 text-lg">
                La{" "}
                <span className="font-bold text-gray-500">
                  metodología Lean Six Sigma
                </span>{" "}
                proveerá de conocimiento y entrenamiento a todo el equipo para
                enfrentar los retos de forma sustentable.
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[700px] flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-gray-500}">
                <h3 className="font-regular text-3xl py-4 text-gray-500 font-jost">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold text-gray-500">SIX SIGMA?</span>
                </h3>
                <p className="text-gray-500">
                  Conoce más sobre la importancia de la certificación, recursos
                  y estrategias para la mejora continua de tu organización.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-transparent  hover:bg-gray-500 text-gray-500 p-3 my-2 lg:my-0 rounded-xl tracking-wide hover:text-white font-semibold border-2 border-gray-500 cursor-pointer transition ease-in duration-250"
                    >
                      SOLICITA MÁS INFORMACIÓN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row h-48">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="text-4xl text-gray-500 font-jost text-center mx-auto self-center">
            ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center text-gray-500 font-mont">
            <span className="font-bold text-gray-500">
              Lean 6 Sigma White Belt
            </span>{" "}
            - No hay restricción ni perfil exclusivo. Cualquier persona puede
            adquirir el conocimiento y/o habilidades.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default whiteBelt;
