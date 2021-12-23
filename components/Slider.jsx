import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderSix() {
  var settings = {
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      swipeToSlide: true,
  };
  return (
    <Slider className="flex" {...settings}>
            <div className="p-4 max-w-[500px] min-w-[290px] max-h-[770px] flex-shrink-0">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg ">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones_Mesa de trabajo 1.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center "
                    alt="Aqui va el alt de la imagen"
                  />
                  <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                    BASIC -{" "}
                    <span className="font-bold text-gray-900">
                      QUICK SMART TRAININGS
                    </span>
                  </h3>
                  <p className="leading-relaxed mb-3 text-justify">
                    Con la asesoría de nuestro Coach, podrás elegir entre uno o
                    varios temas de nuestro catálogo de servicios ajustándose a
                    un tiempo y presupuesto objetivo.
                  </p>
                  <div className="flex items-center flex-nowrap">
                    <Link href="/six-sigma/basic-quick-smart-trainings">
                      <a>
                        <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-20">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 max-w-[500px] min-w-[290px] max-h-[750px] flex-shrink-0">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones-02.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center "
                    alt="Aqui va el alt de la imagen"
                  />
                  <h2 className="title-font text-lg font-medium text-gray-900 my-3">
                    NIVEL 1 -{" "}
                    <span className="font-bold text-gray-900">
                      LEAN 6 SIGMA WHITE BELT
                    </span>
                  </h2>
                  <p className="leading-relaxed mb-3 text-left">
                    Primera etapa de entrenamiento y certificación donde se
                    aprenden y practican conceptos y herramientas básicas de{" "}
                    <span className="font-bold text-indigo-500">
                      Lean Six Sigma.
                    </span>{" "}
                    El curso será la base para el entendimiento de la
                    metodología DMAIC.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/six-sigma/nivel1-lean-6sigma-white-belt">
                      <a>
                        <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-14">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 max-w-[500px] min-w-[290px] max-h-[750px] flex-shrink-0">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <Image
                    src="/img/six-sigma/Certificaciones-03.png"
                    width={1200}
                    height={1200}
                    className="object-cover rounded-xl object-center"
                    alt="Aqui va el alt de la imagen"
                  />
                  <h1 className="title-font text-lg font-medium text-gray-900 my-3">
                    NIVEL 2 -{" "}
                    <span className="font-bold text-gray-900">
                      LEAN 6 SIGMA YELLOW BELT
                    </span>
                  </h1>
                  <p className="leading-relaxed mb-3 text-justify">
                    Durante el proceso de certificación podrás adquirir
                    conocimientos y usar{" "}
                    <span className="font-bold text-indigo-500">
                      herramientas comunes de Lean
                    </span>
                    . Al finalizar, podrás liderar proyectos{" "}
                    <span className="font-bold text-indigo-500">
                      Lean 6 Sigma
                    </span>{" "}
                    para identificar oportunidades, prevenir fallas, usar
                    herramientas de resolución de problemas, e incrementar la
                    eficiencia en los procesos.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/six-sigma/nivel2-lean-6sigma-yellow-belt">
                      <a>
                        <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250">
                          Ver más
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 max-w-[500px] min-w-[290px] max-h-[750px] flex-shrink-0">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/six-sigma/Certificaciones-04.png"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center"
                  alt="Aqui va el alt de la imagen"
                />
                <h2 className="title-font text-lg font-medium text-gray-900 my-3">
                  NIVEL 3 -{" "}
                  <span className="font-bold text-gray-900">
                    LEAN 6 SIGMA GREEN BELT
                  </span>
                </h2>
                <p className="leading-relaxed mb-3 text-justify">
                  Durante esta etapa en{" "}
                  <span className="font-bold text-indigo-500">
                    Lean 6 Sigma.
                  </span>{" "}
                  Podrás desarrollarte como líder de proyectos de mejora
                  continua que requieran un complejo nivel de análisis y toma de
                  decisiones.
                </p>
                <div className="flex items-center flex-nowrap ">
                  <Link href="/six-sigma/nivel3-lean-6sigma-green-belt">
                    <a>
                      <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-18">
                        Ver más
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 max-w-[500px] min-w-[290px] max-h-[750px] flex-shrink-0">
            <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Image
                  src="/img/six-sigma/Certificaciones-05.png"
                  width={1200}
                  height={1200}
                  className="object-cover rounded-xl object-center"
                  alt="Aqui va el alt de la imagen"
                />
                <h2 className="title-font text-lg font-medium text-gray-900 my-3">
                  NIVEL 4 -{" "}
                  <span className="font-bold text-gray-900">
                    LEAN 6 SIGMA BLACK BELT
                  </span>
                </h2>
                <p className="leading-relaxed mb-3 text-left">
                  Nivel de{" "}
                  <span className="font-bold text-indigo-500">
                    certificación Lean 6 Sigma
                  </span>{" "}
                  recomendado para experimentados{" "}
                  <span className="font-bold text-indigo-500">
                    Green o Yellow belts.
                  </span>{" "}
                  Como participante, podrás desarrollar habilidades y
                  conocimientos enfocados a liderar proyectos complejos clave y
                  de alto impacto a la organización.
                </p>
                <div className="flex items-center flex-wrap ">
                  <Link href="/six-sigma/nivel4-lean-6sigma-black-belt">
                    <a>
                      <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-6">
                        Ver más
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </Slider>
  );
}