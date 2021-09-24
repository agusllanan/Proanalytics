import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function climaLaboral() {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{ backgroundImage: `url(/img/clima-laboral/portadaClimaLaboral.jpg)`}}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4">
                <h3 className="font-semibold text-4xl py-4 text-scooter-400">
                  CLIMA
                  <br /> <span className="text-keppel-700">LABORAL</span>   
                </h3>
                <p className="text-gray-500 text-justify">
                Conoce las posibles causas de rotación en tu empresa y trabaja en estrategias de retención de personal.
                El "engagement", compromiso organizacional y los mejores indicadores de productividad de los colaboradores son el resultado de conocer, medir y atender con ESTRATEGIA.
                Proanalytics te acompaña con servicios de consultoría y capacitación, estudios y encuestas de clima laboral, análisis de factores de riesgo psicosocial y más.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row">
                  <Link href="/contactanos">
                    <button
                    type="submit"
                    className=" w-full lg:mx-3 flex justify-center bg-transparent border-2 border-keppel-600 text-keppel-600 p-3 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    ESCRIBENOS
                  </button>
                  </Link>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-scooter-500  hover:bg-keppel-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    HAZ UNA CITA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="font-bold text-4xl flex justify-center pb-10 text-keppel-500">
          {" "}
          NUESTROS SERVICIOS EN CLIMA LABORAL
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/clima-laboral/Servicio Encuesta.jpeg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center "
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Estudios de Clima Laboral
                </h1>
                <p className="leading-relaxed mb-3">
                Analiza a través de encuestas, entrevistas, sesiones de focus group y otras técnicas el nivel de satisfacción laboral de tus colaboradores.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/climaLaboral/estudios-clima-laboral">
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
                  src="/img/clima-laboral/Servicio - Auditoria.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center "
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Auditorias NOM 035 y NOM 025
                </h1>
                <p className="leading-relaxed mb-3">
                Identifica, prevé y atiende factores de riesgo psicosocial y trabaja en ambientes laborales favorables acorde a la Norma Mexicana 035.
                Asesórate y certifícate como Centro de Trabajo con prácticas de Igualdad Laboral y no Discriminación acorde a la Norma Mexicana 025.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href="/climaLaboral/auditorias-nom-035">
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
                  src="/img/clima-laboral/Servicio - NOM035.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center"
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Consultoría y capacitación
                </h1>
                <p className="leading-relaxed mb-3">
                Asesórate y capacita a tus colaboradores en temas relacionados con ambientes laborales favorables, libres de violencia, planes de acción, bienestar, engagement laboral, igualdad laboral y más.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/climaLaboral/consultorias-capacitaciones">
                  <button className="inline-flex text-white font-bold bg-keppel-600 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-keppel-400">
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
        style={{ backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`}}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-blue-500">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                  ¿QUIERES SABER CÓMO ESTÁ
                  <br /> <span className="text-keppel-700">TU EMPRESA EN CLIMA LABORAL?</span>   
                </h3>
                <p className="text-gray-500">
                Conoce cuáles son los factores que generan insatisfacción en tus colaboradores y estrategias para trabajar en la retención y engagement de personal.
                </p>
              </div>    
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico">
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
    <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-blue-400 text-center flex sm:w-1/2 w-full">
            <h3 className="h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-white font-bold place-self-center">
            ¿POR QUÉ ES IMPORTANTE <span className="text-scooter-300 mx-1">EL CLIMA LABORAL?</span>
            </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 text-justify flex flex-col">
            <p className="text-gray-500 md:text-base lg:text-xl py-4 justify-center w-4/5 self-center">
            Una correcta implementación de Clima laboral puede brindar soluciones en áreas cómo:
            </p>
            <ul className="w-4/5 mx-auto">
                <li className="text-scooter-500 md:text-base lg:text-xl">Gestión de la calidad</li>
                <li className="text-scooter-500 md:text-base lg:text-xl">Analisis de procesos</li>
                <li className="text-scooter-500 md:text-base lg:text-xl">Detección de fallas de calidad</li>
                <li className="text-scooter-500 md:text-base lg:text-xl">Identificacipon y correción de retrabajos</li>
                <li className="text-scooter-500 md:text-base lg:text-xl">Ahorros</li>
                <li className="text-scooter-500 md:text-base lg:text-xl">Problemas administrativos</li>
                <li className="text-scooter-500 md:text-base lg:text-xl">Mejora continua</li>
            </ul>
        </div>
    </div>
    <div className="flex sm:flex-row flex-col">
        <div className="bg-blue-500 text-center flex sm:w-1/2 w-full">
            <h3 className="sm:py-24 text-xl sm:text-4xl text-white font-bold place-self-center justify-center"> +1000 CLIENTES CERTIFICADOS
            </h3>
        </div>
        <div className="bg-scooter-500 w-full sm:w-1/2 text-center flex flex-col">
        <h3 className="sm:py-24 text-xl sm:text-4xl text-white font-bold justify-center place-self-center"> +500 PROYECTOS IMPLEMENTADOS
            </h3>
        </div>
    </div>
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex">
        <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4">
          QUIERES SABER MAS <br/> 
          <span className="text-4xl text-scooter-600 text-center mx-auto pb-4">DE CLIMA LABORAL?</span>
        </h3>
      </div>
      <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular py-8">
          Mejora el clima laboral de tu empresa con los recursos y estrategias que tenemos para ti. ¡Impulsa a tus colaboradores todos los días con nuestro contenido!
          </p>
      </div>
    </div>

    </Layout>
  );
}
