import React from "react";
import Head from "next/head";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Head>
        <title>
          Horticurita | Frutas y verdura al mejor precio | Alta calidad
        </title>
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
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-169048148-3`}
          />
          <script
          async
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-169048148-3', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
      </>
    );
  }
}

export default Home;
