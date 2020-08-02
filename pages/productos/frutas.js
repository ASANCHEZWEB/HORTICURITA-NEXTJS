import React, { createElement } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import { getLocalData } from "../../components/getLocalStorage";

class TodaFruta extends React.Component {
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
      // ARRAY DE LOCALSTORAGE
      productInLS: [],
      //ARRAY DE PRODUCTOS DE BASE DE DATOS
      productProps: [...this.props.data],
      screenSize: 0,
    };
  }
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
      <img src=${product.imageUrl} alt="producto añadido" width="90px" height="90px">
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
      <img src=${product.imageUrl} alt="producto añadido" width="90px" height="90px">
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
      <img src=${product.imageUrl} alt="producto añadido" width="90px" height="90px">
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
      <img src=${product.imageUrl} alt="producto añadido" width="90px" height="90px">
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
  addNewProduct = (product) => {
    let arrayLsCopy = [...this.state.productInLS];

    if (product.stock == "si") {
      if (product.added !== 0) {
        //SI YA ESTA EN EL CARRO MODIFICAMOS EL QUE YA ESTA

        arrayLsCopy.forEach((elLS) => {
          if (elLS._id == product._id) {
            elLS.added++;
          }
        });
      } else {
        product.added += 1;
        arrayLsCopy.push(product);
      }

      this.setState({ productInLS: arrayLsCopy }, function () {
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(this.state.productInLS)
        );
        this.actualizarLS();
      });
      //aqui va la llamada ajax de que se ha metido al carro
      axios.post("https://gestorhorticurita.herokuapp.com/api/addedCart/", {
        id: product._id,
      });
      //aqui va la ejecución del cartel de carrito actualizado
      this.mostrarCuadro(product);
    }
  };

  restProduct = (product) => {
    let arrayLsCopy = [...this.state.productInLS];
    let arrayPropsCopy = [...this.state.productProps];

    if (product.added == 1) {
      //como es uno lo eliminamos del storage
      arrayLsCopy.forEach(function (elem, index) {
        if (elem._id == product._id) {
          arrayLsCopy.splice(index, 1);
          arrayPropsCopy.forEach((elProp) => {
            if (elProp._id == product._id) {
              elProp.added = 0;
            }
          });
        }
      });
      this.restarCuadro(product);
    }
    if (product.added > 1) {
      arrayLsCopy.forEach((elLS) => {
        if (elLS._id == product._id) {
          elLS.added--;
        }
      });
      this.restarCuadro(product);
    }

    this.setState(
      { productInLS: arrayLsCopy, productProps: arrayPropsCopy },
      function () {
        localStorage.setItem(
          "cartProducts",
          JSON.stringify(this.state.productInLS)
        );
        this.actualizarLS();
      }
    );
  };

  actualizarLS = () => {
    this.setState({ productInLS: JSON.parse(getLocalData()) }, function () {
      let arrayLsCopy = [...this.state.productInLS];
      let arrayPropsCopy = [...this.state.productProps];
      arrayLsCopy.forEach((elLS) => {
        arrayPropsCopy.forEach((elProp) => {
          if (elLS._id == elProp._id) {
            elProp.added = elLS.added;
          }
        });
      });

      this.setState({ productProps: arrayPropsCopy });
    });
  };

  componentDidMount() {
    this.actualizarLS();

    this.setState({ screenSize: 767 });
  }

  render() {
    return (
      <>
        <Head>
          <title>Frutas</title>
          <meta
            name="description"
            content="Fruta al mejor precio , calidad insuperable"
          ></meta>
        </Head>

        <div className="metaDiv">
          <div>
            <h1>Frutas</h1>
            <p>
              Disponemos de una gran variedad de fruta , ¡escoge desde tan solo
              medio kilo!. Nuestra fruta y verdura es recogida unas horas
              después de su pedido y será entregada en tan solo 24/48 horas.
            </p>
            <p>
              *Damos especial atención a la calidad de nuestros productos,por lo
              tanto, si la fruta y verdura recibida está dañada ,le devolveremos
              el dinero.
            </p>

            {/* <img src="/frutas_y_verduras.jpg" alt="frutas y verduras" /> */}
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.name) {
              return (
                <div className="containerDivInfo" key={product._id}>
                  <Link
                    href="/productos/frutas/[id]"
                    as={`/productos/frutas/${product.urlRoute}`}
                  >
                    <picture>
                      <source
                        media="(max-width: 767.98px)"
                        srcSet="/141pxImages/pruebajp.jpg"
                      />
                      <source
                        media="(max-width: 1199.98px) and (min-width: 768px)"
                        srcSet="/174pxImages/pruebajp.jpg"
                      />
                      <source
                        media="(min-width: 1200px)"
                        srcSet="/270pxImages/pruebajp.jpg"
                      />
                      <img
                        className="imagenProduct"
                        src="/141pxImages/pruebajp.jpg"
                        alt={product.imageAlt}
                      />
                    </picture>
                  </Link>

                  <Link
                    href="/productos/frutas/[id]"
                    as={`/productos/frutas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>
                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <span>
                    {product.stock === "si" ? (
                      <p>
                        <img
                          src={
                            "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_20,q_10,w_20/v1593730373/iconosHorticurita/icono_disponible_a932xs.png"
                          }
                          alt="icono disponible"
                        />
                        Disponible
                      </p>
                    ) : (
                      <p>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_20,q_10,w_20/v1593731819/iconosHorticurita/icono_sin_stock_ihhw8q.png"
                          alt="icono sin stock"
                        />
                        No disponible
                      </p>
                    )}
                  </span>
                  <div>
                    <button
                      type="button"
                      onClick={() => this.restProduct(product)}
                    >
                      -
                    </button>

                    <p className="inputProducts">
                      {product.type === "kilogramos"
                        ? this.state.productProps[index].added / 2
                        : this.state.productProps[index].added}
                    </p>

                    <button
                      type="button"
                      onClick={() => this.addNewProduct(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <style jsx>{`
          .metaDiv {
            max-width: 768px;
            margin: 0 auto;
            margin-bottom: 5%;
            border-bottom: 1px solid green;
            padding-bottom: 3%;
            font-family: montserrat;
            padding-left: 25px;
            padding-right: 25px;
          }
          .inputProducts {
            min-width: 34px;
            text-align: center;
            margin: 0px;
            padding: 6px;
            border-width: thin;
            border-left: none;
            border-right: none;
            border-color: #ffeb00;
            border-top: 1px solid #ffeb00;
            border-bottom: 1px solid #ffeb00;
          }
          .container > div > span {
            font-family: montserrat;
            font-size: 13px;
          }
          .container > div > span > p {
            display: flex;
            justify-content: center;
            font-size: 12px;
            align-items: center;
            font-family: montserrat;
          }
          .container > div > span > p > img {
            width: 20px;
          }
          .metaDiv > div > h1 {
            text-align: center;
            color: green;
          }
          .metaDiv > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .metaDiv > div > img {
            width: 100%;
            max-width: 530px;
          }
          h2 {
            font-size: large;
            color: black;
          }
          .container > div > div {
            display: flex;
            justify-content: center;
            height: 28px;
            margin-top: 15px;
            margin-bottom: 15px;
          }

          .container > div > a > h2 {
            font-family: pacifico;
          }

          .container > div > div > :nth-child(1) {
            border-radius: 15px 0px 0px 15px;
          }

          .container > div > div > :nth-child(3) {
            border-radius: 0px 15px 15px 0px;
          }

          button {
            border: none;
            color: green;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            background-color: greenyellow;
            width: 25%;
          }

          .noneDisplay {
            display: none;
          }
          @media (max-width: 575.98px) {
            .container {
              display: flex;
              /* or inline-flex */
              flex-wrap: wrap;
              justify-content: center;
            }

            .imagenProduct {
              cursor: pointer;
              object-fit: contain;
              width: 100%;
              height: auto;
            }

            .containerDivInfo {
              width: 142px;
              text-align: center;
              margin-left: 1%;
              border-style: solid;
              border-color: #fbff04;
              margin-bottom: 18px;
              border-radius: 4px;
              border-width: thin;
            }
            .metaDiv > div > p {
              font-size: 13px;
            }
          }

          @media (min-width: 576px) and (max-width: 767.98px) {
            .container {
              display: flex;
              /* or inline-flex */
              flex-wrap: wrap;
              justify-content: center;
            }

            .imagenProduct {
              cursor: pointer;
              object-fit: contain;
              width: 100%;
              height: auto;
            }

            .containerDivInfo {
              width: 169px;
              text-align: center;
              margin-left: 2%;
              border-style: solid;
              border-color: #fbff04;
              margin-bottom: 18px;
              border-radius: 4px;
              border-width: thin;
              box-shadow: 0px 10px 18px #888888;
            }
          }

          @media (min-width: 768px) and (max-width: 991.98px) {
            .container {
              display: flex;
              /* or inline-flex */
              flex-wrap: wrap;
              justify-content: center;
            }

            .imagenProduct {
              cursor: pointer;
              object-fit: contain;
              width: 100%;
              height: auto;
            }
            .container > div > span {
              font-family: montserrat;
              font-size: 14px;
            }
            .containerDivInfo {
              width: 175px;
              text-align: center;
              margin-left: 2%;
              border-style: solid;
              border-color: #fbff04;
              margin-bottom: 18px;
              border-radius: 4px;
              border-width: thin;
              box-shadow: 0px 10px 18px #888888;
            }
          }

          @media (min-width: 992px) and (max-width: 1199.98px) {
            .container {
              display: flex;
              /* or inline-flex */
              flex-wrap: wrap;
              justify-content: center;
            }

            .imagenProduct {
              cursor: pointer;
              object-fit: contain;
              width: 100%;
              height: auto;
            }
            .container > div > span {
              font-family: montserrat;
              font-size: 14px;
            }
            .containerDivInfo {
              width: 225px;
              text-align: center;
              margin-left: 2%;
              border-style: solid;
              border-color: #fbff04;
              margin-bottom: 18px;
              border-radius: 4px;
              border-width: thin;
              box-shadow: 0px 10px 18px #888888;
            }
          }

          @media (min-width: 1200px) {
            .container {
              display: flex;
              /* or inline-flex */
              flex-wrap: wrap;
              justify-content: center;
              max-width: 1325px;
              margin: 0 auto;
            }
            .inputProducts {
              min-width: 53px;
              text-align: center;
              margin: 0px;
              padding: 6px;
              border-width: thin;
              border-left: none;
              border-right: none;
              border-color: #ffeb00;
              border-top: 1px solid #ffeb00;
              border-bottom: 1px solid #ffeb00;
            }
            .imagenProduct {
              cursor: pointer;
              object-fit: contain;
              width: 100%;
              height: auto;
            }
            .container > div > span {
              font-family: montserrat;
              font-size: 14px;
            }
            .containerDivInfo {
              width: 271px;
              text-align: center;
              margin-left: 2%;
              border-style: solid;
              border-color: #fbff04;

              margin-bottom: 18px;
              border-radius: 4px;
              border-width: thin;
              box-shadow: 0px 10px 18px #888888;
            }
          }
        `}</style>
      </>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch(
    "https://gestorhorticurita.herokuapp.com/api/getAllProducts"
  );
  const data = await res.json();

  let dataMapped = () => {
    return [...data.productos]
      .map((product) => {
        if (product.category === "fruta") {
          return {
            _id: product._id,
            name: product.name,
            price: product.price,
            description: product.description,
            generalcategory: product.generalcategory,
            imageUrl: product.imageUrl,
            imageAlt: product.imageAlt,
            type: product.type,
            stock: product.stock,
            urlRoute: product.urlRoute,
            added: 0,
          };
        } else {
          return {};
        }
      })
      .sort((a, b) => a.generalcategory - b.generalcategory);
  };

  return {
    props: {
      data: dataMapped(),
    },
  };
}

export default TodaFruta;
