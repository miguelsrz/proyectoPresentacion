import { useContext } from "react";
import { AppContext } from "../context/presentacionContext";

import bgDecoration1 from "../../public/assets/bgDecoration1.svg";
import bgDecoration2 from "../../public/assets/bgDecoration2.svg";
import bgDecoration3 from "../../public/assets/bgDecoration3.svg";
import plazaChe from "../../public/assets/imgs/Plaza_Che,_Bogotá.jpg";
import img2 from "../../public/assets/imgs/img2.jpg";
import img3 from "../../public/assets/imgs/img3.png";

import CarouselDesarrollo from "./carouselDesarrollo";

const DesarrolloProyecto = () => {
  const { activeComponent } = useContext(AppContext);

  const thisComponent = "desarrollo";

  if (activeComponent === thisComponent) {
    return (
      <>
        <section
          id="intro"
          className="relative z-20 flex min-h-[750px] justify-center bg-gray-100 px-10 py-20 text-gray-950 sm:px-16"
        >
          <img
            className="absolute -top-[10px] right-0 w-1/2 -scale-x-100 md:-top-[25px] xl:-top-[40px]"
            src={bgDecoration3}
            alt=""
          />
          <div className="grid h-auto max-w-[1320px] grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8">
            <div className="xl:mr-12">
              <h2 className="mb-9 font-schabo text-5xl tracking-widest text-black sm:text-7xl lg:text-8xl">
                DESARROLLO DE <span className="text-purple-900">PROYECTO</span>
              </h2>
              <p className="mb-9 text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum efficitur nec nisl at consectetur. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Cras condimentum ligula mattis turpis malesuada
                consequat. Quisque metus quam, mattis mattis mauris laoreet,
                semper pretium ex. Nulla facilisi. Sed bibendum aliquam magna,
                non finibus mauris gravida sed. Curabitur mollis suscipit orci,
                id commodo nisl efficitur in. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Quisque
                vel aliquam neque. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                tincidunt condimentum cursus. Aliquam efficitur leo non est
                viverra fermentum. Aliquam placerat sapien non ante condimentum
                mollis.
              </p>
            </div>
            <figure className="relative z-10 flex h-[320px] w-full sm:h-[480px] xl:h-auto">
              <img
                src={img3}
                alt="Proyecto"
                className="z-10 h-full w-full object-cover shadow"
              />
              <div className="absolute left-[5%] top-[5%] z-0 h-full w-full border-2 border-black"></div>
              <div className="absolute bottom-[2%] left-[2%] z-0 h-full w-full bg-black"></div>
            </figure>
          </div>

          <img
            className="absolute -bottom-[10px] left-0 w-1/2 -scale-y-100 md:-bottom-[25px] xl:-bottom-[40px]"
            src={bgDecoration3}
            alt=""
          />
        </section>

        <section
          id="intro"
          className="relative z-10 flex min-h-[900px] justify-center bg-white px-10 py-20 text-gray-950 sm:px-16"
        >
          <div className="flex h-auto max-w-[1320px] flex-col gap-12">
            <h2 className="font-schabo text-5xl tracking-widest text-black sm:text-7xl lg:text-8xl">
              GALERIA DE <span className="text-purple-900">IMAGENES</span>
            </h2>
            <p className="text-pretty">
              Sed bibendum aliquam magna, non finibus mauris gravida sed.
              Curabitur mollis suscipit orci, id commodo nisl efficitur in. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Quisque vel aliquam neque. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Suspendisse tincidunt condimentum cursus. Aliquam
              efficitur leo non est viverra fermentum. Aliquam placerat sapien
              non ante condimentum mollis. Nam lectus erat, blandit ornare
              libero et, pharetra ornare enim. Vestibulum elementum dolor est,
              in pellentesque est laoreet id. Aliquam ac sodales tellus, at
              laoreet diam. Maecenas aliquet quam non tortor congue porta. In
              dui velit, aliquam sed dignissim eu.
            </p>
            <div className="min-h-[360px] w-full rounded bg-black shadow-lg sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px]">
              <CarouselDesarrollo></CarouselDesarrollo>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};

export default DesarrolloProyecto;
