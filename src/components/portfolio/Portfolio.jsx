import React from "react";
import "./portfolio.css";
import { GiHeavyArrow } from "react-icons/gi";
const Portfolio = () => {
  return (
    <section id="merch">
      <h5>What I Offer</h5>
      <h2>New Merch</h2>
      <div className="container merch__container">
        <article className="merch">
          <div className="merch__head">
            <h3>Hat</h3>
          </div>
            <ul className="merch__list">
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
            </ul>
        </article>
        <article className="merch">
          <div className="merch__head">
            <h3>Shirt</h3>
          </div>
            <ul className="merch__list">
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
            </ul>
        </article>
        <article className="merch">
          <div className="merch__head">
            <h3>Hoody</h3>
          </div>
            <ul className="merch__list">
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
              <li>
                <GiHeavyArrow className="merch__icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, nemo.
                </p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
