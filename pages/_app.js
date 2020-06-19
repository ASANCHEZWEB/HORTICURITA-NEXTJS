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
      
       
      `}</style>
    </main>
  );
}

export default MyApp;
