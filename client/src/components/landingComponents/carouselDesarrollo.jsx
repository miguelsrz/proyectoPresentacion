import img40 from "/public/assets/imgs/img40.png";
import img41 from "/public/assets/imgs/img41.png";
import img42 from "/public/assets/imgs/img42.png";
import img43 from "/public/assets/imgs/img43.png";
import img44 from "/public/assets/imgs/img44.png";
import img45 from "/public/assets/imgs/img45.png";
import img46 from "/public/assets/imgs/img46.png";
import img47 from "/public/assets/imgs/img47.jpg";
import img48 from "/public/assets/imgs/img48.jpg";
import { Flowbite, Carousel } from "flowbite-react";

const customTheme = {
  carousel: {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-700 group-hover:bg-purple-500 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full  -translate-x-1/2 -translate-y-1/2",
    },
    indicators: {
      active: {
        off: "bg-purple-400/50 hover:bg-purple-700 dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-purple-700 dark:bg-gray-800",
      },
    },
  },
};
const CarouselDesarrollo = () => {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel slide={false}>
          <img className="bg-black" src={img47} alt="" />
          <img className="bg-black" src={img40} alt="" />
          <img className="bg-black" src={img48} alt="" />
          <img className="bg-black" src={img41} alt="" />
          <img className="bg-black" src={img42} alt="" />
          <img className="bg-black" src={img43} alt="" />
          <img className="bg-black" src={img44} alt="" />
          <img className="bg-black" src={img45} alt="" />

          <img src={img46} alt="" />
        </Carousel>
      </Flowbite>
    </>
  );
};

export default CarouselDesarrollo;
