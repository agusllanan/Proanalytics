import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function disenoAutomatizacionProcesos() {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/portadaClimaLaboral.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="h-auto md:min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle font-mont">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5">
            <div className="sm:mx-auto-align my-8 lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-4/5 lg:w-full h-4/5">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl md:text-4xl py-4 text-keppel-500">
                DISEÑO Y AUTOMATIZACIÓN DE PROCESOS
                </h3>
                <p className="text-gray-500 text-justify text-sm md:text-base">
                <span className="font-bold text-keppel-500">Smartsheets</span> es una plataforma ideal para empresas que buscan una solución real a la <span className="font-bold text-keppel-500">creación, gestión y automatización de procesos.</span> <br />
                Somos expertos en la herramienta. Contamos con servicio de entrenamiento y servicio de consultoría con instructores certificados. <span className="font-bold text-keppel-500">Diseño y construcción de procesos</span> personalizados a la medida de tus necesidades.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/contactanos">
                    <button
                      type="submit"
                      className=" w-1/2 lg:mr-3 flex justify-center bg-keppel-500 border-2 border-keppel-600 text-white p-3 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer hover:bg-keppel-700 hover:text-white transition ease-in duration-500"
                    >
                      ESCRÍBENOS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="px-5 md:py-16 mx-auto">
          <h2 className="lg:flex-row flex-col font-bold text-4xl flex justify-center pb-10 text-keppel-500">
          <span className="font-bold">CURSOS SMARTSHEETS</span>
          </h2>
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/3">
              <div className="shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg ">
                <div className="p-6">
                  <Image
                    src="/img/clima-laboral/Servicio Encuesta.jpeg"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center "
                    alt="Aqui va el alt de la imagen"
                  />
                  <h3 className="title-font text-lg font-bold text-keppel-700 mb-3">
                    NIVEL 1 - DESING & DEPLOY
                  </h3>
                  <p className="leading-relaxed mb-3 h-40 text-justify">
                  Al ser participante, tendrás conocimiento pleno de los alcances y limitaciones de la <span className="font-bold text-keppel-500">herramienta Smartsheet.</span> Podrás dimensionar las posibilidades de implementación en tu organización.</p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/diseno-automatizacion-procesos/nivel1-desing-deploy">
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
                  <h3 className="title-font text-lg font-bold text-keppel-700 mb-3">
                    NIVEL 2 - CREATE & DO
                  </h3>
                  <p className="leading-relaxed mb-3 h-40 text-justify">
                  En este nivel de entrenamiento tú y tu equipo podrán formular e integrar hojas de trabajo, establecer flujos de información, crear Dashboards y programar sus principales indicadores.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/diseno-automatizacion-procesos/nivel2-create-do">
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
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg">
                <div className="p-6 h-64 ">
                  <Image
                    src="/img/clima-laboral/Servicio - NOM035.jpg"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h3 className="title-font text-lg font-bold text-keppel-700 mb-3">
                    NIVEL 3 - PROJECT MANAGEMENT
                  </h3>
                  <p className="leading-relaxed mb-3 h-40 text-justify">
                  Este nivel está enfocado en las <span className="font-bold text-keppel-500">herramientas que ofrece Smartsheets</span> para administrar proyectos. Podrás asignar actividades, tareas y establecer fechas objetivas y más.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="/diseno-automatizacion-procesos/nivel3-project-management">
                      <button className="inline-flex text-white font-bold bg-keppel-500 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-keppel-400">
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
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10 font-mont">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-4/5 md:w-full h-auto">
              <div className="mb-4 divide-y divide-blue-500">
                <h3 className="font-bold text-3xl py-4 text-scooter-500">
                ¿QUIERES SABER SI TU EMPRESA NECESITA <span className="text-keppel-500"> SMARTSHEETS?
                  </span> 
                </h3>
                <p className="text-gray-500 py-4">
                En una primera entrevista buscaremos entender tu problema y sugerirte el mejor nivel de entrenamiento.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-scooter-500  hover:bg-keppel-600 text-gray-100 p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      DIAGNÓSTICO INICIAL GRATUITO
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-blue-400 text-center flex sm:w-1/2 w-full font-mont">
          <h3 className="h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-white font-bold place-self-center mx-auto">
            ¿POR QUÉ IMPLEMENTAR{" "}
            <span className="text-scooter-400 mx-1">SMARTSHEETS?</span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 text-justify flex flex-col">
          <p className="text-gray-500 text-xl py-4 justify-center w-4/5 self-center">
          Las posibilidades y combinaciones son realmente infinitas. Éstos son solo algunos ejemplos de áreas de aplicación para usar <span className="font-bold text-keppel-500"> Smartsheets</span>
          </p>
          <ul className="w-4/5 mx-auto list-disc pb-6 items-center">
            <li className="text-scooter-500 text-lg"><span className="font-bold text-keppel-500">Recursos Humanos:</span> Recibe curriculums y filtre a candidatos a través de un formulario digital.</li>
            <li className="text-scooter-500 text-lg"><span className="font-bold text-keppel-500">Administración de Proyectos:</span> Obtén un <span className="font-bold text-keppel-500">diagrama de Gantt.</span> Asigna tareas, recibe recordatorios y más.</li>
            <li className="text-scooter-500 text-lg">
            <span className="font-bold text-keppel-500">Contabilidad:</span> Lleva un registro de las facturas por proveedor. Recibe notificaciones de fechas vencidas para pago y más.
            </li>
            <li className="text-scooter-500 text-lg">
            <span className="font-bold text-keppel-500">Compras:</span> Lleva registro de tus importaciones. Muestra un reporte en tiempo real.  Encuentra áreas de oportunidad en gastos contra presupuestos objetivos. 
            </li>
            <li className="text-scooter-500 text-lg">
            <span className="font-bold text-keppel-500">Almacén:</span> Lleva un control de entradas y salidas de sus insumos. Genera un reporte de tus inventarios en tiempo real.</li>
            <li className="text-scooter-500 text-lg">
            <span className="font-bold text-keppel-500">Seguimiento a Alumnos:</span> Lleva un control de alumnos matriculados por nivel.  
            </li>
            <li className="text-scooter-500 text-lg"><span className="font-bold text-keppel-500">Calidad:</span> Registra desde tu celular las fallas. Obtén un reporte de las más comunes en tiempo real por categoría, ubicación y mes.</li>
            <li className="text-scooter-500 text-lg"><span className="font-bold text-keppel-500">Casos Médicos:</span> Obtén un registro de los casos médicos. Asigna a personal médico para atender cada caso, recibe recordatorios y más.</li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-auto font-mont">
        <div className="bg-curious-blue-600 text-center flex sm:w-1/2 w-full">
          <h3 className="h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-white font-bold place-self-center mx-auto">
            VENTAJAS DE TRABAJAR CON{" "}
            <span className="text-scooter-400 mx-1">SMARTSHEETS</span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 text-justify flex flex-col">
          <ul className="w-4/5 mx-auto list-disc pb-6 items-center">
            <li className="text-scooter-500 text-lg"><span className="font-bold text-keppel-500">Efficiency and Productivity:</span> Logra tus objetivos en tiempo record.</li>
            <li className="text-scooter-500 text-lg"><span className="font-bold text-keppel-500">Dashboards & Reporting:</span> Obtén la información que necesitas para tomar decisiones fácil y rápido.</li>
            <li className="text-scooter-500 text-lg">
            <span className="font-bold text-keppel-500">Connectivity and Collaboration: </span> Logra que tus equipos colaboren  profesionalmente, monitoreando la capacidad de respuesta.
            </li>
            <li className="text-scooter-500 text-lg">
            <span className="font-bold text-keppel-500">Data Safety and Protection:</span> Resguarda tu información y evita que manipulen datos importantes.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row font-mont">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="w-4/5 text-3xl py-8 place-self-center flex flex-col mx-auto">
          ¿QUIERES SABER MÁS SOBRE <span className="font-bold text-scooter-500">DISEÑO Y AUTOMATIZACIÓN DE PROCESOS?</span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex h-56 text-center">
          <p className="w-4/5 mx-auto text-regular flex py-8 flex-col place-self-center">
          Encuentra en nuestro contenido; soluciones, tips y herramientas para la <span className="font-bold text-keppel-500">creación, gestión y automatización de procesos en tu empresa.</span>
          </p>
        </div>
      </div>
    </Layout>
  );
}
