import React from "react";

class TodaFruta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          {this.props.data.productos.map((product) => {
            if (product.category === "fruta") {
              return (
                <div key={product._id}>
                  <img src={product.imageUrl}></img>
                  <h2>{product.name}</h2>
                  <span>{product.price}</span>
                </div>
              );
            }
          })}
        </div>
        <h1>esta es la home page con sus estilos</h1>
        <style jsx>{`
          * {
            color: blue;
          }
        `}</style>
      </>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch(
    "https://gestorhorticurita.herokuapp.com/api//getAllProducts"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default TodaFruta;
