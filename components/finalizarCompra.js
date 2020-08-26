import React from "react";
import Link from 'next/link'

class FinalizarCompra extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carritoInfo: [],
    };
  }

  recibirInfoCart() {
    let miStorage = [...JSON.parse(localStorage.getItem("cartProducts"))];

    let newArrayStorage = miStorage.filter((element) => {
      return element.added !== 0;
    });

    this.setState({ carritoInfo: newArrayStorage });
  }

  componentWillUnmount(){
    location.reload()
  }
  componentDidMount() {
    this.recibirInfoCart();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
      <button onClick={this.props.cambiarTotalOk} style={{
    marginTop: "20px",
    position: "fixed",
    borderWidth: "1px",
    backgroundColor: "#5dcd71",
    zIndex: "50",
    borderRadius: "47px 0px 0px 47px",
    borderColor: "#7bda09",
    right: "0px",
    color: "white"
}}>Volver al carrito</button>
         
       
      
     <div class="container" style={{marginBottom:"80px"}}>
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="/carritoImages/personaje-carro.jpg" alt="icono de finalizar compra" width="200" height="auto"/>
        <h2>Formulario de compra</h2>
        <p class="lead">A continuación rellene el siguiente formulario con su información para proceder al cobro y envío .Por favor , asegúrese de que la dirección de envío es correcta 🙏 , ¡nuestros repartidores lo agradecerán! 😃 .</p>
      </div>
    
      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Tu carrito</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Nombre uno</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Nombre dos</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Nombre tres</h6>
                <small class="text-muted">Brief description</small>
              </div>
              <span class="text-muted">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Código descuento</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span class="text-success">-$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (EUR)</span>
              <strong>20€</strong>
            </li>
          </ul>
    
           <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Código descuento"/>
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Probar</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Dirección de envío</h4>
         <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Nombre</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Apellidos</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
     
            
    
            <div class="mb-3">
              <label for="email">Email <span class="text-muted">(envío de factura)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
    
            <div class="mb-3">
              <label for="address">Dirección</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
    
            <div class="mb-3">
              <label for="address2">Dirección 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
            </div>
    
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Código postal</label>
                <input type="text" class="form-control" id="zip" placeholder="" required/>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <hr class="mb-4"></hr>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address"/>
              <label class="custom-control-label" for="same-address">La dirección de envío es la misma que mi dirección de facturación</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info"/>
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4"></hr>
    
            <h4 class="mb-3">Método de pago</h4>
    
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
                <label class="custom-control-label" for="credit">Tarjeta de crédito</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                <label class="custom-control-label" for="debit">Tarjeta de débito</label>
              </div>
              
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Nombre en la tarjeta</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                <small class="text-muted">Nombre completo visible en la tarjeta física</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Número de tarjeta</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Fecha de caducidad</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
            
            <hr class="mb-4"></hr>
            <button class="btn btn-primary btn-lg btn-block" type="submit" style={{
              backgroundColor: "#f1c545",
              border: "none"
            }}
            >Finalizar pago</button>
            
          </form> 

        </div>
      </div>
      </div>
      </>
  )
      
  }
}

export default FinalizarCompra;
