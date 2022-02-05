import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function nosotros() {
  return (
    <Layout
      title="Nosotros | Proanalytics"
      description="Agregue una descripcion"
    >
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-6xl mb-4 font-bold font-jost text-[#29ABE2]">
            Hacer las cosas bien,<br /> es posible cuando se quiere
          </h2>
          <p className="mb-8 leading-relaxed w-2/3 font-mont text-justify">
            Así surge PROANALYTICS, un proyecto en el que convencidos de que toda empresa que quiera profesionalizarse tomando decisiones en base a información o eficientizando con procesos que le permitan medir y trabajar en sus resultados.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#29ABE2] border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
              Ver mas
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="/img/nosotros/equipo.jpg"
            width={1200}
            height={1200}
            className="object-cover object-right rounded-lg"
            alt="Aqui va el alt de la imagen"
          />
        </div>
      </div>
      <div className="h-[500px] bg-gray-100 flex flex-col justify-center space-y-7 items-center">
        <h2 className="text-3xl font-mont w-1/2 text-[#29ABE2]">
          ¿Quiénes somos?
        </h2>
        <p className="w-1/2 text-lg text-justify font-mont">
          Sabemos también por experiencia, que las personas pueden trabajar en ambientes favorables, con trato digno, con condiciones seguras y óptimas cuando conocen sus derechos y junto con la empresa, construyen una cultura de trabajo que les permita potencializar sus talentos en beneficio personal y organizacional. 
          PROANALYTICS trabaja con y para personas y empresas que quieran seguir haciendo las cosas mejor y que deseen seguir conociendo los cómos para llevarlo a la práctica.
        </p>
    </div>
    <section className="flex flex-row ">
      <div className="w-full md:w-1/3">
        <div
          className="bg-no-repeat bg-cover bg-center h-[600px]"
          style={{
            backgroundImage: `url(/img/nosotros/rosy.jpeg)`,
          }}
      />
      </div>
      <div className="bg-[#29ABE2] flex flex-col justify-center space-y-7 items-center w-2/3 font-comm py-6">
        <h2 className="text-white text-2xl font-jost w-4/5">
          Acerca de nuestra fundadora
        </h2>
        <p className="text-white w-4/5 font-mont">
        Soy Rosy Martínez, Fundadora y Directora de PROANALYTICS, S.A. de C.V y me gustaría seguir compartiendo contigo a través de las experiencias de nuestro equipo buenas prácticas, experiencias y conocimientos que nos permitan seguir contribuyendo un México y sociedad de empresas profesionalizadas y trabajos dignos.
        </p>
        <div className="w-4/5">
        <Link href="/contacto">
        <button className="rounded-lg px-5 bg-white hover:bg-gray-200 text-[#29ABE2] py-3">
          Ponte en contacto conmigo
        </button>
        </Link>
        </div>
      </div>
    </section>
      <section className="flex flex-row space-x-10 h-[300px] items-center justify-center m-10">
      <div className="flex flex-col bg-gray-50 shadow-xl w-1/2 h-[200px] rounded-xl">
        <div className="flex flex-col justify-center space-y-7 items-center font-comm py-5">
          <h3 className="w-2/3 font-jost text-3xl text-[#29ABE2]">
            Nuestra Misión
          </h3>
          <p className="w-2/3 font-mont">
            Contribuimos a profesionalizar actividades y mejorar procesos en las empresas, para que las personas potencialicen sus talentos y superen sus propios objetivos.
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-50 shadow-xl w-1/2 h-[200px] rounded-xl">
        <div className="flex flex-col justify-center space-y-7 items-center font-comm py-5">
          <h3 className="w-2/3 font-jost text-3xl text-[#29ABE2]">
            Nuestra Visión
          </h3>
          <p className="w-2/3 font-mont" id="aqui">
            Ser reconocidos en México por el profesionalismo que promovemos y que demostramos en los servicios y clientes con los que trascendemos. 
          </p>
        </div>
      </div>
    </section>
    <section className="flex flex-col h-[400px] bg-[#29ABE2]">
          <div className="py-10 pl-28 w-5/6">
            <h3 className="text-white font-light font-jost text-3xl">
              Cómo actuamos
            </h3>
          </div>
          <div className="flex flex-row space-x-10 w-5/6 mx-auto">
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-mont w-1/3 space-y-5 p-4 flex flex-col items-center justify-center">
                <p className="">
                  <span className="font-bold">Con Transparencia</span>, generamos y trabajamos en información fundada en datos reales que argumentan nuestras conclusiones y nuestra asesoría
                </p>
            </div>
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-mont w-1/3 space-y-5 p-4 flex flex-col items-center justify-center">
                <p className="">
                  <span className="font-bold">Con Responsabilidad</span>, sabemos la delicadeza y la relevancia del manejo de información, por eso actuamos con responsabilidad en su trato.
                </p>
            </div>
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-mont flex flex-col items-center justify-center w-1/3 space-y-5 p-4">
                <p className="">
                  <span className="font-bold">Con compromiso</span>, con nuestros clientes, con las empresas y con la sociedad conociendo que los servicios que ofrecemos se traducirán en resultados y mejora para todos. 
                </p>
            </div>
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-mont w-1/3 space-y-5 p-4 flex flex-col items-center justify-center">
                <p className="">
                  <span className="font-bold">Con profesionalismo</span>, somos ejemplo generando valor a los servicios que ofrecemos, mejorando continuamente y desarrollando nuestras competencias enfocadas en  las necesidades de nuestros clientes.  
                </p>
            </div>
          </div>
        </section>
    </Layout>
  );
}
