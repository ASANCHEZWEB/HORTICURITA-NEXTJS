// pages/posts/[id].js
import React from "react";

class Kiwi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.objectData = props.objectProp;
  }

  render() {
    return (
      <>
        <div className="containerDetail">
          <div>
            <img
              src={this.objectData.imageUrl}
              alt={this.objectData.imageAlt}
            />
          </div>

          <div>
            <h1>{this.objectData.name}</h1>
            <span>
              {this.objectData.price} /
              {this.objectData.type === "kilogramos" ? "Kg" : "Ud"}
            </span>
            <p>Origen: {this.objectData.origin}</p>

            {this.objectData.stock === "si" ? (
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
              <button type="button" className="buttonIzq">
                -
              </button>
              <input name="inputProduct" className="inputButtons" value="0" />
              <button type="button" className="buttonDer">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="detailDescription">
          <hr></hr>
          <span>DESCRIPCIÓN</span>
          <hr></hr>
          <p>{this.objectData.description}</p>
        </div>

        <style jsx>{`
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

            .inputButtons {
              max-width: 90px;
              text-align: center;
              border-width: thin;
              border-left: none rgb(255, 235, 0);
              border-right: none rgb(255, 235, 0);
              border-color: rgb(255, 235, 0);
              border-top: 1px solid rgb(255, 235, 0);
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

            .inputButtons {
              max-width: 90px;
              text-align: center;
              border-width: thin;
              border-left: none rgb(255, 235, 0);
              border-right: none rgb(255, 235, 0);
              border-color: rgb(255, 235, 0);
              border-top: 1px solid rgb(255, 235, 0);
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

            .inputButtons {
              max-width: 90px;
              text-align: center;
              border-width: thin;
              border-left: none rgb(255, 235, 0);
              border-right: none rgb(255, 235, 0);
              border-color: rgb(255, 235, 0);
              border-top: 1px solid rgb(255, 235, 0);
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

            .inputButtons {
              max-width: 90px;
              text-align: center;
              border-width: thin;
              border-left: none rgb(255, 235, 0);
              border-right: none rgb(255, 235, 0);
              border-color: rgb(255, 235, 0);
              border-top: 1px solid rgb(255, 235, 0);
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

            .inputButtons {
              max-width: 90px;
              text-align: center;
              border-width: thin;
              border-left: none rgb(255, 235, 0);
              border-right: none rgb(255, 235, 0);
              border-color: rgb(255, 235, 0);
              border-top: 1px solid rgb(255, 235, 0);
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
    generalcategory: product.generalcategory,
    imageUrl: product.imageUrl,
    imageAlt: product.imageAlt,
    type: product.type,
    stock: product.stock,
    urlRoute: product.urlRoute,
    origin:product.origin
  };
  // Pass post data to the page via props
  return { props: { objectProp } };
}

export default Kiwi;
