import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const yellowBelt = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-gray-500"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-Yellow.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col px-16 lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-[500px] w-4/5 lg:w-1/4 sm:rounded-t-xl md:rounded-tr-none rounded-l-xl items-center self-center py-6">
            <h3 className="flex flex-col justify-center text-2xl mx-auto font-jost py-2 text-[#f6b433] place-self-center font-light w-4/5">
              NIVEL 2{" "}
              <span className="font-bold text-[#f6b433]">
                LEAN 6 SIGMA YELLOW BELT
              </span>
            </h3>
            <p className="w-4/5 mx-auto text-gray-500 justify-center text-justify pt-8 font-mont">
              Este nivel es la segunda etapa del entrenamiento. Durante el
              proceso de certificación podrás adquirir conocimientos y usar{" "}
              <span className="font-bold text-[#f6b433]">
                herramientas comunes de Lean.
              </span>{" "}
              Tú y tu equipo podrán liderar{" "}
              <span className="font-bold text-[#f6b433]">
                proyectos Lean Six Sigma
              </span>{" "}
              para identificar oportunidades, prevenir fallas, usar herramientas
              de resolución de problemas, e incrementar la eficiencia en los
              procesos.
            </p>
          </div>
          <div className="flex flex-col justify-center container h-[500px] bg-[#f6b433] shadow-2xl lg:w-1/4 lg:rounded-r-xl w-4/5">
            <p className="flex self-center w-4/5 text-gray-700 font-mont">
              Si deseas obtener más información acerca de esta certificación, ingresa tu correo electrónico.
            </p>
            <label
              htmlFor="footer-field"
              className="ml-10 mt-8 leading-7 text-base text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
            />
            <button className="text-gray-700 hover:bg-gray-700 mt-6 bg-transparent border-2 border-gray-700 py-3 px-6 focus:outline-none hover:text-white rounded w-4/5 self-center transition ease-in duration-250">
              QUIERO MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
      <section 
        className="bg-no-repeat bg-cover bg-center relative h-[500px] flex space-x-80 flex-row"
        style={{
          backgroundImage: `url(/img/six-sigma/banner/banner-yellow.jpg)`,
        }}>
        <div className="py-10 px-16 w-1/3">
          <Image
            layout="fixed"
            width="600"
            height="400"
            src='/img/six-sigma/banner/certificado-yellow.png' 
            className="rounded-lg"
            alt=""
            />
        </div>
        <div className="py-44 w-1/3 text-white space-y-5">
          <h3 className="font-jost text-xl">CERTIFICATE CON NOSOTROS</h3>
          <p className="font-mont text-lg">Al terminar este nivel recibirás un certificado con validez curricular para avalar los conocimientos aprendidos. Adquiere informes el día de hoy</p>
        </div>
      </section>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl font-jost text-gray-600 place-self-center font-light">
            LO QUE VAS A APRENDER{" "} <br />
            <span className="font-bold text-[#f6b433]">EN EL NIVEL 2 YELLOW BELT</span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center font-mont py-6 items-center">
          <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
            <li className="text-gray-500 text-lg">
              Introducción al mundo{" "}
              <span className="font-bold text-[#f6b433]">Yellow Belt</span>
            </li>
            <li className="text-gray-500 text-lg">
              Formato A3 - Definición del Proyecto
            </li>
            <li className="text-gray-500 text-lg">Datos</li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Tamaño muestral</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-[#f6b433]">
                Recopilación de datos
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-[#f6b433]">Tipo de datos</span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-text-[#f6b433]">Indicador OEE</span> -
              Efectividad Total del Equipo
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                VSM - Mapa del Flujo de Valor
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                AMEF - Análisis de Modo Efecto Falla
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                Kaizen - Mejora Continua
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                SMED - Tiempos de cambios en minutos
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                TPM - Mantenimiento Productivo Total
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                Kanban - Flujo del trabajo
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                Poka Yoke - A prueba de fallas
              </span>
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#f6b433]">
                Lean Kata - Perseguir Retos
              </span>
            </li>
          </ul>
        </div>
      </div>
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}

        <div className="flex sm:flex-row flex-col h-auto">
          <div className="bg-gray-500 text-center flex sm:w-1/2 w-full font-jost">
            <h3 className="mx-auto text-xl sm:text-4xl text-white font-bold self-center">
              ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
            </h3>
          </div>
          <div className="bg-white w-full sm:w-1/2 flex justify-center items-center font-mont py-6">
            <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
              <li className="text-gray-500 text-lg">
                Las exigencias de los clientes demandan un alto nivel de calidad
                en productos y servicios.
              </li>
              <li className="text-gray-500 text-lg">
                <span className="font-bold text-[#f6b433]">
                  Capacita a tu personal
                </span>{" "}
                para adquirir el conocimiento y poder cumplir con los
                requerimientos de clientes internos y externos.
              </li>
              <li className="text-gray-500 text-lg">
                Tu personal podrá resolver los problemas de forma metódica,
                eficaz y contundente.
              </li>
              <li className="text-gray-500 text-lg">
                Te preparamos junto con tu equipo, de forma personalizada para
                cubrir las necesidades y garantizar el éxito de tus proyectos.
              </li>
              <li className="text-gray-500 text-lg">
                Todos los proyectos estarán alineados a la estrategia de tu
                empresa.
              </li>
              <li className="text-gray-500 text-lg">
                Tu equipo de trabajo podrá identificar{" "}
                <span className="font-bold text-[#f6b433]">
                  oportunidades de mejora, optimizar recursos,
                </span>{" "}
                incrementar la eficiencia y ejecutar la mejor solución.
              </li>
              <li className="text-gray-500 text-lg">
                Tu equipo podrá usar un lenguaje global común de trabajo.
              </li>
              <li className="text-gray-500 text-lg">
                La{" "}
                <span className="font-bold text-[#f6b433]">
                  metodología Lean Six Sigma
                </span>{" "}
                proveerá de conocimiento y entrenamiento a todo el equipo para
                enfrentar los retos de forma sustentable.
              </li>
            </ul>
          </div>
        </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#f6b433]"
        style={{
          backgroundImage: `url(/img/home/footer-six.jpg)`,
        }}
      >
        <div className="h-[700px] flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-gray-500">
                <h3 className="font-regular text-3xl py-4 font-jost text-gray-500">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold text-[#f6b433]">SIX SIGMA?</span>
                </h3>
                <p className="text-gray-500 py-3 font-mont">
                  Conoce más sobre la importancia de la certificación, recursos
                  y estrategias para la mejora continua de tu organización.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-transparent  hover:bg-[#f6b433] hover:text-gray-500 text-gray-500 border-2 border-gray-500 hover:border-[#f6b433] p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold cursor-pointer transition ease-in duration-250"
                    >
                      SOLICITA MÁS INFORMACIÓN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row h-48">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="text-4xl text-gray-500 font-jost text-center mx-auto self-center">
            ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center font-mont text-gray-500">
          <span className="font-bold text-[#f6b433]">Lean 6 Sigma Yellow Belt</span> - Preferentemente haber cursado el Nivel 1, haberse acreditado anteriormente como <span className="font-bold text-[#f6b433]">White Belt,</span> o tener experiencia en <span className="font-bold text-[#f6b433]">herramientas básicas de Lean Manufacturing.</span> Perfil para personal responsable o interesado en mejoras de procesos productivos o administrativos.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default yellowBelt;
