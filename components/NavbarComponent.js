import React from "react";
import Link from "next/link";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };
  }

  actualizarCarro = () => {
    setInterval(() => {
      let miStorage = JSON.parse(window.localStorage.cartProducts);

      this.setState({ cartItems: miStorage });
    }, 500);
  };

  //MOSTRAR MENÚ mobile
  showList = () => {
    document.querySelector(".listProducts").classList.toggle("showList");
    if (
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .getAttribute("src") ===
      "/icono menu.svg"
    ) {
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .setAttribute(
          "src",
          "/closeMenu.png"
        );
    } else {
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .setAttribute(
          "src",
          "/icono menu.svg"
        );
    }
  };
  //MOSTRAR LISTA DE PRODUCTOS en desktop
  showProductsList = () => {
    if (document.querySelector(".ulProducts")) {
      document
        .querySelector(".ulProducts")
        .setAttribute("class", "showUlProducts");
    } else {
      document
        .querySelector(".showUlProducts")
        .setAttribute("class", "ulProducts");
    }
  };
  //MOSTRAR LISTA DE FRUTAS (desktop y mobile)
  showFruitsList = () => {
    if (document.querySelector(".showVerduras")) {
      document
        .querySelector(".showVerduras")
        .setAttribute("class", "ulVerduras");
    }
    if (document.querySelector(".ulFruits")) {
      document.querySelector(".ulFruits").setAttribute("class", "showfruits");
    } else {
      document.querySelector(".showfruits").setAttribute("class", "ulFruits");
    }
  };
  //MOSTRAR LISTA DE VERDURAS(desktop y mobile)
  showVerduras = () => {
    if (document.querySelector(".showfruits")) {
      document.querySelector(".showfruits").setAttribute("class", "ulFruits");
    }
    if (document.querySelector(".ulVerduras")) {
      document
        .querySelector(".ulVerduras")
        .setAttribute("class", "showVerduras");
    } else {
      document
        .querySelector(".showVerduras")
        .setAttribute("class", "ulVerduras");
    }
  };

  componentDidMount() {
    this.actualizarCarro();
  }

  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a>HORTICURITA</a>
          </Link>
        </div>
        <div>
          <button onClick={this.showList} className="disableZoombutton">
            <img
              src="/icono menu.svg"
              alt="icono menú"
            />
          </button>
          <ul className="listProducts">
            <li>
              <Link href="/">
                <a>INICIO</a>
              </Link>
            </li>
            <li>
              <button
                onClick={this.showProductsList}
                className="displayButtonsProds disableZoombutton"
              >
                PRODUCTOS{" "}
                <img
                  src="/arrowMenu.png"
                  alt="flecha hacia abajo"
                  style={{ width: "15px", marginLeft: "5px" }}
                />
              </button>
              <ul className="ulProducts">
                <li>
                  <Link href="/productos">
                    <a>
                      <img
                        src="/catalog.png"
                        alt="icono catálogo"
                      />
                      Catálogo completo
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <hr></hr>{" "}
                </li>

                <li>
                  <button
                    onClick={this.showFruitsList}
                    className="displayButtonsProds disableZoombutton frutasListButton"
                  >
                    <img
                      src="/cereza.png"
                      alt="icono cerezas"
                    />
                    Frutas
                    <img
                      src="/arrowMenu.png"
                      alt="flecha hacia abajo"
                      style={{ width: "15px", marginLeft: "5px" }}
                    />
                  </button>
                  <ul className="ulFruits">
                    <li>
                      <Link href="/productos/frutas">
                        <a>~~Toda la fruta~~</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/cerezas-y-picotas">
                        <a>
                          <img
                            src="/cereza.png"
                            alt="icono cerezas"
                          />{" "}
                          Cerezas y picotas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/platanos">
                        <a>
                          <img
                            src="/platano.png"
                            alt="icono platanos"
                          />{" "}
                          Platanos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/pinas">
                        <a>
                          <img
                            src="/pina.png"
                            alt="icono piña"
                          />{" "}
                          Piñas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/peras">
                        <a>
                          <img
                            src="/pera.png"
                            alt="icono pera"
                          />{" "}
                          Peras
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/naranjas">
                        <a>
                          <img
                            src="/naranja.png"
                            alt="icono naranja"
                          />{" "}
                          Naranjas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/melones-y-sandias">
                        <a>
                          <img
                            src="/sandia.png"
                            alt="icono sandía"
                          />{" "}
                          Melones y sandias
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/melocotones-y-ciruelas">
                        <a>
                          <img
                            src="/melocoton.png"
                            alt="icono melocotón"
                          />{" "}
                          Melocotones y ciruelas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/manzanas">
                        <a>
                          <img
                            src="/manzana.png"
                            alt="icono manzana"
                          />{" "}
                          Manzanas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/limas-y-limones">
                        <a>
                          <img
                            src="/limon.png"
                            alt="icono limón"
                          />{" "}
                          Limas y limones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/kiwis">
                        <a>
                          <img
                            src="/kiwi.png"
                            alt="icono kiwi"
                          />{" "}
                          Kiwis
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/frutas-del-bosque">
                        <a>
                          <img
                            src="/delbosque.png"
                            alt="icono arbol"
                          />{" "}
                          Frutas del bosque
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/uvas">
                        <a>
                          <img
                            src="/uva.png"
                            alt="icono uvas"
                          />{" "}
                          Uvas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a>+ Otras frutas</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    onClick={this.showVerduras}
                    className="displayButtonsProds disableZoombutton verdurasListButton"
                  >
                    <img
                      src="/cebolla.png"
                      alt="icono cebollas"
                    />
                    Verduras y hortalizas
                    <img
                      src="/arrowMenu.png"
                      alt="flecha hacia abajo"
                      style={{ width: "15px", marginLeft: "5px" }}
                    />
                  </button>
                  <ul className="ulVerduras">
                    <li>
                      <Link href="/productos/verduras-y-hortalizas">
                        <a>Todas las verduras</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/tomates">
                        <a>
                          <img
                            src="/tomate.png"
                            alt="icono tomate"
                          />{" "}
                          Tomates
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/cebollas-y-ajos">
                        <a>
                          <img
                            src="/cebolla.png"
                            alt="icono cebolla"
                          />{" "}
                          Cebollas y ajos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/lechugas">
                        <a>
                          <img
                            src="/lechuga.png"
                            alt="icono lechuga"
                          />{" "}
                          Lechugas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/patatas">
                        <a>
                          <img
                            src="/patata.png"
                            alt="icono patatas"
                          />{" "}
                          Patatas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/pimientos">
                        <a>
                          <img
                            src="/pimiento.png"
                            alt="icono pimiento"
                          />{" "}
                          Pimientos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/setas-y-champinones">
                        <a>
                          <img
                            src="/seta.png"
                            alt="icono seta"
                          />{" "}
                          Setas y champiñones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/de-tierra">
                        <a>
                          <img
                            src="/tierra.png"
                            alt="icono tierra"
                          />{" "}
                          De tierra
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/germinados">
                        <a>
                          <img
                            src="/germinado.png"
                            alt="icono semilla"
                          />{" "}
                          Germinados
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/productos/legumbres">
                    <a>
                      <img
                        src="/garbanzo.jpg"
                        alt="legumbres"
                      />{" "}
                      Legumbres
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/frutos-secos">
                    <a>
                      <img
                        src="/cacahuete.png"
                        alt="icono cacahuete"
                      />{" "}
                      Frutos secos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/encurtidos">
                    <a>
                      <img
                        src="/tapa.png"
                        alt="icono tapa"
                      />{" "}
                      Encurtidos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/especias">
                    <a>
                      <img
                        src="/especias.png"
                        alt="icono especias"
                      />{" "}
                      Especias
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/miel">
                    <a>
                      <img
                        src="/miel.png"
                        alt="icono tarro de miel"
                      />{" "}
                      Miel
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/dulces">
                    <a>
                      <img
                        src="/pastel.png"
                        alt="icono pastel"
                      />{" "}
                      Dulces
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/galletas-y-cereales">
                    <a>
                      <img
                        src="/galleta.png"
                        alt="icono galleta"
                      />{" "}
                      Galletas y cereales
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/aperitivos-snack">
                    <a>
                      <img
                        src="/aperitivos_snack.png"
                        alt="aperitivo snack"
                      />{" "}
                      Aperitivos Snack
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/fruta-para-oficinas">
                <a>PARA OFICINAS</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre-nosotros">
                <a>NOSOTROS</a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a>CONTACTO</a>
              </Link>
            </li>
            <li className="cartStyleLI">
              <Link href="/carrito">
                <a>
                  <img
                    src="/carritomenu.png"
                    alt="icono carrito verde"
                  />
                  CARRITO ( {this.state.cartItems.length} )
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/carrito">
            <a className="buttonCart disableZoombutton">
              <span>Carrito: </span>
              <img
                src="/carritoIcons.png"
                alt="icono carrito blanco"
              />
              ( {this.state.cartItems.length} )
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
