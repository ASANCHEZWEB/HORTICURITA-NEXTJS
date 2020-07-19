import React from "react";
import Link from "next/link";
import Head from "next/head";
import LazyLoad from 'react-lazyload';
import { getLocalData } from "../../components/getLocalStorage";

class TodaFruta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ARRAY DE LOCALSTORAGE
      productInLS: [],
      //ARRAY DE PRODUCTOS DE BASE DE DATOS
      productProps: [...this.props.data],
      screenSize: 0,
    };
  }

  addNewProduct = (product) => {
    let arrayLsCopy = [...this.state.productInLS];

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
    }
    if (product.added > 1) {
      arrayLsCopy.forEach((elLS) => {
        if (elLS._id == product._id) {
          elLS.added--;
        }
      });
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
            <img src="/frutas_y_verduras.jpg" alt="frutas y verduras" />
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.name) {
              return (
                <div key={product._id}>
                  <Link
                    href="/productos/frutas/[id]"
                    as={`/productos/frutas/${product.urlRoute}`}
                  >
                   <LazyLoad height={200} offset={100}>
                   <img
                      src="/271pxImages/pruebajp.jpg"
                      srcSet="/142pxImages/pruebajp.jpg 142w, /175pxImages/pruebajp.jpg 175w, /271pxImages/pruebajp.jpg 271w"
                      sizes="(max-width: 767.98px) 142px, (max-width: 1199.98px) 175px, 271px"
                      alt={product.imageAlt}
                    ></img>
      </LazyLoad>
                    

                   
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
                    <input
                      value={
                        product.type === "kilogramos"
                          ? this.state.productProps[index].added / 2
                          : this.state.productProps[index].added
                      }
                    />

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

          .container > div > div > input {
            max-width: 50px;
            text-align: center;
            border-width: thin;
            border-left: none;
            border-right: none;
            border-color: #ffeb00;
            border-top: 1px solid #ffeb00;
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

            .container > div > img {
              width: 100%;
              cursor: pointer;
            }

            .container > div {
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

            .container > div > img {
              width: 100%;
              cursor: pointer;
            }

            .container > div {
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

            .container > div > img {
              width: 100%;
              cursor: pointer;
            }
            .container > div > span {
              font-family: montserrat;
              font-size: 14px;
            }
            .container > div {
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

            .container > div > img {
              width: 100%;
              cursor: pointer;
            }
            .container > div > span {
              font-family: montserrat;
              font-size: 14px;
            }
            .container > div {
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

            .container > div > img {
              width: 100%;
              cursor: pointer;
            }
            .container > div > span {
              font-family: montserrat;
              font-size: 14px;
            }
            .container > div {
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
