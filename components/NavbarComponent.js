import React from "react";
import Link from "next/link";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      imagenesNavBar: [],
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
      "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_23,q_10,w_23/v1593638715/iconosHorticurita/menu_y9uxib.svg"
    ) {
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .setAttribute(
          "src",
          "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_23,q_10,w_23/v1593638701/iconosHorticurita/closeMenu_ovofxv.png"
        );
    } else {
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .setAttribute(
          "src",
          "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_23,q_10,w_23/v1593638715/iconosHorticurita/menu_y9uxib.svg"
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

  changeImageState() {
    this.setState({
      imagenesNavBar: [
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/catalog_l5yzgl.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/cereza_ufuh5p.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_15,q_10,w_15/v1593638701/iconosHorticurita/arrowMenu_g1nsml.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/cereza_ufuh5p.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/platano_wmlyqw.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/pina_y0wz8v.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/pera_c6liyz.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638715/iconosHorticurita/naranja_ezabbd.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/sandia_xgvhxy.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/melocoton_xmlpla.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/manzana_dzern7.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/limon_vvrjd6.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/kiwi_vys7rx.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638715/iconosHorticurita/delbosque_vuvk7x.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638703/iconosHorticurita/uva_crvyzl.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/cebolla_xjy7rb.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_15,q_10,w_15/v1593638701/iconosHorticurita/arrowMenu_g1nsml.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638703/iconosHorticurita/tomate_ahrlar.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/cebolla_xjy7rb.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/lechuga_brykvg.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/patata_nwhhtm.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/pimiento_vqhmci.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/seta_dsxwjc.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/tierra_qi5qga.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/germinado_unduc0.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/garbanzo_ko0nop.jpg",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/cacahuete_dzkay0.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638715/iconosHorticurita/tapa_gobalf.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638715/iconosHorticurita/especias_xhao5g.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/miel_cbnqrg.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638702/iconosHorticurita/pastel_e7tonk.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638701/iconosHorticurita/galleta_wwldkz.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_22,q_10,w_22/v1593638720/iconosHorticurita/aperitivos_snack_wqkwwb.png",
        "https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_40,q_10,w_40/v1593638701/iconosHorticurita/carritomenu_nsscxy.png",
      ],
    });
  }

  componentDidMount() {
    this.actualizarCarro();

    
      this.changeImageState()
    
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
              src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_23,q_10,w_23/v1593638715/iconosHorticurita/menu_y9uxib.svg"
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
                  src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_15,q_10,w_15/v1593638701/iconosHorticurita/arrowMenu_g1nsml.png"
                  alt="flecha hacia abajo"
                  style={{ marginLeft: "5px" }}
                />
              </button>
              <ul className="ulProducts">
                <li>
                  <Link href="/productos">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[0]}
                        alt="icono catálogo"
                      /> */}
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
                    {/* <img
                      src={this.state.imagenesNavBar[1]}
                      alt="icono cerezas"
                    /> */}
                    Frutas
                    {/* <img
                      src={this.state.imagenesNavBar[2]}
                      alt="flecha hacia abajo"
                      style={{ width: "15px", marginLeft: "5px" }}
                    /> */}
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
                          {/* <img
                            src={this.state.imagenesNavBar[3]}
                            alt="icono cerezas"
                          />{" "} */}
                          Cerezas y picotas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/platanos">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[4]}
                            alt="icono platanos"
                          />{" "} */}
                          Platanos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/pinas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[5]}
                            alt="icono piña"
                          />{" "} */}
                          Piñas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/peras">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[6]}
                            alt="icono pera"
                          />{" "} */}
                          Peras
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/naranjas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[7]}
                            alt="icono naranja"
                          />{" "} */}
                          Naranjas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/melones-y-sandias">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[8]}
                            alt="icono sandía"
                          />{" "} */}
                          Melones y sandias
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/melocotones-y-ciruelas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[9]}
                            alt="icono melocotón"
                          />{" "} */}
                          Melocotones y ciruelas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/manzanas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[10]}
                            alt="icono manzana"
                          />{" "} */}
                          Manzanas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/limas-y-limones">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[11]}
                            alt="icono limón"
                          />{" "} */}
                          Limas y limones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/kiwis">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[12]}
                            alt="icono kiwi"
                          />{" "} */}
                          Kiwis
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/frutas-del-bosque">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[13]}
                            alt="icono arbol"
                          />{" "} */}
                          Frutas del bosque
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/frutas/uvas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[14]}
                            alt="icono uvas"
                          />{" "} */}
                          Uvas
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    onClick={this.showVerduras}
                    className="displayButtonsProds disableZoombutton verdurasListButton"
                  >
                    {/* <img
                      src={this.state.imagenesNavBar[15]}
                      alt="icono cebollas"
                    /> */}
                    Verduras y hortalizas
                    {/* <img
                      src={this.state.imagenesNavBar[16]}
                      alt="flecha hacia abajo"
                      style={{ width: "15px", marginLeft: "5px" }}
                    /> */}
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
                          {/* <img
                            src={this.state.imagenesNavBar[17]}
                            alt="icono tomate"
                          />{" "} */}
                          Tomates
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/cebollas-y-ajos">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[18]}
                            alt="icono cebolla"
                          />{" "} */}
                          Cebollas y ajos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/lechugas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[19]}
                            alt="icono lechuga"
                          />{" "} */}
                          Lechugas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/patatas">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[20]}
                            alt="icono patatas"
                          />{" "} */}
                          Patatas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/pimientos">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[21]}
                            alt="icono pimiento"
                          />{" "} */}
                          Pimientos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/setas-y-champinones">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[22]}
                            alt="icono seta"
                          />{" "} */}
                          Setas y champiñones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/de-tierra">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[23]}
                            alt="icono tierra"
                          />{" "} */}
                          De tierra
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/productos/verduras-y-hortalizas/germinados">
                        <a>
                          {/* <img
                            src={this.state.imagenesNavBar[24]}
                            alt="icono semilla"
                          />{" "} */}
                          Germinados
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/productos/legumbres">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[25]}
                        alt="legumbres"
                      />{" "} */}
                      Legumbres
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/frutos-secos">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[26]}
                        alt="icono cacahuete"
                      />{" "} */}
                      Frutos secos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/encurtidos">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[27]}
                        alt="icono tapa"
                      />{" "} */}
                      Encurtidos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/especias">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[28]}
                        alt="icono especias"
                      />{" "} */}
                      Especias
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/miel">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[29]}
                        alt="icono tarro de miel"
                      />{" "} */}
                      Miel
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/dulces">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[30]}
                        alt="icono pastel"
                      />{" "} */}
                      Dulces
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/galletas-y-cereales">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[31]}
                        alt="icono galleta"
                      />{" "} */}
                      Galletas y cereales
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/productos/aperitivos-snack">
                    <a>
                      {/* <img
                        src={this.state.imagenesNavBar[32]}
                        alt="aperitivo snack"
                      />{" "} */}
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
                    src={this.state.imagenesNavBar[33]}
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
              {/* <img
                src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_30,q_10,w_30/v1593638701/iconosHorticurita/carritoIcons_mgpns6.png"
                alt="icono carrito blanco"
              /> */}
              ( {this.state.cartItems.length} )
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
