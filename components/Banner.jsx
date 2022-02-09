import Image from "next/image";

export const Banner = (imgUrl, bgImg) => {

  return <div 
        className="bg-no-repeat bg-cover bg-center relative h-[500px] block"
        style={{
          backgroundImage: {bgImg}
        }}>
    <img 
      src= {imgUrl}
      layout='fill'
      className="object-cover"
      alt=""
    />
  </div>;
};