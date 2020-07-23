import React from "react";
import Head from "next/head";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 

  componentDidMount() {
    

  
  }

  render() {
    return (
      <>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-169048148-3"
          ></script>
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
