import React from "react";
import Etienne from "./images/FotoEtienne.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={Etienne} alt="john" width="70%" />
        <div className="col-2">
          <h2>About me</h2>
          <span className="line"></span>
          <p>
            Me llamo Etienne André Lemoine, estudio ingenieria en computación en
            la Universidad Nacional de Córdoba y realice un bootcamp en "Soy
            Henry" donde me gradué como Full Stack Web Junior. Actualmente vivo
            en Córdoba, Argentina.
          </p>
          <p>Lenguajes que manejo</p>
          <div>
            <div className="a1">
              <a className="espaciado">Front End</a>
              <div className="imagenes">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                  width="12%"
                  
                />
                <img
                  src="https://e7.pngegg.com/pngimages/522/1018/png-clipart-purple-atom-redux-logo-icons-logos-emojis-tech-companies-thumbnail.png"
                  width="12%"
                  className="imagenes"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
                  width="12%"
                  className="imagenes"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png"
                  width="12%"
                  className="imagenes"
                />
              </div>
            </div>
            <div className="a2">
              <a className="espaciado">Back End</a>
              <div className="imagenes">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_640.png"
                  width="17%"
                />
                <img
                  src="https://www.jacobsoft.com.mx/wp-content/uploads/2020/04/node-js-736399_960_720-2.png"
                  width="17%"
                  className="imagenes"
                />
                <img
                  src="http://assets.stickpng.com/images/58482ee4cef1014c0b5e4a75.png"
                  width="11%"
                  className="imagenes"
                />
                <img
                  src="https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png"
                  width="17%"
                  className="imagenes"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                  width="11%"
                  className="imagenes"
                />
              </div>
              <a className="a3">Idiomas</a>
              <div className="a4">
                <div className="il">
                <ul>
                <li>Ingles: C1 - Conversacional.</li>
                <li>Español: Nativo.</li>
                <li>Frances: Principiante.</li>
                <li>Latin: Intermedio.</li>
                <li>Griego: Intermedio.</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
