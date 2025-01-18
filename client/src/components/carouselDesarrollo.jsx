// import React from "react";

import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../../public/assets/imgs/img2.jpg";
import img3 from "../../public/assets/imgs/img3.png";

import { Carousel } from "flowbite-react";

const CarouselDesarrollo = () => {
  return (
    <>
      <Carousel>
        <img src={plazaChe} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </Carousel>
    </>
  );
};

export default CarouselDesarrollo;
