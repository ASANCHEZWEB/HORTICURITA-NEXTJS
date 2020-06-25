import Link from "next/link";


function MyApp({ Component, pageProps }) {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>INICIO</a>
              </Link>
            </li>
            <li>
              <Link href="/productos">
                <a>PRODUCTOS</a>
              </Link>
            </li>
            <li>
              <Link href="/productos/frutas">
                <a>FRUTAS</a>
              </Link>
            </li>
            <li>
              <Link href="/productos/verduras-y-hortalizas">
                <a>VERDURAS Y HORTALIZAS</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />

      <style jsx global>{``}</style>
    </main>
  );
}

export default MyApp;
