import React, { useState, useEffect } from "react";
import "./alteProiecte.scss";

import blocOne from "../../images/decor/p6.png";
import blocTwo from "../../images/decor/green.png";
import blocTrei from "../../images/building_map/bloc_map.png";

import { Parallax } from "react-scroll-parallax";
import ImageModal from "../../components/AlteProiecte/imageModal";

import { HiOutlinePhotograph } from "react-icons/hi";
import ParallaxImage from "../../components/Parallax/ParralaxImage";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Responsive } from "./../../responsiveComponent/Responsive";
const AlteProiecte = () => {
  const images1 = [
    {
      src: "/images/1-mai 60/1.jpg",
      thumbnail: "/images/1-mai 60/1.jpg",
    },
    {
      src: "/images/1-mai 60/2.jpg",
      thumbnail: "/images/1-mai 60/2.jpg",
    },
    {
      src: "/images/1-mai 60/3.jpg",
      thumbnail: "/images/1-mai 60/3.jpg",
    },
    {
      src: "/images/1-mai 60/4.jpg",
      thumbnail: "/images/1-mai 60/4.jpg",
    },
    {
      src: "/images/1-mai 60/5.jpg",
      thumbnail: "/images/1-mai 60/5.jpg",
    },
  ];

  const images2 = [
    {
      src: "/images/GreenTown/1.jpg",
      thumbnail: "/images/GreenTown/1.jpg",
    },
    {
      src: "/images/GreenTown/2.jpg",
      thumbnail: "/images/GreenTown/2.jpg",
    },
    {
      src: "/images/GreenTown/4.jpg",
      thumbnail: "/images/GreenTown/4.jpg",
    },
    {
      src: "/images/GreenTown/5.jpg",
      thumbnail: "/images/GreenTown/5.jpg",
    },
    {
      src: "/images/GreenTown/6.jpg",
      thumbnail: "/images/GreenTown/6.jpg",
    },
    {
      src: "/images/GreenTown/7.jpg",
      thumbnail: "/images/GreenTown/7.jpg",
    },
    {
      src: "/images/GreenTown/8.jpg",
      thumbnail: "/images/GreenTown/8.jpg",
    },
    {
      src: "/images/GreenTown/9.jpg",
      thumbnail: "/images/GreenTown/9.jpg",
    },
  ];
  const images3 = [
    {
      src: "/images/Gemenii Stefan cel mare/1.jpg",
      thumbnail: "/images/Gemenii Stefan cel mare/1.jpg",
    },
    {
      src: "/images/Gemenii Stefan cel mare/2.jpg",
      thumbnail: "/images/Gemenii Stefan cel mare/2.jpg",
    },
    {
      src: "/images/Gemenii Stefan cel mare/3.jpg",
      thumbnail: "/images/Gemenii Stefan cel mare/3.jpg",
    },
    {
      src: "/images/Gemenii Stefan cel mare/5.jpg",
      thumbnail: "/images/Gemenii Stefan cel mare/5.jpg",
    },
    {
      src: "/images/Gemenii Stefan cel mare/13.jpg",
      thumbnail: "/images/Gemenii Stefan cel mare/13.jpg",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClick2 = () => {
    setIsOpen2(true);
  };
  const handleClick3 = () => {
    setIsOpen3(true);
  };
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
  }, [isOpen]);
  return (
    <>
      <div id="team" className="section-parallax">
        <div className="member member-left">
          <Responsive displayIn={["Laptop"]}>
            <ParallaxImage
              height={700}
              width={1000}
              y={[-10, 10]}
              src={blocOne}
            />
          </Responsive>

          <Responsive displayIn={["Mobile"]}>
            <img
              height={700}
              alt="parteneri"
              width={1000}
              y={[-10, 10]}
              src={blocOne}
            />
          </Responsive>
          <div className="member-info">
            <p className="member-postition">BLOC</p>
            <h5 className="member-name">Arena Residence Strada 1 mai 60</h5>
            <div className="member-content">
              <p>
                Cladirea este dispusa pe structura de inaltime P+6. Constructia
                este pe cadre din caramida porotherm: 30cm exterior /25cm intre
                apartamente/11cm comparimentare. Termosistem vata bazaltica 10cm
                cu tencuiala decorativa tip Baumit.
              </p>
              <p>-Lift kelmann pentru 8 persoane/6 statii</p>
              <p>-Receptie acces imobile placata cu granit</p>
              <p>-Subsolul tehnic dispune de spatiu de depozitare</p>
              <p>-Parcari private zona A, B, C. </p>
              <p>
                -Tamplaria exterioara este din PVC tristrat (culoare wengue) cu
                geam termopan. Glafuri granit interior si exterior.{" "}
              </p>
              <Parallax x={[-5, 5]}>
                <div className="to-member">
                  <button className="galerie" onClick={handleClick}>
                    Spre Galeria Foto
                    <HiOutlinePhotograph />
                  </button>{" "}
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        <div className="member member-right">
          <div className="member-info2">
            <p className="member-postition">CASE</p>
            <h5 className="member-name">Cartierul de case Green Town</h5>
            <div className="member-content">
              <p>
                Situat intr-o zona rezidentiala, cartierul Green Town Bacau
                ofera locuitorilor privilegiul de a se bucura din plin de
                liniste si intimitate. Proiectul este conceput pentru linistea
                si siguranta dumneavoastra. Arhitectura cladirilor se remarca
                prin eleganta si rafinament iar clasicul se impleteste armonios
                cu modernul.
              </p>
              <p>
                <span className="bold">Parter : </span> living, hol, baie,
                bucatarie, loc de luat masa, terasa acces principal, terasa
                acces secundar
              </p>
              <p>
                <span className="bold">Etaj : </span> 3 dormitoare, baie, hol,
                scari, balcon
              </p>
              <p>
                <span className="bold">
                  Proiect finalizat in noiembrie 2014{" "}
                </span>
              </p>
              <Parallax x={[-5, 5]}>
                <div className="to-member">
                  <button onClick={handleClick2} className="galerie">
                    Spre Galeria Foto <HiOutlinePhotograph />
                  </button>
                </div>
              </Parallax>
            </div>
          </div>
          <ParallaxImage
            height={700}
            width={1000}
            y={[-10, 10]}
            src={blocTwo}
          />
        </div>

        <div className="member member-left2">
          <ParallaxImage
            height={700}
            width={1000}
            y={[-10, 10]}
            src={blocTrei}
          />
          <div className="member-info3">
            <p className="member-postition">Bloc</p>
            <h5 className="member-name">Gemenii din Stefan Cel Mare</h5>
            <div className="member-content">
              <p>
                Noul asamblu residential - Arena Residence este proiectul
                imobiliar care creste in cea mai exclusivista zona a Bacaului.
                Un bloc de 7 etaje, retras cu doua tronsoane distincte ce
                reunesc peste 98 de apartamente.
              </p>
              <p>
                Dotarile, instalatiile, materialele, si finisajele rafinate la
                care se adauga atentia obsesiva acordata celor mai mici detalii,
                fac ca imobilul sa capteze esenta locuintei moderne, elegante si
                comfortabile.
              </p>

              <p>
                Localizat intr-o zona de exceptie a municipiului bacau, la o
                distanta aproximativa de 2,5 km de centrul orasului, in plan
                secund de artera de maxima importanta - Str. Stefan cel Mare.
              </p>

              <Parallax x={[-5, 5]}>
                <div className="to-member">
                  <button onClick={handleClick3} className="galerie">
                    Spre Galeria Foto <HiOutlinePhotograph />
                  </button>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>

      <ImageModal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="gal-cont">
          <h1>Galerie Strada 1 mai 60</h1>{" "}
          <Carousel
            hasTransition={true}
            autoPlayInterval={4000}
            isAutoPlaying={true}
            canAutoPlay={true}
            isLoop={true}
            images={images1}
            hasIndexBoard={false}
            hasMediaButton={false}
            shouldLazyLoad={true}
            hasSizeButton={true}
          />
        </div>
      </ImageModal>
      <ImageModal open={isOpen2} onClose={() => setIsOpen2(false)}>
        <div className="gal-cont">
          <h1>Cartierul de case Green Town</h1>
          <Carousel
            hasIndexBoard={false}
            hasMediaButton={false}
            hasTransition={true}
            autoPlayInterval={4000}
            isAutoPlaying={true}
            canAutoPlay={true}
            shouldLazyLoad={true}
            images={images2}
            hasSizeButton={true}
          />{" "}
        </div>
      </ImageModal>
      <ImageModal open={isOpen3} onClose={() => setIsOpen3(false)}>
        <div className="gal-cont">
          <h1>Gemenii din Stefan Cel Mare</h1>{" "}
          <Carousel
            hasIndexBoard={false}
            hasMediaButton={false}
            hasTransition={true}
            autoPlayInterval={4000}
            isAutoPlaying={true}
            shouldLazyLoad={true}
            canAutoPlay={true}
            hasSizeButton={true}
            images={images3}
          />
        </div>
      </ImageModal>
    </>
  );
};

export default AlteProiecte;
