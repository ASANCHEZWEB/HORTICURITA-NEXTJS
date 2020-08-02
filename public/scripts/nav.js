//MOSTRAR MENÚ mobile
function showList() {
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
}

//MOSTRAR LISTA DE PRODUCTOS en desktop
let showProductsList = () => {
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
let showFruitsList = () => {
  if (document.querySelector(".showVerduras")) {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
  if (document.querySelector(".ulFruits")) {
    document.querySelector(".ulFruits").setAttribute("class", "showfruits");
  } else {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
};

//MOSTRAR LISTA DE VERDURAS(desktop y mobile)
let showVerduras = () => {
  if (document.querySelector(".showfruits")) {
    document.querySelector(".showfruits").setAttribute("class", "ulFruits");
  }
  if (document.querySelector(".ulVerduras")) {
    document.querySelector(".ulVerduras").setAttribute("class", "showVerduras");
  } else {
    document.querySelector(".showVerduras").setAttribute("class", "ulVerduras");
  }
};

//CERRAR MENÚ SI EL USUARIO HACE CLICK EN UN ELEMENTO DENTRO DEL MENÚ
let arrayElements = [];
[...document.querySelectorAll(".listProducts>li")].forEach((element) => {
  if (!element.querySelector("button")) {
    arrayElements.push(element);
  }
});
[...document.querySelectorAll(".listProducts>li>ul>li")].forEach((element) => {
  if (!element.querySelector("button")) {
    arrayElements.push(element);
  }
});
[...document.querySelectorAll(".listProducts>li>ul>li>ul>li")].forEach(
  (element) => {
    if (!element.querySelector("button")) {
      arrayElements.push(element);
    }
  }
);
arrayElements.push(document.querySelector("nav>div:nth-child(1)>a"));

for (i = 0; i < arrayElements.length; i++) {
  arrayElements[i].onclick = function () {
    if (document.querySelector(".showList")) {
      showList();
    }
    if (document.querySelector(".showUlProducts")) {
      showProductsList();
    }
  };
}
// CERRAR MENU SI EL CLIENTE CLICKEA FUERA DEL MENÚ
window.onclick = function (event) {
  let mobileMenu = document
    .querySelector("nav > div:nth-child(2) > button")
    .contains(event.target);
  let desktopMenu = document
    .querySelector("nav > div:nth-child(2) > ul > li:nth-child(2) > button")
    .contains(event.target);
  let menuFrutas = document
    .querySelector(".frutasListButton")
    .contains(event.target);
  let menuVerduras = document
    .querySelector(".verdurasListButton")
    .contains(event.target);
  if (!mobileMenu && !desktopMenu && !menuFrutas && !menuVerduras) {
    if (document.querySelector(".showList")) {
      showList();
    }
    if (document.querySelector(".showUlProducts")) {
      showProductsList();
    }
  }
};


