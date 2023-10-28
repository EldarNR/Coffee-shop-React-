import React from "react";
import "./Home.css";
import group from "../img/Beans logo4.svg";
import { Icon } from "./svg/icon";
import Product from "./product";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="body">
      <div className="home_name">
        <div className="main_text">
          <h1 className="big_text">Everything You Love About Coffee</h1>
          <div className="group">
            <img src={group} alt="group" />
          </div>
          <h2>
            We makes every day full of energy and taste
            <p>Want to try our beans?</p>
          </h2>
          <a href="../pages/Ourcoffee">
            <button className="button" alt="button">
              More
            </button>
          </a>
        </div>
      </div>

      <section className="about">
        <div className="about_text">
          <h1>About Us</h1>
          <Icon />
          <h5>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
            <p>
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </h5>
        </div>
      </section>

      <section className="outbest">
        <h1>Out best</h1>
        <div className="card-section">
          <Product />
        </div>
      </section>
      <Footer />
    </div>
  );
}
