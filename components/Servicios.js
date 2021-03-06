import Image from "next/image";
import Link from "next/link";

  const Servicios = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-16 mx-auto font-mont">
        <h2 className="font-semibold font-jost text-4xl md:text-5xl flex justify-center pb-10 text-keppel-500">
          {" "}
          NUESTROS SERVICIOS{" "}
        </h2>
        <div className="flex flex-wrap md:-m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/home/servicio-six-sigma.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center "
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-xl font-bold text-gray-900 my-2">
                  Six Sigma
                </h1>
                <p className="leading-relaxed mb-4">
                Lean 6 Sigma es un programa de certificación en 4 niveles que le ayudará a potencializar la mejora continua de su organización.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/six-sigma">
                    <a>
                      <button className="inline-flex font-bold text-indigo-500 bg-white border-indigo-500 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250">
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
                  src="/img/home/servicio-clima-laboral.jpeg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center "
                  alt="Aqui va el alt de la imagen"
                />
                <h2 className="title-font text-xl font-bold text-gray-900 my-2">
                  Clima Laboral
                </h2>
                <p className="leading-relaxed mb-10">
                Conoce las posibles causas de rotación en tu empresa y trabaja en estrategias de retención de personal.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href="/climaLaboral">
                    <a>
                      <button className="inline-flex font-bold text-curious-blue-500 bg-white border-curious-blue-500 border-2 py-2 px-6 focus:outline-none hover:bg-curious-blue-500 hover:text-white rounded text-lg transition ease-in duration-250">
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
                  src="/img/home/servicio-optimizacion.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-left"
                  alt="Aqui va el alt de la imagen"
                />
                <h2 className="title-font text-xl font-bold text-gray-900 my-2">
                  Diseño y automatización de procesos
                </h2>
                <p className="leading-relaxed mb-4">
                Smartsheets es una plataforma ideal para empresas que buscan una solución real a la creación, gestión y automatización de procesos.
                </p>
                <div className="flex items-center flex-wrap ">
                  <button className="inline-flex font-bold text-gray-500 bg-white border-gray-500 border-2 py-2 px-6 focus:outline-none rounded text-lg transition ease-in duration-250
                  cursor-default">
                    Próximamente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
