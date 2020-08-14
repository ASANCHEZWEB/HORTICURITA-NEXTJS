import React from "react";
import axios from "axios";

class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.functionActualizarCarro = "";

    this.state = {
      cartItems: [],
      subTotal:0,
      impuesto:21,
      descuento:0,
      codigoCupon:"",
      cuponEncontrado:"",
      gastosEnvio:3.99,
      total:0
    };
    this.actualizarCupon = this.actualizarCupon.bind(this);
    this.probarCupon = this.probarCupon.bind(this);
    this.eliminarProducto = this.eliminarProducto.bind(this);
    this.addQty=this.addQty.bind(this)
  }

  actualizarCupon(event){
    this.setState({codigoCupon: event.target.value});
  }
  probarCupon(event) {
    axios.post("https://gestorhorticurita.herokuapp.com/api/testCodigoCupon/", {
      cuponCode: this.state.codigoCupon
    }).then(res => {
      if (res.data.found == true) {
        this.setState({
          descuento: res.data.cuponInfo.aplicar,
          cuponEncontrado: true
        })
      } else {
        this.setState({
          descuento: 0,
          cuponEncontrado: false
        })
      }
    })

    event.preventDefault();
  }

addQty(product) {
  let miStorage = [...JSON.parse(localStorage.getItem('cartProducts'))];
  let newArray = miStorage.map(element => {
    if (element._id == product._id) {
      element.added += 1
      return element
    } else {
      return element
    }
  })
  localStorage.setItem('cartProducts', JSON.stringify(newArray));
}

  eliminarProducto(product) {
    let miStorage = [...JSON.parse(localStorage.getItem('cartProducts'))];
    let arrayActualizado = miStorage.filter(element => {
      return element._id !== product._id
    })
    localStorage.setItem('cartProducts', JSON.stringify(arrayActualizado));
  }
  calculateTotal() {
    let totalMasIva = this.state.subTotal + (this.state.subTotal * (this.state.impuesto / 100));
    let totalConDescuento = totalMasIva - (totalMasIva * (this.state.descuento / 100));
    return Number(totalConDescuento.toFixed(2))
  }

  calculateSubTotal() {
    if (this.state.cartItems.length !== 0) {
      let arrayOfSubtotals = this.state.cartItems.map(element => {
        if (element.type === "kilogramos") {
          return (element.price * element.added) / 2
        }
        if (element.type !== "kilogramos") {
          return element.price * element.added
        }
      }).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      });
      return Number(arrayOfSubtotals.toFixed(2))
    } else{
      return 0
    }
  }

getItems(){
  let miStorage = JSON.parse(localStorage.getItem('cartProducts'));
  if(miStorage==undefined || null){
    miStorage=[];
  }
  return miStorage
}

  actualizarCarro() {
    this.functionActualizarCarro = setInterval(() => {
      
      this.setState({
        cartItems: this.getItems()
      });
      this.setState({
        subTotal: this.calculateSubTotal()
      });
      this.setState({
        total: this.calculateTotal()
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.functionActualizarCarro)
  }
  componentDidMount() {
    this.actualizarCarro()
  }
  render() {
    return (
      <>
      <section>
      <h1>CARRITO</h1>
      <div className="containerCart">
          <div className="containerProducts">
          {this.state.cartItems.length == 0 ? <span className="carritoVacio"> ¡Tu carrito esta vacío! 😧 ¡Navega por el menu y añade productos! 😉 </span>:""}
          {this.state.cartItems.map(element=>{
            return (<div key={element._id} className="individualProdCont">
                  <div className="deleteProduct"><img src="/carritoImages/icono-eliminar.png" alt="icono contenedor" onClick={() => this.eliminarProducto(element)}/></div>
                  <div className="centerImageProd"><a><img src={`/174pxImages/${element.imageName}`} alt={element.imageAlt}/></a></div>
                  <div className="divNames"><span>PRODUCTO:</span><a><span>{element.name}</span></a></div>
                  <div className="divNames"><span>PRECIO {element.type==="kilogramos" ? 'KG' : 'UD'}:</span><span>{element.price}€/{element.type==="kilogramos" ? 'Kg' : 'Ud'}</span></div>
                  <div className="divNames">
                      <span>CANTIDAD:</span>
                      <div><button className="buttonIzq">-</button>{element.type==="kilogramos" ? <span className="spanCant">{element.added/2}</span> : <span className="spanCant">{element.added}</span>}<button className="buttonDer" onClick={() => this.addQty(element)}>+</button></div>
                  </div>
                  {element.type==="kilogramos"? <div className="divNames subTotal"><span>SUBTOTAL:</span><span>{Number(((element.price*element.added)/2)).toFixed(2)}€</span></div> : ""}
                  {element.type!=="kilogramos" ? <div className="divNames subTotal"><span>SUBTOTAL:</span><span>{Number(element.price*element.added).toFixed(2)}€</span></div>:""}
                  <hr></hr>
              </div> 
              )
              
          })}
          </div>
          <div className="cuponContainer">
              <form className="formDesc" onSubmit={this.probarCupon}>
                  <label> <img src="/carritoImages/icono-descuento.png" alt="icono descuento"/>Código descuento o influencer<img src="/carritoImages/icono-descuento.png" alt="icono descuento"/></label>
                  <input type="text" value={this.state.codigoCupon} onChange={this.actualizarCupon} placeholder="        Si tienes un código aplícalo aquí!😉" />
                  <button type="submit">APLICAR</button>
              </form>
              {this.state.cuponEncontrado===true? <span style={{display: "flex",justifyContent: "center",fontFamily: "Montserrat"}}><img style={{width: "25px",height: "25px"}} src="/icono-stock-disponible.png" alt="icono descuento aplicado"/>¡Descuento aplicado!😉</span>:""}
              {this.state.cuponEncontrado===false? <span style={{display: "flex",justifyContent: "center",fontFamily: "Montserrat"}}><img style={{width: "25px",height: "25px"}} src="/icono-sin-stock.png" alt="icono codigo no encontrado"/>Código no encontrado😭</span>:""}
          </div>
          <div className="containerTotal">
              <div className="containerTexts">
                  <div><span className="totalCarrito">TOTAL CARRITO</span></div>
                  <hr></hr>
                  <div><span>SubTotal:</span><span>{this.state.subTotal}€</span></div>
                  <div><span>Impuestos(IVA):</span><span>{this.state.impuesto}%</span></div>
                  <div><span>Descuento:</span><span>{this.state.descuento}%</span></div>
                  <div><span>Gastos de envío:</span><span> Desde {this.state.gastosEnvio}€</span></div>
                  <hr></hr>
                  <div><span>TOTAL:</span><span>{this.state.total}€</span></div>
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
.carritoVacio {
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  background-color: #ff0000;
  height: 46px;
  align-items: center;
  border: solid;
  border-width: 1 px;
  color: white;
  padding: 12px 24px 12px 24px;
  border-radius: 21px
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

    .centerImageProd>a>img {
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
        cursor: pointer;
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

    .centerImageProd>a>img {
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
        cursor: pointer;
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

    .centerImageProd>a>img {
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
        cursor: pointer;
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

    .centerImageProd>a>img {
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
        cursor: pointer;
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

    .centerImageProd>a>img {
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
        cursor: pointer;
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
