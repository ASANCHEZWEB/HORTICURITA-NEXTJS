import React from "react";
import Link from "next/link";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //MOSTRAR MENÚ mobile
  showList = () => {
    document.querySelector(".listProducts").classList.toggle("showList");
    if (
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .getAttribute("src") ===
      "https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/menu_y9uxib.svg"
    ) {
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .setAttribute(
          "src",
          "https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/closeMenu_ovofxv.png"
        );
    } else {
      document
        .querySelector("nav>div:nth-child(2)>button>img")
        .setAttribute(
          "src",
          "https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/menu_y9uxib.svg"
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
              src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/menu_y9uxib.svg"
              alt="icono menú"
            />
          </button>
          <ul className="listProducts">
            <li>
              <a>INICIO</a>
            </li>
            <li>
              <button
                onClick={this.showProductsList}
                className="displayButtonsProds disableZoombutton"
              >
                PRODUCTOS{" "}
                <img
                  src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/arrowMenu_g1nsml.png"
                  alt="flecha hacia abajo"
                  style={{ width: "15px", marginLeft: "5px" }}
                />
              </button>
              <ul className="ulProducts">
                <li>
                  <Link href="/productos">
                    <a>
                      <img
                        src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/catalog_l5yzgl.png"
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
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/cereza_ufuh5p.png"
                      alt="icono cerezas"
                    />
                    Frutas
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/arrowMenu_g1nsml.png"
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
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/cereza_ufuh5p.png"
                          alt="icono cerezas"
                        />{" "}
                        Cerezas y picotas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/platano_wmlyqw.png"
                          alt="icono platanos"
                        />{" "}
                        Platanos
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/pina_y0wz8v.png"
                          alt="icono piña"
                        />{" "}
                        Piñas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/pera_c6liyz.png"
                          alt="icono pera"
                        />{" "}
                        Peras
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/naranja_ezabbd.png"
                          alt="icono naranja"
                        />{" "}
                        Naranjas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/sandia_xgvhxy.png"
                          alt="icono sandía"
                        />{" "}
                        Melones y sandias
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/melocoton_xmlpla.png"
                          alt="icono melocotón"
                        />{" "}
                        Melocotones y ciruelas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/manzana_dzern7.png"
                          alt="icono manzana"
                        />{" "}
                        Manzanas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/limon_vvrjd6.png"
                          alt="icono limón"
                        />{" "}
                        Limas y limones
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/kiwi_vys7rx.png"
                          alt="icono kiwi"
                        />{" "}
                        Kiwis
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/delbosque_vuvk7x.png"
                          alt="icono arbol"
                        />{" "}
                        Frutas del bosque
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638703/iconosHorticurita/uva_crvyzl.png"
                          alt="icono uvas"
                        />{" "}
                        Uvas
                      </a>
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
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/cebolla_xjy7rb.png"
                      alt="icono cebollas"
                    />
                    Verduras y hortalizas
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/arrowMenu_g1nsml.png"
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
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638703/iconosHorticurita/tomate_ahrlar.png"
                          alt="icono tomate"
                        />{" "}
                        Tomates
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/cebolla_xjy7rb.png"
                          alt="icono cebolla"
                        />{" "}
                        Cebollas y ajos
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/lechuga_brykvg.png"
                          alt="icono lechuga"
                        />{" "}
                        Lechugas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/patata_nwhhtm.png"
                          alt="icono patatas"
                        />{" "}
                        Patatas
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/pimiento_vqhmci.png"
                          alt="icono pimiento"
                        />{" "}
                        Pimientos
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/seta_dsxwjc.png"
                          alt="icono seta"
                        />{" "}
                        Setas y champiñones
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/tierra_qi5qga.png"
                          alt="icono tierra"
                        />{" "}
                        De tierra
                      </a>
                    </li>
                    <li>
                      <a>
                        <img
                          src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/germinado_unduc0.png"
                          alt="icono semilla"
                        />{" "}
                        Germinados
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/garbanzo_ko0nop.jpg"
                      alt="legumbres"
                    />{" "}
                    Legumbres
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/cacahuete_dzkay0.png"
                      alt="icono cacahuete"
                    />{" "}
                    Frutos secos
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/tapa_gobalf.png"
                      alt="icono tapa"
                    />{" "}
                    Encurtidos
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638715/iconosHorticurita/especias_xhao5g.png"
                      alt="icono especias"
                    />{" "}
                    Especias
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/miel_cbnqrg.png"
                      alt="icono tarro de miel"
                    />{" "}
                    Miel
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638702/iconosHorticurita/pastel_e7tonk.png"
                      alt="icono pastel"
                    />{" "}
                    Dulces
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/galleta_wwldkz.png"
                      alt="icono galleta"
                    />{" "}
                    Galletas y cereales
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638720/iconosHorticurita/aperitivos_snack_wqkwwb.png"
                      alt="aperitivo snack"
                    />{" "}
                    Aperitivos Snack
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>PARA OFICINAS</a>
            </li>
            <li>
              <a>NOSOTROS</a>
            </li>
            <li>
              <a>CONTACTO</a>
            </li>
            <li className="cartStyleLI">
              <a>
                <img
                  src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/carritomenu_nsscxy.png"
                  alt="icono carrito verde"
                />
                CARRITO ( 0 )
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a className="buttonCart disableZoombutton">
            <span>Carrito: </span>
            <img
              src="https://res.cloudinary.com/dfsni6m2x/image/upload/v1593638701/iconosHorticurita/carritoIcons_mgpns6.png"
              alt="icono carrito blanco"
            />
            (0)
          </a>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
