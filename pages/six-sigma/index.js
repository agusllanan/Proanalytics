import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

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
                    className="w-full self-center bg-indigo-500 hover:bg-white text-gray-100 hover:text-indigo-500 border-2 hover:border-indigo-500 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
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
        <div className="relative flex-col px-5 pt-16 mx-auto font-mont">
          <div className="flex flex-nowrap -m-4 first-letter:overflow-y-hidden overflow-x-scroll scrollbar-hide">
            <div className="p-4 md:w-1/3">
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
            <div className="p-4 md:w-1/3">
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
            <div className="p-4 md:w-1/3">
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
                  <div className="flex items-center flex-wrap ">
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
            <div className="p-4 md:w-1/3">
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
                <div className="flex items-center flex-wrap ">
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
          <div className="p-4 md:w-1/3">
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
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle font-mont">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-full">
              <div className="mb-4 divide-y divide-blue-500">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                  ¿QUIERES SABER SI TU EMPRESA
                  <br />{" "}
                  <span className="text-keppel-700">NECESITA SIX SIGMA?</span>
                </h3>
                <p className="text-gray-500 text-justify">
                  En una primera entrevista buscaremos entender tu problema y
                  sugerirte el mejor nivel de entrenamiento. Como ejemplo, aquí
                  mostramos solo algunos de los casos o síntomas más comunes que
                  tu organización puede manifestar.
                </p>
              </div>
              <ul className="w-full py-4 mx-auto list-disc">
                <li className="text-scooter-500 text-lg">
                  ¿Quejas frecuentes de clientes sin atender?
                </li>
                <li className="text-scooter-500 text-lg">
                  <span className="font-bold text-scooter-600">
                    ¿Problemas de calidad
                  </span>{" "}
                  sin análisis de causa raíz o solución?
                </li>
                <li className="text-scooter-500 text-lg">
                  ¿Procesos inestables sin mediciones u objetivos claros?
                </li>
                <li className="text-scooter-500 text-lg">
                  ¿Fuga de recursos y tiempo en la cadena productiva?
                </li>
                <li className="text-scooter-500 text-lg">
                  ¿Está cumpliendo con sus objetivos de costos o inventarios?
                </li>
                <li className="text-scooter-500 text-lg">
                  ¿Retrabajos y/o inspecciones en varias partes del proceso?
                </li>
                <li className="text-scooter-500 text-lg">
                  ¿Problemas de capacidad y cuellos de botella?
                </li>
              </ul>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                  <button
                    type="submit"
                    className="w-full sm:w-1/2 flex justify-center bg-keppel-600  hover:bg-scooter-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
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
        <div className="bg-blue-400 text-center flex sm:w-1/2 w-full">
          <h3 className="h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-white font-bold text-center mx-auto self-center">
            BENEFICIOS <span className="text-scooter-300 mx-1">ESPERADOS</span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 text-justify flex flex-col">
          <p className="text-gray-500 text-xl py-4 justify-center w-4/5 self-center text-justify">
            Contamos con sesiones de Coaching con experimentados{" "}
            <span className="font-bold text-keppel-500">
              Master Black Belts;
            </span>{" "}
            mentores que guiarán a tu equipo por el proceso de certificación
            para lograr los resultados esperados.
          </p>
          <ul className="w-4/5 mx-auto py-4 list-disc">
            <li className="text-scooter-500 text-lg">
              Incremento en el nivel de servicio
            </li>
            <li className="text-scooter-500 text-lg">
              Incremento en la satisfacción del cliente
            </li>
            <li className="text-scooter-500 text-lg">
              Reducción de tiempo ciclo
            </li>
            <li className="text-scooter-500 text-lg">Reducción de costos</li>
            <li className="text-scooter-500 text-lg">
              Incremento de productividad
            </li>
            <li className="text-scooter-500 text-lg">
              Incremento en la eficiencia
            </li>
            <li className="text-scooter-500 text-lg">Reducción en Defectos</li>
            <li className="text-scooter-500 text-lg">
              Incremento en habilidad del proceso
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row font-mont">
        <div className="w-full lg:w-1/2 flex h-32">
          <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4">
            ¿QUIERES SABER MÁS <br />
            <span className="text-4xl text-scooter-600 text-center mx-auto font-bold pb-4">
              DE SIX SIGMA?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex divide-y divide-blue-500 h-32">
          <p className="w-4/5 mx-auto text-regular py-8 text-justify">
            Conoce más sobre la importancia de la certificación, recursos y
            estrategias para la{" "}
            <span className="font-bold text-keppel-500">
              mejora continua de tu organización.{" "}
            </span>{" "}
            ¡Infórmate con nuestro contenido!
          </p>
        </div>
      </div>
    </Layout>
  );
}
