import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
// import Slides from "../../components/Slides";

export default function sixSigma() {
  return (
    <Layout>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-top relative border-b-4 border-indigo-500"
        style={{ backgroundImage: `url(/img/six-sigma/portada-six-sigma.jpg)` }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5 md:px-14">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-5/6 font-mont">
              <div className="mb-4">
                <h3 className="text-5xl py-4 text-indigo-500 font-medium font-jost">
                  SIX SIGMA
                </h3>
                <p className="text-gray-500 text-lg text-justify pb-4">
                  <span className="font-bold text-curious-blue-500">
                    Lean 6 Sigma
                  </span>{" "}
                  es un{" "}
                  <span className="font-bold text-curious-blue-500">
                    programa de certificación
                  </span>{" "}
                  en 4 niveles que te ayudará a potencializar la{" "}
                  <span className="font-bold text-curious-blue-500">
                    mejora continua de tu organización.
                  </span>{" "}
                  Los proyectos bajo la{" "}
                  <span className="font-bold text-curious-blue-500">
                    metodología 6 Sigma
                  </span>{" "}
                  constan de pasos reconocidos internacionalmente con el
                  estándar DMAIC.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                  <button
                    type="submit"
                    className=" w-full lg:mr-3 flex lg:py-5 self-center justify-center bg-transparent border-2 border-curious-blue-500 text-curious-blue-500 p-3 hover:bg-curious-blue-500 hover:text-white rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
                  >
                    ESCRÍBENOS
                  </button>
                  <button
                    type="submit"
                    className="btnSix"
                  >
                    ENTREVISTA INICIAL GRATUITA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------- Aqui comienza la seccion de muestra de las cards -------------------------------------- */}
      <div className="px-5 py-16 mx-auto">
        <h1 className="font-medium text-5xl font-jost flex justify-center pb-10 text-indigo-500">
          NUESTROS SERVICIOS EN SIX SIGMA
        </h1>
        <div className="flex-row px-5 pt-16 mx-auto font-mont">

          {/* ------- Componente de tarjetas ----------- */}
          {/* <Slides /> */}
          <div className="flex -m-4 overflow-y-hidden overflow-x-scroll scrollbar-hide">
            <div className="p-4 max-w-[300px] min-w-[290px] max-h-[750px] flex-shrink-0">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg ">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones_Mesa de trabajo 1.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center "
                    alt="Aqui va el alt de la imagen"
                  />
                  <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                    BASIC -{" "}
                    <span className="font-bold text-gray-900">
                      QUICK SMART TRAININGS
                    </span>
                  </h3>
                  <p className="leading-relaxed mb-3 text-justify">
                    Con la asesoría de nuestro Coach, podrás elegir entre uno o
                    varios temas de nuestro catálogo de servicios ajustándose a
                    un tiempo y presupuesto objetivo.
                  </p>
                  <div className="flex items-center flex-nowrap">
                    <Link href="/six-sigma/basic-quick-smart-trainings">
                      <a>
                        <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-32">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 max-w-[300px] min-w-[290px] max-h-[750px] flex-shrink-0">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones-02.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center "
                    alt="Aqui va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-medium text-gray-900 my-3">
                    NIVEL 1 -{" "}
                    <span className="font-bold text-gray-900">
                      LEAN 6 SIGMA WHITE BELT
                    </span>
                  </h2>
                  <p className="leading-relaxed mb-3 text-left">
                    Primera etapa de entrenamiento y certificación donde se
                    aprenden y practican conceptos y herramientas básicas de{" "}
                    <span className="font-bold text-indigo-500">
                      Lean Six Sigma.
                    </span>{" "}
                    El curso será la base para el entendimiento de la
                    metodología DMAIC.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/six-sigma/nivel1-lean-6sigma-white-belt">
                      <a>
                        <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-14">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 max-w-[300px] min-w-[290px] max-h-[750px] flex-shrink-0">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones-03.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h1 className="title-font text-lg font-medium text-gray-900 my-3">
                    NIVEL 2 -{" "}
                    <span className="font-bold text-gray-900">
                      LEAN 6 SIGMA YELLOW BELT
                    </span>
                  </h1>
                  <p className="leading-relaxed mb-3 text-justify">
                    Durante el proceso de certificación podrás adquirir
                    conocimientos y usar{" "}
                    <span className="font-bold text-indigo-500">
                      herramientas comunes de Lean
                    </span>
                    . Al finalizar, podrás liderar proyectos{" "}
                    <span className="font-bold text-indigo-500">
                      Lean 6 Sigma
                    </span>{" "}
                    para identificar oportunidades, prevenir fallas, usar
                    herramientas de resolución de problemas, e incrementar la
                    eficiencia en los procesos.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/six-sigma/nivel2-lean-6sigma-yellow-belt">
                      <a>
                        <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 max-w-[300px] min-w-[290px] max-h-[750px] flex-shrink-0">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/six-sigma/Certificaciones-04.png"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center"
                  alt="Aqui va el alt de la imagen"
                />
                <h2 className="title-font text-lg font-medium text-gray-900 my-3">
                  NIVEL 3 -{" "}
                  <span className="font-bold text-gray-900">
                    LEAN 6 SIGMA GREEN BELT
                  </span>
                </h2>
                <p className="leading-relaxed mb-3 text-justify">
                  Durante esta etapa en{" "}
                  <span className="font-bold text-indigo-500">
                    Lean 6 Sigma.
                  </span>{" "}
                  Podrás desarrollarte como líder de proyectos de mejora
                  continua que requieran un complejo nivel de análisis y toma de
                  decisiones.
                </p>
                <div className="flex items-center flex-nowrap ">
                  <Link href="/six-sigma/nivel3-lean-6sigma-green-belt">
                    <a>
                      <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-18">
                        Ver más
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-[300px] min-w-[290px] max-h-[750px] flex-shrink-0">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/six-sigma/Certificaciones-05.png"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center"
                  alt="Aqui va el alt de la imagen"
                />
                <h2 className="title-font text-lg font-medium text-gray-900 my-3">
                  NIVEL 4 -{" "}
                  <span className="font-bold text-gray-900">
                    LEAN 6 SIGMA BLACK BELT
                  </span>
                </h2>
                <p className="leading-relaxed mb-3 text-left">
                  Nivel de{" "}
                  <span className="font-bold text-indigo-500">
                    certificación Lean 6 Sigma
                  </span>{" "}
                  recomendado para experimentados{" "}
                  <span className="font-bold text-indigo-500">
                    Green o Yellow belts.
                  </span>{" "}
                  Como participante, podrás desarrollar habilidades y
                  conocimientos enfocados a liderar proyectos complejos clave y
                  de alto impacto a la organización.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/six-sigma/nivel4-lean-6sigma-black-belt">
                    <a>
                      <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-6">
                        Ver más
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="container lg:pl-10 px-5 pb-16 mx-auto font-mont">
        <div className="flex flex-wrap -m-4">
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{ backgroundImage: `url(/img/six-sigma/Diagnóstico.jpg)` }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle px-20 font-jost">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-full">
              <div className="mb-4 divide-y-2 divide-curious-blue-500">
                <h3 className="font-light text-3xl pb-4 text-curious-blue-500">
                  ¿QUIERES SABER SI TU EMPRESA
                  <br />{" "}
                  <span className="text-indigo-500 font-medium">NECESITA SIX SIGMA?</span>
                </h3>
                <p className="text-gray-500 text-justify text-lg pt-4 font-mont">
                  En una primera entrevista buscaremos entender tu problema y
                  sugerirte el mejor nivel de entrenamiento. Como ejemplo, aquí
                  mostramos solo algunos de los casos o síntomas más comunes que
                  tu organización puede manifestar.
                </p>
              </div>
              <ul className="w-full py-4 mx-auto ml-5 list-disc font-mont">
                <li className="text-indigo-500 text-md">
                  ¿Quejas frecuentes de clientes sin atender?
                </li>
                <li className="text-indigo-500 text-md">
                  <span className="font-bold text-indigo-500">
                    ¿Problemas de calidad
                  </span>{" "}
                  sin análisis de causa raíz o solución?
                </li>
                <li className="text-indigo-500 text-md">
                  ¿Procesos inestables sin mediciones u objetivos claros?
                </li>
                <li className="text-indigo-500 text-md">
                  ¿Fuga de recursos y tiempo en la cadena productiva?
                </li>
                <li className="text-indigo-500 text-md">
                  ¿Está cumpliendo con sus objetivos de costos o inventarios?
                </li>
                <li className="text-indigo-500 text-md">
                  ¿Retrabajos y/o inspecciones en varias partes del proceso?
                </li>
                <li className="text-indigo-500 text-md">
                  ¿Problemas de capacidad y cuellos de botella?
                </li>
              </ul>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row pt-3">
                  <button
                    type="submit"
                    className="btnSix w-2/3"
                  >
                    ENTREVISTA INICIAL GRATUITA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-full font-mont">
        <div className="bg-indigo-500 text-center flex w-full md:w-1/2">
          <h3 className="text-xl sm:text-4xl self-center mx-auto text-white font-medium font-jost">
            BENEFICIOS <span className="text-white font-light">ESPERADOS</span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 text-justify flex flex-col font-mont">
          <p className="text-gray-500 text-lg py-4 justify-center w-4/5 self-center text-justify">
            Contamos con sesiones de Coaching con experimentados{" "}
            <span className="font-bold text-curious-blue-500">
              Master Black Belts;
            </span>{" "}
            mentores que guiarán a tu equipo por el proceso de certificación
            para lograr los resultados esperados.
          </p>
          <ul className="w-4/5 py-4 ml-10 self-center list-disc font-mont">
            <li className="text-indigo-500 text-md">
              Incremento en el nivel de servicio
            </li>
            <li className="text-indigo-500 text-md">
              Incremento en la satisfacción del cliente
            </li>
            <li className="text-indigo-500 text-md">
              Reducción de tiempo ciclo
            </li>
            <li className="text-indigo-500 text-lg">Reducción de costos</li>
            <li className="text-indigo-500 text-md">
              Incremento de productividad
            </li>
            <li className="text-indigo-500 text-md">
              Incremento en la eficiencia
            </li>
            <li className="text-indigo-500 text-lg">Reducción en Defectos</li>
            <li className="text-indigo-500 text-md">
              Incremento en habilidad del proceso
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row font-mont h-40">
        <div className="w-full lg:w-1/2 flex items-center">
          <h3 className="text-4xl text-gray-600 text-center font-light font-jost mx-auto pt-4">
            ¿QUIERES SABER MÁS <br />
            <span className="text-4xl text-indigo-500 text-center font-jost mx-auto font-medium pb-4">
              DE SIX SIGMA?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex divide-y divide-blue-500 items-center">
          <p className="w-4/5 mx-auto text-gray-500 text-regular text-lg text-justify font-mont ">
            Conoce más sobre la importancia de la certificación, recursos y
            estrategias para la{" "}
            <span className="font-bold text-curious-blue-500">
              mejora continua de tu organización.{" "}
            </span>{" "}
            ¡Infórmate con nuestro contenido!
          </p>
        </div>
      </div>
    </Layout>
  );
}
