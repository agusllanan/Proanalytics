import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";

export const consultorias = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log('Sending');
        
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
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(/img/clima-laboral/)`,
        }}
      >
        <div
          className="bg-no-repeat bg-cover bg-center relative border-b-4 border-[#4361ee]"
          style={{
            backgroundImage: `url(/img/clima-laboral/portada-consultoria.jpg)`,
          }}
        >
          <div className="h-screen flex flex-col lg:flex-row lg:justify-start sm:justify-center place-items-center font-mont">
            <div className="flex flex-col lg:ml-4 container content-center bg-white shadow-2xl w-4/5 lg:w-1/4 rounded-t-xl md:rounded-tr-none md:rounded-l-xl self-center h-[400px]">
              <h3 className="w-4/5 mx-auto text-2xl py-12 font-jost font-light text-[#4361ee]">
                CONSULTORÍA Y
                <br />
                <span className="font-bold">CAPACITACIÓN</span>
              </h3>
              <p className="w-4/5 mx-auto font-mont justify-center text-justify pb-20">
                Un{" "}
                <span className="font-bold text-[#4361ee] py-4">
                  ambiente organizacional
                </span>{" "}
                favorable, digno, libre de{" "}
                <span className="font-bold text-[#4361ee]">
                  violencia laboral y discriminación
                </span>{" "}
                se refleja en indicadores medibles como engagement, rotación,
                productividad, felicidad en el trabajo y otros.
              </p>
            </div>
            <div className="flex flex-col container content-center bg-[#4361ee] shadow-2xl lg:w-1/4 lg:rounded-r-xl w-4/5 h-[400px]">
              <p className="flex self-center w-4/5 md:ml-4 text-white text-justify pt-4 pb-4">
                Conoce más de estos temas y suscríbete a nuestro newsletter en
                donde te compartiremos temas de tu interés, sugerencias,
                experiencias y más.
              </p>
              <label
                htmlFor="footer-field"
                className="ml-14 mt-2 text-base text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out flex self-center"
                onChange={(e)=>{setName(e.target.value)}}
              />
              <label
                htmlFor="footer-field"
                className="ml-14 text-base mt-1 text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="ml-4 w-4/5 bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-keppel-200 focus:border-keppel-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 mt-2 transition-colors duration-200 ease-in-out flex self-center text-center"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
              <button className="ml-4 text-white font-bold bg-transparent border-2 border-white py-2 mb-4 mt-4 focus:outline-none hover:bg-white rounded w-4/5 flex place-content-center self-center hover:text-[#4361ee] transition ease-in duration-250"
              onClick={(e)=>{handleSubmit(e)}}
              >
                SUSCRÍBETE
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---- Nueva seccion --- */}
      <div className="flex sm:flex-row flex-col h-80">
        <div className="bg-white text-center flex sm:w-1/2 w-full">
          <h3 className=" mx-auto h-44 font-jost sm:py-24 sm:h-72 text-xl sm:text-4xl text-[#4361ee] font-light place-self-center">
            ¿POR QUÉ CONOCER Y ATENDER <br /> LOS TEMAS QUE IMPACTAN AL <br />{" "}
            <span className="font-bold">
              CLIMA ORGANIZACIONAL?
            </span>
          </h3>
        </div>
        <div className="bg-gray-100 w-full sm:w-1/2 flex justify-center items-center divide-y-2 divide-blue-500">
          <ul className=" flex-col py-6 list-disc w-4/5">
            <li className="text-gray-500 text-xl ">
              La ciencia comprueba cómo las personas que son felices en su
              trabajo mejoran su productividad.
            </li>
            <li className="text-gray-500 text-xl">
              Impacta positivamente en tus{" "}
              <span className="font-bold text-[#4361ee]">índices de rotación y retención</span>
            </li>
            <li className="text-gray-500 text-xl">
              Trabaja por el{" "}
              <span className="font-bold text-[#4361ee]">engagement y la fidelización</span> de
              las personas en tu empresa.
            </li>
            <li className="text-gray-500 text-xl">
              Convierte tu empresa en una{" "}
              <span className="font-bold text-[#4361ee]">marca empleadora.</span>
            </li>
            <li className="text-gray-500 text-xl">
              Cumple con las <span className="font-bold text-[#4361ee]">Normas en México</span>{" "}
              que buscan promover estos{" "}
              <span className="font-bold text-[#4361ee]">ambientes laborales.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-auto">
        <div className=" bg-[#4361ee] text-center items-center flex sm:w-1/2 w-full">
          <h3 className="h-44 sm:py-24 sm:h-72 text-xl font-jost sm:text-4xl text-white font-bold place-self-center">
            CAPACITACIONES Y ASESORÍAS
            <p className="text-lg w-full pt-3 px-8 text-white text-center">
              Se requiere ENTENDER para ATENDER, por ello sabemos lo importante
              que es personalizar nuestros servicios a tus necesidades. Te
              compartimos los temas en los que nuestro equipo puede acompañarte
              a través de capacitaciones y asesorías:
            </p>
          </h3>
        </div>
        <div className=" w-full sm:w-1/2 flex justify-center items-center bg-white">
          <ul className="w-4/5 flex-col list-disc my-8">
            <li className="text-gray-500 text-xl">
            Clima Laboral
            </li>
            <li className="text-gray-500 text-xl">
            Bienestar en el trabajo
            </li>
            <li className="text-gray-500 text-xl">
            Engagement
            </li>
            <li className="text-gray-500 text-xl">
            Marcas empleadoras
            </li>
            <li className="text-gray-500 text-xl">
            Organizaciones Positivas
            </li>
            <li className="text-gray-500 text-xl">
            Endomarketing
            </li>
            <li className="text-gray-500 text-xl">
            Violencia laboral, Igualdad Laboral, Discriminación
            </li>
            <li className="text-gray-500 text-xl">
            Factores de Riesgo Psicosocial, Entornos Favorables de Trabajo
            </li>
            <li className="text-gray-500 text-xl">
            Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación
            </li>
            <li className="text-gray-500 text-xl">
            NORMA Oficial Mexicana NOM-035-STPS-2018, Factores de riesgo psicosocial en el trabajo-Identificación, análisis y prevención
            </li>
            <li className="text-gray-500 text-xl">
            Planes de trabajo y seguimiento
            </li>
          </ul>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-top relative border-b-4 border-[#4361ee] h-[450px]"
        style={{
          backgroundImage: `url(/img/clima-laboral/footer-clima.jpg)`,
        }}
      >
        {/* <div className="absolute bg-gradient-to-b from-keppel-300 to-keppel-700 opacity-75 inset-0 z-0"></div> */}
        <div className="min-h-screen flex sm:flex-row lg:justify-start sm:justify-center align-middle font-mont">
          <div className=" flex sm:self-center justify-center w-full self-center lg:w-1/2 z-10">
            <div className="sm:mx-auto-align lg:ml-8 p-12 bg-white shadow-xl rounded-2xl w-4/5 md:w-2/3 h-auto">
              <div className="mb-4 divide-y divide-[#4361ee]">
                <h3 className="font-regular font-jost text-3xl py-4 text-[#4361ee]">
                  ¿QUIERES RECIBIR MÁS
                  <br />{" "}
                    CONTENIDO?
                </h3>
                <p className="text-gray-500 py-3 font-mont">
                Conoce más de estos temas y suscríbete a nuestro newsletter en donde te compartiremos temas de tu interés, sugerencias, experiencias y más.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-evenly lg:flex-row  ">
                  <Link href="/climaLaboral/diagnostico.js">
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex justify-center bg-transparent border-2 border-[#4361ee] hover:bg-[#4361ee] text-[#4361ee] hover:text-white p-3 my-2 lg:my-0 rounded-xl tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-250"
                    >
                      SUSCRÍBETE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row h-56">
        <div className="w-full sm:w-1/2 flex">
          {/* <h3 className="text-4xl text-gray-600 text-center mx-auto pt-4 items">
          ¿Quieres saber más sobre los temas que impactan al <span className="font-bold text-4xl text-scooter-600 text-center mx-auto pb-4">CLIMA ORGANIZACIONAL?
            </span>
          </h3> */}
        </div>
        <div className="w-full sm:w-1/2 flex">
        </div>
      </div>
    </Layout>
  );
};

export default consultorias;
