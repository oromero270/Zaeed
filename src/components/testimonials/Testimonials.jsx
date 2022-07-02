import React from "react";
import "./testimonials.css";
import SOY from "../../assets/Soy.jpg";
import Moon from "../../assets/moon.jpg";
import Bien from "../../assets/te_ves_bien.jpg";
const Testimonials = () => {
  return (
    <section id="music">
      <h5>Music</h5>
      <h2>My Mix </h2>
      <div className="container music__container">
        <article className="music__song">
          <h5>1</h5>
          <div className="music__song-image">
            <img src={SOY} alt="soy_como_soy" />
          </div>
          <h3>details of song</h3>
          <div className="music__cta">
          <a href="#about" className="btn">listen</a>
          <a href="#about" className="btn btn-primary">Visualiser</a>
          </div>
        </article>
        <article className="music__song">
          <h5>Song Name</h5>
          <div className="music__song-image">
            <img src={Moon} alt="soy_como_soy" />
          </div>
          <h3>details of song</h3>
          <div className="music__cta">
          <a href="#about" className="btn">listen</a>
          </div>
        </article>
        <article className="music__song">
          <h5>Song Name</h5>
          <div className="music__song-image">
            <img src={Bien} alt="soy_como_soy" />
          </div>
          <h3>details of song</h3>
          <div className="mussic__cta">
          <a href="#about" className="btn">listen</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
