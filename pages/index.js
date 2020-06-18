import React from "react";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }



  render() {
    return (
      <>
       {this.props.data.productos.map((product) => (
        <h1 key={product._id}>{product.name}</h1>
      ))}
     
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
    
  const res = await fetch('https://gestorhorticurita.herokuapp.com/api//getAllProducts')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}


export default Home;
