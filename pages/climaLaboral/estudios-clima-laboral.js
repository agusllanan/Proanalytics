import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const encuestaClimaLaboral = () => {
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
              ESTUDIOS DE
              <br />
              <span className="text-curious-blue-500">CLIMA LABORAL</span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-justify pb-20">
              Encuesta y obtén resultados cuantitativos del{" "}
              <span className="font-bold text-keppel-500">
                clima laboral de tu empresa.
              </span>{" "}
              Profundiza y conoce la experiencia de trabajar en tu empresa según
              su gente. <br />
              <br />
              Te asesoramos sobre la mejor{" "}
              <span className="font-bold text-keppel-500">
                técnica para identificar el clima laboral
              </span>
              : entrevistas, focus group, observación, simulaciones de trabajo.
            </p>
          </div>
          <div className="flex flex-col container bg-curious-blue-500 shadow-2xl lg:w-1/3 lg:rounded-r-xl w-4/5">
            <p className="w-4/5 mx-auto md:ml-4 justify-center text-white text-justify text-lg pt-4 pb-4">
              ¿Quieres trabajar en{" "}
              <span className="font-bold text-xl">
                estrategias para mejorar el clima laboral en tu empresa?
              </span>
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
              SOLICITA TU DIAGNOSTICO GRATUITO AHORA
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-80 font-mont">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 place-self-center">
            ¿POR QUÉ APLICAR NUESTROS <br />
            <span className="text-scooter-600 mx-1 font-bold">
              ESTUDIOS DE CLIMA LABORAL?
            </span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-full flex-col py-6 space-y-4 list-disc">
            <li className="text-scooter-500 text-xl ">
              Contamos con más de 10 años de experiencia en{" "}
              <span className="font-bold">
                investigación de ambientes laborales, consultoría y
                capacitación.
              </span>
            </li>
            <li className="text-scooter-500 text-xl">
              Conocemos{" "}
              <span className="font-bold">herramientas y metodologías</span>{" "}
              para obtener información real sobre el{" "}
              <span className="font-bold">ambiente laboral de tu empresa.</span>
            </li>
            <li className="text-scooter-500 text-xl">
              Hemos observado los{" "}
              <span className="font-bold">
                resultados y beneficios para las personas y las empresas.
              </span>
            </li>
            <li className="text-scooter-500 text-xl">
              Creemos en el impacto de generar{" "}
              <span className="font-bold">ambientes de trabajo dignos</span>{" "}
              para incrementar{" "}
              <span className="font-bold">índices de productividad.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-blue-500 text-justify flex flex-col h-auto w-full font-mont">
          <h3 className="py-24 sm:py-8 text-xl sm:text-4xl text-white font-bold place-self-center mx-auto">
            {" "}
            NUESTRO PROCESO METODOLOGICO
          </h3>
          <div className="div w-full flex flex-col place-content-center md:flex-row">
            <div className="w-full h-80 md:w-1/3 bg-blue-500">
              <Image
                src="/img/clima-laboral/iconos-metodologia/entrevista.png"
                width={200}
                height={200}
                className=" relative object-fill rounded-xl place-self-center m-2  flex"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="text-white mx-auto">ENTREVISTA DIAGNOSTICO</h3>
              <p className="w-4/5 text-white md:ml-4">
                Permítenos identificar la necesidades y expectativas de tu
                empresa.
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 bg-blue-500">
              <Image
                src="/img/clima-laboral/iconos-metodologia/analisis.png"
                width={200}
                height={200}
                className=" relative object-fill rounded-xl object-center m-2"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="font-bold text-white">ANÁLISIS DE CLIMA LABORAL</h3>
              <p className="w-4/5 text-white">
                Analizamos según tus necesidades:{" "}
                <span className="font-bold">
                  satisfacción laboral, engagement empresarial, bienestar,
                  violencia laboral, estrés
                </span>{" "}
                y más.
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 bg-blue-500">
              <Image
                src="/img/clima-laboral/iconos-metodologia/resultados.png"
                width={200}
                height={200}
                className=" relative object-fill rounded-xl object-center m-2"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="text-white">RESULTADOS Y PLAN DE ACCIÓN</h3>
              <p className="w-4/5 text-white">
              Con los resultados te acompañamos en el diseño de acciones y seguimientos para la <span className="font-bold">mejora del clima laboral</span>
              </p>
            </div>
          </div>
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
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5">
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
            QUIERES SABER MÁS <br />
            <span className="text-4xl text-scooter-600 text-center mx-auto pb-4">
              DE CLIMA LABORAL?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular py-8">
          ¿Quieres saber más sobre los temas que impactan al <span className="font-bold">CLIMA ORGANIZACIONAL </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default encuestaClimaLaboral;
