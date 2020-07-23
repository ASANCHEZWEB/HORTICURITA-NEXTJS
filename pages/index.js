import React from "react";
import Head from "next/head";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tagManager() {
    if (!document.querySelector(".tagManager")) {
      let element = document.createElement("script");
      element.setAttribute("class", "tagManager");
      element.setAttribute("async", "");
      element.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=UA-169048148-3");
      document.querySelector("head").appendChild(element);
    }else{
      document.querySelector('.tagManager').setAttribute('src','https://www.googletagmanager.com/gtag/js?id=UA-169048148-3')
    }
    if (!document.querySelector("scriptTagManager")) {
      let anaTag = document.createElement("script");
      anaTag.setAttribute("class", "scriptTagManager");
      anaTag.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-169048148-3');
`;
      document.querySelector("head").appendChild(anaTag);
    }else{
      document.querySelector('scriptTagManager').innerHTML=`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-169048148-3');
    `
    }





  }

  componentDidMount() {
    this.tagManager();

    //   let anaTag = document.createElement("script");
    //   anaTag.setAttribute('class','scriptTagManager');
    //   anaTag.innerHTML = `
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'UA-169048148-3');
    // `;
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
