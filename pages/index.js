import Layout from "../components/Layout";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Servicios from "../components/Servicios";
import Dropdown from "../components/Dropdown";
import "animate.css";

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
        <Dropdown />
        <section className="text-gray-600 body-font">
          <div className="w-full mx-auto flex px-14 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="title-font text-3xl py-4 md:py-0 md:text-5xl mb-4 font-mont font-normal text-gray-500">
                ANALIZA Y<br />{" "}
                <span className="font-semibold font-mont text-keppel-600">
                  MONITOREA
                </span>
              </h2>
              <p className="mb-8 leading-relaxed w-full text-lg text-justify">
                Lo que se mide, se puede mejorar. <br /> <br />
                Conoce cómo las personas pueden ser más productivas y felices en
                su trabajo con{" "}
                <span className="font-bold text-keppel-500">
                  procesos más efectivos y eficientes
                </span>{" "}
                a través del{" "}
                <span className="font-bold text-keppel-500">
                  análisis y monitoreo de información, uso de herramientas e
                  implementación de metodologías.{" "}
                </span>
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white mx-auto bg-keppel-600 border-0 py-2 px-6 focus:outline-none hover:bg-keppel-400 rounded text-lg">
                  Comenzar
                </button>
              </div>
            </div>
            <div className="lg:ml-4 lg:w-1/2 md:w-1/2 w-5/6">
              <Image
                src="/img/home/Portada.jpeg"
                width={1400}
                height={1000}
                className="animate__animated animate__fadeInRight relative h-0 object-cover rounded-xl object-center pb-2/3"
                alt="Aqui va el alt de la imagen"
              />
            </div>
          </div>
          {/* Aca va la seccion del video */}
          <div className="w-full mx-auto bg-keppel-500 flex px-14 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-3xl md:text-6xl py-4 md:py-0 mb-4 font-mont font-medium text-white">
                QUIENES SOMOS?{" "}
              </h1>
              <p className="mb-8 w-2/3 leading-relaxed w/80 text-white text-justify">
                Profesionales que han trabajado con y para personas y que
                valoran servir, conforman{" "}
                <span className="font-bold">PROANALYTICS:</span> una empresa
                dedicada a utilizar la experiencia y las herramientas para
                obtener mejores resultados en beneficio de las empresas y sus
                colaboradores.
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
          <Servicios />
        </section>
        <section className="text-gray-600 body-font">
          <div className="w-full">
            <div className="flex flex-wrap text-center">
              <div className="py-10 bg-blue-400 w-1/3">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                  +20
                </h2>
                <p className="leading-relaxed font-bold text-lg text-white">
                  AÑOS DE EXPERIENCIA
                </p>
              </div>
              <div className="py-10 bg-blue-300 w-1/3">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                  + 1,000
                </h2>
                <p className="leading-relaxed font-bold text-lg text-white">
                  PERSONAS IMPACTADAS
                </p>
              </div>
              <div className="py-10 bg-blue-400 w-1/3">
                <h2 className="title-font font-bold sm:text-4xl text-3xl text-white">
                  + 300
                </h2>
                <p className="leading-relaxed font-bold text-lg text-white">
                  PROYECTOS EXITOSOS
                </p>
              </div>
            </div>
          </div>
          {/* //Aca va la seccion de Nuestra experiencia a tu alcance */}
          <div className="w-full mx-auto bg-curious-blue-1 00 flex px-14 py-16 md:flex-row flex-col items-center bg-curious-blue-100">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 className="font-normal py-4 md:py-0 text-4xl lg:text-5xl mb-4 text-gray-500">
                NUESTRA EXPERIENCIA <br />{" "}
                <span className="font-semibold text-blue-500">
                  A TU ALCANCE
                </span>
              </h1>
              <p className="mb-8 leading-relaxed w-full text-justify">
                <span className="font-bold text-keppel-500">Herramientas:</span>{" "}
                conoce las mejores herramientas de gestión y cómo usarlas para
                obtener mejores resultados en tu empresa. <br />
                <span className="font-bold text-keppel-500">
                  Experiencia:
                </span>{" "}
                te acompañamos y asesoramos en tus proyectos para que alcances
                tus objetivos. <br />
                <span className="font-bold text-keppel-500">
                  Resultados:
                </span>{" "}
                mide el impacto de la implementación de nuestra experiencia y
                herramientas como lo han hecho nuestros clientes.
              </p>
              <div className="flex justify-center"></div>
            </div>
            <div className=" lg:w-1/2 md:w-1/2 w-5/6">
              <Image
                src="/img/home/experiencia.jpeg"
                width={1400}
                height={1000}
                className="object-cover object-center rounded-lg"
                alt="Aqui va el alt de la imagen"
              />
            </div>
          </div>
        </section>
        {/* Para hacer un hover scale o rotation hay que hacer esto hover:scale-105 transform transition-all duration-500 */}
        <section>
          <div className=" w-full py-10">
            <h3 className="text-center md:text-left mx-auto py-3 text-2xl mb-4 ml-4 font-bold text-blue-400">
              {" "}
              PODCAST{" "}
            </h3>
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
            </div>
            <div className="container flex justify-end">
              <p className="text-lg text-gray-700 mr-6 font-bold py-6">
                {" "}
                Ver todos{" "}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full py-10">
            <h3 className="text-center md:text-left py-3 text-2xl mb-4 ml-4 font-bold text-blue-400">
              {" "}
              WEBCAST{" "}
            </h3>
            <script
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></script>
            <div className="elfsight-app-9ed6c0ff-4917-4325-aae1-8937cac11a8b"></div>
          </div>
        </section>
        <section>
          <div className="flex w-full ">
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
