import React, { useState, useEffect } from "react";
import "./alteProiecte.scss";

import blocOne from "../../images/decor/p6.png";
import blocTwo from "../../images/decor/green.png";
import blocTrei from "../../images/decor/3.jpg";

import green1 from "../../images/alte_proiecte/greenTown/017-1000x800.jpg";
import green2 from "../../images/alte_proiecte/greenTown/018-1000x800.jpg";
import green3 from "../../images/alte_proiecte/greenTown/021-1000x800.jpg";
import green4 from "../../images/alte_proiecte/greenTown/022-1000x800.jpg";
import green5 from "../../images/alte_proiecte/greenTown/026-1000x800.jpg";
import green6 from "../../images/alte_proiecte/greenTown/030-1000x800.jpg";
import green7 from "../../images/alte_proiecte/greenTown/033-1000x800.jpg";
import green8 from "../../images/alte_proiecte/greenTown/0431-1000x800.jpg";
import green9 from "../../images/alte_proiecte/greenTown/047-1000x800.jpg";
import green10 from "../../images/alte_proiecte/greenTown/048-1000x800.jpg";
import green11 from "../../images/alte_proiecte/greenTown/051-1000x800.jpg";
import green12 from "../../images/alte_proiecte/greenTown/065-1000x800.jpg";
import green13 from "../../images/alte_proiecte/greenTown/067-1000x800.jpg";
import green14 from "../../images/alte_proiecte/greenTown/073-1000x800.jpg";
import green15 from "../../images/alte_proiecte/greenTown/074-533x800.jpg";
import green16 from "../../images/alte_proiecte/greenTown/078-1000x800.jpg";
import green17 from "../../images/alte_proiecte/greenTown/079-1000x800.jpg";
import green18 from "../../images/alte_proiecte/greenTown/081-1000x800.jpg";
import green19 from "../../images/alte_proiecte/greenTown/082-1000x800.jpg";
import green20 from "../../images/alte_proiecte/greenTown/083-1000x800.jpg";
import green21 from "../../images/alte_proiecte/greenTown/084-1000x800.jpg";
import green22 from "../../images/alte_proiecte/greenTown/086-1000x800.jpg";
import green23 from "../../images/alte_proiecte/greenTown/087-533x800.jpg";
import green24 from "../../images/alte_proiecte/greenTown/093-533x800.jpg";
import green25 from "../../images/alte_proiecte/greenTown/097-1-1000x800.jpg";
import green26 from "../../images/alte_proiecte/greenTown/098-1-1000x800.jpg";
import green27 from "../../images/alte_proiecte/greenTown/099-1-1000x800.jpg";
import green28 from "../../images/alte_proiecte/greenTown/100-1-1000x800.jpg";
import green29 from "../../images/alte_proiecte/greenTown/102-1000x800.jpg";
import green30 from "../../images/alte_proiecte/greenTown/103-1000x800.jpg";
import green31 from "../../images/alte_proiecte/greenTown/106-1-1000x800.jpg";
import green32 from "../../images/alte_proiecte/greenTown/107-1-1000x800.jpg";

import { Parallax } from "react-scroll-parallax";
import ImageModal from "../../components/AlteProiecte/imageModal";

import Galerie from "../../components/AlteProiecte/imageGallery";

import { HiOutlinePhotograph } from "react-icons/hi";
import ParallaxImage from "../../components/Parallax/ParralaxImage";

const AlteProiecte = () => {
  const images = [
    {
      original: green1,
      thumbnail: green1,
    },
    {
      original: green2,
      thumbnail: green2,
    },
    {
      original: green3,
      thumbnail: green3,
    },
    {
      original: green4,
      thumbnail: green4,
    },
    {
      original: green5,
      thumbnail: green5,
    },
    {
      original: green6,
      thumbnail: green6,
    },
    {
      original: green7,
      thumbnail: green7,
    },
    {
      original: green8,
      thumbnail: green8,
    },
    {
      original: green9,
      thumbnail: green9,
    },
    {
      original: green10,
      thumbnail: green10,
    },
    {
      original: green11,
      thumbnail: green11,
    },
    {
      original: green12,
      thumbnail: green12,
    },
    {
      original: green13,
      thumbnail: green13,
    },
    {
      original: green14,
      thumbnail: green14,
    },
    {
      original: green15,
      thumbnail: green15,
    },
    {
      original: green16,
      thumbnail: green16,
    },
    {
      original: green17,
      thumbnail: green17,
    },
    {
      original: green18,
      thumbnail: green18,
    },
    {
      original: green19,
      thumbnail: green19,
    },
    {
      original: green20,
      thumbnail: green20,
    },
    {
      original: green21,
      thumbnail: green21,
    },
    {
      original: green22,
      thumbnail: green22,
    },
    {
      original: green23,
      thumbnail: green23,
    },
    {
      original: green24,
      thumbnail: green24,
    },
    {
      original: green25,
      thumbnail: green25,
    },
    {
      original: green26,
      thumbnail: green26,
    },
    {
      original: green27,
      thumbnail: green27,
    },
    {
      original: green28,
      thumbnail: green28,
    },
    {
      original: green29,
      thumbnail: green29,
    },
    {
      original: green30,
      thumbnail: green30,
    },
    {
      original: green31,
      thumbnail: green31,
    },
    {
      original: green32,
      thumbnail: green32,
    },
  ];
  const images2 = [
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
  const images3 = [
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
          <ParallaxImage height={700} width={500} y={[-20, 20]} src={blocOne} />
          <div className="member-info">
            <p className="member-postition">bloc</p>
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
              <Parallax x={[-20, 10]}>
                <div className="to-member">
                  <div className="member-social-holder">
                    <div className="social">
                      <a href="https://www.facebook.com/arenaresidencebacau">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </div>
                    <div className="social"></div>
                    <div className="social">
                      <a href="https://www.instagram.com/arena_residence_bacau/">
                        <span className="fa fa-instagram"></span>
                      </a>
                    </div>
                    <div className="social">
                      <a href=" https://wa.me/0770258169">
                        <span className="fa fa-whatsapp"></span>
                      </a>
                    </div>
                    <div className="social">
                      <a href="mailto:office.arenaresidence@gmail.com">
                        <span className="fas fa-envelope"></span>
                      </a>
                    </div>
                  </div>
                  <button className="galerie" onClick={handleClick}>
                    Spre Galeria Foto
                    <HiOutlinePhotograph />
                  </button>
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        <div className="member big-screen member-right">
          <div className="member-info2">
            <p className="member-postition">Case</p>
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
              <Parallax x={[-30, 5]}>
                <div className="to-member">
                  <div className="member-social-holder">
                    <div className="social">
                      <a href="https://www.facebook.com/arenaresidencebacau">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </div>
                    <div className="social"></div>
                    <div className="social">
                      <a href="https://www.instagram.com/arena_residence_bacau/">
                        <span className="fa fa-instagram"></span>
                      </a>
                    </div>
                    <div className="social">
                      <a href=" https://wa.me/0770258169">
                        <span className="fa fa-whatsapp"></span>
                      </a>
                    </div>
                    <div className="social">
                      <a href="mailto:office.arenaresidence@gmail.com">
                        <span className="fas fa-envelope"></span>
                      </a>
                    </div>
                  </div>
                  <button onClick={handleClick2} className="galerie">
                    Spre Galeria Foto <HiOutlinePhotograph />
                  </button>
                </div>
              </Parallax>
            </div>
          </div>
          <ParallaxImage height={700} width={500} y={[-20, 20]} src={blocTwo} />
        </div>

        <div className="member member-left2">
          <ParallaxImage
            height={700}
            width={500}
            y={[-20, 20]}
            src={blocTrei}
          />
          <div className="member-info3">
            <p className="member-postition">bloc</p>
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
                secund de artera de maxima importanta - Str. Stefan cel Mare,
                iar in partea opusa , la niimport Galerie from
                './../../components/AlteProimport ParallaxImage from
                './../../components/Parallax/ParralaxImage';
                iecte/imageGallery'; ci 600m de Rezervatia Naturala a lacului
                Bacau II.
              </p>

              <Parallax x={[-30, 5]}>
                <div className="to-member">
                  <div className="member-social-holder">
                    <div className="social">
                      <a href="https://www.facebook.com/arenaresidencebacau">
                        <span className="fa fa-facebook"></span>
                      </a>
                    </div>
                    <div className="social"></div>
                    <div className="social">
                      <a href="https://www.instagram.com/arena_residence_bacau/">
                        <span className="fa fa-instagram"></span>
                      </a>
                    </div>
                    <div className="social">
                      <a href=" https://wa.me/0770258169">
                        <span className="fa fa-whatsapp"></span>
                      </a>
                    </div>
                    <div className="social">
                      <a href="mailto:office.arenaresidence@gmail.com">
                        <span className="fas fa-envelope"></span>
                      </a>
                    </div>
                  </div>
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
          <h1>Galerie Strada 1 mai 60</h1> <Galerie items={images} />
        </div>
      </ImageModal>
      <ImageModal open={isOpen2} onClose={() => setIsOpen2(false)}>
        <div className="gal-cont">
          <Galerie items={images2} /> <h1>Cartierul de case Green Town</h1>
        </div>
      </ImageModal>
      <ImageModal open={isOpen3} onClose={() => setIsOpen3(false)}>
        <div className="gal-cont">
          <h1>Gemenii din Stefan Cel Mare</h1> <Galerie items={images3} />
        </div>
      </ImageModal>
    </>
  );
};

export default AlteProiecte;
