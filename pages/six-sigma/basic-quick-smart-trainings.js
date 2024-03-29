import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const basicSmartTraining = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        let data = {
            name,
            email,
        };

        return await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then((res) => {
                if (res.status === 200) {
                    setSubmitted(true)
                    setName('')
                    setMessage('')
                    setTelefono('')
                    setEmail('')
                    setBody('')
                new Swal({
                    title:"Solicitud Eliminada",
                    text:"La solicitud ha sido eliminada de forma correcta.",
                    icon: "success"
                  })
                } else if (res.status === 404) {
                    console.log('Response not found!');
                }
            })
            .catch((err) => console.log(err))
        };


  return (
    <Layout>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-scooter-400"
        style={{
          backgroundImage: `url(/img/six-sigma/portadas/Portada-Six-Sigma-Quick-Smart.jpg)`,
        }}
      >
        <div className="h-screen flex flex-col px-10 lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
          <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl h-96 w-4/5 lg:w-1/4 rounded-t-xl sm:rounded-tr-none rounded-l-xl items-center self-center">
            <h3 className="flex flex-col font-light font-jost justify-center text-2xl mx-auto py-8 text-[#007ed5] place-self-center">
              BASIC{""}
              <span className="font-bold font-jost">
                QUICK SMART TRAININGS
              </span>
            </h3>
            <p className="w-4/5 mx-auto text-gray-500 justify-center">
              Con la asesoría de nuestro Coach, podrás elegir entre uno o varios
              temas de nuestro catálogo de servicios, ajustándonos a tu tiempo y
              presupuesto objetivo. Nuestros{" "}
              <span className="font-bold text-[#007ed5]">Quick Trainings</span>{" "}
              podrán ser exclusivos o abiertos, en formato presencial o virtual,
              dependiendo de tus necesidades.
            </p>
          </div>
          <div className="flex flex-col container bg-curious-blue-500 justify-center shadow-2xl h-96 lg:w-1/4 lg:rounded-r-xl w-4/5">
            <p className="flex self-center w-4/5 text-white">
              Si deseas obtener más información acerca de esta certificación, ingresa tu correo electrónico.
            </p>
            <label
              htmlFor="footer-field"
              className="ml-10 mt-8 leading-7 text-base text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 my-4 transition-colors duration-200 ease-in-out self-center"
              onChange={(e)=>{setName(e.target.value)}}
            />
            <button className="mt-2 text-white bg-transparent py-3 px-6 focus:outline-none hover:bg-white rounded w-4/5 self-center border-2 border-white hover:text-[#007ed5] transition ease-in duration-250"
            onClick={(e)=>{handleSubmit(e)}}
            >
              QUIERO MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
      <section 
        className="bg-no-repeat bg-cover bg-center relative h-[500px] flex flex-row space-x-80"
        style={{
          backgroundImage: `url(/img/six-sigma/banner/banner-quick.jpg)`,
        }}>
        <div className="py-10 px-16 justinfy-end w-1/3">
          <Image
            layout="fixed"
            width="600"
            height="400"
            src='/img/six-sigma/banner/certificado-quick.png' 
            className="rounded-lg self-center items-center"
            alt=""
            />
        </div>
        <div className="py-44 w-1/3 text-white space-y-5">
          <h3 className="font-jost text-xl">CERTIFICATE CON NOSOTROS</h3>
          <p className="font-mont text-lg">Al terminar este nivel recibirás un certificado con validez curricular para avalar los conocimientos aprendidos. Adquiere informes el día de hoy</p>
        </div>
      </section>
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto text-xl sm:text-4xl text-[#007ed5] font-bold font-jost self-center">
            ¿POR QUÉ TOMAR LA CERTIFICACIÓN?
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center items-center">
          <ul className="w-4/5 flex-col py-10 space-y-3 px-8 list-disc font-mont">
            <li className="text-gray-500 text-lg ">
              Las exigencias de los clientes demandan un alto nivel de calidad
              en productos y servicios.
            </li>
            <li className="text-gray-500 text-lg">
              <span className="font-bold text-[#007ed5]">
                Capacita a tu personal
              </span>{" "}
              para adquirir el conocimiento y poder cumplir con los
              requerimientos de clientes internos y externos.
            </li>
            <li className="text-gray-500 text-lg"> 
              Tu personal podrá resolver los problemas de forma metódica, eficaz
              y contundente.
            </li>
            <li className="text-gray-500 text-lg">
              Te preparamos junto con tu equipo, de forma personalizada para
              cubrir las necesidades y garantizar el éxito de tus proyectos.
            </li>
            <li className="text-gray-500 text-lg">
              Todos los proyectos estarán alineados a la estrategia de tu
              empresa.
            </li>
            <li className="text-gray-500 text-lg">
              Tu equipo de trabajo podrá identificar{" "}
              <span className="font-bold text-[#007ed5]">
                oportunidades de mejora, optimizar recursos,
              </span>{" "}
              incrementar la eficiencia y ejecutar la mejor solución.
            </li>
            <li className="text-gray-500 text-lg">
              Tu equipo podrá usar un lenguaje global común de trabajo.
            </li>
            <li className="text-gray-500 text-lg">
              La{" "}
              <span className="font-bold text-[#007ed5]">
                metodología Lean Six Sigma
              </span>{" "}
              proveerá de conocimiento y entrenamiento a todo el equipo para
              enfrentar los retos de forma sustentable.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 h-[700px] border-scooter-400"
        style={{
          backgroundImage: `url(/img/home/footer-six.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="flex sm:flex-row lg:justify-start sm:justify-center items-center">
          <div className=" flex w-full self-center justify-center lg:w-1/2 z-10 mx-16">
            <div className="lg:ml-8 p-12 bg-white mt-44 content-center shadow-xl rounded-2xl w-2/3 sm:w-full h-auto font-jost">
              <div className="mb-4 divide-y divide-[#007ed5]">
                <h3 className="font-light text-3xl py-4 text-[#007ed5]">
                  ¿QUIERES SABER MÁS SOBRE{" "}
                  <span className="font-bold text-[#007ed5]">SIX SIGMA?</span>
                </h3>
                <p className="text-gray-500 font-mont">
                  Conoce más sobre la importancia de la certificación, recursos
                  y estrategias para la mejora continua de tu organización.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/contactanos">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-transparent hover:bg-[#007ed5] text-[#007ed5] p-3 my-2 lg:my-0 rounded-xl tracking-wide hover:text-white font-semibold border-2 border-[#007ed5] cursor-pointer transition ease-in duration-250"
                    >
                      SOLICITA MÁS INFORMACIÓN
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row h-48">
        <div className="w-full sm:w-1/2 flex bg-[#007ed5]">
          <h3 className="text-4xl text-white font-jost text-center mx-auto self-center">
            ENTRENAMIENTO Y PERFILES
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex">
          <p className="w-4/5 mx-auto text-regular self-center text-gray-500 font-mont">
            <span className="font-bold text-[#007ed5]">
              Quick Smart Trainings
            </span>{" "}
            - No hay restricción ni perfil exclusivo. Cualquier persona que
            quiera adquirir el conocimiento y/o habilidades.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default basicSmartTraining;
