
function MyApp({ Component, pageProps }) {
  return (
    <main>
      <header>
        <nav>
          <p>AQUÍ IRA LA BARRA DE NAVEGACION</p>
        </nav>
      </header>
      <Component {...pageProps} />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  );
}




export default MyApp;
