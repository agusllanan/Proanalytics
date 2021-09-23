import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Servicios from "../../components/Servicios"

export default function servicios() {
    return (
    <Layout
        title="Servicios | Proanalytics"
        description="Agregue una descripcion"
    >
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl mb-4 font-bold text-green-600">
            Servicios
            </h1>
            <p className="mb-8 leading-relaxed w-1/2 text-justify">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.Copper mug try-hard pitchfork pour-over
            freegan heirloom neutra air plant cold-pressed tacos poke beard tote
            bag. Heirloom echo park mlkshk tote bag selvage hot chicken
            authentic tumeric truffaut hexagon try-hard chambray
            </p>
            <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
                Ver mas
            </button>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
            src="/img/1.jpeg"
            width={920}
            height={800}
            className="object-cover object-center rounded-lg"
            alt="Aqui va el alt de la imagen"
            />
        </div>
        </div>
        <Servicios/>
            {/* <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
              <h1 className="font-bold text-4xl flex justify-center pb-10 text-green-500">
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
                        Six Figma
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                      <Link href="/sixFigma">
                        <a>
                          <button className="inline-flex text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
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
                          <button className="inline-flex text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
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
                        SMARTSHEET
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap ">
                      <button className="cursor-default inline-flex text-white font-bold bg-gray-400 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                      Proximamente
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
    </Layout>
    );
}
