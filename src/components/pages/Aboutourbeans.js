import React from "react";

import Mainproduct from "./mainproduct";
import photo from "../img/girl-865304_1920.jpg";
import { Icon } from "./svg/icon";
import { Line } from "./svg/Line";

export const Aboutourbeans = () => {

  return (
    <div>
      <section className="Aboutourbeans">
        <div className="container-photo-text">
          <div className="child-one">
            <img src={photo} className="photo-girl" alt="girl" />
          </div>
          <div className="child-two">
            <h2>About our beans</h2>
            <Icon />
            <h5>
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <p>
                Afraid at highly months do things on at. Situation recommend
                objection do intention so questions.
              </p>
              <p>
                As greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
              </p>
            </h5>
          </div>
        </div>
        <div className="product">
          <div className="line">
            <Line />
          </div>
            <Mainproduct/>
        </div>
      </section>
    </div>
  );
};
