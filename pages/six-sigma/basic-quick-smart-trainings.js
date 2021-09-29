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
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-96 w-4/5 lg:w-1/4 sm:rounded-t-xl rounded-l-xl items-center self-center">
            <h3 className="flex flex-col justify-center text-2xl mx-auto py-8 font-bold text-scooter-500 place-self-center">
              BASIC -{" "}
              <span className="font-bold text-keppel-500">
                QUICK SMART TRAININGS
              </span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-justify">
              Con la asesoría de nuestro Coach, usted podrá elegir entre uno o
              varios temas de nuestro catálogo de servicios ajustándose a un
              tiempo y presupuesto objetivo. Nuestros{" "}
              <span className="font-bold text-keppel-500">Quick Trainings</span>{" "}
              podrán ser exclusivos o abiertos, en formato presencial o virtual,
              dependiendo de las necesidades.
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
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold self-center">
            ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-full flex-col py-6 list-disc pl-8">
            <li className="text-scooter-500 text-xl ">
              Las exigencias de los clientes demandan un alto nivel de calidad
              en productos y servicios.
            </li>
            <li className="text-scooter-500 text-xl">
              <span className="font-bold text-keppel-500">
                Capacite a su personal
              </span>{" "}
              para adquirir el conocimiento y poder cumplir con los
              requerimientos de cliente internos y externos.
            </li>
            <li className="text-scooter-500 text-xl">
              Su personal podrá resolver los problemas de forma metódica, eficaz
              y contundente.
            </li>
            <li className="text-scooter-500 text-xl">
              Prepararemos a usted y sus miembros del equipo de forma
              personalizada para cubrir las necesidades y garantizar el éxito de
              sus proyectos.
            </li>
            <li className="text-scooter-500 text-xl">
              Todos los proyectos estarán alineados a la estrategia de su
              empresa.
            </li>
            <li className="text-scooter-500 text-xl">
              Su equipo de trabajo podrá identificar{" "}
              <span className="font-bold text-keppel-500">
                oportunidades de mejora, optimizar recursos,
              </span>{" "}
              incrementar la eficiencia y ejecutar la mejor solución.
            </li>
            <li className="text-scooter-500 text-xl">
              Su equipo podrá usar un lenguaje global común de trabajo.
            </li>
            <li className="text-scooter-500 text-xl">
              La{" "}
              <span className="font-bold text-keppel-500">
                metodología Lean 6 Sigma
              </span>{" "}
              proveerá de conocimiento y entrenamiento suficiente para enfrentar
              los retos de forma sustentable.
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
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-scooter-400}">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                ¿QUIERES SABER MÁS SOBRE <span className="font-bold text-keppel-500">SIX SIGMA?</span>  
                </h3>
                <p className="text-gray-500">
                Conoce más sobre la importancia de la certificación, recursos y estrategias para la mejora continua de tu organización. 
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
      <div className="flex flex-col sm:flex-row h-48">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="text-4xl text-gray-600 text-center mx-auto self-center">
          ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center">
          <span className="font-bold text-keppel-500">Quick Smart Trainings</span> - No hay restricción ni perfil exclusivo. Cualquier persona que quiera adquirir el conocimiento y/o habilidades.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default basicSmartTraining;
