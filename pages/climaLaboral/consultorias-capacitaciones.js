import Layout from "../../components/Layout";
import Link from "next/link";

export const consultorias = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/portadaClimaLaboral.jpg)`,
        }}
      >
        <div
          className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
          style={{
            backgroundImage: `url(/img/clima-laboral/portadaClimaLaboral.jpg)`,
          }}
        >
          <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
            <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl w-4/5 lg:w-1/3 rounded-t-xl md:rounded-tr-none md:rounded-l-xl self-center">
              <h3 className="w-4/5 mx-auto text-2xl py-12 font-bold text-scooter-500">
                CONSULTORIA Y
                <br />
                <span className="text-curious-blue-500">CAPACITACIÓN</span>
              </h3>
              <p className="w-4/5 mx-auto justify-center text-justify pb-20">
                Un{" "}
                <span className="font-bold text-keppel-500 py-4">
                  ambiente organizacional
                </span>{" "}
                favorable, dignos, libre de{" "}
                <span className="font-bold text-keppel-500">
                  violencia laboral y discriminación
                </span>{" "}
                se refleja en indicadores medibles como engagement, rotación,
                productividad, felicidad en el trabajo y otros.
              </p>
            </div>
            <div className="flex flex-col container bg-curious-blue-500 shadow-2xl lg:w-1/3 lg:rounded-r-xl w-4/5">
              <p className="w-4/5 mx-auto md:ml-4 justify-center text-white text-justify text-lg pt-4 pb-4">
                Conoce más de estos temas y suscríbete a nuestro newsletter en
                donde te compartiremos temas de tu interés, sugerencias,
                experiencias y más.
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
              {/* <textarea className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out">Escríbenos tus inquietudes y horario de contacto</textarea> */}
              <button className="ml-4 text-white font-bold bg-keppel-500 border-0 py-2 mb-4 mt-4 focus:outline-none hover:bg-keppel-600 rounded w-4/5">
                SUSCRÍBETE A NUESTRO NEWSLETTER
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className=" mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold place-self-center">
            ¿POR QUÉ CONOCER Y ATENDER <br /> LOS TEMAS QUE IMPACTAN AL <br />{" "}
            <span className="font-bold text-keppel-500">
              CLIMA ORGANIZACIONAL?
            </span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-full flex-col py-6 list-disc w-4/5">
            <li className="text-scooter-500 text-xl ">
              La ciencia comprueba cómo las personas que son felices en su
              trabajo mejoran su productividad.
            </li>
            <li className="text-scooter-500 text-xl">
              Impacta positivamente en tus{" "}
              <span className="font-bold">índices de rotación y retención</span>
            </li>
            <li className="text-scooter-500 text-xl">
              Trabaja por el{" "}
              <span className="font-bold">engagement y la fidelización</span> de
              las personas en tu empresa.
            </li>
            <li className="text-scooter-500 text-xl">
              Convierte tu empresa en una{" "}
              <span className="font-bold">marca empleadora.</span>
            </li>
            <li className="text-scooter-500 text-xl">
              Cumple con las <span className="font-bold">Normas en México</span>{" "}
              que buscan promover estos{" "}
              <span className="font-bold">ambientes laborales.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className=" mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold place-self-center">
            CAPACITACIONES Y ASESORÍAS
            <p className="text-base mx-4 text-keppel-500">
              Se requiere ENTENDER para ATENDER, por ello sabemos lo importante
              que es personalizar nuestros servicios a tus necesidades. Te
              compartimos los temas en los que nuestro equipo puede acompañarte
              a través de capacitaciones y asesorías:
            </p>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-4/5 flex-col py-6 list-disc">
            <li className="text-scooter-500 text-xl ">
            <span className="font-bold">Clima Laboral</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Bienestar en el trabajo</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Engagement</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Marcas empleadoras</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Organizaciones Positivas.</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Endomarketing</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Violencia laboral, Igualdad Laboral, Discriminación</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Factores de Riesgo Psicosocial, Entornos Favorables de Trabajo</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">NORMA Oficial Mexicana NOM-035-STPS-2018, Factores de riesgo psicosocial en el trabajo-Identificación, análisis y prevención.</span>
            </li>
            <li className="text-scooter-500 text-xl">
            <span className="font-bold">Planes de trabajo y seguimiento</span>
            </li>
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

export default consultorias;
