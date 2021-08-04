import Link from "next/link";

const Navbar = () => {
    return (
    <header className="text-white-600 body-font bg-white-400">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium itemKTs-center text-gray-900 mb-4 md:mb-0">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
            >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-black">Pro<span className="text-gray-500">analytics </span></span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
            <a className="mr-5 hover:text-gray-900">Inicio</a>
            </Link>
            <Link href="/nosotros">
            <a className="mr-5 hover:text-gray-900">Nosotros</a>
            </Link>
            <Link href="/servicios">
            <a className="mr-5 hover:text-gray-900">Servicio</a>
            </Link>
            <Link href="/diferenciadores">
            <a className="mr-5 hover:text-gray-900">Diferenciadores</a>
            </Link>
            <Link href="/experiencia">
            <a className="mr-5 hover:text-gray-900">Experiencia</a>
            </Link>
            <Link href="/mas">
            <a className="mr-5 hover:text-gray-900">Más</a>
            </Link>
        </nav>
        <button className="inline-flex items-center text-white bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0">
            Contáctanos
            <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button>
        </div>
    </header>
    );
};

export default Navbar;
