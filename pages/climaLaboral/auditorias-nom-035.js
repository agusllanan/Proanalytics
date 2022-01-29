import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export const auditorias = () => {
  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#7209b7]"
        style={{
          backgroundImage: `url(/img/clima-laboral/portada-nom035.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-10 container content-center bg-white shadow-2xl w-4/5 lg:w-1/4 rounded-t-xl md:rounded-tr-none font-mont md:rounded-l-xl self-center h-[450px]">
            <span className="w-4/5 mx-auto text-2xl py-12 font-bold font-jost text-[#7209b7]">
            TRABAJA EN EL DESARROLLO INTEGRAL{" "}
            <span className="font-light">
            DE LAS Y LOS TRABAJADORES
            </span>
            </span>
            <p className="w-4/5 mx-auto justify-center font-mont text-justify pb-16">
              Identifica los requisitos de la
              <span className="font-bold  text-[#7209b7]">
                {" "}
                NOM-035-STPS-2018
              </span>{" "}
              que necesitas trabajar con nuestra lista de verificación. <br />{" "}
              Analiza qué tan lista está tu empresa para certificarse en la{" "}
              <span className="font-bold text-[#7209b7]">
              NMX-R-025-SCFI-2015
              </span>{" "}
              de{" "}
              <span className="font-bold text-[#7209b7]">
                Igualdad Laboral y no Discriminación
              </span>{" "}
              con nuestro diagnóstico y asesoría.
            </p>
          </div>
          <div className="flex flex-col container content-center bg-[#7209b7] shadow-2xl lg:w-1/4 lg:rounded-r-xl w-4/5 h-[450px]">
            <p className="self-center w-4/5 md:ml-4 text-white text-justify pt-4 pb-4">
            Analiza el estatus de tu empresa en los procesos de estas Normas: <br /> {" "}
              <span className="font-bold">NOM-035-STPS-2018 y NMX-R-025-SCFI-2015</span>
            </p>
            <label
              htmlFor="footer-field"
              className="ml-[60px] mt-2 text-base text-white"
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
              className="ml-[60px] mt-2 text-base text-white"
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
              className="ml-[60px] text-base mt-1 text-white"
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
            <button className="ml-4 text-white font-bold bg-transparent border-2 border-white hover:bg-white py-2 mb-4 mt-4 focus:outline-none hover:text-[#7209b7] rounded w-4/5 flex place-content-center self-center transition ease-in duration-250">
              SOLICITA TU ASESORÍA GRATUITA
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto w-4/5 h-44 sm:py-24 sm:h-72 text-xl font-jost sm:text-4xl text-[#7209b7] font-light place-self-center">
            ¿POR QUÉ ASESORARTE EN LOS PROCESOS DE LA{" "}
            <span className="font-bold text-[#7209b7]">
              NÓM035 <span className="text-[#7209b7]">O</span> NÓM025?
            </span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center items-center font-mont">
          <ul className="flex-col list-disc w-4/5 space-y-5">
            <li className="text-gray-500 text-xl ">
              Prevé errores u omisiones.
            </li>
            <li className="text-gray-500 text-xl">
              Recibe acompañamiento por un equipo multidisciplinario con
              experiencia en{" "}
              <span className="font-bold text-[#7209b7]">
                Certificaciones y Verificaciones.
              </span>
            </li>
            <li className="text-gray-500 text-xl">
              Asesórate y aprende de los procesos para liderar estos proyectos
              internamente.
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-[#7209b7] text-justify flex flex-col py-14 h-auto w-full font-mont">
          <h3 className="text-xl pb-4 sm:text-4xl text-white font-bold font-jost  place-self-center mx-auto">
            {" "}
            NUESTRA METODOLOGÍA
          </h3>
          <div className="div w-full flex flex-col place-content-center md:flex-row">
            <div className="w-full h-80 md:w-1/3 flex flex-col">
            <div className="self-center py-4">
              <Image
                src="/img/clima-laboral/NOM035/iconos-metodologia/diagnostico.png"
                layout='fixed'
                width={200}
                height={200}
                className=" relative object-fill rounded-xl place-self-center m-2  flex"
                alt="Aqui va el alt de la imagen"
              />
            </div>
              <h3 className="text-white pb-3 self-center">DIAGNÓSTICO</h3>
              <p className="w-4/5 text-white md:ml-4 self-center">
                Realiza tu lista de verificación, recibe tu diagnóstico e
                identifica tus necesidades
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 flex flex-col">
            <div className="self-center py-4 flex flex-col">
              <Image
                src="/img/clima-laboral/NOM035/iconos-metodologia/asesoria.png"
                layout='fixed'
                width={200}
                height={200}
                className=" relative object-fill rounded-xl object-center m-2"
                alt="Aqui va el alt de la imagen"
              />
            </div>
              <h3 className="font-bold text-white self-center pb-3">ASESORÍA Y CAPACITACIÓN</h3>
              <p className="w-4/5 text-white self-center">
                Recibe el acompañamiento en cada etapa de tu proceso y {""}
                <span className="font-bold">capacita al personal</span>
                {" "}que se requiera para cumplir con los requerimientos.
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 flex flex-col">
            <div className="self-center py-4">
              <Image
                src="/img/clima-laboral/NOM035/iconos-metodologia/verificaciones.png"
                layout='fixed'
                width={200}
                height={200}
                className=" relative object-fill rounded-xl object-center m-2"
                alt="Aqui va el alt de la imagen"
              />
            </div>
              <h3 className="text-white self-center pb-3">VERIFICACIONES O CERTIFICACIONES</h3>
              <p className="w-4/5 text-white self-center">
                Según sea el caso, te acompañamos en tus procesos de
                Verificadores Oficiales o Certificaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#7209b7]"
        style={{
          backgroundImage: `url(/img/clima-laboral/diagnosticoInicial.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="h-[700px] flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-2/3 sm:w-full h-auto font-mont">
              <div className="mb-4 divide-y divide-[#7209b7]">
                <h3 className="font-regular text-3xl py-4 text-[#7209b7] font-jost">
                ¿QUIERES CONOCER MÁS DE ESTAS NORMAS Y SU PROPÓSITO?
                </h3>
                <p className="text-gray-500 py-4">
                  Norma Mexicana{" "}
                  <span className="font-bold text-[#7209b7]">
                    NOM-035-STPS-2018, Factores de Riesgo Psicosocial y Entornos
                    Favorables de Trabajo. <br />
                  </span> <br />
                  Norma Mexicana{" "}
                  <span className="font-bold text-[#7209b7]">
                    NOM-025-STPS-2008, Igualdad Laboral y no Discriminación.
                  </span>
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-transparent border-2 border-[#7209b7] hover:bg-[#7209b7] text-[#7209b7] hover:text-white p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
                    >
                      SOLICITA TU ASESORÍA GRATUITA
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
          <h3 className="text-4xl text-gray-600 font-jost text-center mx-auto pt-4 flex-col place-self-center w-4/5 aling-center">
            ¿Quieres saber más sobre la{" "}
            <span className="font-bold text-4xl text-[#7209b7] text-center mx-auto pb-4">
              NOM 035
            </span>{" "}
            y la <span className="font-bold text-[#7209b7]">NOM 025</span>?
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular py-8 place-self-center font-mont">
            Conoce más de la <span className="font-bold text-[#7209b7]">NOM 035</span> y la{" "}
            <span className="font-bold text-[#7209b7]">NOM 025</span> con los recursos y
            estrategias que tenemos para ti.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default auditorias;
