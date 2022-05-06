import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function climaLaboral() {
  return (
    <Layout
    title="Clima Laboral | Proanalytics"
    description="Construye una empresa más eficiente analizando el clima laboral y las posibles causas de rotación y trabajando en estrategias para mantener un ambiente de trabajo saludable. ¡Contáctanos!"
    >
      <div
        className="bg-no-repeat bg-cover relative border-b-4 border-bright-turquoise-500"
        style={{
          backgroundImage: `url(/img/clima-laboral/portada-clima-laboral.jpg)`,
        }}
      >
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle font-mont">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5">
            <div className="my-2 md:my-0 w-4/5 md:w-4/5 sm:mx-auto-align p-8 bg-white shadow-xl rounded-2xl h-auto">
              <div className="mb-4">
                <h3 className="text-3xl md:text-5xl py-4 font-jost font-medium text-bright-turquoise-500">
                  CLIMA
                  {" "}
                  <span className="text-curious-blue-500 font-jost font-light">
                    LABORAL
                  </span>
                </h3>
                <p className="text-gray-500 text-justify text-base md:text-lg py-4">
                  Conoce las posibles causas de{" "}
                  <span className="font-bold text-curious-blue-500">
                    rotación en tu empresa
                  </span>{" "}
                  y trabaja en estrategias de{" "}
                  <span className="font-bold text-curious-blue-500">
                    retención de personal. <br />
                  </span>{" "}
                  <br />
                  El "engagement",{" "}
                  <span className="font-bold text-curious-blue-500">
                    compromiso organizacional
                  </span>{" "}
                  y los mejores indicadores de productividad de los
                  colaboradores son el resultado de conocer, medir y atender con
                  ESTRATEGIA. Proanalytics te acompaña con{" "}
                  <span className="font-bold text-curious-blue-500">
                    servicios de consultoría y capacitación, estudios y
                    encuestas de clima laboral
                  </span>
                  , análisis de factores de riesgo psicosocial y más.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                  <Link href="/contactanos">
                    <button
                      type="submit"
                      className=" w-full lg:mx-3 flex justify-center bg-transparent border-2 border-curious-blue-500 text-curious-blue-500 p-3 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250 hover:bg-curious-blue-500 hover:text-white"
                    >
                      ESCRÍBENOS
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-bright-turquoise-500  hover:bg-curious-blue-500 hover:text-bright-turquoise-500 text-curious-blue-500 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
                  >
                    HAZ UNA CITA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font font-mont">
        <div className="container px-5 py-16 mx-auto">
          <h2 className="font-medium font-jost text-3xl md:text-5xl flex flex-col md:flex-row justify-center pb-10 text-curious-blue-500">
            {" "}
            NUESTROS SERVICIOS EN {""}
            <span className="font-semibold ml-0 md:ml-2">CLIMA LABORAL</span>
          </h2>
          <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/clima-laboral/portada-diagnostico.jpg"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-right"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-bold pt-4 text-gray-900 mb-3">
                    Estudios de Clima Laboral
                  </h2>
                  <p className="leading-relaxed mb-3">
                    Analiza a través de encuestas, entrevistas, sesiones de
                    focus group y otras técnicas el nivel de{" "}
                    <span className="font-bold text-curious-blue-500">
                      satisfacción laboral
                    </span>{" "}
                    de tus colaboradores.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/climaLaboral/estudios-clima-laboral">
                      <a>
                        <button className="lg:mt-26 inline-flex text-curious-blue-500 font-bold border-2 border-curious-blue-500 py-2 px-6 focus:outline-none hover:bg-curious-blue-500 hover:text-white rounded text-lg transition ease-in duration-250">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/clima-laboral/portada-nom035.jpg"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-right"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-bold pt-4 text-gray-900 mb-3">
                    Asesorías en NOM-035-STPS-2018 y NMX-R-025-SCFI-2015
                  </h2>
                  <p className="leading-relaxed mb-3">
                    Identifica, prevé y atiende factores de riesgo psicosocial y
                    trabaja en{" "}
                    <span className="font-bold text-curious-blue-500">
                      ambientes laborales favorables
                    </span>{" "}
                    acorde a la{" "}
                    <span className="font-bold text-curious-blue-500">
                      Norma Mexicana 035.
                    </span>{" "}
                    <br />
                    Asesórate y certifícate como Centro de Trabajo con prácticas
                    de{" "}
                    <span className="font-bold text-curious-blue-500">
                      Igualdad Laboral y no Discriminación
                    </span>{" "}
                    acorde a la{" "}
                    <span className="font-bold text-curious-blue-500">
                      Norma Mexicana 025.
                    </span>
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/climaLaboral/auditorias-nom-035">
                      <a>
                        <button className="inline-flex text-curious-blue-500 font-bold border-2 border-curious-blue-500 py-2 px-6 focus:outline-none hover:bg-curious-blue-500 hover:text-white rounded text-lg transition ease-in duration-250">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/clima-laboral/portada-consultoria.jpg"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-right"
                    alt="Aqu va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-bold pt-4 text-gray-900 mb-3">
                    Consultoría y capacitación
                  </h2>
                  <p className="leading-relaxed mb-3">
                    Asesórate y{" "}
                    <span className="font-bold text-curious-blue-500">
                      capacita a tus colaboradores
                    </span>{" "}
                    en temas relacionados con{" "}
                    <span className="font-bold text-curious-blue-500">
                      ambientes laborales
                    </span>{" "}
                    favorables, libres de violencia, planes de acción,{" "}
                    <span className="font-bold text-curious-blue-500">
                      bienestar, engagement laboral, igualdad laboral
                    </span>{" "}
                    y más.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/climaLaboral/consultorias-capacitaciones">
                      <button className="mt-20 inline-flex text-curious-blue-500 font-bold border-2 border-curious-blue-500 py-2 px-6 focus:outline-none hover:bg-curious-blue-500 hover:text-white rounded text-lg transition ease-in duration-250">
                        Ver más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/footer-clima.jpg)`,
        }}
      >
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center md:w-1/2 z-10">
            <div className="my-2 md:my-0 w-4/5 md:w-full md:ml-4 sm:mx-auto-align p-12 bg-white shadow-xl rounded-2xl h-auto">
              <div className="mb-4 divide-y divide-bright-turquoise-500 w-full">
                <h3 className="font-light font-jost text-3xl py-4 text-gray-500">
                  ¿QUIERES CONOCER LAS CAUSAS DE
                  <br />{" "}
                  <span className="text-bright-turquoise-500 font-medium">
                    ROTACIÓN DE PERSONAL EN TU EMPRESA?
                  </span>
                </h3>
                <p className="text-gray-500 py-4 text-xl">
                  Conoce cuáles son los{" "}
                  <span className="font-bold text-curious-blue-500">
                    factores que generan insatisfacción en tus colaboradores y
                    estrategias para trabajar
                  </span>{" "}
                  en la{" "}
                  <span className="font-bold text-curious-blue-500">
                    retención y engagement de personal.
                  </span>
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/contactanos">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center border-2 border-curious-blue-500 text-curious-blue-500 hover:bg-curious-blue-500 hover:text-white p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
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
      <div className="flex sm:flex-row flex-col h-auto  md:h-[400px]">
        <div className="bg-twilight-blue-500 text-center flex sm:w-1/2 w-full lg:px-28 px-14 font-jost">
          <h3 className=" flex flex-col justify-center items-center h-auto md:h-full mx-auto text-3xl md:text-4xl text-curious-blue-500 font-light">
            ¿POR QUÉ ES IMPORTANTE ANALIZAR{""} <br />
            <span className="text-bright-turquoise-500 font-medium">EL CLIMA LABORAL?</span>
          </h3>
        </div>
        <div className="bg-white w-full md:w-1/2 flex justify-center items-center  font-mont py-4 md:py-0">
          <ul className="w-full md:w-4/5 mx-auto list-disc space-y-3 px-14">
            <li className="text-gray-500 md:text-base lg:text-xl ">
              Identifica las{" "}
              <span className="font-bold">ventajas competitivas</span> y las
              áreas de oportunidad
            </li>
            <li className="text-gray-500 md:text-base lg:text-xl">
              Trabaja en necesidades reales y prioritarias.
            </li>
            <li className="text-gray-500 md:text-base lg:text-xl">
              Impacta en KPIs:{" "}
              <span className="font-bold">
                rotación, retención, engagement laboral, attrition, orgullo y
                sentido de pertenencia.
              </span>
            </li>
            <li className="text-gray-500 md:text-base lg:text-xl">
              Atiende temas normativos en México relacionados con el{" "}
              <span className="font-bold">
                estrés laboral, riesgos psicosociales, violencia laboral,
              </span>{" "}
              entre otros.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="bg-curious-blue-500 text-center flex sm:w-1/2 w-full">
          <h3 className="py-12 md:py-24 text-xl sm:text-4xl text-white font-medium font-jost place-self-center justify-center mx-auto">
            {" "}
            +1000 CLIENTES CERTIFICADOS
          </h3>
        </div>
        <div className="bg-bright-turquoise-500 w-full sm:w-1/2 text-center flex flex-col">
          <h3 className="py-12 md:py-24 text-xl sm:text-4xl text-white font-medium font-jost justify-center place-self-center">
            {" "}
            +500 PROYECTOS IMPLEMENTADOS
          </h3>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="text-center h-44 md:h-72 flex sm:w-1/2 w-full ">
          <h3 className="flex py-24 md:py-8 text-xl sm:text-4xl text-scooter-500 font-bold mx-auto items-center">
            ¿QUIERES SABER MÁS DE CLIMA LABORAL?
          </h3>
        </div>
        <div className="w-full sm:w-1/2 md:h-72 h-[250px] flex font-mont py-4">
        <div className="flex">
          <p className="w-4/5 mx-auto text-lg py-8 text-gray-500 items-center">
            Mejora el{" "}
            <span className="font-bold text-gray-500 inline-flex text-xl">
              CLIMA LABORAL
            </span>{" "}
            de tu empresa con los recursos y estrategias que tenemos para ti.{" "}
            <br />
            ¡Impulsa a tus colaboradores todos los días con nuestro contenido!
          </p>
        </div>
        </div>
      </div>
    </Layout>
  );
}
