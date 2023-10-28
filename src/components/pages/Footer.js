import React from 'react';
import { Icon } from './svg/icon';
import logo from '../img/Group2.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="group" />
        <a href="/" className="coffeeFooter">
          <h4>Coffee</h4>
        </a>
        <a href="/pages/Ourcoffee" className="outcoffeeFot">
          <h4>Our coffee</h4>
        </a>
        <a href="/pages/Foryourpleasure" className="foryourFot"> 
          <h4>For your pleasure</h4>
        </a>
      </div>
      <div className="iconFooter">
        <Icon />
      </div>
    </footer>
  );
};

export default Footer;
