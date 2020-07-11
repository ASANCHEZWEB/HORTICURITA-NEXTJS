export function getLocalData(props) {
  if (!window.localStorage.cartProducts) {
    localStorage.setItem("cartProducts", "[]");
  }

  let miStorage = window.localStorage.cartProducts;

  return miStorage;
}


