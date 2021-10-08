import Layout from "../../components/Layout";
import Image from "next/image";

export default function nosotros() {
  return (
    <Layout
      title="Nosotros | Proanalytics"
      description="Agregue una descripcion"
    >
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl mb-4 font-bold text-green-600">
            Nuestro Equipo
          </h1>
          <p className="mb-8 leading-relaxed w-2/3 text-justify">
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-4xl font-medium title-font mb-4 text-green-600 tracking-widest">
              NUESTRO EQUIPO DE TRABAJO
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-green-500 text-xl">
              Nuestro equipo de trabajo cuenta con excelentes capacidades y
              conocimiento en sus areas de especializacion
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/204x204"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-keppel-500">
                    Rosy Martínez Reyes
                  </h2>
                  <h3 className="text-gray-500 mb-3">
                    Consultora especializada en Estudios Organizacionales
                  </h3>
                  <p className="mb-4">
                    Mi objetivo profesional es facilitar de información a las
                    Organizaciones para que los colaboradores se desarrollen en
                    ambientes expansivos de trabajo.
                  </p>
                  <span className="inline-flex">
                    <a className="ml-3 text-keppel-500"
                    href="https://www.linkedin.com/in/rosy-mart%C3%ADnez-reyes-49810540/"
                    target="_blank"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://dummyimage.com/206x206"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-keppel-500">
                    Raul Banda
                  </h2>
                  <h3 className="text-gray-500 mb-3">Operations Leader</h3>
                  <p className="mb-4">
                  10 years experience automotive and industrial business. Mainly in materials and purchasing. Supply chain managemente, Inventory management, Projects management, negotiations, supplier developments, risk mitigations.
                  </p>
                  <span className="inline-flex">
                  <a className="ml-3 text-keppel-500"
                    href="https://www.linkedin.com/in/mbaraulbanda/"
                    target="_blank"
                    >
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
