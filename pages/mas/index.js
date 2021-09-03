import Layout from "../../components/Layout";
import Image from "next/image";

export default function mas() {
    return (
    <Layout title="Mas | Proanalytics" description="Agregue una descripcion">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl mb-4 font-bold text-green-600">
            Mas informacion
            </h1>
            <p className="mb-8 leading-relaxed">
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
    </Layout>
    );
}
