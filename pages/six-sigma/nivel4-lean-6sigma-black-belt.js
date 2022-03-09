import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const blackBelt = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#333333]"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-Black.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-12 container content-center bg-white shadow-2xl h-[500px] w-4/5 lg:w-1/4 rounded-t-xl sm:rounded-tr-none rounded-l-xl items-center self-center py-4">
            <h3 className="flex flex-col font-light justify-center text-2xl mx-auto py-2 font-jost text-[#333333] place-self-center w-4/5">
              NIVEL 4{" "}
              <span className="font-bold">
                LEAN 6 SIGMA BLACK BELT
              </span>
            </h3>
            <p className="w-4/5 mx-auto justify-center text-justify text-gray-500 py-4 font-mont">
              Este es el cuarto nivel de certificación{" "}
              <span className="font-bold text-[#333333]">Lean Six Sigma</span>{" "}
              desarrollarás habilidades y conocimientos enfocados a liderar
              proyectos complejos clave y de alto impacto a la organización. Por
              lo general una persona certificada <br /> <br />
              <span className="font-bold text-[#333333]">Black Belt</span>{" "}
              dedica la mayor parte de su tiempo en implementar proyectos de
              mejora continua, rediseñando productos y procesos, así como
              generando ahorros de forma sustentable y sostenible.
            </p>
          </div>
          <div className="flex flex-col justify-center container bg-[#333333] shadow-2xl h-[500px] lg:w-1/4 lg:rounded-r-xl w-4/5">
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
              className=" w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
            />
            <button className="mt-2 text-white bg-transparent border-2 border-white py-2 px-6 focus:outline-none hover:bg-white hover:text-[#333333] rounded w-4/5 self-center transition ease-in duration-250">
              QUIERO MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
      <section 
        className="bg-no-repeat bg-cover bg-center relative h-[500px] flex flex-row space-x-80"
        style={{
          backgroundImage: `url(/img/six-sigma/banner/banner-black.jpg)`,
        }}>
        <div className="py-10 px-16 justinfy-end w-1/3">
          <Image
            layout="fixed"
            width="600"
            height="400"
            src='/img/six-sigma/banner/certificado-black.png' 
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
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-[#333333] font-jost font-light place-self-center">
            LO QUE VAS A APRENDER {" "} <br/>
            <span className="font-bold">EN EL NIVEL 4 BLACK BELT</span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 font-mont py-4 flex justify-center items-center">
          <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
            <li className="text-[#333333] text-lg">
              Introducción al mundo{" "}
              <span className="font-bold text-[#333333]">Black Belt</span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                Metodología DFSS
              </span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                VOC - Voz del Cliente
              </span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                Administración de Proyectos
              </span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Smartsheet</span>
            </li>
            <li className="text-gray-500 text-lg ml-4">
              <span className="font-bold text-gray-500">Ruta Crítica</span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">Cadena de Valor</span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">Gemba Walk</span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                QFD - Casa de la Calidad
              </span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">Método KJ</span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                Administración del Riesgo
              </span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                Mapa de procesos
              </span>
            </li>
            <li className="text-[#333333] text-lg">
              <span className="font-bold text-[#333333]">
                DOE - Factorial Fraccionado
              </span>
            </li>
          </ul>
        </div>
      </div>
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}

        <div className="flex sm:flex-row flex-col h-auto">
          <div className="bg-[#333333] text-center flex sm:w-1/2 w-full">
            <h3 className="mx-auto font-jost sm:py-24 text-xl sm:text-4xl text-white font-bold self-center">
              ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
            </h3>
          </div>
          <div className="bg-white w-full sm:w-1/2 flex justify-center items-center py-4 font-mont">
            <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
              <li className="text-gray-500 text-lg">
                Las exigencias de los clientes demandan un alto nivel de calidad
                en productos y servicios.
              </li>
              <li className="text-gray-500 text-lg">
                <span className="font-bold text-[#333333]">
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
                <span className="font-bold text-[#333333]">
                  oportunidades de mejora, optimizar recursos,
                </span>{" "}
                incrementar la eficiencia y ejecutar la mejor solución.
              </li>
              <li className="text-gray-500 text-lg">
                Tu equipo podrá usar un lenguaje global común de trabajo.
              </li>
              <li className="text-gray-500 text-lg">
                La{" "}
                <span className="font-bold text-[#333333]">
                  metodología Lean Six Sigma
                </span>{" "}
                proveerá de conocimiento y entrenamiento a todo el equipo para
                enfrentar los retos de forma sustentable.
              </li>
            </ul>
          </div>
        </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#333333]"
        style={{
          backgroundImage: `url(/img/home/footer-six.jpg)`,
        }}
      >
        <div className="h-[700px] flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-16 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto">
              <div className="mb-4 divide-y divide-[#333333]">
                <h3 className="font-light font-jost text-3xl py-4 text-[#333333]">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold">SIX SIGMA?</span>
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
                      className="w-full sm:w-2/3 flex justify-center bg-transparent  hover:bg-[#333333] text-[#333333] hover:text-white border-2 border-[#333333] p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
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
      <div className="flex flex-col sm:flex-row h-64">
        <div className="w-full sm:w-1/2 flex">
          <h3 className="text-4xl text-[#333333] font-jost text-center mx-auto self-center">
            ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center font-mont text-gray-500">
            <span className="font-bold text-[#333333]">
              Lean 6 Sigma Black Belt
            </span>{" "}
            - Preferentemente haber cursado el Nivel 1, 2 y 3, o haberse
            acreditado anteriormente como{" "}
            <span className="font-bold text-[#333333]">Green Belt,</span> o
            tener experiencia ejecutando proyectos{" "}
            <span className="font-bold text-[#333333]">6 Sigma.</span>
            <br /> <br />
            Para lograr la certificación los
            participantes deberán mostrar los conocimientos definiendo y
            ejecutando un proyecto real aprobado por un líder de la
            organización, así como validar los ahorros potenciales
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default blackBelt;
