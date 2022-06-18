import React from "react";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>Para mas información:</p>
          <p>Contactar mediante a mis redes sociales.</p>
          {/* Imagenes */}
          <div>
            <a href="https://www.linkedin.com/in/etienne-andre-lemoine-636156234/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                width="10%"
                className="icon"
              />
            </a>
            <a href="https://github.com/EtienneLemoine">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width="10%"
                className="icons"
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+543515218409&text=Hola,+me+interesa.">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/534/047/original/social-media-whatsapp-black-logo-mobile-app-icon-free-free-vector.jpg"
                width="10%"
                className="icons"
              />
            </a>
          </div>
          {/* Imagenes */}
        </div>
      </div>
    </div>
  );
};

export default Demo;
