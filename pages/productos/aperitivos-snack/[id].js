// pages/posts/[id].js
import React from "react";
import axios from 'axios';

class AperitivoSnack extends React.Component {
  constructor(props) {
    super(props);
    this.myVar = "";
    this.myFunction = () => {
      this.myVar = setTimeout(function () {
        document.querySelector(".addCartContainer").innerHTML = "";
        document.querySelector(".addCartContainer").style.display = "none";
      }, 5000);
    };
    this.myStopFunction = () => {
      clearTimeout(this.myVar);
    };
    this.state = {
           _id: props.objectProp._id,
            name: props.objectProp.name,
            price: props.objectProp.price,
            description: props.objectProp.description,
            category:props.objectProp.category,
            subcategory:props.objectProp.subcategory,
            generalcategory: props.objectProp.generalcategory,
            imageUrl: props.objectProp.imageUrl,
            imageAlt: props.objectProp.imageAlt,
            type: props.objectProp.type,
            stock: props.objectProp.stock,
            urlRoute: props.objectProp.urlRoute,
            imageName: props.objectProp.imageName,
            added: props.objectProp.added,
            origin: props.objectProp.origin,
            minimunQty:props.objectProp.minimunQty
    };
    
    this.addQty=this.addQty.bind(this);
    this.restQty=this.restQty.bind(this);
    this.buscarProductoLS=this.buscarProductoLS.bind(this);
    this.restarCuadro=this.restarCuadro.bind(this);
    this.mostrarCuadro=this.mostrarCuadro.bind(this);
  }

  restarCuadro = (product) => {
    let tipo = "";
    if (product.type == "kilogramos") {
      tipo = "0.5 Kg";
    } else {
      tipo = "1 Ud";
    }
    if (document.querySelector(".addCartContainer")) {
      //asignamos html a la etiqueta
      document.querySelector(".addCartContainer").innerHTML = `
      <img src="/141pxImages/${product.imageName}" alt="producto añadido" width="90px" height="90px">
      <div style="height: 86%;width: 100%;display: flex;flex-direction: column;align-items: center;">
      <span style="text-align: center;font-family: montserrat;font-size: smaller;"> Eliminado ${tipo} de ${product.name} del carrito</span>
      <a style="color: white;" href="/carrito">VER CARRITO</a>
      </div>`;
      document.querySelector(".addCartContainer").style.display = "";
      //lo eliminamos
      this.myStopFunction();
      this.myFunction();
    } else {
      //asignamos html a la etiqueta
      let elementDiv = document.createElement("div");
      elementDiv.setAttribute("class", "addCartContainer");
      elementDiv.innerHTML = `
      <img src="/141pxImages/${product.imageName}" alt="producto añadido" width="90px" height="90px">
      <div style="height: 86%;width: 100%;display: flex;flex-direction: column;align-items: center;">
      <span style="text-align: center;font-family: montserrat;font-size: smaller;"> Eliminado ${tipo} de ${product.name} del carrito</span>
      <a style="color: white;" href="/carrito">VER CARRITO</a>
      </div>`;
      document.querySelector("body").appendChild(elementDiv);
      document.querySelector(".addCartContainer").style.display = "";
      //lo eliminamos
      this.myStopFunction();
      this.myFunction();
    }
  };
  mostrarCuadro(product) {
    let tipo = "";
    if (product.type == "kilogramos") {
      tipo = "0.5 Kg";
    } else {
      tipo = "1 Ud";
    }
    if (document.querySelector(".addCartContainer")) {
      //asignamos html a la etiqueta
      document.querySelector(".addCartContainer").innerHTML = `
      <img src="/141pxImages/${product.imageName}" alt="producto añadido" width="90px" height="90px">
      <div style="height: 86%;width: 100%;display: flex;flex-direction: column;align-items: center;">
      <span style="text-align: center;font-family: montserrat;font-size: smaller;"> Añadido ${tipo} de ${product.name} al carrito</span>
      <a style="color: white;" href="/carrito">VER CARRITO</a>
      </div>`;
      document.querySelector(".addCartContainer").style.display = "";
      //lo eliminamos
      this.myStopFunction();
      this.myFunction();
    } else {
      //asignamos html a la etiqueta
      let elementDiv = document.createElement("div");
      elementDiv.setAttribute("class", "addCartContainer");
      elementDiv.innerHTML = `
      <img src="/141pxImages/${product.imageName}" alt="producto añadido" width="90px" height="90px">
      <div style="height: 86%;width: 100%;display: flex;flex-direction: column;align-items: center;">
      <span style="text-align: center;font-family: montserrat;font-size: smaller;"> Añadido ${tipo} de ${product.name} al carrito</span>
      <a style="color: white;" href="/carrito">VER CARRITO</a>
      </div>`;
      document.querySelector("body").appendChild(elementDiv);
      document.querySelector(".addCartContainer").style.display = "";
      //lo eliminamos
      this.myStopFunction();
      this.myFunction();
    }
  }


restQty(product) {
   // si no esta creado el array del carrito lo creamos vacío
   if(localStorage.getItem('cartProducts')==null){
    localStorage.setItem("cartProducts","[]");
  }
 let buscarProducto = [...JSON.parse(localStorage.getItem('cartProducts')).filter(producto => {
    return producto._id === product._id
  })];

  if(buscarProducto.length!==0){
   buscarProducto[0].added--
   if(buscarProducto[0].added<1){
    let actualizarCarro= [...JSON.parse(localStorage.getItem('cartProducts'))].filter(element=>{
      element._id!==product._id
    });
    localStorage.setItem("cartProducts",JSON.stringify(actualizarCarro))
    this.setState({added:0})
   }else{
    let actualizarCarro= [...JSON.parse(localStorage.getItem('cartProducts'))].map(element=>{
      if(element._id==product._id){
        return buscarProducto[0]
      }else{
        return element
      }
    });
    localStorage.setItem("cartProducts",JSON.stringify(actualizarCarro))
    
   }

this.restarCuadro(product)

  }
 this.buscarProductoLS()

}


 addQty(product) {
   // si no esta creado el array del carrito lo creamos vacío
  if(localStorage.getItem('cartProducts')==null){
    localStorage.setItem("cartProducts","[]");
  }
  //comprobamos si el producto tiene stock y añadimos o no
  if(this.state.stock=="si"){
//buscamos el producto para ver si esta añadido
let arrayCarrito = [...JSON.parse(localStorage.getItem('cartProducts')).filter(producto => {
  return producto._id === product._id
  })]
//si no se encuenta en el carro lo añadimos tal cual esta en el state pero con added + 1
if(arrayCarrito.length==0){
  let carritoArray= [...JSON.parse(localStorage.getItem('cartProducts'))];
   product.added++;
   carritoArray.push(product);
   localStorage.setItem("cartProducts",JSON.stringify(carritoArray))
}else{
  let actualizarCarro= [...JSON.parse(localStorage.getItem('cartProducts'))].map(element=>{
    if(element._id==product._id){
      element.added++
      return element
    }else{
      return element
    }
  });
  localStorage.setItem("cartProducts",JSON.stringify(actualizarCarro))
}
this.mostrarCuadro(product);

//aqui va la llamada ajax de que se ha metido al carro
axios.post("https://gestorhorticurita.herokuapp.com/api/addedCart/", {
  id: product._id,
});
  }
  this.buscarProductoLS()
 }



buscarProductoLS() {
  if (localStorage.getItem('cartProducts') !== null) {
    let buscarProducto = [...JSON.parse(localStorage.getItem('cartProducts')).filter(producto => {
      return producto._id === this.state._id
    })];
    if (buscarProducto.length !== 0) {
      this.setState({added: buscarProducto[0].added})
    }
  }
}

componentDidMount(){
this.buscarProductoLS()
}



componentWillUnmount(){
  this.myStopFunction();
  if(document.querySelector(".addCartContainer")){
        document.querySelector(".addCartContainer").innerHTML = "";
        document.querySelector(".addCartContainer").style.display = "none";
  }
}

  render() {
    return (
      <>
        <div className="containerDetail">
          <div>
                   <picture>
                      <source
                        media="(max-width: 767.98px)"
                        srcSet={`/141pxImages/${this.state.imageName}`}/>
                      <source
                        media="(max-width: 1199.98px) and (min-width: 768px)"
                        srcSet={`/174pxImages/${this.state.imageName}`}
                      />
                      <source
                        media="(min-width: 1200px)"
                        srcSet={`/270pxImages/${this.state.imageName}`}
                      />
                      <img
                        src={`/141pxImages/${this.state.imageName}`}
                        alt={this.state.imageAlt}
                      />
                    </picture>
          </div>
          <div>
            <h1>{this.state.name}</h1>
            <span>
              {this.state.price} €/
              {this.state.type === "kilogramos" ? "Kg" : "Ud"}
            </span>
            <p>Origen: {this.state.origin}</p>

            {this.state.stock === "si" ? (
              <p>
                <img
                  src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593730373/iconosHorticurita/icono_disponible_a932xs.png"
                  alt="icono disponible"
                />
                Disponible
              </p>
            ) : (
              <p>
                <img
                  src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593731819/iconosHorticurita/icono_sin_stock_ihhw8q.png"
                  alt="icono sin stock"
                />
                No disponible
              </p>
            )}

            <div className="buttonsCart">
              <button type="button" className="buttonIzq" onClick={() => this.restQty(this.state)}>
                -
              </button>
              <span className="inputButtons">{this.state.type=="kilogramos"? this.state.added/2:this.state.added}</span>
              <button type="button" className="buttonDer" onClick={() => this.addQty(this.state)}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="detailDescription">
          <hr></hr>
          <span>DESCRIPCIÓN</span>
          <hr></hr>
          <p>{this.state.description}</p>
        </div>

        <style jsx>{`
        .inputButtons {
              max-width: 90px;
              text-align: center;
              width: 70px;
              padding: 6px;
              border-width: thin;
              border-left: none rgb(255, 235, 0);
              border-right: none rgb(255, 235, 0);
              border-color: rgb(255, 235, 0);
              border-top: 1px solid rgb(255, 235, 0);
              border-bottom: 1px solid rgb(255, 235, 0);
            }
          @media (max-width: 575.98px) {
            .containerDetail {
              display: flex;
              flex-direction: column;
              justify-content: right;
              align-items: center;
              padding-top: 20px;
            }

            .containerDetail > div > h1 {
              font-family: Pacifico;
            }

            .containerDetail > div:nth-child(1) {
              max-width: 86%;
            }

            .containerDetail > div:nth-child(2) {
              width: 100%;
              text-align: center;
              font-family: Montserrat;
            }

            .containerDetail > div:nth-child(1) > img {
              width: 100%;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) > img {
              width: 22px;
            }

            .buttonsCart {
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              height: 35px;
              margin-top: 15px;
              margin-bottom: 15px;
            }

            .buttonIzq {
              border-radius: 15px 0px 0px 15px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            .buttonDer {
              border-radius: 0px 15px 15px 0px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            .detailDescription {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 70%;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-family: montserrat;
              padding-bottom: 30px;
            }

            .detailDescription > hr {
              border-radius: 10px;
              width: 100%;
              height: 2px;
              border-width: 0;
              background-color: #27e01b;
            }

            .detailDescription > hr:nth-child(1) {
              width: 50%;
            }

            .detailDescription > p {
              font-size: small;
            }
          }

          @media (min-width: 576px) and (max-width: 767.98px) {
            .containerDetail {
              display: flex;
              flex-direction: column;
              justify-content: right;
              align-items: center;
              padding-top: 20px;
            }

            .containerDetail > div > h1 {
              font-family: Pacifico;
            }

            .containerDetail > div:nth-child(1) {
              max-width: 86%;
            }

            .containerDetail > div:nth-child(2) {
              width: 100%;
              text-align: center;
              font-family: Montserrat;
            }

            .containerDetail > div:nth-child(1) > img {
              width: 100%;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) > img {
              width: 22px;
            }

            .buttonsCart {
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              height: 35px;
              margin-top: 15px;
              margin-bottom: 15px;
            }

            .buttonIzq {
              border-radius: 15px 0px 0px 15px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

           

            .buttonDer {
              border-radius: 0px 15px 15px 0px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            .detailDescription {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 70%;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-family: montserrat;
              padding-bottom: 30px;
            }

            .detailDescription > hr {
              border-radius: 10px;
              width: 100%;
              height: 2px;
              border-width: 0;
              background-color: #27e01b;
            }

            .detailDescription > hr:nth-child(1) {
              width: 50%;
            }
          }

          @media (min-width: 768px) and (max-width: 991.98px) {
            .containerDetail {
              display: flex;
              justify-content: right;
              align-items: center;
              margin: 0 auto;
              width: 699px;
              padding-top: 34px;
              padding-bottom: 50px;
            }

            .containerDetail > div > h1 {
              font-family: Pacifico;
            }

            .containerDetail > div:nth-child(1) {
              max-width: 600px;
            }

            .containerDetail > div:nth-child(2) {
              width: 600px;
              text-align: center;
              font-family: Montserrat;
            }

            .containerDetail > div:nth-child(1) > img {
              width: 100%;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) > img {
              width: 22px;
            }

            .buttonsCart {
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              height: 35px;
              margin-top: 15px;
              margin-bottom: 15px;
            }

            .buttonIzq {
              border-radius: 15px 0px 0px 15px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

           

            .buttonDer {
              border-radius: 0px 15px 15px 0px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            .detailDescription {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 70%;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-family: montserrat;
              padding-bottom: 30px;
            }

            .detailDescription > hr {
              border-radius: 10px;
              width: 100%;
              height: 2px;
              border-width: 0;
              background-color: #27e01b;
            }

            .detailDescription > hr:nth-child(1) {
              width: 50%;
            }
          }

          @media (min-width: 992px) and (max-width: 1199.98px) {
            .containerDetail {
              display: flex;
              justify-content: right;
              align-items: center;
              margin: 0 auto;
              width: 699px;
              padding-top: 34px;
              padding-bottom: 50px;
            }

            .containerDetail > div > h1 {
              font-family: Pacifico;
            }

            .containerDetail > div:nth-child(1) {
              max-width: 600px;
            }

            .containerDetail > div:nth-child(2) {
              width: 600px;
              text-align: center;
              font-family: Montserrat;
            }

            .containerDetail > div:nth-child(1) > img {
              width: 100%;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) > img {
              width: 22px;
            }

            .buttonsCart {
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              height: 35px;
              margin-top: 15px;
              margin-bottom: 15px;
            }

            .buttonIzq {
              border-radius: 15px 0px 0px 15px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            
          

            .buttonDer {
              border-radius: 0px 15px 15px 0px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            .detailDescription {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 70%;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-family: montserrat;
              padding-bottom: 30px;
            }

            .detailDescription > hr {
              border-radius: 10px;
              width: 100%;
              height: 2px;
              border-width: 0;
              background-color: #27e01b;
            }

            .detailDescription > hr:nth-child(1) {
              width: 50%;
            }
          }

          @media (min-width: 1200px) {
            .containerDetail {
              display: flex;
              justify-content: right;
              align-items: center;
              margin: 0 auto;
              width: 699px;
              padding-top: 34px;
              padding-bottom: 50px;
            }

            .containerDetail > div > h1 {
              font-family: Pacifico;
            }

            .containerDetail > div:nth-child(1) {
              max-width: 600px;
            }

            .containerDetail > div:nth-child(2) {
              width: 600px;
              text-align: center;
              font-family: Montserrat;
            }

            .containerDetail > div:nth-child(1) > img {
              width: 100%;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .containerDetail > div:nth-child(2) > p:nth-child(4) > img {
              width: 22px;
            }

            .buttonsCart {
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              height: 35px;
              margin-top: 15px;
              margin-bottom: 15px;
            }

            .buttonIzq {
              border-radius: 15px 0px 0px 15px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            

            .buttonDer {
              border-radius: 0px 15px 15px 0px;
              color: green;
              text-align: center;
              font-size: 16px;
              background-color: greenyellow;
              width: 14%;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              text-decoration: none;
              outline: none;
              touch-action: manipulation;
            }

            .detailDescription {
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: 839px;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-family: montserrat;
              padding-bottom: 30px;
            }

            .detailDescription > hr {
              border-radius: 10px;
              width: 100%;
              height: 2px;
              border-width: 0;
              background-color: #27e01b;
            }

            .detailDescription > hr:nth-child(1) {
              width: 50%;
            }
          }
        `}</style>
      </>
    );
  }
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://gestorhorticurita.herokuapp.com/api/getAllProducts"
  );
  const products = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = products.productos.map((product) => ({
    params: { id: product.urlRoute },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://gestorhorticurita.herokuapp.com/api/productos/frutas/${params.id}`
  );
  const product = await res.json();

  let objectProp = {
            _id: product._id,
            name: product.name,
            price: product.price,
            description: product.description,
            category:product.category,
            subcategory:product.subcategory,
            generalcategory: product.generalcategory,
            imageUrl: product.imageUrl,
            imageAlt: product.imageAlt,
            type: product.type,
            stock: product.stock,
            urlRoute: product.urlRoute,
            imageName: product.imageName,
            added: 0,
            origin: product.origin,
            minimunQty:product.minimunQty
  };
  // Pass post data to the page via props
  return { props: { objectProp } };
}


export default AperitivoSnack;
