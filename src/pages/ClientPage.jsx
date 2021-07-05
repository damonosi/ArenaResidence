import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Client.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 0,
    transition: { ease: "easeInOut" },
  },
};

const CarData = [
  {
    id: 1,
    text: "Apartamente si case foarte bine lucrate, moderne si cu bun gust. Suprafete bine gandite si optimizate.",
  },
  {
    id: 2,
    text: " Toate proiectele par a fi făcute sub lupă. Atenția la detalii, oamenii, profesionalismul, seriozitatea, produsele de calitate, și multe alte calități diferențiază acest dezvoltator de mulți alții, nu din Bacău ci din țară. Personal nu am văzut blocuri făcute atat de bine și de frumos, întreținute atat de curat, făcute cu suflet la noi in țara. Felicitări din toată inima si cu mare admirație! Sunteți dovada clară că omul sfințește locul! 👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼",
  },
  {
    id: 3,
    text: "Concept sănătos românesc.... Dacă nu mergem in Emiratele Arabe macar sa le aducem noi la noi... Succes în proiecte...frumos!!!",
  },
];

const ClientPage = () => {
  return (
    <CarouselProvider naturalSlideWidth totalSlides={3}>
      <div className="contine">
        <Slider>
          <Slide className="slides" index={0}>
            <div className="carBack">
              <h1 className="sliText">
                "Apartamente si case foarte bine lucrate, moderne si cu bun
                gust. Suprafete bine gandite si optimizate."
              </h1>
              <h2 className="sliText2">Client</h2>
            </div>
          </Slide>
          <Slide className="slides" index={1}>
            <div className="carBack">
              <h1 className="sliText">
                "Toate proiectele par a fi făcute sub lupă. Atenția la detalii,
                oamenii, profesionalismul, seriozitatea, produsele de calitate,
                și multe alte calități diferențiază acest dezvoltator de mulți
                alții, nu din Bacău ci din țară. Personal nu am văzut blocuri
                făcute atat de bine și de frumos, întreținute atat de curat,
                făcute cu suflet la noi in țara. Felicitări din toată inima si
                cu mare admirație! Sunteți dovada clară că omul sfințește locul!
                👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼"
              </h1>
              <h2 className="sliText2">Client</h2>
            </div>
          </Slide>
          <Slide className="slides" index={2}>
            <div className="carBack">
              <h1 className="sliText">
                "Concept sănătos românesc.... Dacă nu mergem in Emiratele Arabe
                macar sa le aducem noi la noi... Succes în proiecte...frumos!!!"
              </h1>
              <h2 className="sliText2">Client</h2>
            </div>
          </Slide>
        </Slider>
        <ButtonBack>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ButtonBack>
        <ButtonNext>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default ClientPage;
