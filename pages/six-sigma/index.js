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
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-full">
              <div className="mb-4">
                <h3 className="font-semibold text-4xl py-4 text-keppel-800">
                  SIX SIGMA
                </h3>
                <p className="text-gray-500 text-lg text-justify">
                  Lean 6 Sigma es un programa de certificación en 4 niveles que
                  le ayudará a potencializar la mejora continua de su
                  organización. Los proyectos bajo la metodología 6 Sigma
                  constan pasos reconocidos internacionalmente con el estándar
                  DMAIC. Ayudamos a las organizaciones a desarrollar un enfoque
                  sistémico y de procesos; Impulsando los resultados y la
                  satisfacción del cliente.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                  <button
                    type="submit"
                    className=" w-full lg:mx-3 flex justify-center bg-transparent border-2 border-keppel-600 text-keppel-600 p-3 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
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
              {/* ---------------------- CARDS SECTIONS ------------------------------ */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <h1 className="font-bold text-4xl flex justify-center pb-10 text-keppel-500">
            NUESTROS SERVICIOS EN SIX SIGMA
          </h1>
          <div className="flex flex-nowrap m-4">
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
                    BASIC - QUICK SMART TRAININGS
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
                    NIVEL 1 - LEAN 6 SIGMA WHITE BELT
                  </h2>
                  <p className="leading-relaxed mb-3 text-left">
                    Primera etapa de entrenamiento y certificación donde se
                    aprenden y practican conceptos y herramientas básicas de
                    Lean Six Sigma. El curso será la base para el entendimiento
                    de la metodología DMAIC.
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
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div className="p-6 h-64 ">
                  <Image
                    src="/img/six-sigma/Certificaciones-03.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h1 className="title-font text-lg font-medium text-keppel-700 mb-3">
                    NIVEL 2 - LEAN 6 SIGMA YELLOW BELT
                  </h1>
                  <p className="leading-relaxed mb-3 text-justify">
                    El participante podrá adquirir conocimientos y usar
                    herramientas comunes de Lean. Los participantes podrán
                    liderar proyectos Lean 6 Sigma para identificar
                    oportunidades, prevenir fallas, e incrementar la eficiencia
                    en los procesos.
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
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div className="p-6 h-64 ">
                  <Image
                    src="/img/six-sigma/Certificaciones-04.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-medium text-keppel-700 mb-3">
                    NIVEL 3 - LEAN 6 SIGMA GREEN BELT
                  </h2>
                  <p className="leading-relaxed mb-3 text-justify">
                    Durante esta etapa en Lean 6 Sigma. El participante se
                    desarrollará como líder de proyectos de mejora continua
                    importantes que requieran un complejo nivel de análisis y
                    precisar toma de decisiones.
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
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div className="p-6 h-64 ">
                  <Image
                    src="/img/six-sigma/Certificaciones-05.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-medium text-keppel-700 mb-3">
                    NIVEL 4 - LEAN 6 SIGMA BLACK BELT
                  </h2>
                  <p className="leading-relaxed mb-3 text-left">
                    Nivel de certificación Lean 6 Sigma recomendado para
                    experimentados Green o Yellow belts. El participante
                    desarrollará habilidades y conocimientos enfocados a liderar
                    proyectos complejos clave y de alto impacto a la
                    organización.
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
      </section>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{ backgroundImage: `url(/img/six-sigma/Diagnóstico.jpg)` }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
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
              <ul className="w-full py-4 mx-auto">
                <li className="text-scooter-500 text-xl">
                  Gestión de la calidad
                </li>
                <li className="text-scooter-500 text-xl">
                  Analisis de procesos
                </li>
                <li className="text-scooter-500 text-xl">
                  Detección de fallas de calidad
                </li>
                <li className="text-scooter-500 text-xl">
                  Identificacipon y correción de retrabajos
                </li>
                <li className="text-scooter-500 text-xl">Ahorros</li>
                <li className="text-scooter-500 text-xl">
                  Problemas administrativos
                </li>
                <li className="text-scooter-500 text-xl">Mejora continua</li>
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
      <div className="flex sm:flex-row flex-col h-full">
        <div className="bg-blue-400 text-center flex sm:w-1/2 w-full">
          <h3 className="h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-white font-bold text-center mx-auto self-center">
            BENEFICIOS <span className="text-scooter-300 mx-1">ESPERADOS</span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 text-justify flex flex-col">
          <p className="text-gray-500 text-xl py-4 justify-center w-4/5 self-center text-justify">
            Contamos con sesiones de Coaching con experimentados Master Black
            Belts; mentores que guiarán a su equipo por el proceso de
            certificación para lograr los resultados esperados. Estos son
            algunos de los resultados que puede lograr su organización:
          </p>
          <ul className="w-4/5 mx-auto py-4">
            <li className="text-scooter-500 text-xl">
              INCREMENTO EN EL NIVEL DE SERVICIO
            </li>
            <li className="text-scooter-500 text-xl">
              INCREMENTO EN LA SATISFAC DEL CLIENTE
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
      <div className="flex sm:flex-row flex-col">
        <div className="bg-blue-500 text-justify flex sm:w-1/2 w-full">
          <h3 className="sm:py-24 text-xl sm:text-4xl text-white font-bold place-self-center mx-auto">
            {" "}
            +1000 CLIENTES CERTIFICADOS
          </h3>
        </div>
        <div className="bg-scooter-500 w-full sm:w-1/2 text-justify flex flex-col">
          <h3 className="sm:py-24 text-xl sm:text-4xl text-white font-bold place-self-center">
            {" "}
            +500 PROYECTOS IMPLEMENTADOS
          </h3>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full lg:w-1/2 flex h-32">
          <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4">
            QUIERES SABER MÁS <br />
            <span className="text-4xl text-scooter-600 text-center mx-auto pb-4">
              DE SIX SIGMA?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex divide-y divide-blue-500 h-32">
          <p className="w-4/5 mx-auto text-regular py-8 text-justify">
          Conoce más sobre la importancia de la certificación, recursos y estrategias para la mejora continua de tu organización.  ¡Infórmate con nuestro contenido!
          </p>
        </div>
      </div>
    </Layout>
  );
}
