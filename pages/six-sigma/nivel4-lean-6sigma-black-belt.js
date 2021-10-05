import Layout from "../../components/Layout";
import Link from "next/link";

export const blackBelt = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-Black.png)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-auto w-4/5 lg:w-1/4 sm:rounded-t-xl rounded-l-xl items-center self-center">
            <h3 className="flex flex-col justify-center text-2xl mx-auto py-2 font-bold text-scooter-500 place-self-center w-4/5">
              NIVEL 4 -{" "}
              <span className="font-bold text-keppel-500">
                LEAN 6 SIGMA BLACK BELT
              </span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-justify py-4">
              Este es el cuarto nivel de certificación{" "}
              <span className="font-bold text-keppel-500">Lean Six Sigma</span>{" "}
              desarrollarás habilidades y conocimientos enfocados a liderar
              proyectos complejos clave y de alto impacto a la organización. Por
              lo general una persona certificada <br /> <br />
              <span className="font-bold text-keppel-500">Black Belt</span>{" "}
              dedica la mayor parte de su tiempo en implementar proyectos de
              mejora continua, rediseñando productos y procesos, así como
              generando ahorros de forma sustentable y sostenible.
            </p>
          </div>
          <div className="flex flex-col container bg-curious-blue-500 shadow-2xl h-96 lg:w-1/4 lg:rounded-r-xl w-4/5">
            <p className="flex self-center w-4/5 text-white pt-8">
              Deja tus datos para más información
            </p>
            <label
              htmlFor="footer-field"
              className="ml-12 mt-20 leading-7 text-base text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
            />
            <button className="ml-4 mt-2 text-white bg-keppel-500 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-600 rounded w-4/5 self-center">
              SOLICITA TU ENTREVISTA GRATUITA
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold place-self-center">
            LO QUE VAS A APRENDER EN EL NIVEL 4 -{" "}
            <span className="font-bold text-keppel-500">BLACK BELT</span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-4/5 mx-auto list-disc pb-6 place-self-center my-4">
            <li className="text-scooter-500 text-lg">
              Introducción al mundo{" "}
              <span className="font-bold text-keppel-500">Black Belt</span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                Metodología DFSS
              </span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                VOC - Voz del Cliente
              </span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                Administración de Proyectos
              </span>
            </li>
            <li className="text-scooter-500 text-lg ml-4">
              <span className="font-bold text-keppel-500">Smartsheet</span>
            </li>
            <li className="text-scooter-500 text-lg ml-4">
              <span className="font-bold text-keppel-500">Ruta Crítica</span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">Cadena de Valor</span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">Gemba Walk</span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                QFD - Casa de la Calidad
              </span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">Método KJ</span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                Administración del Riesgo
              </span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                Mapa de procesos
              </span>
            </li>
            <li className="text-scooter-500 text-lg">
              <span className="font-bold text-keppel-500">
                DOE - Factorial Fraccionado
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}

        <div className="flex sm:flex-row flex-col h-auto">
          <div className="bg-blue-500 text-center flex sm:w-1/2 w-full">
            <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-white font-bold self-center">
              ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
            </h3>
          </div>
          <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
            <ul className="w-full flex-col py-6 list-disc pl-8">
              <li className="text-scooter-500 text-lg">
                Las exigencias de los clientes demandan un alto nivel de calidad
                en productos y servicios.
              </li>
              <li className="text-scooter-500 text-lg">
                <span className="font-bold text-keppel-500">
                  Capacita a tu personal
                </span>{" "}
                para adquirir el conocimiento y poder cumplir con los
                requerimientos de clientes internos y externos.
              </li>
              <li className="text-scooter-500 text-lg">
                Tu personal podrá resolver los problemas de forma metódica,
                eficaz y contundente.
              </li>
              <li className="text-scooter-500 text-lg">
                Te preparamos junto con tu equipo, de forma personalizada para
                cubrir las necesidades y garantizar el éxito de tus proyectos.
              </li>
              <li className="text-scooter-500 text-lg">
                Todos los proyectos estarán alineados a la estrategia de tu
                empresa.
              </li>
              <li className="text-scooter-500 text-lg">
                Tu equipo de trabajo podrá identificar{" "}
                <span className="font-bold text-keppel-500">
                  oportunidades de mejora, optimizar recursos,
                </span>{" "}
                incrementar la eficiencia y ejecutar la mejor solución.
              </li>
              <li className="text-scooter-500 text-lg">
                Tu equipo podrá usar un lenguaje global común de trabajo.
              </li>
              <li className="text-scooter-500 text-lg">
                La{" "}
                <span className="font-bold text-keppel-500">
                  metodología Lean Six Sigma
                </span>{" "}
                proveerá de conocimiento y entrenamiento a todo el equipo para
                enfrentar los retos de forma sustentable.
              </li>
            </ul>
          </div>
        </div>

        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-scooter-400}">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold text-keppel-500">SIX SIGMA?</span>
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
                      className="w-full sm:w-2/3 flex justify-center bg-scooter-500  hover:bg-keppel-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
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
      <div className="flex flex-col sm:flex-row h-64">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="text-4xl text-scooter-500 text-center mx-auto self-center">
            ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center">
            <span className="font-bold text-keppel-500">
              Lean 6 Sigma Black Belt
            </span>{" "}
            - Preferentemente haber cursado el Nivel 1, 2 y 3, o haberse
            acreditado anteriormente como{" "}
            <span className="font-bold text-keppel-500">Green Belt,</span> o
            tener experiencia ejecutando proyectos{" "}
            <span className="font-bold text-keppel-500">6 Sigma.</span>
            <br /> <br />
            Para lograr la certificación los
            participantes deberán mostrar los conocimientos definiendo y
            ejecutando un proyecto real aprobado por un líder de la
            organización, así como validar los ahorros potenciales
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default blackBelt;
