import React from "react";
import { motion } from "framer-motion";
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
const ClientPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="clients"
      className="section no-page-title"
    >
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div
            className="one"
            data-threshold="0 0"
            data-jarallax-element="120 0"
          >
            <script>
              var textSlider_speed = "2000"; var textSlider_auto = "true"; var
              textSlider_hover = "true";
            </script>

            <div className="text-slider-wrapper relative">
              <div className="text-slider-header-quotes"></div>
              <div
                id="textSlider"
                className="text-slider slider owl-carousel owl-theme"
              >
                <div className="text-slide">
                  <p className="text-slide-content">
                    Apartamente si case foarte bine lucrate, moderne si cu bun
                    gust. Suprafete bine gandite si optimizate.
                  </p>
                  <img
                    className="text-slide-img"
                    src="images/quote_image_03.jpg"
                    alt=""
                  />
                  <p className="text-slide-name">Silviu Balan</p>
                  <p className="text-slide-position">CLIENT</p>
                </div>

                <div className="text-slide">
                  <p className="text-slide-content">
                    Toate proiectele par a fi făcute sub lupă. Atenția la
                    detalii, oamenii, profesionalismul, seriozitatea, produsele
                    de calitate, și multe alte calități diferențiază acest
                    dezvoltator de mulți alții, nu din Bacău ci din țară.
                    Personal nu am văzut blocuri făcute atat de bine și de
                    frumos, întreținute atat de curat, făcute cu suflet la noi
                    in țara. Felicitări din toată inima si cu mare admirație!
                    Sunteți dovada clară că omul sfințește locul!
                    👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼👏🏼
                  </p>
                  <img
                    className="text-slide-img"
                    src="images/quote_image_04.jpg"
                    alt=""
                  />
                  <p className="text-slide-name">Beatrice Mircea</p>
                  <p className="text-slide-position">CLIENT</p>
                </div>

                <div className="text-slide">
                  <p className="text-slide-content">
                    Concept sănătos românesc.... Dacă nu mergem in Emiratele
                    Arabe macar sa le aducem noi la noi... Succes în
                    proiecte...frumos!!!
                  </p>
                  <img
                    className="text-slide-img"
                    src="images/quote_image_02.jpg"
                    alt=""
                  />
                  <p className="text-slide-name">Razvan Romedea </p>
                  <p className="text-slide-position">CLIENT</p>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientPage;
