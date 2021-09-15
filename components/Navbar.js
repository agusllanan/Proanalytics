import Link from "next/link";

const Navbar = () => {
    return (
    <header className="text-white-600 body-font bg-white-400 border-b">
        <div className="container mx-auto flex flex-nowrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-1/3" src="/img/logo.png"></img>
        </a>
        <nav className="md:ml-auto flex flex-nowrap items-center text-base justify-center">
            <Link href="/">
            <a className="mr-5 text-xl hover:text-keppel-600">Inicio</a>
            </Link>
            <Link href="/nosotros">
            <a className="mr-5 text-xl hover:text-keppel-600">Nosotros</a>
            </Link>
            <Link href="/servicios">
            <a className="mr-5 text-xl hover:text-keppel-600">Servicios</a>
            </Link>
            <Link href="/diferenciadores">
            <a className="mr-5 text-xl hover:text-keppel-600">Aprendizaje</a>
            </Link>
            <Link href="/experiencia">
            <a className="mr-5 text-xl hover:text-keppel-600">Casos</a>
            </Link>
            <Link href="/blog">
            <a className="mr-5 text-xl hover:text-keppel-600">Blog</a>
            </Link>
        </nav>
        <Link href="/contactanos"> 
        <button className="inline-flex text-xl items-center text-white bg-keppel-500 border-0 py-2 px-4 focus:outline-none hover:bg-keppel-600 rounded-md mt-4 md:mt-0">
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
