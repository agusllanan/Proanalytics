import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const greenBelt = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#006837]"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-Green.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center px-8 font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-[400px] w-4/5 lg:w-1/4 rounded-t-xl sm:rounded-tr-none rounded-l-xl items-center justify-center self-center ">
            <h3 className="flex flex-col justify-center font-light text-2xl mx-auto py-2 font-jost text-[#006837] place-self-center w-4/5">
              NIVEL 3 {" "}
              <span className="font-bold text-[#006837]">
                LEAN 6 SIGMA GREEN BELT
              </span>
            </h3>
            <p className="w-4/5 mx-auto justify-center font-mont text-gray-500">
              Durante esta tercera etapa para certificación en{" "}
              <span className="font-bold text-[#006837]">Lean 6 Sigma.</span>{" "}
              Podrás desarrollarte como líder de proyectos de{" "}
              <span className="font-bold text-[#006837]">mejora continua</span>{" "}
              importantes que requieran un complejo nivel de análisis y toma de
              decisiones. Sin duda proyectos que generan un impacto y beneficios
              notorios en la organización.
            </p>
          </div>
          <div className="flex flex-col justify-center container bg-[#006837] shadow-2xl h-[400px] lg:w-1/4 lg:rounded-r-xl w-4/5">
            <p className="flex self-center w-4/5 text-white pt-8">
              Si deseas obtener más información acerca de esta certificación, ingresa tu correo electrónico.
            </p>
            <label
              htmlFor="footer-field"
              className="ml-10 mt-8 leading-7 text-base text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
            />
            <button className="mt-3 text-white bg-transparent border-2 border-white py-2 px-6 focus:outline-none hover:bg-white rounded w-4/5 hover:text-[#006837] self-center transition duration-250 ease-in">
              QUIERO MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
      <section 
        className="bg-no-repeat bg-cover bg-center relative h-[500px] flex flex-row space-x-80"
        style={{
          backgroundImage: `url(/img/six-sigma/banner/banner-green.jpg)`,
        }}>
        <div className="py-10 px-16 justinfy-end w-1/3">
          <Image
            layout="fixed"
            width="600"
            height="400"
            src='/img/six-sigma/banner/certificado-green.png' 
            className="rounded-lg self-center items-center"
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
        <div className="bg-white text-center flex sm:w-1/2 w-full py-4">
          <h3 className="mx-auto h-44 sm:py-24 font-light sm:h-72 text-xl font-jost sm:text-4xl text-[#006837] place-self-center">
            LO QUE VAS A APRENDER{" "} <br />
            <span className="font-bold text-[#006837]">EN EL NIVEL 3 GREEN BELT</span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">Introducción al mundo Green Belt</span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Metodología DMAIC
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Administración de Proyectos
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Smartsheet</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Ruta Crítica</span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Métrico Primario
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Mapa de Procesos
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Matriz Causa & Efecto
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Sistemas de medición
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Estadística Básica
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Gráficos y Herramientas Estadísticas
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Histogramas</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Gráficos de puntos
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Gráficos de cajas
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Gráficos de dispersión
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Gráficos de control
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                Pruebas de Hipótesis
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Pruebas de normalidad
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Pruebas de capacidad
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Correlación</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Anova</span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                DOE - Diseño de Experimentos
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Experimento 1 factor
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">
                Diseños factoriales
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">
                SPC - Control Estadístico de Proceso
              </span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">Plan de Control</span>
            </li>
            <li className="text-[#006837] text-lg">
              <span className="font-bold text-[#006837]">AMEF</span>
            </li>
          </ul>
        </div>
      </div>
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}

        <div className="flex sm:flex-row flex-col h-auto">
          <div className="bg-[#006837] text-center flex sm:w-1/2 w-full">
            <h3 className="mx-auto font-jost text-xl sm:text-4xl text-white font-bold self-center">
              ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
            </h3>
          </div>
          <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
            <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
              <li className="text-gray-500 text-lg">
                Las exigencias de los clientes demandan un alto nivel de calidad
                en productos y servicios.
              </li>
              <li className="text-gray-500 text-lg">
                <span className="font-bold text-gray-500">
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
                <span className="font-bold text-gray-500">
                  oportunidades de mejora, optimizar recursos,
                </span>{" "}
                incrementar la eficiencia y ejecutar la mejor solución.
              </li>
              <li className="text-gray-500 text-lg">
                Tu equipo podrá usar un lenguaje global común de trabajo.
              </li>
              <li className="text-gray-500 text-lg">
                La{" "}
                <span className="font-bold text-gray-500">
                  metodología Lean Six Sigma
                </span>{" "}
                proveerá de conocimiento y entrenamiento a todo el equipo para
                enfrentar los retos de forma sustentable.
              </li>
            </ul>
          </div>
        </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#006837]"
        style={{
          backgroundImage: `url(/img/home/footer-six.jpg)`,
        }}
      >
        <div className="h-[700px] flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-[#006837]">
                <h3 className="font-regular text-3xl py-4 text-gray-500 font-jost">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold text-[#006837]">SIX SIGMA?</span>
                </h3>
                <p className="text-gray-500">
                  Conoce más sobre la importancia de la certificación, recursos
                  y estrategias para la mejora continua de tu organización.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center border-2 border-[#006837] bg-transparent hover:text-white hover:bg-[#006837] text-[#006837] p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
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
          <h3 className="text-4xl text-[#006837] text-center mx-auto font-jost self-center">
            ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center text-gray-500 font-mont">
            <span className="font-bold text-[#006837]">
              Lean 6 Sigma Green Belt
            </span>{" "}
            - Preferentemente haber cursado el Nivel 2, haberse acreditado
            anteriormente como{" "}
            <span className="font-bold text-[#006837]">Yellow Belt,</span> o
            tener experiencia en{" "}
            <span className="font-bold text-[#006837]">
              herramientas básicas de Lean
            </span>{" "}
            y de Calidad. Perfil para personal líder de proyectos, responsable
            de resolver problemas de calidad, productividad y/o eficiencia.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default greenBelt;
