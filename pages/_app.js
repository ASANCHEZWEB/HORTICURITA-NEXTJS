import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
    

      <header>
        <NavbarComponent />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />

      <style jsx global>{`
       
      /* latin */
@font-face {
  font-family: 'Miltonian Tattoo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Miltonian Tattoo'), local('MiltonianTattoo-Regular'), url(https://fonts.gstatic.com/s/miltoniantattoo/v15/EvOUzBRL0o0kCxF-lcMCQxlpVsA_JwT2MRJnq-o.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6K6MmBp0u-zK4.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6D6MmBp0u-zK4.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6I6MmBp0u-zK4.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6J6MmBp0u-zK4.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v16/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

    

       
       
       
       
        body {
          margin: 0px;
        }
        main {
          padding-top: 66px;
        }
        button {
          touch-action: manipulation;
        }

        a {
          text-decoration: none;
        }
        /* CONTENEDOR BARRA DE NAVEGACIÓN */
        nav {
          display: flex;
          justify-content: space-between;
          background: #2ecc71;
          color: white;
          align-items: center;
          position: fixed;
          width: 100%;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
        }

        .showUlProducts > li > hr {
          width: 151px;
          margin: 0px;
        }

        /* ELIMINAR MARGO DE BOTONES */
        button {
          outline: none;
        }

        /* LOGO */
        nav > div:nth-child(1) > a {
          display: block;
          font-family: Miltonian Tattoo;
          font-size: 1.5em;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
          color: white;
        }

        .disableZoombutton {
          touch-action: manipulation;
        }

        @media (max-width: 575.98px) {
          /* AJUSTE DE TAMAÑO IMAGENES NAV */
          nav > div > button > img {
            width: 23px;
          }

          /* AJUSTE DE STILOS DE BOTONES MENU Y CARRO */
          nav > div > button {
            background: none;
            border-style: none;
          }

          /* AJUSTE DE LISTA DEL BOTON PRODUCTOS */
          nav > div > ul > li {
            padding-left: 35px;
            margin-top: 18px;
            font-family: Montserrat;
            width: max-content;
          }

          /* OCULTAR MENU NAV */
          .listProducts {
            display: none;
          }

          /* MOSTRAR MENÚ NAV*/
          .showList {
            display: flex;
            flex-direction: column;
            position: absolute;
            background: white;
            color: black;
            list-style-type: none;
            padding: 0px;
            width: 100%;
            margin-top: 18px;
            margin-left: -2%;
            padding-top: 16px;
            padding-bottom: 16px;
            overflow: scroll;
            height: -webkit-fill-available;
          }

          /* OCULTAR DROPDOWN DE PRODUCTOS */
          .ulProducts {
            display: none;
          }

          /* MOSTRAR LIST DE DROPDOWN PRODUCTOS */
          .showUlProducts {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
          }

          /* ESTILOS PARA LOS LI DE PRODUCTOS */
          .showUlProducts > li {
            margin-top: 10px;
            width: max-content;
          }
          .showUlProducts > li > a {
            color: black;
          }

          /* OCULTAR IMAGENES EN VERSION MOBILE */
          .showUlProducts > li > a > img {
            display: none;
          }

          /* OCULTAR IMAGENES EN VERSION MOBILE */
          .showUlProducts > li > button > img:nth-child(1) {
            display: none;
          }

          /* OCULTAR LISTA DE FRUTAS */
          .ulFruits {
            display: none;
          }

          /* MOSTRAR LISTA DE FRUTAS */
          .showfruits {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
          }

          /* ESTILO PARA LOS LI DE FRUTAS */
          .showfruits > li {
            margin-top: 10px;
            font-family: pacifico;
            width: max-content;
          }
          .showfruits > li > a {
            color: black;
          }
          /* ESTILOS PARA LOS ICONOS DE FRUTAS */
          .showfruits > li > a > img {
            width: 22px;
          }

          /* ESTILO PARA LOS BOTONES DE DROPDOWN DEL MENÚ */
          .displayButtonsProds {
            border: none;
            background: none;
            padding: 0px;
            font-size: 14px;
            display: flex;
            align-items: center;
          }

          /* OCULTAR LISTA DE VERDURAS */
          .ulVerduras {
            display: none;
          }

          /* MOSTRAR LISTA VERDURAS */
          .showVerduras {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
          }

          .showVerduras > li {
            font-family: Pacifico;
            width: max-content;
          }
          .showVerduras > li > a {
            color: black;
          }
          /* AJUSTAR TAMAÑO ICONOS VERDURA */
          .showVerduras > li > a > img {
            width: 22px;
          }

          /* CSS CARRITO DENTRO DE MENÚ */

          .cartStyleLI {
            border-top-color: #33ff0057;
            border-top-style: solid;
            padding-top: 11px;
            margin-top: 8px;
            margin-bottom: 40px;
            width: 92%;
          }

          .cartStyleLI > a {
            display: flex;
            align-items: center;
            margin-bottom: 29px;
          }

          .cartStyleLI > a > img {
            width: 40px;
          }

          /* POSICIONES DE LOS 3 DIVS DEL NAV */
          nav > div:nth-child(1) {
            order: 2;
          }

          nav > div:nth-child(2) {
            margin-left: 2%;
            order: 1;
          }

          nav > div:nth-child(3) {
            order: 3;
            margin-right: 4%;
          }

          /* BOTON DE CARRO */
          .buttonCart {
            display: flex;
            align-items: center;
            color: white;
            background: none;
            border-style: none;
          }
          .buttonCart > span {
            display: none;
          }
          .buttonCart > img {
            width: 23px;
          }
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
          /* AJUSTE DE TAMAÑO IMAGENES NAV */
          nav > div > button > img {
            width: 23px;
          }

          /* AJUSTE DE STILOS DE BOTONES MENU Y CARRO */
          nav > div > button {
            background: none;
            border-style: none;
          }

          /* AJUSTE DE LISTA DEL BOTON PRODUCTOS */
          nav > div > ul > li {
            padding-left: 35px;
            margin-top: 18px;
            font-family: Montserrat;
            width: max-content;
          }

          /* OCULTAR MENU NAV */
          .listProducts {
            display: none;
          }

          /* MOSTRAR MENÚ NAV*/
          .showList {
            display: flex;
            flex-direction: column;
            position: absolute;
            background: white;
            color: black;
            list-style-type: none;
            padding: 0px;
            width: 100%;
            margin-top: 18px;
            margin-left: -2%;
            padding-top: 16px;
            padding-bottom: 16px;
            overflow: scroll;
            height: -webkit-fill-available;
          }

          /* OCULTAR DROPDOWN DE PRODUCTOS */
          .ulProducts {
            display: none;
          }

          /* MOSTRAR LIST DE DROPDOWN PRODUCTOS */
          .showUlProducts {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
          }

          /* ESTILOS PARA LOS LI DE PRODUCTOS */
          .showUlProducts > li {
            margin-top: 10px;
            width: max-content;
          }
          .showUlProducts > li > a {
            color: black;
          }
          /* OCULTAR IMAGENES EN VERSION MOBILE */
          .showUlProducts > li > a > img {
            display: none;
          }

          /* OCULTAR IMAGENES EN VERSION MOBILE */
          .showUlProducts > li > button > img:nth-child(1) {
            display: none;
          }

          /* OCULTAR LISTA DE FRUTAS */
          .ulFruits {
            display: none;
          }

          /* MOSTRAR LISTA DE FRUTAS */
          .showfruits {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
          }

          /* ESTILO PARA LOS LI DE FRUTAS */
          .showfruits > li {
            margin-top: 10px;
            font-family: pacifico;
            width: max-content;
          }
          .showfruits > li > a {
            color: black;
          }
          /* ESTILOS PARA LOS ICONOS DE FRUTAS */
          .showfruits > li > a > img {
            width: 22px;
          }

          /* ESTILO PARA LOS BOTONES DE DROPDOWN DEL MENÚ */
          .displayButtonsProds {
            border: none;
            background: none;
            padding: 0px;
            font-size: 14px;
            display: flex;
            align-items: center;
          }

          /* OCULTAR LISTA DE VERDURAS */
          .ulVerduras {
            display: none;
          }

          /* MOSTRAR LISTA VERDURAS */
          .showVerduras {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
          }

          .showVerduras > li {
            font-family: Pacifico;
            width: max-content;
          }
          .showVerduras > li > a {
            color: black;
          }
          /* AJUSTAR TAMAÑO ICONOS VERDURA */
          .showVerduras > li > a > img {
            width: 22px;
          }

          /* CSS CARRITO DENTRO DE MENÚ */

          .cartStyleLI {
            border-top-color: #33ff0057;
            border-top-style: solid;
            padding-top: 11px;
            margin-top: 8px;
            margin-bottom: 40px;
            width: 92%;
          }

          .cartStyleLI > a {
            display: flex;
            align-items: center;
            margin-bottom: 29px;
          }

          .cartStyleLI > a > img {
            width: 40px;
          }

          /* POSICIONES DE LOS 3 DIVS DEL NAV */
          nav > div:nth-child(1) {
            order: 2;
          }

          nav > div:nth-child(2) {
            margin-left: 2%;
            order: 1;
          }

          nav > div:nth-child(3) {
            order: 3;
            margin-right: 4%;
          }
          /* BOTON DE CARRO */
          .buttonCart {
            display: flex;
            align-items: center;
            color: white;
            background: none;
            border-style: none;
          }
          .buttonCart > span {
            display: none;
          }
          .buttonCart > img {
            width: 28px;
          }
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
          nav > div:nth-child(1) {
            margin-left: 2%;
          }

          nav > div:nth-child(3) {
            margin-right: 4%;
          }

          nav > div:nth-child(2) > button {
            display: none;
          }

          /* AJUSTE DE TAMAÑO IMAGENES NAV */
          nav > div > button > img {
            width: 23px;
          }

          /* ESTILO PARA LOS BOTONES DE DROPDOWN DEL MENÚ */
          .displayButtonsProds {
            border: none;
            background: none;
            padding: 0px;
            font-size: 14px;
            display: flex;
            align-items: center;
          }

          /* AJUSTE DE STILOS DE BOTONES MENU Y CARRO */
          nav > div > button {
            background: none;
            border-style: none;
          }

          .listProducts {
            display: flex;
            align-items: center;
            list-style-type: none;
          }

          .listProducts > li {
            margin-left: 6px;
            font-family: Montserrat;
            font-size: 14px;
          }

          /* OCULTAR DROPDOWN DE PRODUCTOS */
          .ulProducts {
            display: none;
          }

          .showUlProducts > li > button > img:nth-child(2) {
            transform: rotate(270deg);
          }

          /* MOSTRAR LIST DE DROPDOWN PRODUCTOS */
          .showUlProducts {
            display: flex;
            padding-bottom: 30px;
            list-style: none;
            position: absolute;
            background-color: white;
            justify-content: space-between;
            margin-top: 24px;
            flex-wrap: wrap;
            padding-right: 40px;
            padding-top: 30px;
            width: 201px;
            box-shadow: 0px 49px 81px -23px rgba(0, 0, 0, 0.75);
            font-family: Pacifico;
          }

          .showfruits {
            display: flex;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 10px;
            flex-wrap: wrap;
            left: 281px;
            top: 73px;
            position: absolute;
            background: white;
            justify-content: center;
            border-left: solid;
            border-left-width: 1px;
            box-shadow: 25px 42px 44px -23px rgba(0, 0, 0, 0.75);
          }

          .showfruits > li {
            width: 185px;
            margin-top: 3px;
          }

          .showUlProducts > li {
            margin-top: 10px;
            font-weight: bold;
            font-size: 16px;
            color: black;
            width: 229px;
          }

          .showUlProducts > li > a {
            display: flex;
            align-items: center;
            color: black;
          }

          .showUlProducts > li > a > img {
            width: 22px;
          }

          .showUlProducts > li > button {
            font-weight: bold;
            font-size: 16px;
            font-family: pacifico;
          }

          .showfruits > li > a > img {
            width: 26px;
          }

          .showfruits > li > a {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .ulFruits {
            display: none;
          }

          .showUlProducts > li > button > img:nth-child(1) {
            width: 20px;
          }

          .showVerduras {
            display: flex;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 10px;
            flex-wrap: wrap;
            left: 281px;
            top: 73px;
            position: absolute;
            background: white;
            justify-content: center;
            border-left: solid;
            border-left-width: 1px;
            box-shadow: 25px 42px 44px -23px rgba(0, 0, 0, 0.75);
          }

          .showVerduras > li {
            width: 185px;
            margin-top: 3px;
          }

          .showVerduras > li > a {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .showVerduras > li > a > img {
            width: 26px;
          }

          .ulVerduras {
            display: none;
          }

          .cartStyleLI {
            display: none;
          }

          .buttonCart {
            display: flex;
            align-items: center;
            color: white;
            background: none;
            border-style: none;
          }
          .buttonCart > span {
            display: none;
          }
          .buttonCart > img {
            width: 28px;
          }
        }

        @media (min-width: 992px) and (max-width: 1199.98px) {
          nav > div:nth-child(1) {
            margin-left: 2%;
          }

          nav > div:nth-child(3) {
            margin-right: 4%;
          }

          nav > div:nth-child(2) > button {
            display: none;
          }

          /* AJUSTE DE TAMAÑO IMAGENES NAV */
          nav > div > button > img {
            width: 23px;
          }

          /* ESTILO PARA LOS BOTONES DE DROPDOWN DEL MENÚ */
          .displayButtonsProds {
            border: none;
            background: none;
            padding: 0px;
            font-size: 14px;
            display: flex;
            align-items: center;
          }

          /* AJUSTE DE STILOS DE BOTONES MENU Y CARRO */
          nav > div > button {
            background: none;
            border-style: none;
          }

          .listProducts {
            display: flex;
            align-items: center;
            list-style-type: none;
          }

          .listProducts > li {
            margin-left: 20px;
            font-family: Montserrat;
            font-size: 14px;
          }

          /* OCULTAR DROPDOWN DE PRODUCTOS */
          .ulProducts {
            display: none;
          }

          .showUlProducts > li > button > img:nth-child(2) {
            transform: rotate(270deg);
          }

          /* MOSTRAR LIST DE DROPDOWN PRODUCTOS */
          .showUlProducts {
            display: flex;
            padding-bottom: 30px;
            list-style: none;
            position: absolute;
            background-color: white;
            justify-content: space-between;
            margin-top: 24px;
            flex-wrap: wrap;
            padding-right: 40px;
            padding-top: 30px;
            width: 201px;
            box-shadow: 0px 49px 81px -23px rgba(0, 0, 0, 0.75);
            font-family: Pacifico;
          }

          .showfruits {
            display: flex;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 10px;
            flex-wrap: wrap;
            left: 281px;
            top: 73px;
            position: absolute;
            background: white;
            justify-content: center;
            border-left: solid;
            border-left-width: 1px;
            box-shadow: 25px 42px 44px -23px rgba(0, 0, 0, 0.75);
          }

          .showfruits > li {
            width: 185px;
            margin-top: 3px;
          }

          .showUlProducts > li {
            margin-top: 10px;
            font-weight: bold;
            font-size: 16px;
            color: black;
            width: 229px;
          }

          .showUlProducts > li > a {
            display: flex;
            align-items: center;
            color: black;
          }

          .showUlProducts > li > a > img {
            width: 22px;
          }

          .showUlProducts > li > button {
            font-weight: bold;
            font-size: 16px;
            font-family: pacifico;
          }

          .showfruits > li > a > img {
            width: 26px;
          }

          .showfruits > li > a {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .ulFruits {
            display: none;
          }

          .showUlProducts > li > button > img:nth-child(1) {
            width: 20px;
          }

          .showVerduras {
            display: flex;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 10px;
            flex-wrap: wrap;
            left: 281px;
            top: 73px;
            position: absolute;
            background: white;
            justify-content: center;
            border-left: solid;
            border-left-width: 1px;
            box-shadow: 25px 42px 44px -23px rgba(0, 0, 0, 0.75);
          }

          .showVerduras > li {
            width: 185px;
            margin-top: 3px;
          }

          .showVerduras > li > a {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .showVerduras > li > a > img {
            width: 26px;
          }

          .ulVerduras {
            display: none;
          }

          .cartStyleLI {
            display: none;
          }

          .buttonCart {
            display: flex;
            align-items: center;
            color: white;
            background: none;
            border-style: none;
          }
          .buttonCart > span {
            font-size: 15px;
          }
          .buttonCart > img {
            width: 28px;
          }
        }

        @media (min-width: 1200px) {
          nav > div:nth-child(1) {
            margin-left: 2%;
          }

          nav > div:nth-child(3) {
            margin-right: 4%;
          }

          nav > div:nth-child(2) > button {
            display: none;
          }

          /* AJUSTE DE TAMAÑO IMAGENES NAV */
          nav > div > button > img {
            width: 23px;
          }

          /* ESTILO PARA LOS BOTONES DE DROPDOWN DEL MENÚ */
          .displayButtonsProds {
            border: none;
            background: none;
            padding: 0px;
            font-size: 14px;
            display: flex;
            align-items: center;
          }

          /* AJUSTE DE STILOS DE BOTONES MENU Y CARRO */
          nav > div > button {
            background: none;
            border-style: none;
          }

          .listProducts {
            display: flex;
            align-items: center;
            list-style-type: none;
          }

          .listProducts > li {
            margin-left: 37px;
            font-family: Montserrat;
            font-size: 14px;
          }

          /* OCULTAR DROPDOWN DE PRODUCTOS */
          .ulProducts {
            display: none;
          }

          .showUlProducts > li > button > img:nth-child(2) {
            transform: rotate(270deg);
          }

          /* MOSTRAR LIST DE DROPDOWN PRODUCTOS */
          .showUlProducts {
            display: flex;
            padding-bottom: 30px;
            list-style: none;
            position: absolute;
            background-color: white;
            justify-content: space-between;
            margin-top: 24px;
            flex-wrap: wrap;
            padding-right: 40px;
            padding-top: 30px;
            width: 201px;
            box-shadow: 0px 49px 81px -23px rgba(0, 0, 0, 0.75);
            font-family: Pacifico;
          }

          .showfruits {
            display: flex;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 10px;
            flex-wrap: wrap;
            left: 281px;
            top: 73px;
            position: absolute;
            background: white;
            justify-content: center;
            border-left: solid;
            border-left-width: 1px;
            box-shadow: 25px 42px 44px -23px rgba(0, 0, 0, 0.75);
          }

          .showfruits > li {
            width: 185px;
            margin-top: 3px;
          }

          .showUlProducts > li {
            margin-top: 10px;
            font-weight: bold;
            font-size: 16px;
            color: black;
            width: 229px;
          }

          .showUlProducts > li > a {
            display: flex;
            align-items: center;
            color: black;
          }

          .showUlProducts > li > a > img {
            width: 22px;
          }

          .showUlProducts > li > button {
            font-weight: bold;
            font-size: 16px;
            font-family: pacifico;
          }

          .showfruits > li > a > img {
            width: 26px;
          }

          .showfruits > li > a {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .ulFruits {
            display: none;
          }

          .showUlProducts > li > button > img:nth-child(1) {
            width: 20px;
          }

          .showVerduras {
            display: flex;
            padding-bottom: 16px;
            list-style: none;
            padding-top: 10px;
            flex-direction: row;
            padding-left: 10px;
            padding-right: 10px;
            flex-wrap: wrap;
            left: 281px;
            top: 73px;
            position: absolute;
            background: white;
            justify-content: center;
            border-left: solid;
            border-left-width: 1px;
            box-shadow: 25px 42px 44px -23px rgba(0, 0, 0, 0.75);
          }

          .showVerduras > li {
            width: 185px;
            margin-top: 3px;
          }

          .showVerduras > li > a {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .showVerduras > li > a > img {
            width: 26px;
          }

          .ulVerduras {
            display: none;
          }

          .cartStyleLI {
            display: none;
          }

          .buttonCart {
            display: flex;
            align-items: center;
            color: white;
            background: none;
            border-style: none;
          }
          .buttonCart > span {
            font-size: 16px;
          }
          .buttonCart > img {
            width: 28px;
          }
        }
      `}</style>


      <script src="/scripts/nav.js" async></script>
      
       {/* <script src="/scripts/chatDirecto.js" async></script> */}
    </>
  );
}

export default MyApp;
