import React from "react";
import Link from "next/link";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="metaDiv">
          <div>
            <h1>Productos</h1>
            <p>
              Estamos orgullosos de ser productores de fruta, verdura y
              hortalizas de alta calidad y ofrecer a nuestros clientes alta
              calidad a un precio altamente competitivo, además de nuestros
              propios productos también colaboramos con productores de
              Encurtidos ,Miel ,Dulces ,Aperitivos Snack . Añade al carrito la
              cantidad deseada ¡desde tan solo medio kilo!.
            </p>
            <p>
              * Damos especial atención a la calidad de nuestros productos,por
              lo tanto, si la fruta y verdura recibida ha sufrido daños ,
              <span>le devolveremos el dinero.</span>
            </p>
          </div>
        </div>

        <div className="metaDiv">
          <div>
            <h1>Frutas</h1>
            <p>
              Añade al carrito la fruta que desee.
            </p>
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "fruta") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
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
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="metaDiv">
          <div>
            <h1>Verduras y hortalizas</h1>
            <p>
              Gran variedad de verduras y hortalizas a un precio imbatible! Añade desde medio kilo.
            </p>
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "verdura y hortaliza") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
                  <Link
                    href="/productos/verduras-y-hortalizas/[id]"
                    as={`/productos/verduras-y-hortalizas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>

                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="metaDiv">
          <div>
            <h1>Legumbres</h1>
           
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "legumbre") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
                  <Link
                    href="/productos/verduras-y-hortalizas/[id]"
                    as={`/productos/verduras-y-hortalizas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>

                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="metaDiv">
          <div>
            <h1>Encurtidos</h1>
            <p>
              Estamos completamente seguros que te encantarán estos encurtidos , ¡añade al carrito y repite!.
            </p>
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "encurtido") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
                  <Link
                    href="/productos/verduras-y-hortalizas/[id]"
                    as={`/productos/verduras-y-hortalizas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>

                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="metaDiv">
          <div>
            <h1>Frutos secos</h1>
            <p>
              Añade al carrito estos frutos secos 
            </p>
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "frutos secos") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
                  <Link
                    href="/productos/verduras-y-hortalizas/[id]"
                    as={`/productos/verduras-y-hortalizas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>

                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="metaDiv">
          <div>
            <h1>Galletas y cereales</h1>
            <p>
              Complementa tu alimentacion con estas galletas y cereales.
            </p>
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "galletas y cereales") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
                  <Link
                    href="/productos/verduras-y-hortalizas/[id]"
                    as={`/productos/verduras-y-hortalizas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>

                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="metaDiv">
          <div>
            <h1>Dulces</h1>
            <p>
              Colaboramos con una panadería artesanal , para ofrecer unos dulces de sabor y calidad inigualable!
            </p>
            <p>
              Añade al carrito los dulces que desee , estamos seguros de que repetirá.
            </p>
          </div>
        </div>
        <div className="container">
          {this.props.data.map((product, index) => {
            if (product.category === "dulce") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl} alt={product.imageAlt} />
                  <Link
                    href="/productos/verduras-y-hortalizas/[id]"
                    as={`/productos/verduras-y-hortalizas/${product.urlRoute}`}
                  >
                    <a>
                      <h2>{product.name}</h2>
                    </a>
                  </Link>

                  <span>
                    {product.price}€ /
                    {product.type === "kilogramos" ? "Kg" : "Ud"}
                  </span>
                  <div>
                    <button type="button">-</button>
                    <input value="0" name="inputProduct" />
                    <button type="button">+</button>
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
          }
          span {
            font-weight: bold;
            font-size: 16px;
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
          .metaDiv > div > p {
            text-align: center;
          }
          h2 {
            font-size: large;
            color: #8bc34a;
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
              height: 142px;
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
              height: 169px;
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
              height: 165px;
            }

            .container > div {
              width: 165px;
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
              height: 214px;
            }

            .container > div {
              width: 214px;
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
            }

            .container > div > img {
              width: 100%;
              height: 260px;
            }

            .container > div {
              width: 260px;
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
        return {
          _id: product._id,
          category: product.category,
          name: product.name,
          price: product.price,
          description: product.description,
          generalcategory: product.generalcategory,
          imageUrl: product.imageUrl,
          imageAlt: product.imageAlt,
          type: product.type,
          urlRoute: product.urlRoute,
        };
      })
      .sort((a, b) => a.generalcategory - b.generalcategory);
  };

  return {
    props: {
      data: dataMapped(),
    },
  };
}

export default Products;
