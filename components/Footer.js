import React from "react";
import Link from "next/link";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagenTelefono: "",
      imagenWhatsapp: "",
      imagenChat: "",
      iconoInstagram: "",
      iconoFacebook: "",
      iconoTwitter: ""
    };
  }

  componentDidMount() {
    this.setState({
      imagenTelefono:
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594578688/iconosHorticurita/telefono_ibn7ia.png",
      imagenWhatsapp:
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594578040/iconosHorticurita/whatsapp-64_wdhynx.png",
      imagenChat:
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594578971/iconosHorticurita/icono-charla_znjdc4.png",
      iconoInstagram:
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594579228/iconosHorticurita/icono-instagram_ir06gu.png",
      iconoFacebook:
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594579351/iconosHorticurita/icono_facebook_bxuabc.png",
      iconoTwitter:
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594585327/iconosHorticurita/icono_twitter_jvqpup.png",
    });
  


    window.onload = function() {
      let fontCharge = document.createElement("link");
    fontCharge.setAttribute('async','')
    fontCharge.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Miltonian+Tattoo|Pacifico|Montserrat&display=swap"
    );
    fontCharge.setAttribute("rel", "stylesheet");
    document.querySelector("head").appendChild(fontCharge);
    };

  
    




  }
  render() {
    return (
      <>
        <footer>
          <div>
            <h5>Contacto</h5>
            <a href="tel:+34612345678">
              
                <img src={this.state.imagenTelefono} alt="icono teléfono" />
              
              Teléfono
            </a>
            <a href="https://api.whatsapp.com/send?phone=34612345678">
              
                <img src={this.state.imagenWhatsapp} alt="icono whatsapp" />
              
              Whatsapp
            </a>
            <button>
             
                <img src={this.state.imagenChat} alt="icono chat en línea" />
            
              Chat en línea
            </button>
          </div>
          <div>
            <h5>Categorías</h5>
            <ul>
              <li>
                <Link href="/productos/frutas">
                  <a>Frutas</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/verduras-y-hortalizas">
                  <a>Verduras y hortalizas</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/legumbres">
                  <a>Legumbres</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/frutos-secos">
                  <a>Frutos secos</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/encurtidos">
                  <a>Encurtidos</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/especias">
                  <a>Especias</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/miel">
                  <a>Miel</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/dulces">
                  <a>Dulces</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/galletas-y-cereales">
                  <a>Galletas y cereales</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/aperitivos-snack">
                  <a>Aperitivos Snack</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Información</h5>
            <Link href="/">
              <a>Condiciones generales</a>
            </Link>
            <Link href="/">
              <a>Política de privacidad</a>
            </Link>
            <Link href="/">
              <a>Política de Cookies</a>
            </Link>
            <Link href="/">
              <a>Condiciones de compra</a>
            </Link>
            <Link href="/">
              <a>Calidad</a>
            </Link>
          </div>
          <div>
            <h5>Redes sociales</h5>
            <a
              target="_blank"
              href="https://www.instagram.com/horticurita.es/"
              rel="noreferrer"
            >
            
              <img src={this.state.iconoInstagram} alt="icono instagram" />
              
              Instagram
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/Horticurita-110947830690065"
              rel="noreferrer"
            >
            
              <img src={this.state.iconoFacebook} alt="icono facebook" />
              
              Facebook
            </a>
            <a
              target="_blank"
              href="https://twitter.com/horticurita.es"
              rel="noreferrer"
            >
            
              <img src={this.state.iconoTwitter} alt="icono facebook" />
              
              Twitter
            </a>
          </div>

          <div className="footerCopyright">
            <hr></hr>
            2020 © Copyright Horticurita |{" "}
            <Link href="/">
              <a>Desarrollado por Alberto S.</a>
            </Link>
          </div>
        </footer>
        <style jsx>{`
          footer {
            background-color: #2ecc71;
            display: flex;
            justify-content: space-evenly;
            font-family: Montserrat;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          footer > div {
            padding: 38px 15px 38px 15px;
          }
          footer > div > ul > li > a {
            color: white;
          }
          footer > div > h5 {
            font-size: 2em;
            color: white;
            margin-top: 1px;
            margin-bottom: 19px;
          }

          footer > div > ul > li {
            margin-top: 5px;
            color: white;
          }

          footer > div > button {
            margin: 0px;
            background: none;
            border: none;
            display: flex;
            align-items: center;
            color: white;
            font-family: montserrat;
            font-size: 14px;
            outline: none;
          }

          footer > div:nth-child(1) {
            display: flex;
            flex-direction: column;
          }
          footer > div:nth-child(1) > button {
            padding: 0px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          footer > div:nth-child(1) > a {
            margin-top: 10px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          footer > div:nth-child(3) {
            display: flex;
            flex-direction: column;
          }

          footer > div:nth-child(3) > a {
            margin-bottom: 5px;
          }

          footer > div:nth-child(4) {
            display: flex;
            flex-direction: column;
          }

          footer > div:nth-child(4) > a {
            margin-top: 10px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          footer > div > a {
            text-decoration: none;
            color: white;
          }

          .footerCopyright {
            width: 100%;
            text-align: center;
            color: white;
          }

          .footerCopyright > hr {
            background-color: #67f572;
            margin-bottom: 1px;
            border-radius: 10px;
            max-width: 626px;
            margin: 0 auto;
            border-color: transparent;
          }
        `}</style>
       
      </>
      
    );
  }
}

export default Footer;
