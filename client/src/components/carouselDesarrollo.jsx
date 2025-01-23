import img40 from "../../public/assets/imgs/img40.png";
import { Carousel } from "flowbite-react";

const CarouselDesarrollo = () => {
  return (
    <>
      <Carousel slide={false}>
        <img src={img40} alt="" />
      </Carousel>
    </>
  );
};

export default CarouselDesarrollo;
