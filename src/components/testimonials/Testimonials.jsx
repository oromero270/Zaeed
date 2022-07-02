import React from "react";
import "./testimonials.css";
import SOY from "../../assets/Soy.jpg";
import Moon from "../../assets/moon.jpg";
import Bien from "../../assets/te_ves_bien.jpg";
const Testimonials = () => {
  return (
    <section id="music">
      <h5>Music</h5>
      <h2>My Projects </h2>
      <div className="container music__container">
        <article className="music__song">
          <h5>Soy Como Soy</h5>
          <div className="music__song-image">
            <img src={SOY} alt="soy_como_soy" />
          </div>
          <h2>EP 2022</h2>
          <h3>Summer Vibes LETS GO!</h3>
          <div className="music__cta">
          <a href="https://open.spotify.com/album/5AryMIgZ4LIAmiGwSrOBL7?si=brbiSYe8QJutVWpnIeTq5A" target="_blank" className="btn">listen</a>
          <a href="https://www.youtube.com/watch?v=DZCqnIRavvY" className="btn btn-primary" target="_blank">Visualiser</a>
          </div>
        </article>
        <article className="music__song">
          <h5>Porque?</h5>
          <div className="music__song-image">
            <img src={Moon} alt="soy_como_soy" />
          </div>
          <h2>SINGLE 2021</h2>
          <h3>In My Feelz </h3>
          <div className="music__cta">
          <a href="https://open.spotify.com/album/6tZmbRFF8N5HxGgRD87g7m?si=mgTeN4YpQVyq5HZijhpFWg" target="_blank" className="btn">listen</a>
          </div>
        </article>
        <article className="music__song">
          <h5>Te Ves Bien</h5>
          <div className="music__song-image">
            <img src={Bien} alt="soy_como_soy" />
          </div>
          <h2>SINGLE 2022</h2>
          <h3>Breaking through the noise.</h3>
          <div className="mussic__cta">
          <a href="#about" className="btn">listen</a>
          <a href="https://www.youtube.com/watch?v=_FOViIO7nA4" className="btn btn-primary" target="_blank">Visualiser</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
