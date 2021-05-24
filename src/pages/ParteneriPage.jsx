import React from "react";

const ParteneriPage = () => {
  return (
    <div id="services" className="section">
      <div className="page-title-holder">
        <h3 className="entry-title">Parteneri</h3>
      </div>
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="one_third ">
            <div className="service-holder">
              <p className="service-num">1</p>
              <div className="service-txt">
                <h4>Preciese</h4>
                <p>
                  Curabitur cursus mattis ligula a maximus pellentesque in purus
                  malesuada pharetra eros.
                </p>
                <br />
                <div className="button-holder text-left">
                  <a href="#portfolio" className="button-dot">
                    <span>MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="one_third ">
            <div className="service-holder">
              <p className="service-num">2</p>
              <div className="service-txt">
                <h4>Support</h4>
                <p>
                  Est sem integer suscipit enim quis dictum feugiat etiam
                  pellentesque curabitur donec porttitor.
                </p>
                <br />
                <div className="button-holder text-left">
                  <a href="#news" className="button-dot">
                    <span>MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="one_third last">
            <div className="service-holder">
              <p className="service-num">3</p>
              <div className="service-txt">
                <h4>Responsive</h4>
                <p>
                  Donec vel est sem integer suscipit enim quis lorem posuere
                  vestibulum metus tempor vitae.
                </p>
                <br />
                <div className="button-holder text-left">
                  <a href="#contact" className="button-dot">
                    <span>MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default ParteneriPage;
