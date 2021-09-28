import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const auditorias = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/NOM035/portada-nom035.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl w-4/5 lg:w-1/3 rounded-t-xl md:rounded-tr-none md:rounded-l-xl self-center">
            <span className="w-4/5 mx-auto text-2xl py-12 font-bold text-scooter-500">
              AUDITORÍAS NOM 035 <br /> y NOM 025
            </span>
            <p className="w-4/5 mx-auto justify-center text-justify pb-16">
              Identifica los requisitos de la
              <span className="font-bold text-keppel-500">
                {" "}
                NOM-035-STPS-2018
              </span>{" "}
              que necesitas trabajar con nuestra lista de verificación. <br />{" "}
              Analiza qué tan lista está tu empresa para certificarse en la{" "}
              <span className="font-bold text-keppel-500">
                NOM-025-STPS-2008
              </span>{" "}
              de{" "}
              <span className="font-bold text-keppel-500">
                Igualdad Laboral y no Discriminación
              </span>{" "}
              con nuestra lista de verificación y diagnóstico.
            </p>
          </div>
          <div className="flex flex-col container content-center bg-curious-blue-500 shadow-2xl lg:w-1/3 lg:rounded-r-xl w-4/5">
            <p className="self-center w-4/5 md:ml-4 text-white text-justify pt-4 pb-4">
              ASESÓRATE EN LOS PROCESOS DE LA{" "}
              <span className="font-bold">NOM035 O NOM025</span>
            </p>
            <label
              htmlFor="footer-field"
              className="ml-14 mt-2 text-base text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out flex self-center"
            />
            <label
              htmlFor="footer-field"
              className="ml-14 mt-2 text-base text-white"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out flex self-center"
            />
            <label
              htmlFor="footer-field"
              className="ml-14 text-base mt-1 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out flex self-center "
            />
            {/* <textarea className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out">Escríbenos tus inquietudes y horario de contacto</textarea> */}
            <button className="ml-4 text-white font-bold bg-keppel-500 border-0 py-2 mb-4 mt-4 focus:outline-none hover:bg-keppel-600 rounded w-4/5 flex place-content-center self-center">
              SOLICITA TU DIAGNÓSTICO GRATUITO
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto w-4/5 h-44 sm:py-24 sm:h-72 text-xl sm:text-4xl text-blue-500 font-bold place-self-center">
            ¿POR QUÉ ASESORARTE EN LOS PROCESOS DE LA{" "}
            <span className="font-bold text-scooter-500">
              NOM035 <span className="text-blue-500">O</span> NOM025?
            </span>
          </h3>
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center">
          <ul className="flex-col py-6 list-disc w-4/5 space-y-5">
            <li className="text-scooter-500 text-xl ">
              Prevé errores u omisiones.
            </li>
            <li className="text-scooter-500 text-xl">
              Recibe acompañamiento por un equipo multidisciplinario con
              experiencia en{" "}
              <span className="font-bold">
                Certificaciones y Verificaciones.
              </span>
            </li>
            <li className="text-scooter-500 text-xl">
              Asesórate y aprende de los procesos para liderar estos proyectos
              internamente.
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-blue-500 text-justify flex flex-col h-auto w-full font-mont">
          <h3 className="py-24 sm:py-8 text-xl sm:text-4xl text-white font-bold place-self-center mx-auto">
            {" "}
            NUESTRO PROCESO METODOLÓGICO
          </h3>
          <div className="div w-full flex flex-col place-content-center md:flex-row">
            <div className="w-full h-80 md:w-1/3 bg-blue-500">
              <Image
                src="/img/clima-laboral/NOM035/iconos-metodologia/diagnostico.png"
                width={200}
                height={200}
                className=" relative object-fill rounded-xl place-self-center m-2  flex"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="text-white mx-auto">DIAGNÓSTICO</h3>
              <p className="w-4/5 text-white md:ml-4">
                Realiza tu lista de verificación, recibe tu diagnóstico e
                identifica tus necesidades
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 bg-blue-500">
              <Image
                src="/img/clima-laboral/NOM035/iconos-metodologia/asesoria.png"
                width={200}
                height={200}
                className=" relative object-fill rounded-xl object-center m-2"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="font-bold text-white">ASESORÍA Y CAPACITACIÓN</h3>
              <p className="w-4/5 text-white">
                Recibe el acompañamiento en cada etapa de tu proceso y {""}
                <span className="font-bold">capacita al personal</span>
                {""}que se requiera para cumplir con los requerimientos.
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 bg-blue-500">
              <Image
                src="/img/clima-laboral/NOM035/iconos-metodologia/verificaciones.png"
                width={200}
                height={200}
                className=" relative object-fill rounded-xl object-center m-2"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="text-white">VERIFICACIONES O CERTIFICACIONES</h3>
              <p className="w-4/5 text-white">
                Según sea el caso, te acompañamos en tus procesos de
                Verificadores Oficiales o Certificaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto font-mont">
              <div className="mb-4 divide-y divide-blue-500">
                <h3 className="font-regular text-3xl py-4 text-scooter-400">
                  ¿QUIERES CERTIFICARTE EN LA <br />{" "}
                  <span className="font-bold text-keppel-500">NOM-025</span> y{" "}
                  <span className="font-bold text-keppel-500">NOM-035</span>?
                </h3>
                <p className="text-gray-500 py-4">
                  Norma Mexicana{" "}
                  <span className="font-bold text-keppel-500">
                    NOM-035-STPS-2018, Factores de Riesgo Psicosocial y Entornos
                    Favorables de Trabajo. <br />
                  </span> <br />
                  Norma Mexicana{" "}
                  <span className="font-bold text-keppel-500">
                    NOM-025-STPS-2008, Igualdad Laboral y no Discriminación.
                  </span>
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
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
      <div className="flex flex-col sm:flex-row h-48">
        <div className="w-full h-full sm:w-1/2 flex">
          <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4 flex-col place-self-center aling-center">
            ¿Quieres saber más sobre la{" "}
            <span className="font-bold text-4xl text-scooter-600 text-center mx-auto pb-4">
              NOM 035
            </span>{" "}
            y la <span className="font-bold">NOM 025</span>?
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular py-8 place-self-center">
            Conoce más de la <span className="font-bold">NOM 035</span> y la{" "}
            <span className="font-bold">NOM 025</span> con los recursos y
            estrategias que tenemos para ti.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default auditorias;
