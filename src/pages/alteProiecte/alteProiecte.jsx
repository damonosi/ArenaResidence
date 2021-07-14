import React from "react";
import "./alteProiecte.scss";

import blocOne from "../../images/decor/p6.png";
import blocTwo from "../../images/decor/green.png";
import blocTrei from "../../images/decor/3.jpg";

import Parallax, { Layer } from "react-parallax-scroll";

const AlteProiecte = () => {
  return (
    <Parallax>
      <div id="team" className="section-parallax">
        <div className="member member-left">
          <Layer
            className="ima1"
            settings={{ speed: 0.2, type: ["translateY"] }}
          >
            <img src={blocOne} alt="" />
          </Layer>
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
              <Layer
                style={{ top: "300px", left: "auto", right: "230px" }}
                settings={{ speed: 0.2, type: ["translateX"] }}
              >
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
              </Layer>
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
              <Layer settings={{ speed: 0.1, type: ["translateX"] }}>
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
              </Layer>
            </div>
          </div>
          <Layer
            className="ima2"
            settings={{ speed: 0.2, type: ["translateY"] }}
          >
            <img src={blocTwo} alt="" />
          </Layer>
        </div>

        <div className="member member-left2">
          <Layer
            className="ima3"
            settings={{ speed: 0.2, type: ["translateY"] }}
          >
            <img src={blocTrei} alt="" />
          </Layer>
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
                iar in partea opusa , la nici 600m de Rezervatia Naturala a
                lacului Bacau II.
              </p>

              <Layer
                style={{ top: "300px", left: "auto", right: "230px" }}
                settings={{ speed: 0.1, type: ["translateX"] }}
              >
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
              </Layer>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AlteProiecte;
