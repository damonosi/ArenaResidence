import React, { useState, useEffect } from "react";
import "./alteProiecte.scss";

import blocOne from "../../images/decor/p6.png";
import blocTwo from "../../images/decor/green.png";
import blocTrei from "../../images/building_map/bloc_map.png";

import { Parallax } from "react-scroll-parallax";
import ImageModal from "../../components/AlteProiecte/imageModal";

import { HiOutlinePhotograph } from "react-icons/hi";
import ParallaxImage from "../../components/Parallax/ParralaxImage";

import ImageGallery from "react-image-gallery";

const AlteProiecte = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
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
          <ParallaxImage
            height={700}
            width={1000}
            y={[-10, 10]}
            src={blocOne}
          />
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
          <h1>Galerie Strada 1 mai 60</h1> <ImageGallery items={images} />
        </div>
      </ImageModal>
      <ImageModal open={isOpen2} onClose={() => setIsOpen2(false)}>
        <div className="gal-cont">
          <ImageGallery items={images} /> <h1>Cartierul de case Green Town</h1>
        </div>
      </ImageModal>
      <ImageModal open={isOpen3} onClose={() => setIsOpen3(false)}>
        <div className="gal-cont">
          <h1>Gemenii din Stefan Cel Mare</h1> <ImageGallery items={images} />
        </div>
      </ImageModal>
    </>
  );
};

export default AlteProiecte;
