import Link from "next/link";

const Navbar = () => {
    return (
    <header className="text-white-600 body-font bg-white-400 border-b">
        <div className="container mx-auto flex flex-nowrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium itemKTs-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-green-400">Pro<span className="text-gray-500">Analytics</span></span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
            <a className="mr-5 hover:text-gray-600">Inicio</a>
            </Link>
            <Link href="/nosotros">
            <a className="mr-5 hover:text-gray-600">Nosotros</a>
            </Link>
            <Link href="/servicios">
            <a className="mr-5 hover:text-gray-600">Servicio</a>
            </Link>
            <Link href="/diferenciadores">
            <a className="mr-5 hover:text-gray-600">Diferenciadores</a>
            </Link>
            <Link href="/experiencia">
            <a className="mr-5 hover:text-gray-600">Experiencia</a>
            </Link>
            <Link href="/mas">
            <a className="mr-5 hover:text-gray-600">Más</a>
            </Link>
            <Link href="/blog">
            <a className="mr-5 hover:text-gray-600">Blog</a>
            </Link>
        </nav>
        <Link href="/contactanos"> 
        <button className="inline-flex items-center text-white bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-400 rounded text-base mt-4 md:mt-0">
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
        </Link>
        </div>
    </header>
    );
};

export default Navbar;
