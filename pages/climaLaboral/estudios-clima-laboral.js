import Layout from "../../components/Layout";
import Link from "next/link";
import {useState} from 'react';
import { ChatAlt2Icon, UserGroupIcon, FastForwardIcon } from '@heroicons/react/solid'

export const encuestaClimaLaboral = () => {

   const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log('Sending');
        
        let data = {
            name,
            email,
            telefono,
            message
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
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
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
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#ef476f]"
        style={{
          backgroundImage: `url(/img/clima-laboral/portada-diagnostico.jpg)`,
        }}
      >
        <div className="lg:h-screen h-auto flex flex-col lg:flex-row lg:justify-start justify-center place-items-center font-mont md:pl-10"
        id="aqui"
        >
          <div className="flex flex-col ml-0 lg:ml-4 container content-center bg-white shadow-2xl w-4/5 lg:w-1/4 rounded-t-xl md:rounded-tr-none md:rounded-l-xl self-center h-auto lg:h-[450px] mt-4 md:mt-0">
            <h3 className="w-4/5 mx-auto text-2xl font-jost pt-3 md:py-6 lg:py-12 text-[#ef476f] font-light">
              ESTUDIOS DE
              <br />
              <span className="text-[#ef476f] font-bold">CLIMA LABORAL</span>
            </h3>
            <p className="w-4/5 mx-auto justify-center font-mont text-justify py-4 md:pb-20">
              Encuesta y obtén resultados cuantitativos del{" "}
              <span className="font-bold text-[#ef476f]">
                clima laboral de tu empresa.
              </span>{" "}
              Profundiza y conoce la experiencia de trabajar en tu empresa según
              su gente. <br />
              <br />
              Te asesoramos sobre la mejor{" "}
              <span className="font-bold text-[#ef476f]">
                técnica para identificar el clima laboral
              </span>
              : entrevistas, focus group, observación, simulaciones de trabajo.
            </p>
          </div>
          <div className="flex flex-col container bg-[#ef476f] shadow-2xl lg:w-1/4 lg:rounded-r-xl w-4/5 h-[450px] justify-center font-mont mb-4 md:mb-0 rounded-b-xl md:rounded-bl-none">
            <p className="w-4/5 md:ml-4 self-center text-white pt-4 pb-4">
              ¿Quieres trabajar en{" "}
              <span className="font-bold">
                estrategias para mejorar el clima laboral en tu empresa?
              </span>
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
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
              onChange={(e)=>{setName(e.target.value)}}
            />
            <label
              htmlFor="footer-field"
              className="ml-[60px] text-base mt-1 text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <label
              htmlFor="footer-field"
              className="ml-[60px] mt-1 text-base text-white"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="ml-4 mb-1 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out self-center"
              onChange={(e)=>{setTelefono(e.target.value)}}
            />
            <button className="ml-4 text-white font-bold bg-transparent border-2 border-white  py-2 mb-4 mt-4 focus:outline-none self-center hover:bg-white hover:text-[#ef476f] rounded w-4/5 transition ease-in duration-250"
            onClick={(e)=>{handleSubmit(e)}}
            >
              SOLICITA TU DIAGNÓSTICO GRATUITO
            </button>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-auto">
        <div className="bg-white h-44 md:h-auto text-center flex sm:w-1/2 w-full">
          <h3 className="mx-auto text-xl sm:text-4xl font-bold self-center text-[#ef476f] font-jost">
            ¿POR QUÉ APLICAR NUESTROS <br />
              ESTUDIOS DE CLIMA LABORAL?
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center items-center font-mont">
          <ul className="w-4/5 flex-col py-10 space-y-2 list-disc">
            <li className="text-gray-500 text-xl ">
              Contamos con más de 10 años de experiencia en{" "}
              <span className="font-bold">
                investigación de ambientes laborales, consultoría y
                capacitación.
              </span>
            </li>
            <li className="text-gray-500 text-xl">
              Conocemos{" "}
              <span className="font-bold">herramientas y metodologías</span>{" "}
              para obtener información real sobre el{" "}
              <span className="font-bold">ambiente laboral de tu empresa.</span>
            </li>
            <li className="text-gray-500 text-xl">
              Hemos observado los{" "}
              <span className="font-bold">
                resultados y beneficios para las personas y las empresas.
              </span>
            </li>
            <li className="text-gray-500 text-xl">
              Creemos en el impacto de generar{" "}
              <span className="font-bold">ambientes de trabajo dignos</span>{" "}
              para incrementar{" "}
              <span className="font-bold">índices de productividad.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#ef476f] py-14">
        <div className="flex flex-col h-auto w-full font-mont">
          <h3 className="pb-6 text-xl font-jost sm:text-4xl text-white font-bold self-center">
            {" "}
            NUESTRA METODOLOGÍA
          </h3>
          <div className="div w-full flex flex-col md:flex-row">
            <div className="w-full h-80 md:w-1/3 flex flex-col">
            <div className="self-center py-4">
              <ChatAlt2Icon className="h-36 w-36 text-gray-50"/>
            </div>
              <h3 className="text-white font-bold font-jost text-xl self-center pb-3">ENTREVISTA DIAGNÓSTICO</h3>
              <p className="w-2/3 text-white text-center self-center items-center">
                Permítenos identificar la necesidades y expectativas de tu
                empresa.
              </p>

            </div>
            <div className="w-full h-80 md:w-1/3 flex flex-col">
            <div className="self-center py-4">
                <UserGroupIcon className="h-36 w-36 text-gray-50"/>
            </div>
              <h3 className="text-white font-bold font-jost text-xl self-center pb-3">ANÁLISIS DE CLIMA LABORAL</h3>
              <p className="w-2/3 text-white self-center text-center items-center">
                Analizamos según tus necesidades:{" "}
                <span className="font-bold">
                  satisfacción laboral, engagement empresarial, bienestar,
                  violencia laboral, estrés
                </span>{" "}
                y más.
              </p>
            </div>
            <div className="w-full h-80 md:w-1/3 flex flex-col">
            <div className="self-center py-4">
                <FastForwardIcon className="h-36 w-36 text-gray-50"/>
            </div>
              <h3 className="text-white font-bold font-jost text-xl self-center pb-3">RESULTADOS Y PLAN DE ACCIÓN</h3>
              <p className="w-2/3 text-white self-center items-center text-cente">
              Con los resultados te acompañamos en el diseño de acciones y seguimiento para la <span className="font-bold">mejora del clima laboral</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#ef476f]"
        style={{
          backgroundImage: `url(/img/clima-laboral/footer-clima.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="h-[700px] flex sm:flex-row lg:justify-start sm:justify-center align-middle">
          <div className=" flex justify-center w-full self-center lg:w-1/2 z-5">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-4/5 sm:w-full h-auto">
              <div className="mb-4 divide-y flex flex-col divide-[#ef476f] w-full">
                <h3 className="font-light text-3xl self-center font-jost py-4 text-[#ef476f]">
                  ¿QUIERES SABER CÓMO ESTÁ
                  <br />{" "}
                  <span className="text-[#ef476f] font-bold">
                    TU EMPRESA EN CLIMA LABORAL?
                  </span>
                </h3>
                <p className="text-gray-500 pt-4 self-center font-mont">
                  Conoce cuáles son los factores que generan insatisfacción en
                  tus colaboradores y estrategias para trabajar en la retención
                  y engagement de personal.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-transparent border-2 border-[#ef476f] hover:bg-[#ef476f] text-[#ef476f] hover:text-white p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg transition ease-in duration-250"
                    >
                      SOLICITA TU DIAGNÓSTICO GRATUITO
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex h-56 bg-[#ef476f] py-4 md:py-0">
          <h3 className="text-4xl text-white  text-center font-jost mx-auto self-center">
          ¿Quieres saber más sobre <br/> <span className="font-bold text-4xl text-white text-center mx-auto pb-4">Estudios de Clima Laboral?
            </span>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 flex h-auto md:h-56">
          <p className="items-center self-center w-4/5 mx-auto text-regular font-mont py-8 text-lg">
          Mejora el <span className="font-bold">clima laboral</span> de tu empresa con los recursos y estrategias que tenemos para ti. ¡Impulsa a tus colaboradores todos los días con nuestro contenido!</p>
        </div>
      </div>
    </Layout>
  );
};


export default encuestaClimaLaboral;
