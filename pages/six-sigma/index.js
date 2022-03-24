import Layout from "../../components/Layout";
import Link from "next/link";
import SliderSix from "../../components/Slider";

export default function sixSigma() {
  return (
    <Layout>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-top relative border-b-4 border-indigo-500"
        style={{ backgroundImage: `url(/img/six-sigma/portadas/portada-six-sigma.jpg)` }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="h-[700px] md:min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5 md:px-14">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-5/6 font-mont">
              <div className="mb-4">
                <h3 className="text-5xl py-4 text-indigo-500 font-medium font-jost">
                  SIX SIGMA
                </h3>
                <p className="text-gray-500 text-lg text-justify pb-4">
                  <span className="font-bold text-indigo-500">
                    Lean 6 Sigma
                  </span>{" "}
                  es un{" "}
                  <span className="font-bold text-indigo-500">
                    programa de certificación
                  </span>{" "}
                  en 4 niveles que te ayudará a potencializar la{" "}
                  <span className="font-bold text-indigo-500">
                    mejora continua de tu organización.
                  </span>{" "}
                  Los proyectos bajo la{" "}
                  <span className="font-bold text-indigo-500">
                    metodología 6 Sigma
                  </span>{" "}
                  constan de pasos reconocidos internacionalmente con el
                  estándar DMAIC.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                <Link href="contactanos">
                  <button
                    type="submit"
                    className=" w-full lg:mr-3 flex lg:py-5 self-center justify-center bg-transparent border-2 border-indigo-500 text-indigo-500 p-3 hover:bg-indigo-500 hover:text-white rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
                  >
                    ESCRÍBENOS
                  </button>
                </Link>
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
        <h2 className="font-medium text-2xl md:text-5xl font-jost flex justify-center text-indigo-500">
          NUESTROS SERVICIOS EN SIX SIGMA
        </h2>
        <div className="px-5 pt-16 mx-auto font-mont">
          {/* ------- Componente de tarjetas ----------- */}
          <SliderSix />
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
        <div className="h-[1000px] md:min-h-screen flex sm:flex-row lg:justify-start align-middle px-6 md:px-20 font-jost">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align ml-0 lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-full">
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
                    className="btnSix w-full lg:w-2/3"
                  >
                    ENTREVISTA INICIAL GRATUITA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col h-full font-mont">
        <div className="bg-indigo-500 text-center flex w-full lg:w-1/2">
          <h3 className="text-2xl py-5 md:py-8 lg:py-0 sm:text-4xl self-center mx-auto text-white font-medium font-jost">
            BENEFICIOS <span className="text-white font-light">ESPERADOS</span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full lg:w-1/2 text-justify flex flex-col font-mont py-10">
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
            <li className="text-indigo-500 text-md">Reducción de costos</li>
            <li className="text-indigo-500 text-md">
              Incremento de productividad
            </li>
            <li className="text-indigo-500 text-md">
              Incremento en la eficiencia
            </li>
            <li className="text-indigo-500 text-md">Reducción en Defectos</li>
            <li className="text-indigo-500 text-md">
              Incremento en habilidad del proceso
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row font-mont h-auto md:h-[250px]">
        <div className="w-full lg:w-1/2 flex items-center">
          <h3 className="text-4xl text-gray-600 text-center font-light font-jost mx-auto py-24">
            ¿QUIERES SABER MÁS <br />
            <span className="text-4xl text-indigo-500 text-center font-jost mx-auto font-medium">
              DE SIX SIGMA?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex divide-y divide-blue-500 items-center">
          <p className="w-4/5 mx-auto text-gray-500 text-regular py-5 lg:py-0 text-lg text-justify font-mont ">
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
