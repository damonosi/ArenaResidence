import React, { useState, useEffect } from "react";
import "./alteProiecte.scss";

import blocOne from "../../images/decor/p6.png";
import blocTwo from "../../images/decor/green.png";
import blocTrei from "../../images/building_map/bloc_map.png";

import Lightbox from "react-image-lightbox";

import { Parallax } from "react-scroll-parallax";

import { HiOutlinePhotograph } from "react-icons/hi";
import ParallaxImage from "../../components/Parallax/ParralaxImage";
import "react-image-lightbox/style.css";

import { Responsive } from "./../../responsiveComponent/Responsive";
const AlteProiecte = () => {
  const images1 = [
    "/images/1-mai 60/000.jpg",
    "/images/1-mai 60/001.jpg",
    "/images/1-mai 60/002.jpg",
    "/images/1-mai 60/003.jpg",
    "/images/1-mai 60/004.jpg",
    "/images/1-mai 60/005.jpg",
    "/images/1-mai 60/006.jpg",
    "/images/1-mai 60/007.jpg",
    "/images/1-mai 60/008.jpg",
    "/images/1-mai 60/009.jpg",
    "/images/1-mai 60/010.jpg",
    "/images/1-mai 60/011.jpg",
    "/images/1-mai 60/012.jpg",
    "/images/1-mai 60/013.jpg",
    "/images/1-mai 60/014.jpg",
    "/images/1-mai 60/015.jpg",
    "/images/1-mai 60/016.jpg",
    "/images/1-mai 60/017.jpg",
    "/images/1-mai 60/018.jpg",
    "/images/1-mai 60/019.jpg",
    "/images/1-mai 60/020.jpg",
    "/images/1-mai 60/021.jpg",
    "/images/1-mai 60/022.jpg",
    "/images/1-mai 60/023.jpg",
    "/images/1-mai 60/024.jpg",
    "/images/1-mai 60/025.jpg",
    "/images/1-mai 60/026.jpg",
    "/images/1-mai 60/027.jpg",
    "/images/1-mai 60/028.jpg",
    "/images/1-mai 60/029.jpg",
    "/images/1-mai 60/030.jpg",
    "/images/1-mai 60/031.jpg",
    "/images/1-mai 60/032.jpg",
    "/images/1-mai 60/033.jpg",
    "/images/1-mai 60/034.jpg",
    "/images/1-mai 60/035.jpg",
    "/images/1-mai 60/036.jpg",
    "/images/1-mai 60/037.jpg",
    "/images/1-mai 60/038.jpg",
    "/images/1-mai 60/039.jpg",
    "/images/1-mai 60/040.jpg",
    "/images/1-mai 60/041.jpg",
  ];

  const images2 = [
    "/images/GreenTown/1.jpg",
    "/images/GreenTown/2.jpg",
    "/images/GreenTown/3.jpg",
    "/images/GreenTown/4.jpg",
    "/images/GreenTown/5.jpg",
    "/images/GreenTown/6.jpg",
    "/images/GreenTown/7.jpg",
    "/images/GreenTown/8.jpg",
    "/images/GreenTown/9.jpg",
    "/images/GreenTown/10.jpg",
    "/images/GreenTown/11.jpg",
    "/images/GreenTown/12.jpg",
    "/images/GreenTown/13.jpg",
    "/images/GreenTown/14.jpg",
    "/images/GreenTown/15.jpg",
    "/images/GreenTown/16.jpg",
    "/images/GreenTown/17.jpg",
    "/images/GreenTown/18.jpg",
    "/images/GreenTown/19.jpg",
    "/images/GreenTown/20.jpg",
    "/images/GreenTown/21.jpg",
    "/images/GreenTown/22.jpg",
    "/images/GreenTown/23.jpg",
    "/images/GreenTown/24.jpg",
    "/images/GreenTown/25.jpg",
    "/images/GreenTown/26.jpg",
    "/images/GreenTown/27.jpg",
    "/images/GreenTown/28.jpg",
    "/images/GreenTown/29.jpg",
    "/images/GreenTown/30.jpg",
    "/images/GreenTown/31.jpg",
    "/images/GreenTown/32.jpg",
    "/images/GreenTown/33.jpg",
    "/images/GreenTown/34.jpg",
    "/images/GreenTown/35.jpg",
    "/images/GreenTown/36.jpg",
    "/images/GreenTown/37.jpg",
    "/images/GreenTown/38.jpg",
    "/images/GreenTown/39.jpg",
    "/images/GreenTown/40.jpg",
    "/images/GreenTown/41jpg",
    "/images/GreenTown/42.jpg",
    "/images/GreenTown/43.jpg",
    "/images/GreenTown/44.jpg",
    "/images/GreenTown/45.jpg",
    "/images/GreenTown/46.jpg",
    "/images/GreenTown/47.jpg",
    "/images/GreenTown/48.jpg",
    "/images/GreenTown/49.jpg",
    "/images/GreenTown/50.jpg",
    "/images/GreenTown/51.jpg",
    "/images/GreenTown/52.jpg",
    "/images/GreenTown/53.jpg",
    "/images/GreenTown/54.jpg",
    "/images/GreenTown/55.jpg",
    "/images/GreenTown/56.jpg",
    "/images/GreenTown/57.jpg",
    "/images/GreenTown/58.jpg",
    "/images/GreenTown/59.jpg",
    "/images/GreenTown/60.jpg",
    "/images/GreenTown/61.jpg",
    "/images/GreenTown/62.jpg",
    "/images/GreenTown/63.jpg",
    "/images/GreenTown/64.jpg",
    "/images/GreenTown/65.jpg",
    "/images/GreenTown/66.jpg",
    "/images/GreenTown/67.jpg",
    "/images/GreenTown/68.jpg",
    "/images/GreenTown/69.jpg",
  ];
  const images3 = [
    "/images/Gemenii Stefan cel mare/1.jpg",

    "/images/Gemenii Stefan cel mare/2.jpg",

    "/images/Gemenii Stefan cel mare/3.jpg",

    "/images/Gemenii Stefan cel mare/5.jpg",

    "/images/Gemenii Stefan cel mare/13.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(false);

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
                  <a href className="colored" onClick={handleClick}>
                    Spre Galeria Foto
                    <HiOutlinePhotograph />
                  </a>{" "}
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
                  <a href onClick={handleClick2} className="colored">
                    Spre Galeria Foto <HiOutlinePhotograph />
                  </a>
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
                  <a href onClick={handleClick3} className="colored">
                    Spre Galeria Foto <HiOutlinePhotograph />
                  </a>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images1[photoIndex]}
          nextSrc={images1[(photoIndex + 1) % images1.length]}
          prevSrc={images1[(photoIndex + images1.length - 1) % images1.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images1.length - 1) % images1.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images1.length)
          }
          reactModalStyle={{ Zindex: "10000" }}
        />
      )}
      {isOpen2 && (
        <Lightbox
          mainSrc={images2[photoIndex]}
          nextSrc={images2[(photoIndex + 1) % images1.length]}
          prevSrc={images2[(photoIndex + images2.length - 1) % images2.length]}
          onCloseRequest={() => setIsOpen2(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images1.length - 1) % images2.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images2.length)
          }
          wrapperClassName="indexlightboxer"
        />
      )}
      {isOpen3 && (
        <Lightbox
          mainSrc={images3[photoIndex]}
          nextSrc={images3[(photoIndex + 1) % images3.length]}
          prevSrc={images3[(photoIndex + images3.length - 1) % images3.length]}
          onCloseRequest={() => setIsOpen3(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images3.length - 1) % images3.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images3.length)
          }
        />
      )}
    </>
  );
};

export default AlteProiecte;
