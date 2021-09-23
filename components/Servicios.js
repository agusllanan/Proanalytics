import Image from "next/image";
import Link from "next/link";

  const Servicios = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="font-bold text-4xl flex justify-center pb-10 text-keppel-500">
          {" "}
          Nuestros Servicios{" "}
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/home/Servicio - SixSigma.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center "
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Six Sigma
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/six-sigma">
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
                  src="/img/home/Servicio - Clima Laboral.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center "
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Clima Laboral
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap">
                  <Link href="/climaLaboral">
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
                  src="/img/home/Servicio - Smartsheet.jpg"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center"
                  alt="Aqui va el alt de la imagen"
                />
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Diseño y automatización de procesos
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/diseno-automatizacion-procesos">
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
  );
};

export default Servicios;