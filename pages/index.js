import React from "react";
import Head from "next/head";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
  }



  render() {
    return (
      <>
    
    <Head>
    <title>Horticurita | Frutas  y verdura al mejor precio | Alta calidad</title>
    <meta
            name="description"
            content="Fruta al mejor precio , calidad insuperable"
          ></meta>
      </Head> 
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




export default Home;
