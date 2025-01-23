// import React from "react";

import bgDecoration1 from "../../public/assets/deco/bgDecoration1.svg";
import bgDecoration2 from "../../public/assets/deco/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/deco/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.webp";
import img2 from "../../public/assets/imgs/img2.webp";
import img3 from "../../public/assets/imgs/img3.webp";

import { Carousel } from "flowbite-react";

const CrInicial = () => {
  return (
    <>
      <Carousel slide={false}>
        <img src={plazaChe} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </Carousel>
    </>
  );
};

export default CrInicial;
