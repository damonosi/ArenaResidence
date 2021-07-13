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
            <h5 className="member-name">Rezidential P+6</h5>
            <div className="member-content">
              <p>
                Strada 1 Mai nr. 60 . Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Velit quidem magni praesentium eveniet
                delectus alias exercitationem ad voluptatem accusantium et
                ratione veniam fugit totam natus fugiat dolore, qui aut
                accusamus aspernatur amet perspiciatis. Esse quas doloribus
                voluptas dolorem nemo rerum nobis, quod animi quia repudiandae
                suscipit recusandae illo, incidunt error.
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
                      <span class="fas fa-envelope"></span>
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
                Code the energy hidden in matter citizens of distant epochs sun.
                Citizens of distant epochs encyclopaedia galant ctica the ash of
                stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim
                ipsam volupta tem quia voluptas sit aspernatur aut odit aut
                fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis.
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
                      <span class="fas fa-envelope"></span>
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
            <h5 className="member-name">Rezidential P+5 Prieteniei 89-91</h5>
            <div className="member-content">
              <p>
                Code the energy hidden in matter citizens of distant epochs sun.
                Citizens of distant epochs encyclopaedia galant ctica the ash of
                stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim
                ipsam volupta tem quia voluptas sit aspernatur aut odit aut
                fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis.
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
                      <span class="fas fa-envelope"></span>
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
