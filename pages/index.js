import React from "react";
import Head from "next/head";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Head>
          <title>
            Horticurita | Frutas y verdura al mejor precio | Alta calidad
          </title>
          <meta
            name="description"
            content="Fruta al mejor precio , calidad insuperable"
          ></meta>
        </Head>

        <section id="sectionOne">
          <div className="containerCarrouselContent">
            <div>
              <div className="divContainerOneSlider">
                <h1>
                  Frutas y verduras <br></br>online
                </h1>
                <p>CALIDAD Y SABOR | PRECIOS IMBATIBLES</p>
                <a>VER CATÁLOGO</a>
              </div>

              <img
                className="imagenOneSlider"
                src="home/comida-organica-verduras-canasta_135427-2767.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="divContainerOneSlider">
                <h1>
                  Productores propios <br></br>gran variedad
                </h1>
                <p>CALIDAD Y SABOR | PRECIOS IMBATIBLES</p>
                <a>SOBRE NOSOTROS</a>
              </div>

              <img
                className="imagenOneSlider"
                src="home/comida-organica-verduras-canasta_135427-2767.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="divContainerOneSlider">
                <h1>Envios rápidos</h1>
                <p>Envios en 24/48 horas en toda la península</p>
                {/* <a>VER CATÁLOGO</a>  */}
              </div>

              <img
                className="imagenOneSlider"
                src="home/comida-organica-verduras-canasta_135427-2767.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="buttonsContainerSlider">
            <img
              className="buttonLeft"
              src="home/icono-flecha-izquierda.png"
              alt="icono flecha izquierda"
            />
            <img
              className="buttonRight"
              src="home/icono-flecha-derecha.png"
              alt="icono flecha derecha"
            />
          </div>
        </section>
        <div className="buttonsContainerSlider"><img  className="buttonLeft" src="home/icono-flecha-izquierda.png" alt="icono flecha izquierda" />
        <img className="buttonRight" src="home/icono-flecha-derecha.png" alt="icono flecha derecha" /></div>
        <section id="sectionTwo">
          <h2>Bienvenido a horticurita</h2>
          <div className="containerWelcome">
            <div>
              <img src="home/icono-lechuga.png" alt="" />
              <span>100% Fresco</span>
              <p>
                Productos siempre recolectados a pedido.Nunca almacenados en
                cámaras frigoríficas
              </p>
              <img src="home/icono-tarjeta-visa.png" alt="" />

              <span>Pago seguro</span>
              <p>
                Paga con tarjeta con total tranquilidad , pagos procesados por
                BBVA.
              </p>
            </div>
            <div>
              <img src="home/monton-de-frutas.jpg" alt="" />
            </div>
            <div>
              <img src="home/buena-calidad.png" alt="" />
              <span>Calidad</span>
              <p>
                Somos productores propios, cultivamos sin abonos artificiales ,
                aseguramos el producto sin daños
              </p>
              <img src="home/icono-coche-de-envios.png" alt="" />
              <span>Envios 24/48h</span>
              <p>
                Trabajamos con la más rápida y mejor agencia de envíos , tu
                pedido en 24/48h
              </p>
            </div>
          </div>
          <div>
            <img src="home/icono-reembolso.png" alt="" />
            <span>Devoluciones</span>
            <p>
              Si tu pedido ha sufrido daños ,le devolveremos el dinero sin
              rechistar
            </p>
          </div>
        </section>

        <section id="sectionCategories">
          <h3>Categorías</h3>
          <div className="containerCategories">
            <div>
              <a>
                <img src="home/albaricoque.jpg" />
                <span>Frutas</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/pimiento-rojo.jpg" />
                <span>Verduras y hortalizas</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/lentejas.jpg" />
                <span>Legumbres</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/nuez.jpg" />
                <span>Frutos secos</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/manzanilla-con-pepinillo.jpg" />
                <span>Encurtidos</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/pimenton-dulce.jpg" />
                <span>Especias</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/bollo-chocolate.jpg" />
                <span>Dulces</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/galletas-caseras.jpg" />
                <span>Galletas y cereales</span>
              </a>
            </div>
            <div>
              <a>
                <img src="home/aperitivo-snack.jpg" />
                <span>Aperitivos snack</span>
              </a>
            </div>
          </div>
          <a className="buttonVerTodo">Ver todo</a>
        </section>
        <section id="sectionPopulares">
          <h4>Productos populares</h4>
          <div className="containerPopulares">
            <div>
              <img src="home/tomates.jpg" />
              <span>Tomate</span>
              <p>1.50€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/sandia.jpg" />
              <span>Sandía</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/melon.jpg" />
              <span>Melón</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/ciruela.jpg" />
              <span>Ciruelas</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/melocoton.jpg" />
              <span>Melocotón</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/paraguaya.jpg" />
              <span>Paraguayo</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/nictarina.jpg" />
              <span>Nectarina</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
          </div>
        </section>
        <div className="divNewsLetter">
          <span>Suscribete</span>
          <p>
            Recibe ofertas especiales,productos regalados , grandes descuentos ,
            sorteos.
          </p>
          <form className="formNewsLetter">
            <label>
              <input type="text" name="lname" placeholder="Escribe tu email" />
            </label>
            <label>
              <input
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
                required
              />{" "}
              Acepto los terminos y condiciones de horticurita.es
            </label>
            <input type="submit" value="Suscribirme" />
          </form>
        </div>
        <style jsx>{`
          .buttonLeft {
            object-fit: contain;
          }

          .buttonRight {
            object-fit: contain;
          }
          @media (max-width: 575.98px) {
            .buttonsContainerSlider {
              position: absolute;
              z-index: 1;
              max-width: 1440px;
              width: 100%;
              margin-top: -33%;
              display: flex;
              justify-content: space-between;
            }

            .buttonLeft {
              height: 26px;
            }

            .buttonRight {
              height: 26px;
            }

            #sectionOne {
              width: 100vw;
              display: flex;
              height: 54vw;
              overflow-x: hidden;
            }

            .containerCarrouselContent {
              width: 575px;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(2) {
              position: relative;
              top: -100%;
              left: 100%;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: relative;
              top: -200%;
              left: 200%;
            }

            .imagenOneSlider {
              width: 100%;
            }

            .divContainerOneSlider {
              position: absolute;
              width: 100%;
              margin-top: 4%;
              font-size: 3vw;
              color: white;
              text-align: center;
            }

            .divContainerOneSlider > h1 {
              font-family: "Pacifico", cursive;
              font-size: 7vw;
              margin: 0px;
            }

            .divContainerOneSlider > p {
              font-family: "Montserrat", sans-serif;
              font-size: 4vw;
            }

            .divContainerOneSlider > a {
              font-family: "Montserrat", sans-serif;
              background-color: #5dcd71;
              border-radius: 14px;
              padding: 1vw 2vw 1vw 2vw;
              font-size: 2.8vw;
            }

            #sectionTwo > h2 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 6vw;
              margin-bottom: 0px;
            }

            .containerWelcome {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-evenly;
            }

            .containerWelcome > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) > span {
              font-family: "Pacifico", cursive;
              font-size: 4vw;
            }

            #sectionTwo > div:nth-child(3) > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              font-size: 12px;
              margin: 0px 27px 0px 27px;
            }

            #sectionTwo > div:nth-child(3) > img {
              margin-top: 25px;
            }

            .containerWelcome > div:nth-child(2) > img {
              display: none;
            }

            .containerWelcome > div > span {
              font-family: "Pacifico", cursive;
              font-size: 4vw;
            }

            .containerWelcome > div > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              font-size: 12px;
              margin: 0px 27px 0px 27px;
            }

            .containerWelcome > div > img {
              margin-top: 25px;
              object-fit: contain;
            }

            #sectionCategories > h3 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 6vw;
              margin-bottom: 0px;
            }

            .containerCategories {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items: center;
            }

            .containerCategories > div {
              width: 148px;
            }

            .containerCategories > div > a {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .containerCategories > div > a > span {
              font-family: "Montserrat";
              font-weight: 800;
              font-style: normal;
              font-size: 19px;
              text-align: center;
            }

            .buttonVerTodo {
              display: flex;
              background-color: #5dcd71;
              width: 25vw;
              align-items: center;
              margin: 0 auto;
              font-family: Montserrat;
              color: white;
              border-radius: 18px;
              height: 7vw;
              margin-top: 32px;
              font-size: 3.5vw;
              justify-content: center;
            }

            #sectionPopulares {
            }

            #sectionPopulares > h4 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 6vw;
              margin-bottom: 0px;
            }

            .containerPopulares {
              display: flex;
              justify-content: space-evenly;
              font-family: montserrat;
              flex-wrap: wrap;
              align-items: flex-end;
            }

            .containerPopulares > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 148px;
            }

            .containerPopulares > div > a {
              background-color: #5dcd71;
              border-radius: 10px;
              color: white;
              text-align: center;
              height: 6vw;
              font-size: 3vw;
              width: 22vw;
              justify-content: center;
              display: flex;
              padding: 1%;
              align-items: center;
            }

            .divNewsLetter {
              text-align: center;
              background-color: #5dcd71;
              width: 72vw;
              margin: 0 auto;
              color: white;
              margin-top: 49px;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: Montserrat;
              padding: 6vw;
              margin-bottom: 40px;
              box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
            }

            .formNewsLetter {
              display: flex;
              flex-direction: column;
            }

            .divNewsLetter > span {
              font-size: 5vw;
            }

            .divNewsLetter > p {
              font-size: 3vw;
            }

            .formNewsLetter > label:nth-child(1) > input {
              border: none;
              font-family: montserrat;
              padding: 7px;
            }

            .formNewsLetter > label:nth-child(2) > input {
              font-size: 3vw;
              margin-bottom: 11px;
            }

            .formNewsLetter > label:nth-child(2) {
              font-size: 11px;
            }

            .formNewsLetter > input {
              width: 27vw;
              font-family: Montserrat;
              margin: 0 auto;
              border-radius: 8px;
              background-color: white;
              padding: 5px;
              border: none;
              margin-top: 11px;
              font-size: 3vw;
            }
          }

          @media (min-width: 576px) and (max-width: 767.98px) {
            .buttonsContainerSlider {
              position: absolute;
              z-index: 1;
              max-width: 1440px;
              width: 100%;
              margin-top: -32%;
              display: flex;
              justify-content: space-between;
            }
            .buttonLeft {
              height: 42px;
            }

            .buttonRight {
              height: 42px;
            }

            #sectionOne {
              width: 101vw;
              display: flex;
              height: 54vw;
              overflow-x: hidden;
            }

            .containerCarrouselContent {
              width: 100%;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(2) {
              position: relative;
              top: -100%;
              left: 100%;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: relative;
              top: -200%;
              left: 200%;
            }

            .imagenOneSlider {
              width: 100%;
            }

            .divContainerOneSlider {
              position: absolute;
              width: 100%;
              margin-top: 4%;
              font-size: 3vw;
              color: white;
              text-align: center;
            }

            .divContainerOneSlider > h1 {
              font-family: "Pacifico", cursive;
              font-size: 7vw;
              margin: 0px;
            }

            .divContainerOneSlider > p {
              font-family: "Montserrat", sans-serif;
              font-size: 4vw;
            }

            .divContainerOneSlider > a {
              font-family: "Montserrat", sans-serif;
              background-color: #5dcd71;
              border-radius: 14px;
              padding: 1vw 2vw 1vw 2vw;
              font-size: 2.8vw;
            }

            #sectionTwo > h2 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 6vw;
              margin-bottom: 0px;
            }

            .containerWelcome {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-evenly;
            }

            .containerWelcome > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) > span {
              font-family: "Pacifico", cursive;
              font-size: 4vw;
            }

            #sectionTwo > div:nth-child(3) > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              font-size: 12px;
              margin: 0px 27px 0px 27px;
            }

            #sectionTwo > div:nth-child(3) > img {
              margin-top: 25px;
            }

            .containerWelcome > div:nth-child(2) > img {
              display: none;
            }

            .containerWelcome > div > span {
              font-family: "Pacifico", cursive;
              font-size: 4vw;
            }

            .containerWelcome > div > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              font-size: 12px;
              margin: 0px 27px 0px 27px;
            }

            .containerWelcome > div > img {
              margin-top: 25px;
              object-fit: contain;
            }

            #sectionCategories > h3 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 6vw;
              margin-bottom: 0px;
            }

            .containerCategories {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items: center;
            }

            .containerCategories > div {
              width: 148px;
            }

            .containerCategories > div > a {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .containerCategories > div > a > span {
              font-family: "Montserrat";
              font-weight: 800;
              font-style: normal;
              font-size: 19px;
              text-align: center;
            }

            .buttonVerTodo {
              display: flex;
              background-color: #5dcd71;
              width: 25vw;
              align-items: center;
              margin: 0 auto;
              font-family: Montserrat;
              color: white;
              border-radius: 18px;
              height: 7vw;
              margin-top: 32px;
              font-size: 3.5vw;
              justify-content: center;
            }

            #sectionPopulares > h4 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 6vw;
              margin-bottom: 0px;
            }

            .containerPopulares {
              display: flex;
              justify-content: space-evenly;
              font-family: montserrat;
              flex-wrap: wrap;
              align-items: flex-end;
            }

            .containerPopulares > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 192px;
            }

            .containerPopulares > div > a {
              background-color: #5dcd71;
              border-radius: 10px;
              color: white;
              text-align: center;
              height: 6vw;
              font-size: 3vw;
              width: 22vw;
              justify-content: center;
              display: flex;
              padding: 1%;
              align-items: center;
            }

            .divNewsLetter {
              text-align: center;
              background-color: #5dcd71;
              width: 72vw;
              margin: 0 auto;
              color: white;
              margin-top: 49px;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: Montserrat;
              padding: 6vw;
              margin-bottom: 40px;
              box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
            }

            .formNewsLetter {
              display: flex;
              flex-direction: column;
            }

            .divNewsLetter > span {
              font-size: 5vw;
            }

            .divNewsLetter > p {
              font-size: 3vw;
            }

            .formNewsLetter > label:nth-child(1) > input {
              border: none;
              font-family: montserrat;
              padding: 7px;
            }

            .formNewsLetter > label:nth-child(2) > input {
              font-size: 3vw;
              margin-bottom: 11px;
            }

            .formNewsLetter > label:nth-child(2) {
              font-size: 11px;
            }

            .formNewsLetter > input {
              width: 27vw;
              font-family: Montserrat;
              margin: 0 auto;
              border-radius: 8px;
              background-color: white;
              padding: 5px;
              border: none;
              margin-top: 11px;
              font-size: 3vw;
            }
          }

          @media (min-width: 768px) and (max-width: 991.98px) {
            .buttonsContainerSlider {
              position: absolute;
              z-index: 1;
              max-width: 1440px;
              width: 100%;
              margin-top: -31%;
              display: flex;
              justify-content: space-between;
            }
            .buttonLeft {
              /* position: absolute;
   top: 20vw;
   z-index: 1;
   width: 6vw; */
            }

            .buttonRight {
              /* position: absolute;
   top: 20vw;
   left: 93%;
   width: 6vw;
   z-index: 1; */
            }

            #sectionOne {
              width: 101vw;
              display: flex;
              height: 54vw;
              overflow-x: hidden;
            }

            .containerCarrouselContent {
              width: 100%;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(2) {
              position: relative;
              top: -100%;
              left: 100%;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: relative;
              top: -200%;
              left: 200%;
            }

            .imagenOneSlider {
              width: 100%;
            }

            .divContainerOneSlider {
              position: absolute;
              width: 100%;
              margin-top: 4%;
              font-size: 3vw;
              color: white;
              text-align: center;
            }

            .divContainerOneSlider > h1 {
              font-family: "Pacifico", cursive;
              font-size: 6vw;
              margin: 0px;
            }

            .divContainerOneSlider > p {
              font-family: "Montserrat", sans-serif;
              font-size: 3vw;
            }

            .divContainerOneSlider > a {
              font-family: "Montserrat", sans-serif;
              background-color: #5dcd71;
              border-radius: 14px;
              padding: 1vw 2vw 1vw 2vw;
              font-size: 1.8vw;
            }

            #sectionTwo > h2 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 5vw;
              margin-bottom: 0px;
            }

            .containerWelcome {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-evenly;
            }

            .containerWelcome > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) > span {
              font-family: "Pacifico", cursive;
              font-size: 3vw;
            }

            #sectionTwo > div:nth-child(3) > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              margin: 0px 27px 0px 27px;
            }

            #sectionTwo > div:nth-child(3) > img {
              margin-top: 25px;
            }

            .containerWelcome > div:nth-child(2) > img {
              display: none;
            }

            .containerWelcome > div > span {
              font-family: "Pacifico", cursive;
              font-size: 3vw;
            }

            .containerWelcome > div > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              margin: 0px 27px 0px 27px;
            }

            .containerWelcome > div > img {
              margin-top: 25px;
              object-fit: contain;
            }

            #sectionCategories > h3 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 5vw;
              margin-bottom: 0px;
            }

            .containerCategories {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items: center;
            }

            .containerCategories > div {
              width: 200px;
            }

            .containerCategories > div > a {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .containerCategories > div > a > span {
              font-family: "Montserrat";
              font-weight: 800;
              font-style: normal;
              font-size: 19px;
              text-align: center;
            }

            .buttonVerTodo {
              display: flex;
              background-color: #5dcd71;
              width: 20vw;
              align-items: center;
              margin: 0 auto;
              font-family: Montserrat;
              color: white;
              border-radius: 18px;
              height: 5vw;
              margin-top: 32px;
              font-size: 2.5vw;
              justify-content: center;
            }

            #sectionPopulares > h4 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 5vw;
              margin-bottom: 0px;
            }

            .containerPopulares {
              display: flex;
              justify-content: space-evenly;
              font-family: montserrat;
              flex-wrap: wrap;
              align-items: flex-end;
            }

            .containerPopulares > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 256px;
            }

            .containerPopulares > div > a {
              background-color: #5dcd71;
              border-radius: 10px;
              color: white;
              text-align: center;
              height: 4vw;
              font-size: 2vw;
              width: 16vw;
              justify-content: center;
              display: flex;
              padding: 1%;
              align-items: center;
            }

            .divNewsLetter {
              text-align: center;
              background-color: #5dcd71;
              width: 72vw;
              margin: 0 auto;
              color: white;
              margin-top: 49px;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: Montserrat;
              padding: 2vw;
              margin-bottom: 40px;
              box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
            }

            .formNewsLetter {
              display: flex;
              flex-direction: column;
            }

            .divNewsLetter > span {
              font-size: 4vw;
            }

            .divNewsLetter > p {
              font-size: 2vw;
            }

            .formNewsLetter > label:nth-child(1) > input {
              border: none;
              font-family: montserrat;
              padding: 7px;
            }

            .formNewsLetter > label:nth-child(2) > input {
              font-size: 3vw;
              margin-bottom: 11px;
            }

            .formNewsLetter > label:nth-child(2) {
              font-size: 11px;
            }

            .formNewsLetter > input {
              width: 23vw;
              font-family: Montserrat;
              margin: 0 auto;
              border-radius: 8px;
              background-color: white;
              padding: 5px;
              border: none;
              margin-top: 11px;
              font-size: 2vw;
            }
          }

          @media (min-width: 992px) and (max-width: 1199.98px) {
            .buttonsContainerSlider {
              position: absolute;
              z-index: 1;
              max-width: 1440px;
              width: 100%;
              margin-top: -32%;
              display: flex;
              justify-content: space-between;
            }

            .buttonLeft {
              /* position: absolute;
   top: 20vw;
   z-index: 1;
   width: 6vw; */
            }

            .buttonRight {
              /* position: absolute;
   top: 20vw;
   left: 93%;
   width: 6vw;
   z-index: 1; */
            }

            #sectionOne {
              width: 101vw;
              display: flex;
              height: 54vw;
              overflow-x: hidden;
            }

            .containerCarrouselContent {
              width: 100%;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(2) {
              position: relative;
              top: -100%;
              left: 100%;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: relative;
              top: -200%;
              left: 200%;
            }

            .imagenOneSlider {
              width: 100%;
            }

            .divContainerOneSlider {
              position: absolute;
              width: 100%;
              margin-top: 10%;
              font-size: 3vw;
              color: white;
              text-align: center;
            }

            .divContainerOneSlider > h1 {
              font-family: "Pacifico", cursive;
              font-size: 6vw;
              margin: 0px;
            }

            .divContainerOneSlider > p {
              font-family: "Montserrat", sans-serif;
              font-size: 3vw;
            }

            .divContainerOneSlider > a {
              font-family: "Montserrat", sans-serif;
              background-color: #5dcd71;
              border-radius: 14px;
              padding: 1vw 2vw 1vw 2vw;
              font-size: 1.8vw;
            }

            #sectionTwo > h2 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 4vw;
              margin-bottom: 0px;
            }

            .containerWelcome {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-evenly;
            }

            .containerWelcome > div {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) > span {
              font-family: "Pacifico", cursive;
              font-size: 2vw;
            }

            #sectionTwo > div:nth-child(3) > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              margin: 0px 27px 0px 27px;
            }

            #sectionTwo > div:nth-child(3) > img {
              margin-top: 25px;
            }

            .containerWelcome > div:nth-child(2) > img {
              max-width: 343px;
            }

            .containerWelcome > div > span {
              font-family: "Pacifico", cursive;
              font-size: 2vw;
            }

            .containerWelcome > div > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              width: 220px;
              margin: 0px 27px 0px 27px;
            }

            .containerWelcome > div > img {
              margin-top: 25px;
              object-fit: contain;
            }

            #sectionCategories > h3 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 4vw;
              margin-bottom: 0px;
            }

            .containerCategories {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items: center;
            }

            .containerCategories > div {
              width: 248px;
            }

            .containerCategories > div > a {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .containerCategories > div > a > span {
              font-family: "Montserrat";
              font-weight: 800;
              font-style: normal;
              font-size: 19px;
              text-align: center;
            }

            .buttonVerTodo {
              display: flex;
              background-color: #5dcd71;
              width: 17vw;
              align-items: center;
              margin: 0 auto;
              font-family: Montserrat;
              color: white;
              border-radius: 18px;
              height: 3vw;
              margin-top: 54px;
              font-size: 2vw;
              justify-content: center;
            }

            #sectionPopulares > h4 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 4vw;
              margin-bottom: 0px;
            }

            .containerPopulares {
              display: flex;
              justify-content: space-evenly;
              font-family: montserrat;
              flex-wrap: wrap;
              align-items: flex-end;
            }

            .containerPopulares > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 256px;
            }

            .containerPopulares > div > a {
              background-color: #5dcd71;
              border-radius: 10px;
              color: white;
              text-align: center;
              height: 2.5vw;
              font-size: 1.5vw;
              width: 13vw;
              justify-content: center;
              display: flex;
              padding: 1%;
              align-items: center;
            }

            .divNewsLetter {
              text-align: center;
              background-color: #5dcd71;
              width: 72vw;
              margin: 0 auto;
              color: white;
              margin-top: 49px;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: Montserrat;
              padding: 2vw;
              margin-bottom: 40px;
              box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
            }

            .formNewsLetter {
              display: flex;
              flex-direction: column;
            }

            .divNewsLetter > span {
              font-size: 3vw;
            }

            .divNewsLetter > p {
              font-size: 1.5vw;
            }

            .formNewsLetter > label:nth-child(1) > input {
              border: none;
              font-family: montserrat;
              padding: 7px;
            }

            .formNewsLetter > label:nth-child(2) > input {
              font-size: 3vw;
              margin-bottom: 11px;
            }

            .formNewsLetter > label:nth-child(2) {
              font-size: 11px;
            }

            .formNewsLetter > input {
              width: 18vw;
              font-family: Montserrat;
              margin: 0 auto;
              border-radius: 8px;
              background-color: white;
              padding: 5px;
              border: none;
              margin-top: 11px;
              font-size: 1.5vw;
            }
          }

          @media (min-width: 1200px) {
            .buttonsContainerSlider {
              position: absolute;
              z-index: 1;
              max-width: 1440px;
              width: 100%;
              display: flex;
              padding-top: 301px;
              justify-content: space-between;
            }
            .buttonLeft {
              height: 89px;
            }

            .buttonRight {
              height: 89px;
            }

            #sectionOne {
              width: 101vw;
              display: flex;
              height: 54vw;
              overflow-x: hidden;
              max-width: 1440px;
              margin: 0 auto;
              max-height: 769px;
            }

            .containerCarrouselContent {
              width: 100%;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(2) {
              position: relative;
              top: -100%;
              left: 100%;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: relative;
              top: -200%;
              left: 200%;
            }

            .imagenOneSlider {
              width: 100%;
            }

            .divContainerOneSlider {
              position: absolute;
              width: 100%;
              margin-top: 10%;
              font-size: 3vw;
              color: white;
              text-align: center;
            }

            .divContainerOneSlider > h1 {
              font-family: "Pacifico", cursive;
              font-size: 88px;
              margin: 0px;
            }

            .divContainerOneSlider > p {
              font-family: "Montserrat", sans-serif;
              font-size: 39px;
            }

            .divContainerOneSlider > a {
              font-family: "Montserrat", sans-serif;
              background-color: #5dcd71;
              border-radius: 14px;
              padding: 16px 16px 16px 16px;
              font-size: 23px;
            }

            #sectionTwo > h2 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 4vw;
              margin-bottom: 0px;
            }

            .containerWelcome {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-evenly;
            }

            .containerWelcome > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 300px;
            }

            #sectionTwo {
              max-width: 1440px;
              margin: 0 auto;
            }
            #sectionTwo > div:nth-child(3) {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            #sectionTwo > div:nth-child(3) > span {
              font-family: "Pacifico", cursive;
              font-size: 1.5vw;
            }

            #sectionTwo > div:nth-child(3) > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              margin: 0px 27px 0px 27px;
            }

            #sectionTwo > div:nth-child(3) > img {
              margin-top: 25px;
            }

            .containerWelcome > div:nth-child(2) > img {
              max-width: 444px;
            }

            .containerWelcome > div > span {
              font-family: "Pacifico", cursive;
              font-size: 1.5vw;
            }

            .containerWelcome > div > p {
              font-family: "Montserrat", sans-serif;
              text-align: center;
              margin: 0px 27px 0px 27px;
            }

            .containerWelcome > div > img {
              margin-top: 25px;
              object-fit: contain;
            }

            #sectionCategories {
              max-width: 1440px;
              margin: 0 auto;
            }
            #sectionCategories > h3 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 4vw;
              margin-bottom: 0px;
            }

            .containerCategories {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
              align-items: center;
            }

            .containerCategories > div {
              width: 248px;
            }

            .containerCategories > div > a {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .containerCategories > div > a > span {
              font-family: "Montserrat";
              font-weight: 800;
              font-style: normal;
              font-size: 19px;
              text-align: center;
            }

            .buttonVerTodo {
              display: flex;
              background-color: #5dcd71;
              max-width: 223px;
              align-items: center;
              margin: 0 auto;
              font-family: Montserrat;
              color: white;
              border-radius: 18px;
              height: 60px;
              margin-top: 54px;
              font-size: 35px;
              justify-content: center;
            }

            #sectionPopulares > h4 {
              font-family: "Pacifico", cursive;
              text-align: center;
              font-size: 4vw;
              margin-bottom: 0px;
            }

            .containerPopulares {
              display: flex;
              justify-content: space-evenly;
              font-family: montserrat;
              flex-wrap: wrap;
              align-items: flex-end;
            }

            .containerPopulares > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 256px;
            }

            .containerPopulares > div > a {
              background-color: #5dcd71;
              border-radius: 10px;
              color: white;
              text-align: center;
              height: 34px;
              font-size: 21px;
              width: 164px;
              justify-content: center;
              display: flex;
              padding: 1%;
              align-items: center;
            }

            .divNewsLetter {
              text-align: center;
              background-color: #5dcd71;
              max-width: 1025px;
              margin: 0 auto;
              color: white;
              margin-top: 49px;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-family: Montserrat;
              padding: 24px;
              margin-bottom: 40px;
              box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
            }

            .formNewsLetter {
              display: flex;
              flex-direction: column;
            }

            .divNewsLetter > span {
              font-size: 40px;
            }

            .divNewsLetter > p {
              font-size: 20px;
            }

            .formNewsLetter > label:nth-child(1) > input {
              border: none;
              font-family: montserrat;
              padding: 7px;
            }

            .formNewsLetter > label:nth-child(2) > input {
              font-size: 3vw;
              margin-bottom: 11px;
            }

            .formNewsLetter > label:nth-child(2) {
              font-size: 15px;
            }

            .formNewsLetter > input {
              width: 181px;
              font-family: Montserrat;
              margin: 0 auto;
              border-radius: 8px;
              background-color: white;
              padding: 5px;
              border: none;
              margin-top: 11px;
              font-size: 18px;
            }
            #sectionPopulares {
              max-width: 1440px;
              margin: 0 auto;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Home;
