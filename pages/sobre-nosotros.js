import React from "react";
import Head from "next/head";
class Nosotros extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Head>
          <title>¿Quienes somos? | Horticurita</title>
          <meta
            name="description"
            content="Somos un grupo de autónomos enfocados en cultivar productos de
            terreno de alta calidad ofreciendo precios altamente competitivos a
            nuestros clientes.En horticurita.es no utilizamos abonos
            artificiales para el cultivo de fruta , verdura y hortalizas ."
          ></meta>
        </Head>
        <section>
          <h1>¿Quienes somos? | Horticurita</h1>
          <p>
            Somos un grupo de autónomos enfocados en cultivar productos de
            terreno de alta calidad ofreciendo precios altamente competitivos a
            nuestros clientes.En horticurita.es no utilizamos abonos
            artificiales para el cultivo de fruta , verdura y hortalizas .
          </p>

          <div className="imagenPrincipalNos">
            <img src="nosotros/huerta.jpg" alt="huerta de tomates" />
          </div>
          <div className="calidadDiv">
            <div>
              <h2>Calidad</h2>
              <p>
                En horticurita nos esforzamos por que nuestros clientes tengan
                un producto de alta calidad.Cultivamos productos de terreno como
                se ha cultivado toda la vida sin usar abonos artificiales o
                alteraciones de producto. Te comes un producto de verdad , con
                sabor auténtico.
              </p>
            </div>
            <div>
              <div>
                <img
                  className="imagesCollage"
                  src="nosotros/tomate.jpg"
                  alt="Tomate"
                />
                <img
                  className="imagesCollage"
                  src="nosotros/calabaza.jpg"
                  alt="Calabaza"
                />
              </div>
              <div>
                <img
                  className="imagesCollage"
                  src="nosotros/melon.jpg"
                  alt="Melón"
                />
                <img
                  className="imagesCollage"
                  src="nosotros/fresas.jpg"
                  alt="Fresas"
                />
                <img
                  className="imagesCollage"
                  src="nosotros/pimiento-verde.jpg"
                  alt="Pimiento verde"
                />
              </div>
            </div>
          </div>
          <div className="ubicationNosotros">
            <h3>¿Donde estamos?</h3>
            <p>
              Estamos ubicados en Porzuna , un pueblo perteneciente a la
              provincia de Ciudad Real , Castilla-La Mancha
            </p>
            <iframe
              className="iframeGoogleMaps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6188.372204100779!2d-4.158568424428898!3d39.14774861813081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6bb14b83eb9fdd%3A0xd9c3d2bbfc6a73b4!2s13120%20Porzuna%2C%20Cdad.%20Real!5e0!3m2!1ses!2ses!4v1596203416632!5m2!1ses!2ses"
              frameBorder="0"
              allowFullScreen=""
              tabIndex="0"
            ></iframe>
          </div>
        </section>
        <style jsx>{`
          .iframeGoogleMaps {
            width: 600px;
            height: 450px;
            border: 0px;
          }
          section {
            max-width: 1000px;
            margin: 0 auto;
            padding-top: 25px;
            margin-bottom: 66px;
          }

          @media (max-width: 575.98px) {
            section > h1 {
              text-align: center;
              font-family: montserrat;
              width: 100%;
              font-size: 5vw;
              max-width: 575px;
              margin: 0 auto;
              color: green;
            }

            p {
              font-family: Montserrat;
              text-align: center;
              font-size: 3.5vw;
            }

            .imagenPrincipalNos > img {
              width: 100%;
              object-fit: contain;
            }

            .calidadDiv {
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) > h2 {
              font-size: 5vw;
              color: green;
            }

            .calidadDiv > div:nth-child(2) {
              display: flex;
              justify-content: center;
              width: 100vw;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(1) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(2) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .imagesCollage {
              width: 100%;
              object-fit: contain;
            }

            .ubicationNosotros {
              display: flex;
              max-width: 1440px;
              align-items: center;
              flex-direction: column;
              font-family: Montserrat;
              margin-top: 40px;
            }

            .ubicationNosotros > h3 {
              color: green;
              font-size: 5vw;
            }

            .ubicationNosotros > iframe {
              width: 100%;
            }
          }

          @media (min-width: 576px) and (max-width: 767.98px) {
            section > h1 {
              text-align: center;
              font-family: montserrat;
              width: 100%;
              font-size: 4.5vw;
              max-width: 575px;
              margin: 0 auto;
              color: green;
            }

            p {
              font-family: Montserrat;
              text-align: center;
              font-size: 3.5vw;
            }

            .imagenPrincipalNos > img {
              width: 100%;
              object-fit: contain;
            }

            .calidadDiv {
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) > h2 {
              font-size: 5vw;
              color: green;
            }

            .calidadDiv > div:nth-child(2) {
              display: flex;
              justify-content: center;
              width: 100vw;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(1) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(2) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .imagesCollage {
              width: 100%;
              object-fit: contain;
            }

            .ubicationNosotros {
              display: flex;
              max-width: 1440px;
              align-items: center;
              flex-direction: column;
              font-family: Montserrat;
              margin-top: 40px;
            }

            .ubicationNosotros > h3 {
              color: green;
              font-size: 5vw;
            }

            .ubicationNosotros > iframe {
              width: 100%;
            }
          }

          @media (min-width: 768px) and (max-width: 991.98px) {
            section > h1 {
              text-align: center;
              font-family: montserrat;
              width: 100%;
              font-size: 3.5vw;
              max-width: 575px;
              margin: 0 auto;
              color: green;
            }

            p {
              font-family: Montserrat;
              text-align: center;
              font-size: 2vw;
            }

            .imagenPrincipalNos > img {
              width: 100%;
              object-fit: contain;
            }

            .calidadDiv {
              font-family: montserrat;
              display: flex;
              margin-top: 46px;
            }

            .calidadDiv > div:nth-child(1) {
              display: flex;
              flex-direction: column;
              width: 50%;
              align-items: center;
              padding: 0px 45px 0px 45px;
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) > h2 {
              font-size: 3.5vw;
              color: green;
            }

            .calidadDiv > div:nth-child(2) {
              display: flex;
              justify-content: center;
              width: 50%;
              margin-top: 90px;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(1) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(2) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .imagesCollage {
              width: 100%;
              object-fit: contain;
            }

            .ubicationNosotros {
              display: flex;
              max-width: 1440px;
              align-items: center;
              flex-direction: column;
              font-family: Montserrat;
              margin-top: 40px;
            }

            .ubicationNosotros > h3 {
              color: green;
              font-size: 3.5vw;
            }

            .ubicationNosotros > iframe {
              width: 100%;
            }
          }

          @media (min-width: 992px) and (max-width: 1199.98px) {
            section > h1 {
              text-align: center;
              font-family: montserrat;
              width: 100%;
              font-size: 3vw;
              max-width: 575px;
              margin: 0 auto;
              color: green;
            }

            p {
              font-family: Montserrat;
              text-align: center;
              font-size: 2vw;
            }

            .imagenPrincipalNos > img {
              width: 100%;
              object-fit: contain;
            }

            .calidadDiv {
              font-family: montserrat;
              display: flex;
              margin-top: 46px;
            }

            .calidadDiv > div:nth-child(1) {
              display: flex;
              flex-direction: column;
              width: 50%;
              align-items: center;
              padding: 0px 45px 0px 45px;
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) > h2 {
              font-size: 3.5vw;
              color: green;
            }

            .calidadDiv > div:nth-child(2) {
              display: flex;
              justify-content: center;
              width: 50%;
              margin-top: 90px;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(1) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(2) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .imagesCollage {
              width: 100%;
              object-fit: contain;
            }

            .ubicationNosotros {
              display: flex;
              max-width: 1440px;
              align-items: center;
              flex-direction: column;
              font-family: Montserrat;
              margin-top: 40px;
            }

            .ubicationNosotros > h3 {
              color: green;
              font-size: 3.5vw;
            }

            .ubicationNosotros > iframe {
              width: 100%;
            }
          }

          @media (min-width: 1200px) {
            section > h1 {
              text-align: center;
              font-family: montserrat;
              width: 100%;
              font-size: 38px;
              max-width: 575px;
              margin: 0 auto;
              color: green;
            }

            p {
              font-family: Montserrat;
              text-align: center;
              font-size: 20px;
            }

            .imagenPrincipalNos > img {
              width: 100%;
              object-fit: contain;
            }

            .calidadDiv {
              font-family: montserrat;
              display: flex;
              margin-top: 46px;
            }

            .calidadDiv > div:nth-child(1) {
              display: flex;
              flex-direction: column;
              width: 50%;
              align-items: center;
              padding: 0px 45px 0px 45px;
              font-family: montserrat;
            }

            .calidadDiv > div:nth-child(1) > h2 {
              font-size: 38px;
              color: green;
            }

            .calidadDiv > div:nth-child(2) {
              display: flex;
              justify-content: center;
              width: 50%;
              margin-top: 90px;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(1) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .calidadDiv > div:nth-child(2) > div:nth-child(2) {
              width: 50%;
              display: flex;
              flex-direction: column;
            }

            .imagesCollage {
              width: 100%;
              object-fit: contain;
            }

            .ubicationNosotros {
              display: flex;
              max-width: 1440px;
              align-items: center;
              flex-direction: column;
              font-family: Montserrat;
              margin-top: 40px;
            }

            .ubicationNosotros > h3 {
              color: green;
              font-size: 38px;
            }

            .ubicationNosotros > iframe {
              width: 100%;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Nosotros;
