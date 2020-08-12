import React from "react";

class Carrito extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
      <section>
      <h1>CARRITO</h1>
      <div className="containerCart">
          <div className="containerProducts">
              <div className="individualProdCont">
                  <div className="deleteProduct"><img src="/carritoImages/icono-eliminar.png" alt="icono contenedor"/></div>
                  <div className="centerImageProd"><img src="/carritoImages/manzana.jpg" alt="manzana"/></div>
                  <div className="divNames"><span>PRODUCTO:</span><span>Manzana</span></div>
                  <div className="divNames"><span>PRECIO KG:</span><span>1.25€/Kg</span></div>
                  <div className="divNames">
                      <span>CANTIDAD:</span>
                      <div><button className="buttonIzq">-</button><span className="spanCant">0.5</span><button className="buttonDer">+</button></div>
                  </div>
                  <div className="divNames subTotal"><span>SUBTOTAL:</span><span>5.76€</span></div>
                  <hr></hr>
              </div>
              <div className="individualProdCont">
                  <div className="deleteProduct"><img src="/carritoImages/icono-eliminar.png" alt="icono contenedor"/></div>
                  <div className="centerImageProd"><img src="/carritoImages/naranja-mesa.jpg" alt="manzana"/></div>
                  <div className="divNames"><span>PRODUCTO:</span><span>Naranja</span></div>
                  <div className="divNames"><span>PRECIO KG:</span><span>5.59€/Kg</span></div>
                  <div className="divNames">
                      <span>CANTIDAD:</span>
                      <div><button className="buttonIzq">-</button><span className="spanCant">0.5</span><button className="buttonDer">+</button></div>
                  </div>
                  <div className="divNames subTotal"><span>SUBTOTAL:</span><span>832€</span></div>
                  <hr></hr>
              </div>
          </div>
          <div className="cuponContainer">
              <form className="formDesc" onSubmit={this.handleSubmit}>
                  <label> <img src="/carritoImages/icono-descuento.png" alt="icono descuento"/>Código descuento o influencer<img src="/carritoImages/icono-descuento.png" alt="icono descuento"/></label>
                  <input type="text" placeholder="        Si tienes un código aplícalo aquí!😉" />
                  <button type="submit">APLICAR</button>
              </form>
          </div>
          <div className="containerTotal">
              <div className="containerTexts">
                  <div><span className="totalCarrito">TOTAL CARRITO</span></div>
                  <hr></hr>
                  <div><span>SubTotal:</span><span>22.5€</span></div>
                  <div><span>Impuestos(IVA):</span><span>21%</span></div>
                  <div><span>Descuento:</span><span>0%</span></div>
                  <div><span>Gastos de envío:</span><span> Desde 3,99€</span></div>
                  <hr></hr>
                  <div><span>TOTAL:</span><span>4,99€</span></div>
              </div>
              <div className="finalizarCompra"><button>FINALIZAR COMPRA</button></div>
          </div>
      </div>
  </section>
  <style jsx>{`
  h1 {
    text-align: center;
    font-family: montserrat;
    color: green;
    margin-top: 63px;
}

input::placeholder {
    overflow: visible;
}

@media (max-width: 575.98px) {
    .containerCart {
        padding-top: 63px;
    }

    .divNames {
        display: flex;
        justify-content: space-between;
        margin: 22px 15px 0px 15px;
        font-family: Montserrat;
    }

    .centerImageProd {
        display: flex;
        justify-content: center;
    }

    .centerImageProd>img {
        width: auto;
        height: 36vw;
    }

    .deleteProduct {
        display: flex;
        justify-content: flex-end;
        margin-right: 15px;
        margin-top: 15px;
    }

    .deleteProduct>img {
        width: 25px;
        height: 25px;
    }

    .buttonIzq {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 200px 0px 0px 200px;
    }

    .buttonDer {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 0px 200px 200px 0px;
    }

    .spanCant {
        padding: 0px 7px 0px 7px;
    }

    .subTotal {
        font-family: sans-serif;
    }

    .individualProdCont>hr {
        margin-top: 40px;
        width: 75vw;
        height: 2px;
        background-color: greenyellow;
        border-radius: 10px;
        border: none;
    }

    .formDesc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .formDesc>input:nth-child(2) {
        width: 100%;
        max-width: 289px;
        border: solid;
        border-width: 1px;
        padding: 10px 0px 10px 0px;
        border-color: yellowgreen;
        margin: 10px 0px 10px 0px;
        outline: none;
    }

    .formDesc>button:nth-child(3) {
        width: 100% !important;
        max-width: 93px !important;
        border: none !important;
        padding: 5px 0px 5px 0px !important;
        margin: 10px 0px 10px 0px !important;
        font-family: Montserrat !important;
        color: white !important;
        background-color: #f1c545 !important;
    }

    .formDesc>label {
        font-family: Montserrat;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }

    .cuponContainer {
        margin: 34px 0px 34px 0px;
    }

    .containerTotal {
        width: 100%;
        max-width: 320px;
        height: 467px;
        background-color: #f6f6f6;
        margin: 0 auto;
        font-family: Montserrat;
        color: #3a801d;
        margin-bottom: 153px;
    }

    .containerTexts>div {
        display: flex;
        justify-content: space-between;
        padding-top: 45px;
        margin: 0px 20px 0px 20px;
    }

    .containerTexts>hr {
        width: 70%;
        border: none;
        height: 1px;
        background-color: #dedede;
    }

    .finalizarCompra {
        display: flex;
        justify-content: center;
        margin: 114px 0px 40px 0px;
    }

    .finalizarCompra>button {
        background-color: #f1c545;
        border: none;
        font-family: Montserrat;
        padding: 13px;
    }

    .totalCarrito {
        margin-left: 79px;
    }
}


@media (min-width: 576px) and (max-width: 767.98px) {
    .containerCart {
        padding-top: 63px;
    }

    .divNames {
        display: flex;
        justify-content: space-between;
        margin: 22px 15px 0px 15px;
        font-family: Montserrat;
    }

    .centerImageProd {
        display: flex;
        justify-content: center;
    }

    .centerImageProd>img {
        width: auto;
        height: 36vw;
    }

    .deleteProduct {
        display: flex;
        justify-content: flex-end;
        margin-right: 15px;
        margin-top: 15px;
    }

    .deleteProduct>img {
        width: 25px;
        height: 25px;
    }

    .buttonIzq {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 200px 0px 0px 200px;
    }

    .buttonDer {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 0px 200px 200px 0px;
    }

    .spanCant {
        padding: 0px 7px 0px 7px;
    }

    .subTotal {
        font-family: sans-serif;
    }

    .individualProdCont>hr {
        margin-top: 40px;
        width: 75vw;
        height: 2px;
        background-color: greenyellow;
        border-radius: 10px;
        border: none;
    }

    .formDesc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .formDesc>input:nth-child(2) {
        width: 100%;
        max-width: 289px;
        border: solid;
        border-width: 1px;
        padding: 10px 0px 10px 0px;
        border-color: yellowgreen;
        margin: 10px 0px 10px 0px;
        outline: none;
    }

    .formDesc>button:nth-child(3) {
        width: 100% !important;
        max-width: 93px !important;
        border: none !important;
        padding: 5px 0px 5px 0px !important;
        margin: 10px 0px 10px 0px !important;
        font-family: Montserrat !important;
        color: white !important;
        background-color: #f1c545 !important;
    }

    .formDesc>label {
        font-family: Montserrat;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }

    .cuponContainer {
        margin: 34px 0px 34px 0px;
    }

    .containerTotal {
        width: 100%;
        max-width: 320px;
        height: 467px;
        background-color: #f6f6f6;
        margin: 0 auto;
        font-family: Montserrat;
        color: #3a801d;
        margin-bottom: 153px;
    }

    .containerTexts>div {
        display: flex;
        justify-content: space-between;
        padding-top: 45px;
        margin: 0px 20px 0px 20px;
    }

    .containerTexts>hr {
        width: 70%;
        border: none;
        height: 1px;
        background-color: #dedede;
    }

    .finalizarCompra {
        display: flex;
        justify-content: center;
        margin: 114px 0px 40px 0px;
    }

    .finalizarCompra>button {
        background-color: #f1c545;
        border: none;
        font-family: Montserrat;
        padding: 13px;
    }

    .totalCarrito {
        margin-left: 79px;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .containerCart {
        display: flex;
        flex-wrap: wrap;
        margin-top: 63px;
    }

    .containerProducts {
        width: 58vw;
        margin: 0 auto;
    }

    .centerImageProd>img {
        width: 65px;
        height: auto;
    }

    .individualProdCont>div>span:nth-child(1) {
        display: none
    }

    .deleteProduct {
        margin-top: 15px;
    }

    .deleteProduct>img {
        width: 25px;
        height: 25px;
    }

    .buttonIzq {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 200px 0px 0px 200px;
    }

    .buttonDer {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 0px 200px 200px 0px;
    }

    .spanCant {
        padding: 0px 7px 0px 7px;
    }

    .subTotal {
        font-family: sans-serif;
    }

    .individualProdCont {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        font-family: montserrat;
    }

    .individualProdCont>hr {
        margin-top: 40px;
        width: 100%;
        height: 2px;
        background-color: greenyellow;
        border-radius: 10px;
        border: none;
        margin-bottom: 50px;
    }

    .formDesc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .formDesc>input:nth-child(2) {
        width: 100%;
        border: solid;
        border-width: 1px;
        padding: 10px 0px 10px 0px;
        border-color: yellowgreen;
        margin: 10px 0px 10px 0px;
        outline: none;
    }

    .formDesc>button:nth-child(3) {
        width: 100% !important;
        border: none !important;
        padding: 5px 0px 5px 0px !important;
        margin: 10px 0px 10px 0px !important;
        font-family: Montserrat !important;
        color: white !important;
        background-color: #f1c545 !important;
    }

    .formDesc>label {
        font-family: Montserrat;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
    }

    .cuponContainer {
        margin: 34px 0px 34px 11%;
        order: 3;
        width: 319px;
    }

    .containerTotal {
        width: 100%;
        max-width: 320px;
        height: 467px;
        background-color: #f6f6f6;
        margin: 0 auto;
        font-family: Montserrat;
        color: #3a801d;
        font-size: 16px;
    }

    .containerTexts>div {
        display: flex;
        justify-content: space-between;
        padding-top: 45px;
        margin: 0px 20px 0px 20px;
    }

    .containerTexts>hr {
        width: 70%;
        border: none;
        height: 1px;
        background-color: #dedede;
    }

    .finalizarCompra {
        display: flex;
        justify-content: center;
        margin: 114px 0px 40px 0px;
    }

    .finalizarCompra>button {
        background-color: #f1c545;
        border: none;
        font-family: Montserrat;
        padding: 13px;
    }

    .totalCarrito {
        margin-left: 79px;
    }
}


@media (min-width: 992px) and (max-width: 1199.98px) {
    .containerCart {
        display: flex;
        flex-wrap: wrap;
        margin-top: 63px;
    }

    .containerProducts {
        width: 58vw;
        margin: 0 auto;
        font-size: 18px;
    }

    .centerImageProd>img {
        width: 100px;
        height: auto;
    }

    .individualProdCont>div>span:nth-child(1) {
        display: none
    }

    .deleteProduct {
        margin-top: 15px;
    }

    .deleteProduct>img {
        width: 25px;
        height: 25px;
    }

    .buttonIzq {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 200px 0px 0px 200px;
    }

    .buttonDer {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 0px 200px 200px 0px;
    }

    .spanCant {
        padding: 0px 7px 0px 7px;
    }

    .subTotal {
        font-family: sans-serif;
    }

    .individualProdCont {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        font-family: montserrat;
    }

    .individualProdCont>hr {
        margin-top: 40px;
        width: 100%;
        height: 2px;
        background-color: greenyellow;
        border-radius: 10px;
        border: none;
        margin-bottom: 50px;
    }

    .formDesc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .formDesc>input:nth-child(2) {
        width: 100%;
        border: solid;
        border-width: 1px;
        padding: 10px 0px 10px 0px;
        border-color: yellowgreen;
        margin: 10px 0px 10px 0px;
        outline: none;
    }

    .formDesc>button:nth-child(3) {
        width: 100% !important;
        max-width: 93px !important;
        border: none !important;
        padding: 5px 0px 5px 0px !important;
        margin: 10px 0px 10px 0px !important;
        font-family: Montserrat !important;
        color: white !important;
        background-color: #f1c545 !important;
    }

    .formDesc>label {
        font-family: Montserrat;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
    }

    .cuponContainer {
        margin: 34px 0px 34px 12%;
        order: 3;
        width: 408px;
    }

    .containerTotal {
        width: 100%;
        max-width: 320px;
        height: 467px;
        background-color: #f6f6f6;
        margin: 0 auto;
        font-family: Montserrat;
        color: #3a801d;
        font-size: 17px;
    }

    .containerTexts>div {
        display: flex;
        justify-content: space-between;
        padding-top: 45px;
        margin: 0px 20px 0px 20px;
    }

    .containerTexts>hr {
        width: 70%;
        border: none;
        height: 1px;
        background-color: #dedede;
    }

    .finalizarCompra {
        display: flex;
        justify-content: center;
        margin: 114px 0px 40px 0px;
    }

    .finalizarCompra>button {
        background-color: #f1c545;
        border: none;
        font-family: Montserrat;
        padding: 13px;
    }

    .totalCarrito {
        margin-left: 79px;
    }
}


@media (min-width: 1200px) {
    .containerCart {
        display: flex;
        flex-wrap: wrap;
        margin-top: 80px;
        margin: 0 auto;
        max-width: 1440px;
        padding-top: 63px;
    }

    .containerProducts {
        width: 801px;
        margin: 0 auto;
        font-size: 18px;
    }

    .centerImageProd>img {
        width: 100px;
        height: auto;
    }

    .individualProdCont>div>span:nth-child(1) {
        display: none
    }

    .deleteProduct {
        margin-top: 15px;
    }

    .deleteProduct>img {
        width: 25px;
        height: 25px;
    }

    .buttonIzq {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 200px 0px 0px 200px;
    }

    .buttonDer {
        border: none;
        background-color: greenyellow;
        width: 43px;
        height: 22px;
        border-radius: 0px 200px 200px 0px;
    }

    .spanCant {
        padding: 0px 7px 0px 7px;
    }

    .subTotal {
        font-family: sans-serif;
    }

    .individualProdCont {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        max-width: 835px;
        font-family: montserrat;
    }

    .individualProdCont>hr {
        margin-top: 40px;
        width: 100%;
        height: 2px;
        background-color: greenyellow;
        border-radius: 10px;
        border: none;
        margin-bottom: 50px;
    }

    .formDesc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .formDesc>input:nth-child(2) {
        width: 100%;
        border: solid;
        border-width: 1px;
        padding: 10px 0px 10px 0px;
        border-color: yellowgreen;
        margin: 10px 0px 10px 0px;
        outline: none;
    }

    .formDesc>button:nth-child(3) {
        width: 100% !important;
        max-width: 93px !important;
        border: none !important;
        padding: 5px 0px 5px 0px !important;
        margin: 10px 0px 10px 0px !important;
        font-family: Montserrat !important;
        color: white !important;
        background-color: #f1c545 !important;
    }

    .formDesc>label {
        font-family: Montserrat;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 23px;
    }

    .cuponContainer {
        margin: 34px 0px 34px 13%;
        order: 3;
        width: 537px;
    }

    .containerTotal {
        width: 100%;
        max-width: 320px;
        height: 467px;
        background-color: #f6f6f6;
        margin: 0 auto;
        font-family: Montserrat;
        color: #3a801d;
        font-size: 17px;
    }

    .containerTexts>div {
        display: flex;
        justify-content: space-between;
        padding-top: 45px;
        margin: 0px 20px 0px 20px;
    }

    .containerTexts>hr {
        width: 70%;
        border: none;
        height: 1px;
        background-color: #dedede;
    }

    .finalizarCompra {
        display: flex;
        justify-content: center;
        margin: 114px 0px 40px 0px;
    }

    .finalizarCompra>button {
        background-color: #f1c545;
        border: none;
        font-family: Montserrat;
        padding: 13px;
    }

    .totalCarrito {
        margin-left: 79px;
    }
}
        `}</style>
  </>
    )
  }
}

export default Carrito;
