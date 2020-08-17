// pages/posts/[id].js
import React from "react";

class Platano extends React.Component {
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
            origin: props.objectProp.origin
    };
    
    this.addQty=this.addQty.bind(this);
    this.restQty=this.restQty.bind(this);
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
  if (this.state.added !== 0) {
    let cogerSt = [...JSON.parse(localStorage.getItem('cartProducts'))]
    let newArray = cogerSt.map(element => {
      if (element._id == product._id) {
        product.added--
        return product
      } else {
        return element
      }
    })
    if (product.added == 0) {
      let deleted=newArray.filter(element => {
        return element._id !== product._id
      })
      localStorage.setItem('cartProducts', JSON.stringify(deleted))
      this.setState({added:0})
    } else {
      localStorage.setItem('cartProducts', JSON.stringify(newArray))
    }
  }
  this.restarCuadro(product)
  this.buscarProductoLS()
}


 addQty(product) {
   let cogerLocalArray = localStorage.getItem('cartProducts');
   if (this.state.stock == "si") {
     if (cogerLocalArray == "[]" || cogerLocalArray == null) {
       localStorage.setItem('cartProducts', JSON.stringify([]))
       let cogerSt = [...JSON.parse(localStorage.getItem('cartProducts'))]
       product.added += 1;
       cogerSt.push(product)
       localStorage.setItem('cartProducts', JSON.stringify(cogerSt))
     } else {
       let storageArray = [...JSON.parse(localStorage.getItem('cartProducts'))]
       let myproduct = storageArray.map(element => {
         if (element._id == this.state._id) {
           element.added += 1
           return element
         } else {
           return element
         }
       })
       localStorage.setItem('cartProducts', JSON.stringify(myproduct))
     }
     this.mostrarCuadro(product)
   }
   this.buscarProductoLS()
 }

buscarProductoLS() {
  if (localStorage.getItem('cartProducts') !== null) {
    let storageArray = [...JSON.parse(localStorage.getItem('cartProducts'))]
    let myproduct = storageArray.filter(element => {
      return element._id == this.state._id
    })
    if (myproduct.length !== 0) {
      this.setState({added: myproduct[0].added})
    }
  }
}

componentDidMount(){
this.buscarProductoLS()
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
              {this.state.price} /
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
              <span className="inputButtons">{this.state.added==0? 0:this.state.added/2}</span>
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
            origin: product.origin
  };
  // Pass post data to the page via props
  return { props: { objectProp } };
}


export default Platano;
