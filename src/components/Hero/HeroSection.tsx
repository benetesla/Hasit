import React from "react";
import { IHeroSectionProps } from "../../interfaces/IHeroInterfaces";
import "./HeroStyle.css";


const HeroSection: React.FC<IHeroSectionProps> = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.HeroIMG} className="hero-img" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>
            {props.text}
          </p>
          <a href={props.url} className={props.btnClass}> 
          {props.btnText}
            </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
