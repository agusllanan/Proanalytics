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
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-4xl font-medium title-font mb-4 text-green-600 tracking-widest">
                NUESTRO EQUIPO DE TRABAJO
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-green-500 text-xl">
                Nuestro equipo de trabajo cuenta con excelentes capacidades y conocimiento en sus areas de especializacion
            </p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://dummyimage.com/200x200"
                />
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                    </h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                    </p>
                    <span className="inline-flex">
                    <a className="text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
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
                    src="https://dummyimage.com/201x201"
                />
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                    Alper Kamu
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                    </p>
                    <span className="inline-flex">
                    <a className="text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
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
                    src="https://dummyimage.com/204x204"
                />
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                    Atticus Finch
                    </h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                    </p>
                    <span className="inline-flex">
                    <a className="text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
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
                    <h2 className="title-font font-medium text-lg text-gray-900">
                    Henry Letham
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                    </p>
                    <span className="inline-flex">
                    <a className="text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                        <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
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
