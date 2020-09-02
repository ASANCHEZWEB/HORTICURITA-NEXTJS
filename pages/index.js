import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.functionInterval = "";
    this.state = {
      email: "",
      checkBox: false,
      enviado: "no",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "checkBox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    if (this.state.email !== "" && this.state.checkBox !== false) {
      axios
        .post(
          "https://gestorhorticurita.herokuapp.com/api/addEmail/",
          this.state
        )
        .then((response) => {
          if (response.data.guardado === "si") {
            this.setState({
              email: "",
              checkBox: false,
              enviado: "si",
            });
          }
        });
    }

    event.preventDefault();
  }

  buttonDer() {
    if (
      document.querySelector(".containerCarrouselContent").style.marginLeft =="0%") {
      document.querySelector(
        ".containerCarrouselContent"
      ).style.marginLeft = `-100%`;
    } else if (
      document.querySelector(".containerCarrouselContent").style.marginLeft ==
      "-100%"
    ) {
      document.querySelector(
        ".containerCarrouselContent"
      ).style.marginLeft = `-200%`;
    } else if (
      document.querySelector(".containerCarrouselContent").style.marginLeft ==
      "-200%"
    ) {
      document.querySelector(
        ".containerCarrouselContent"
      ).style.marginLeft = `0%`;
    }
  }
  buttonIzq() {
    if (
      document.querySelector(".containerCarrouselContent").style.marginLeft ==
      "-100%"
    ) {
      document.querySelector(
        ".containerCarrouselContent"
      ).style.marginLeft = `0%`;
    } else if (
      document.querySelector(".containerCarrouselContent").style.marginLeft ==
      "-200%"
    ) {
      document.querySelector(
        ".containerCarrouselContent"
      ).style.marginLeft = `-100%`;
    }
  }

  componentDidMount() {
    this.functionInterval = setInterval(() => {
      if (
        document.querySelector(".containerCarrouselContent").style.marginLeft ==
        "0%"
      ) {
        document.querySelector(
          ".containerCarrouselContent"
        ).style.marginLeft = `-100%`;
      } else if (
        document.querySelector(".containerCarrouselContent").style.marginLeft ==
        "-100%"
      ) {
        document.querySelector(
          ".containerCarrouselContent"
        ).style.marginLeft = `-200%`;
      } else if (
        document.querySelector(".containerCarrouselContent").style.marginLeft ==
        "-200%"
      ) {
        document.querySelector(
          ".containerCarrouselContent"
        ).style.marginLeft = `0%`;
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.functionInterval);
  }

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
          <meta name="google-site-verification" content="xNVGHPndXCWiyVOrPTjj-_PvASUC0TI0K1sEXDCvMZ0" />
        </Head>

        <section id="sectionOne">
          <div
            className="containerCarrouselContent"
            style={{ marginLeft: "0%" }}
          >
            <div>
              <div className="divContainerOneSlider">
                <h1>
                  Frutas y verduras <br></br>online
                </h1>
                <p>CALIDAD Y SABOR | PRECIOS IMBATIBLES</p>

                <Link href="/productos">
                  <a>VER CATÁLOGO</a>
                </Link>
              </div>

              <img
                className="imagenOneSlider"
                src="home/comida-organica-verduras-canasta_135427-2767.jpg"
                alt="frutas y verduras"
              />
            </div>
            <div>
              <div className="divContainerOneSlider">
                <h1>
                  Productores propios <br></br>gran variedad
                </h1>
                <p>CALIDAD Y SABOR | PRECIOS IMBATIBLES</p>
                <Link href="/sobre-nosotros">
                  <a>SOBRE NOSOTROS</a>
                </Link>
              </div>

              <img
                className="imagenOneSlider"
                src="home/comida-organica-verduras-canasta_135427-2767.jpg"
                alt=" frutas y verduras"
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
                src="home/repartidor.jpg"
                alt="repartidor"
              />
            </div>
          </div>
        </section>

        <div className="container4k">
          <div className="buttonsContainerSlider">
            <img
              className="buttonLeft"
              src="home/icono-flecha-izquierda.png"
              alt="icono flecha izquierda"
              onClick={this.buttonIzq}
            />
            <img
              className="buttonRight"
              src="home/icono-flecha-derecha.png"
              alt="icono flecha derecha"
              onClick={this.buttonDer}
            />
          </div>
        </div>

        <section id="sectionTwo">
          <h2>Bienvenido a horticurita</h2>
          <div className="containerWelcome">
            <div>
              <img src="home/icono-lechuga.png" alt=" icono lechuga" />
              <span>100% Fresco</span>
              <p>
                Productos siempre recolectados a pedido.Nunca almacenados en
                cámaras frigoríficas
              </p>
              <img src="home/icono-tarjeta-visa.png" alt="icono tarjeta visa" />

              <span>Pago seguro</span>
              <p>
                Paga con tarjeta con total tranquilidad , pagos procesados por
                BBVA.
              </p>
            </div>
            <div>
              <img src="home/monton-de-frutas.jpg" alt="monton de frutas" />
            </div>
            <div>
              <img src="home/buena-calidad.png" alt="icono buena calidad" />
              <span>Calidad</span>
              <p>
                Somos productores propios, cultivamos sin abonos artificiales ,
                aseguramos el producto sin daños
              </p>
              <img
                src="home/icono-coche-de-envios.png"
                alt="icono coche envíos"
              />
              <span>Envios 24/48h</span>
              <p>
                Trabajamos con la más rápida y mejor agencia de envíos , tu
                pedido en 24/48h
              </p>
            </div>
          </div>
          <div>
            <img src="home/icono-reembolso.png" alt="icono reembolso" />
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
              <Link href="/productos/frutas">
                <a>
                  <img src="home/albaricoque.jpg" alt="albaricoque" />
                  <span>Frutas</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/verduras-y-hortalizas">
                <a>
                  <img src="home/pimiento-rojo.jpg" alt="pimiento rojo" />
                  <span>Verduras y hortalizas</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/legumbres">
                <a>
                  <img src="home/lentejas.jpg" alt="lentejas" />
                  <span>Legumbres</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/frutos-secos">
                <a>
                  <img src="home/nuez.jpg" alt="nueces" />
                  <span>Frutos secos</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/encurtidos">
                <a>
                  <img
                    src="home/manzanilla-con-pepinillo.jpg"
                    alt="encurtidos"
                  />
                  <span>Encurtidos</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/especias">
                <a>
                  <img src="home/pimenton-dulce.jpg" alt="Pimentón dulce" />
                  <span>Especias</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/dulces">
                <a>
                  <img
                    src="home/bollo-chocolate.jpg"
                    alt="bollo de chocolate"
                  />
                  <span>Dulces</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/galletas-y-cereales">
                <a>
                  <img src="home/galletas-caseras.jpg" alt="galletas caseras" />
                  <span>Galletas y cereales</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/productos/aperitivos-snack">
                <a>
                  <img src="home/aperitivo-snack.jpg" alt="apetivos snacks" />
                  <span>Aperitivos snack</span>
                </a>
              </Link>
            </div>
          </div>
          <Link href="/productos">
            <a className="buttonVerTodo">Ver todo</a>
          </Link>
        </section>
        <section id="sectionPopulares">
          <h4>Productos populares</h4>
          <div className="containerPopulares">
            <div>
              <img src="home/tomates.jpg" alt="tomates" />
              <span>Tomate</span>
              <p>1.50€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/sandia.jpg" alt="sandia" />
              <span>Sandía</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/melon.jpg" alt="melón" />
              <span>Melón</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/ciruela.jpg" alt="ciruela" />
              <span>Ciruelas</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/melocoton.jpg" alt="melocotón" />
              <span>Melocotón</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/paraguaya.jpg" alt="paraguaya" />
              <span>Paraguayo</span>
              <p>2.30€/Kg</p>
              <a>Ver producto</a>
            </div>
            <div>
              <img src="home/nictarina.jpg" alt="nectarina" />
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
          <form onSubmit={this.handleSubmit} className="formNewsLetter">
            <label>
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Escribe tu email"
                required
              />
            </label>
            <label>
              <input
                type="checkbox"
                id="cbox1"
                name="checkBox"
                checked={this.state.checkBox}
                onChange={this.handleInputChange}
                required
              />{" "}
              Acepto los terminos y condiciones de horticurita.es
            </label>

            <input type="submit" value="Suscribirme" />
            {this.state.enviado === "si" ? (
                <span
                  style={{
                    margin: "0 auto",
                    marginBottom: "40px",
                    textAlign: "center",
                  }}
                >
                  <img src="/icono-stock-disponible.png"></img>Suscrito correctamente
                </span>
              ) : (
                ""
              )}
          </form>
        </div>
        <style jsx>{`
          #sectionOne {
            overflow-y: hidden;
          }
          .buttonLeft {
            object-fit: contain;
            cursor: pointer;
            touch-action: manipulation;
          }

          .buttonRight {
            object-fit: contain;
            cursor: pointer;
            touch-action: manipulation;
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
            .containerCarrouselContent > div:nth-child(1) {
              position: absolute;
              margin-left: 0%;
              width: 100vw;
            }
            .containerCarrouselContent > div:nth-child(2) {
              position: absolute;
              margin-left: 100vw;
              width: 100vw;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: absolute;
              margin-left: 200vw;
              width: 100vw;
            }

            .imagenOneSlider {
              width: 100%;
              object-fit: contain;
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
              color: black;
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
              width: 767px;
              position: relative;
            }
            .containerCarrouselContent > div:nth-child(1) {
              position: absolute;
              margin-left: 0%;
              width: 101vw;
            }
            .containerCarrouselContent > div:nth-child(2) {
              position: absolute;
              margin-left: 101vw;
              width: 101vw;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: absolute;
              margin-left: 202vw;
              width: 101vw;
            }
            .imagenOneSlider {
              width: 100%;
              object-fit: contain;
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
              color: black;
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
              width: 991px;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(1) {
              position: absolute;
              margin-left: 0%;
              width: 101vw;
            }
            .containerCarrouselContent > div:nth-child(2) {
              position: absolute;
              margin-left: 101vw;
              width: 101vw;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: absolute;
              margin-left: 202vw;
              width: 101vw;
            }

            .imagenOneSlider {
              width: 100%;
              object-fit: contain;
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
              color: black;
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
              width: 1199px;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(1) {
              position: absolute;
              margin-left: 0%;
              width: 101vw;
            }
            .containerCarrouselContent > div:nth-child(2) {
              position: absolute;
              margin-left: 101vw;
              width: 101vw;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: absolute;
              margin-left: 202vw;
              width: 101vw;
            }

            .imagenOneSlider {
              width: 100%;
              object-fit: contain;
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
              color: black;
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
              margin-top: -429px;
              justify-content: space-between;
            }
            .buttonLeft {
              height: 89px;
            }

            .buttonRight {
              height: 89px;
            }

            .container4k {
              display: flex;
              justify-content: center;
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
              max-width: 1440px;
              width: 101vw;
              position: relative;
            }

            .containerCarrouselContent > div:nth-child(1) {
              position: absolute;
              margin-left: 0%;
              width: 101vw;
              max-width: 1440px;
            }
            .containerCarrouselContent > div:nth-child(2) {
              position: absolute;
              margin-left: 100%;
              width: 101vw;
              max-width: 1440px;
            }

            .containerCarrouselContent > div:nth-child(3) {
              position: absolute;
              margin-left: 200%;
              width: 101vw;
              max-width: 1440px;
            }

            .imagenOneSlider {
              width: 100%;
              object-fit: contain;
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
              color: black;
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
