import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function sixSigma() {
  return (
    <Layout>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{ backgroundImage: `url(/img/six-sigma/Portada-Six-Sigma.jpg)` }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-full font-mont">
              <div className="mb-4">
                <h3 className="text-4xl py-4 text-keppel-500 font-bold">
                  SIX SIGMA
                </h3>
                <p className="text-gray-500 text-lg text-justify">
                  <span className="font-bold text-keppel-500">
                    Lean 6 Sigma
                  </span>{" "}
                  es un{" "}
                  <span className="font-bold text-keppel-500">
                    programa de certificación
                  </span>{" "}
                  en 4 niveles que le ayudará a potencializar la{" "}
                  <span className="font-bold text-keppel-500">
                    mejora continua de su organización.
                  </span>{" "}
                  Los proyectos bajo la{" "}
                  <span className="font-bold text-keppel-500">
                    metodología 6 Sigma
                  </span>{" "}
                  constan pasos reconocidos internacionalmente con el estándar
                  DMAIC.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                  <button
                    type="submit"
                    className=" w-full lg:mr-3 flex justify-center bg-transparent border-2 border-keppel-600 text-keppel-600 p-3 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    ESCRÍBENOS
                  </button>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-scooter-500  hover:bg-keppel-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
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
        <h1 className="font-bold text-4xl flex justify-center pb-10 text-keppel-500">
          NUESTROS SERVICIOS EN SIX SIGMA
        </h1>
        <div className="container px-5 pt-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones_Mesa de trabajo 1.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center "
                    alt="Aqui va el alt de la imagen"
                  />
                  <h3 className="title-font text-lg font-medium text-keppel-700 mb-3">
                    BASIC -{" "}
                    <span className="font-bold text-keppel-500">
                      QUICK SMART TRAININGS
                    </span>
                  </h3>
                  <p className="leading-relaxed mb-3 text-justify">
                    Con la asesoría de nuestro Coach, usted podrá elegir entre
                    uno o varios temas de nuestro catálogo de servicios
                    ajustándose a un tiempo y presupuesto objetivo.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/six-sigma/basic-quick-smart-trainings">
                      <a>
                        <button className="inline-flex text-white font-bold bg-keppel-600 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-400 rounded text-lg">
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
                  <h2 className="title-font text-lg font-medium text-keppel-700 mb-3">
                    NIVEL 1 -{" "}
                    <span className="font-bold text-keppel-500">
                      LEAN 6 SIGMA WHITE BELT
                    </span>
                  </h2>
                  <p className="leading-relaxed mb-3 text-left">
                    Primera etapa de entrenamiento y certificación donde se
                    aprenden y practican conceptos y herramientas básicas de{" "}
                    <span className="font-bold text-keppel-500">
                      Lean Six Sigma.
                    </span>{" "}
                    El curso será la base para el entendimiento de la
                    metodología DMAIC.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/six-sigma/nivel1-lean-6sigma-white-belt">
                      <a>
                        <button className="inline-flex text-white font-bold bg-keppel-600 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-400 rounded text-lg">
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
                  <h1 className="title-font text-lg font-medium text-keppel-700 mb-3">
                    NIVEL 2 -{" "}
                    <span className="font-bold text-keppel-500">
                      LEAN 6 SIGMA YELLOW BELT
                    </span>
                  </h1>
                  <p className="leading-relaxed mb-3 text-justify">
                    Durante el proceso de certificación el participante podrá
                    adquirir conocimientos y usar{" "}
                    <span className="font-bold text-keppel-500">
                      herramientas comunes de Lean
                    </span>
                    . Los participantes podrán liderar proyectos{" "}
                    <span className="font-bold text-keppel-500">
                      Lean 6 Sigma
                    </span>{" "}
                    para identificar oportunidades, prevenir fallas, usar
                    herramientas de resolución de problemas, e incrementar la
                    eficiencia en los procesos.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/six-sigma/nivel2-lean-6sigma-yellow-belt">
                      <a>
                        <button className="inline-flex text-white font-bold bg-keppel-600 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-400 rounded text-lg">
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
      <div className="container lg:pl-10 px-5 pb-16 mx-auto">
        <div className="flex flex-wrap -m-4">
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
                <h2 className="title-font text-lg font-medium text-keppel-700 mb-3">
                  NIVEL 3 -{" "}
                  <span className="font-bold text-keppel-500">
                    LEAN 6 SIGMA GREEN BELT
                  </span>
                </h2>
                <p className="leading-relaxed mb-3 text-justify">
                  Durante esta etapa en{" "}
                  <span className="font-bold text-keppel-500">
                    Lean 6 Sigma.
                  </span>{" "}
                  El participante se desarrollará como líder de proyectos de
                  mejora continua importantes que requieran un complejo nivel de
                  análisis y precisar toma de decisiones.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/six-sigma/nivel3-lean-6sigma-green-belt">
                    <a>
                      <button className="inline-flex text-white font-bold bg-keppel-600 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-400 rounded text-lg">
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
                <h2 className="title-font text-lg font-medium text-keppel-700 mb-3">
                  NIVEL 4 -{" "}
                  <span className="font-bold text-keppel-500">
                    LEAN 6 SIGMA BLACK BELT
                  </span>
                </h2>
                <p className="leading-relaxed mb-3 text-left">
                  Nivel de{" "}
                  <span className="font-bold text-keppel-500">
                    certificación Lean 6 Sigma
                  </span>{" "}
                  recomendado para experimentados{" "}
                  <span className="font-bold text-keppel-500">
                    Green o Yellow belts.
                  </span>{" "}
                  El participante desarrollará habilidades y conocimientos
                  enfocados a liderar proyectos complejos clave y de alto
                  impacto a la organización.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/six-sigma/nivel4-lean-6sigma-black-belt">
                    <a>
                      <button className="inline-flex text-white font-bold bg-keppel-600 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-400 rounded text-lg">
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
                  En una primera entrevista buscaremos entender su problema y
                  sugerirle el mejor nivel de entrenamiento. Como ejemplo, aquí
                  mostramos solo algunos de los casos o síntomas más comunes que
                  su organización puede manifestar.
                </p>
              </div>
              <ul className="w-full py-4 mx-auto list-disc">
                <li className="text-scooter-500 text-xl">
                  ¿Quejas frecuentes de clientes sin atender?
                </li>
                <li className="text-scooter-500 text-xl">
                  ¿Tiene problemas de calidad sin análisis de causa raíz o
                  solución?
                </li>
                <li className="text-scooter-500 text-xl">
                  ¿Tiene procesos inestables sin mediciones u objetivos claros?
                </li>
                <li className="text-scooter-500 text-xl">
                  ¿Fuga de recursos y tiempo en la cadena productiva?
                </li>
                <li className="text-scooter-500 text-xl">
                  ¿Está cumpliendo con sus objetivos de costos o inventarios?
                </li>
                <li className="text-scooter-500 text-xl">
                  ¿Retrabajos y/o inspecciones en varias partes del proceso?
                </li>
                <li className="text-scooter-500 text-xl">
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
            mentores que guiarán a su equipo por el proceso de certificación
            para lograr los resultados esperados.
          </p>
          <ul className="w-4/5 mx-auto py-4 list-disc">
            <li className="text-scooter-500 text-xl">
              INCREMENTO EN EL NIVEL DE SERVICIO
            </li>
            <li className="text-scooter-500 text-xl">
              INCREMENTO EN LA SATISFACCIÓN DEL CLIENTE
            </li>
            <li className="text-scooter-500 text-xl">
              REDUCCIÓN DE TIEMPO CICLO
            </li>
            <li className="text-scooter-500 text-xl">REDUCCIÓN DE COSTOS</li>
            <li className="text-scooter-500 text-xl">
              INCREMENTO DE PRODUCTIVIDAD
            </li>
            <li className="text-scooter-500 text-xl">
              INCREMENTO EN LA EFICIENCIA
            </li>
            <li className="text-scooter-500 text-xl">REDUCCIÓN EN DEFECTOS</li>
            <li className="text-scooter-500 text-xl">
              INCREMENTO EN LA HABILIDAD DEL PROCESO
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
