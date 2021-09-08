import Layout from "../components/Layout";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("users").get();
        console.log(data.docs);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <Layout title="Proanalytics" description="Agregue una descripcion">
      <main className="">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl mb-4 font-medium text-gray-400">
                Lo que no se mide <br />{" "}
                <span className="font-bold text-green-600">
                  no se puede mejorar
                </span>
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork
                pour-over freegan heirloom neutra air plant cold-pressed tacos
                poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                hot chicken authentic tumeric truffaut hexagon try-hard chambray
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white mx-auto bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
                  Contactanos
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:ml-4 lg:w-full md:w-1/2 w-5/6">
              <Image
                src="/img/home/Portada.jpeg"
                width={900}
                height={1100}
                className="object-cover rounded-l-xl object-left"
                alt="Aqui va el alt de la imagen"
              />
            </div>
          </div>

          {/* Aca va la seccion del video */}
          <div className="container mx-auto bg-green-500 flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl mb-4 font-medium text-white">
                Quienes somos?{" "}
              </h1>
              <p className="mb-8 leading-relaxed w/80 text-white">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork
                pour-over freegan heirloom neutra air plant cold-pressed tacos
                poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                hot chicken authentic tumeric truffaut hexagon try-hard chambray
              </p>
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
          {/* Seccion de nuestros servicios */}
          <section className="text-gray-600 body-font">
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
                      <button className="inline-flex text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
                      Ver más
                      </button>
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
                      <button className="inline-flex text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
                      Ver más
                      </button>
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
                      className="object-cover rounded-xl object-center "
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
                      <button className="inline-flex text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
                      Ver más
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container w-full">
            <div className="flex flex-wrap text-center">
              <div className="py-10 bg-blue-400 w-1/3">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                  2.7K
                </h2>
                <p className="leading-relaxed font-bold text-lg text-white">
                  Users
                </p>
              </div>
              <div className="py-10 bg-blue-300 w-1/3">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                  1.8K
                </h2>
                <p className="leading-relaxed font-bold text-lg text-white">
                  Subscribes
                </p>
              </div>
              <div className="py-10 bg-blue-400 w-1/3">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                  4
                </h2>
                <p className="leading-relaxed font-bold text-lg text-white">
                  Products
                </p>
              </div>
            </div>
          </div>
          {/* //Aca va la seccion de Nuestra experiencia a tu alcance */}
          <div className="container mx-auto bg-blue-200 flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl mb-4 font-medium text-gray-400">
                Nuestra experiencia <br />{" "}
                <span className="font-bold text-blue-500">a tu alcance</span>
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork
                pour-over freegan heirloom neutra air plant cold-pressed tacos
                poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                hot chicken authentic tumeric truffaut hexagon try-hard chambray
              </p>
              <div className="flex justify-center"></div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                src="/img/home/experiencia.jpeg"
                width={1000}
                height={900}
                className="object-cover object-center rounded-lg"
                alt="Aqui va el alt de la imagen"
              />
            </div>
          </div>
        </section>
        {/* Para hacer un hover scale o rotation hay que hacer esto hover:scale-105 transform transition-all duration-500 */}
        <section>
          <div className="container w-full py-10">
            <h3 className="py/3 text-2xl mb-4 ml-4 font-bold text-blue-400"> PODCAST </h3>
            <div className="flex flex-nowrap flex-row justify-between">
              <div className="max-w-md ml-4 rounded-xl cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex flex-col text-justify">
                    <h3 className="text-lg text-gray-900 font-bold">
                      Titulo Podcast
                    </h3>
                    <p className="text-base text-gray-700 font-normal">
                      Este es el subtitulo
                    </p>
                    <h3 className="text-lg text-gray-900 font-bold">
                      Episodio 1
                    </h3>
                  </div>
                </div>
              </div>
              <div className="max-w-md ml-4 rounded-xl cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex flex-col text-justify">
                    <h3 className="text-lg text-gray-900 font-bold">
                      Titulo Podcast
                    </h3>
                    <p className="text-base text-gray-700 font-normal">
                      Este es el subtitulo
                    </p>
                    <h3 className="text-lg text-gray-900 font-bold">
                      Episodio 2
                    </h3>
                  </div>
                </div>
              </div>
              <div className="max-w-md ml-4 rounded-xl cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex flex-col text-justify">
                    <h3 className="text-lg text-gray-900 font-bold">
                      Titulo Podcast
                    </h3>
                    <p className="text-base text-gray-700 font-normal">
                      Este es el subtitulo
                    </p>
                    <h3 className="text-lg text-gray-900 font-bold">
                      Episodio 3
                    </h3>
                  </div>
                </div>
              </div>
              <div className="max-w-md ml-4 rounded-xl cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex flex-col text-justify">
                    <h3 className="text-lg text-gray-900 font-bold">
                      Titulo Podcast
                    </h3>
                    <p className="text-base text-gray-700 font-normal">
                      Este es el subtitulo
                    </p>
                    <h3 className="text-lg text-gray-900 font-bold">
                      Episodio 4
                    </h3>
                  </div>
                </div>
              </div>
            </div>
                <div className="container flex justify-end">
                  <p className="text-lg text-gray-700 mr-6 font-bold py-6"> Ver todos </p>
                </div>
          </div>
        </section>
        <section>
          <div className="container w-full py-10">
            <h3 className="py/3 text-2xl mb-4 ml-4 font-bold text-blue-400"> WEBCAST </h3>
            <div className="flex flex-nowrap flex-row justify-evenly">
              <div className="max-w-md ml-4 rounded-xl cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex flex-col text-justify">
                    <h3 className="text-lg text-gray-900 font-bold">
                      Titulo Podcast
                    </h3>
                    <p className="text-base text-gray-700 font-normal">
                      Este es el subtitulo
                    </p>
                    <h3 className="text-lg text-gray-900 font-bold">
                      Episodio 1
                    </h3>
                  </div>
                </div>
              </div>
              <div className="max-w-md ml-4 rounded-xl cursor-pointer shadow-lg hover:shadow-2xl">
                <div className="p-4">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
                    alt="Dog"
                  />
                </div>
                <div className="flex justify-between p-6">
                  <div className="flex flex-col text-justify">
                    <h3 className="text-lg text-gray-900 font-bold">
                      Titulo Podcast
                    </h3>
                    <p className="text-base text-gray-700 font-normal">
                      Este es el subtitulo
                    </p>
                    <h3 className="text-lg text-gray-900 font-bold">
                      Episodio 3
                    </h3>
                  </div>
                </div>
              </div>
            </div>
                <div className="container flex justify-end">
                  <p className="text-lg text-gray-700 mr-6 font-bold py-6"> Ver todos </p>
                </div>
          </div>
        </section>
        <section>
          <div className="container flex">
          <Image
                src="/img/home/Footer.jpeg"
                width={1920}
                height={700}
                className="object-cover object-top"
                alt="Aqui va el alt de la imagen"
              />
          </div>
        </section>
      </main>
    </Layout>
  );
}
