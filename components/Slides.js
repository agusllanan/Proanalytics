import Image from 'next/image';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const data = [
  {
    id: '1',
    title: 'BASIC - QUICK SMART TRAININGS',
    description: 'Con la asesoría de nuestro Coach, podrás elegir entre uno o varios temas de nuestro catálogo de servicios ajustándose a un tiempo y presupuesto objetivo',
    imgUrl: 'url(/img/six-sigma/Certificaciones_Mesa de trabajo 1.png)',
    link: "/six-sigma/basic-quick-smart-trainings",
  },
  {
    id: '2',
    title: 'NIVEL 1 - LEAN 6 SIGMA WHITE BELT',
    description: 'Primera etapa de entrenamiento y certificación donde se aprenden y practican conceptos y herramientas básicas de Lean Six Sigma. El curso será la base para el entendimiento de la metodología DMAIC.',
    imgUrl: 'url(/img/six-sigma/Certificaciones-02.png)',
    link: "/six-sigma/nivel1-lean-6sigma-white-belt",
  },
  {
    id: '3',
    title: 'NIVEL 2 - LEAN 6 SIGMA YELLOW BELT',
    description: 'Durante el proceso de certificación podrás adquirir conocimientos y usar herramientas comunes de Lean. Al finalizar, podrás liderar proyectos Lean 6 Sigma para identificar oportunidades, prevenir fallas, usar herramientas de resolución de problemas, e incrementar la eficiencia en los procesos.',
    imgUrl: 'url(/img/six-sigma/Certificaciones-03.png)',
    link: "/six-sigma/nivel2-lean-6sigma-yellow-belt",
  },
  {
    id: '4',
    title: 'NIVEL 3 - LEAN 6 SIGMA GREEN BELT',
    description: 'Durante esta etapa en Lean 6 Sigma. Podrás desarrollarte como líder de proyectos de mejora continua que requieran un complejo nivel de análisis y toma de decisiones.',
    imgUrl: 'url(/img/six-sigma/Certificaciones-04.png)',
    link: "/six-sigma/nivel3-lean-6sigma-green-belt",
  },
  {
    id: '5',
    title: 'NIVEL 4 - LEAN 6 SIGMA BLACK BELT',
    description: 'Nivel de certificación Lean 6 Sigma recomendado para experimentados Green o Yellow belts. Como participante, podrás desarrollar habilidades y conocimientos enfocados a liderar proyectos complejos clave y de alto impacto a la organización.',
    imgUrl: 'url(/img/six-sigma/Certificaciones-05.png)',
    link: "/six-sigma/nivel4-lean-6sigma-black-belt",
  },
]

const Slides = () => {

  return (
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map( info => (
        <SwiperSlide key={info.id} className="h-[750px] w-[300ox] border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <div className="p-6">
              <Image 
              src={info.imgUrl}
              width={1200}
              height={1200}
              className="object-cover rounded-xl object-center"
              alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">{info.title}</h3>
              <p className="leading-relaxed mb-3 text-justify">
              {info.description}
              </p>
              <div className="flex items-center flex-wrap">
              <Link href={info.link}>
                <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250">
                  Ver más
                </button>
              </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides
