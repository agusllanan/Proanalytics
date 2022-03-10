import Layout from "../components/Layout";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Servicios from "../components/Servicios";
import Dropdown from "../components/Dropdown";
import "animate.css";
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

export default function Home() {
  configureAnchors({offset: 28, scrollDuration: 1000})

  return (
    <Layout title="Proanalytics" description="Agregue una descripcion">
      <main className="">
        <Dropdown />
        <section className="text-gray-600 body-font">
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-top relative"
        style={{ backgroundImage: `url(/img/home/portada-home.jpg)` }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-5 md:px-14">
            <div className="h-[500px] md:h-full sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-5/6 font-mont">
              <div className="mb-4">
                <h2 className="title-font text-3xl py-0 lg:text-4xl mb-4 font-jost font-light text-gray-500">
                ANALIZA Y<br />{" "}
                <span className="font-medium font-jost text-keppel-500">
                  MONITOREA
                </span>
                </h2>
                <p className="text-gray-500 text-base md:text-lg text-left pb-4">
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
              </div>
              <div className="space-y-5">
                <div className="flex flex-col lg:flex-row">
                  <a href="#servicios">
                  <button
                    type="submit"
                    className=" w-full lg:mr-3 flex lg:py-4 self-center justify-center bg-transparent border-2 border-keppel-500 text-keppel-500 p-3 hover:bg-keppel-500 hover:text-white rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
                  >
                    COMENZAR
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="w-full mx-auto flex px-14 lg:px-28 py-10 md:flex-row flex-col items-center bg-keppel-500">
          <div className="lg:w-1/2 md:w-1/2 w-5/6">
              <Image
                src="/img/home/foto-rosy.png"
                width={1400}
                height={1000}
                className="relative h-0 object-cover rounded-xl object-center pb-2/3"
                alt="Aqui va el alt de la imagen"
              />
            </div>
            <div className="lg:flex-grow md:pl-28 md:pr-2 md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="title-font text-3xl md:py-0 md:text-5xl mb-4 font-jost font-normal text-gray-50">
              ¿QUIÉNES SOMOS?{" "}
              </h2>
              <p className="mb-8 w-full text-lg font-mont leading-relaxed text-white text-justify pr-4">
                Profesionales que han trabajado con y para personas y que
                valoran servir, conforman{" "}
                <span className="font-bold">PROANALYTICS:</span> una empresa
                dedicada a utilizar la experiencia y las herramientas para
                obtener mejores resultados en beneficio de las empresas y sus
                colaboradores.
              </p>
              <div className="flex justify-center">
                <Link href="/nosotros">
                  <a>
                    <button className="inline-flex font-bold text-white mx-auto border-white border-2 py-2 px-6 focus:outline-none hover:bg-white hover:text-keppel-500 rounded text-lg transition ease-in duration-250">
                    Conócenos
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <ScrollableAnchor id={'servicios'}>
          <section>
          <Servicios />
          </section>
          </ScrollableAnchor>
        </section>
       <section className="w-full bg-gray-100 flex flex-col md:flex-row space-x-0 md:space-x-16 space-y-6 md:space-y-0 h-auto md:h-[400px] justify-around items-center px-10">
        <div className="w-4/5 md:w-1/3 space-y-8">
            <h3 className="pt-8 md:pt-0 text-2xl font-jost">
              ALIANZAS ESTRATÉGICAS
            </h3>
            <p className="font-mont pb-6 md:pb-0">
              En Proanalytics trabajamos de la mano con distintas organizaciones de talla nacional e internacional para brindar un servicio integral, profesional y 100% centrado en las personas.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <Image
              src="/img/clima-laboral/logos/logo-GPTW.jpeg"
              width={200}
              height={200}
              className="object-cover object-center"
              alt="Aqui va el alt de la imagen"
            />
          </div>
          <div className="flex justify-center flex-col space-y-4">
             <Image
              src="/img/clima-laboral/logos/Logo-Addition-Curvas.png"
              width={200}
              height={200}
              className="object-cover"
              alt="Aqui va el alt de la imagen"
            />
          </div>
        </section>
        <section className="text-gray-600 body-font">
          <div className="w-full">
            <div className="flex flex-wrap text-center font-jost">
              <div className="py-10 bg-curious-blue-500 w-1/3">
                <h3 className="title-font font-bold md:text-6xl text-3xl text-white">
                  +20
                </h3>
                <p className="leading-relaxed font-regular text-base text-white">
                  AÑOS DE EXPERIENCIA
                </p>
              </div>
              <div className="py-10 bg-shakespeare-500 w-1/3">
                <h3 className="title-font font-bold md:text-6xl text-3xl text-white">
                  +1,000
                </h3>
                <p className="leading-relaxed font-regular text-base text-white">
                  PERSONAS IMPACTADAS
                </p>
              </div>
              <div className="py-10 bg-curious-blue-500 w-1/3">
                <h3 className="title-font font-bold md:text-6xl text-3xl text-white">
                  +300
                </h3>
                <p className="leading-relaxed font-regular text-base text-white">
                  PROYECTOS EXITOSOS
                </p>
              </div>
            </div>
          </div>
          {/* //Aca va la seccion de Nuestra experiencia a tu alcance */}
          <div className="w-full mx-auto flex px-14 py-16 md:flex-row flex-col items-center bg-twilight-blue-500 lg:px-28">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h2 className="font-light font-jost py-4 md:py-0 text-4xl lg:text-5xl mb-4 text-gray-500">
                NUESTRA EXPERIENCIA <br />{" "}
                <span className="font-medium text-curious-blue-500 mb-10">
                  A TU ALCANCE
                </span>
              </h2> <br />
              <p className="mb-8 leading-relaxed w-4/5 text-lg font-mont text-left">
                <span className="font-bold text-curious-blue-500">Herramientas:</span>{" "}
                conoce las mejores herramientas de gestión y cómo usarlas para
                obtener mejores resultados en tu empresa. <br /> <br />
                <span className="font-bold text-curious-blue-500">
                  Experiencia:
                </span>{" "}
                te acompañamos y asesoramos en tus proyectos para que alcances
                tus objetivos. <br /> <br />
                <span className="font-bold text-curious-blue-500">
                  Resultados:
                </span>{" "}
                mide el impacto de la implementación de nuestra experiencia y
                herramientas como lo han hecho nuestros clientes.
              </p>
              <div className="flex justify-center">
              <Link href="/blog"> 
              <button className="inline-flex text-curious-blue-500 mx-auto  border-2 border-curious-blue-500 py-2 px-6 focus:outline-none hover:text-white hover:bg-curious-blue-500 rounded text-lg transition ease-in duration-250 font-mont"> Explora nuestro contenido </button>
              </Link>
              </div>
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
        {/* <section>
          <div className=" w-full py-10 font-mont">
            <h3 className="text-center md:text-left mx-auto py-3 px-10 text-2xl mb-4 ml-4 font-bold text-keppel-500">
              {" "}
              PODCAST{" "}
            </h3>
            <div className="flex flex-nowrap flex-row justify-between px-10">
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
        </section> */}
        {/* <section>
          <div className="w-full py-10">
            <h3 className="text-center md:text-left py-3 text-2xl mb-4 ml-4 font-bold font-mont text-keppel-500">
              {" "}
              WEBCAST{" "}
            </h3>
            <script
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></script>
            <div className="elfsight-app-9ed6c0ff-4917-4325-aae1-8937cac11a8b"></div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}
