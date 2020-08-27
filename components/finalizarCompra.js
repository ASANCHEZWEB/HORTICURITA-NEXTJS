import React from "react";
import Head from "next/head";

class FinalizarCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      subTotal:this.props.carritoInfo.subTotal,
      impuesto:this.props.carritoInfo.impuesto,
      codigoCupon:this.props.carritoInfo.codigoCupon,
      cuponEncontrado:this.props.carritoInfo.cuponEncontrado,
      gastosEnvio:this.props.carritoInfo.gastosEnvio,
      total:this.props.carritoInfo.total,
      descuento:this.props.carritoInfo.descuento,
      totalOk:this.props.carritoInfo.totalOk
    };

   this.cogerProductos=this.cogerProductos.bind(this);
   this.actualizarCupon=this.actualizarCupon.bind(this)
   this.enviarCupon=this.enviarCupon.bind(this)
  }

  
  enviarCupon(event){
     event.preventDefault();
    this.props.cuponProbar(this.state.codigoCupon);
    setInterval(() => {
      this.setState({
      subTotal:this.props.carritoInfo.subTotal,
      impuesto:this.props.carritoInfo.impuesto,
      cuponEncontrado:this.props.carritoInfo.cuponEncontrado,
      gastosEnvio:this.props.carritoInfo.gastosEnvio,
      total:this.props.carritoInfo.total,
      descuento:this.props.carritoInfo.descuento,
      totalOk:this.props.carritoInfo.totalOk
      })
      console.log(this.state)
    }, 500);

}
  actualizarCupon(event){
    this.setState({codigoCupon: event.target.value});
  }




cogerProductos(){
  let miStorage = [...JSON.parse(localStorage.getItem('cartProducts'))];
let newArrayLimpio= miStorage.filter(element=>{
return element.added !==0;
})

  this.setState({cartItems:newArrayLimpio})

}

  componentWillUnmount(){
    location.reload()
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
this.cogerProductos()


  }
 
  render() {
    return (
      <>
      <Head>
        <meta name="robots" content="noindex" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"/>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
       </Head>
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
            <span class="badge badge-secondary badge-pill">{this.state.cartItems.length}</span>
          </h4>
          <ul class="list-group mb-3">
          {this.state.cartItems.map((product, index) => {

           return(
        <li key={index} class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">{product.name}</h6>
                {product.type =="kilogramos"? <small class="text-muted">{product.added/2} Kilogramos</small>:<small class="text-muted">{product.added} Unidades</small>}
                
              </div>
              {product.type =="kilogramos"? <span class="text-muted">{Number(((product.price*product.added)/2).toFixed(2))}€</span>:<span class="text-muted">{(product.price*product.added).toFixed(2)}€</span>}
              
            </li>)
          })}
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Código descuento</h6>
                <small>{this.state.codigoCupon}</small>
              </div>
              <span class="text-success">-{this.props.carritoInfo.descuento}€</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total + iva({this.state.impuesto}%)incl.</span>
              <strong>{this.props.carritoInfo.total}€</strong>
            </li>
          </ul>
    
          <form class="card p-2" onSubmit={this.enviarCupon}>
            <div class="input-group">
              <input type="text" class="form-control" value={this.state.codigoCupon} onChange={this.actualizarCupon} placeholder="Código descuento"/>
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
                <label for="country">Provincia</label>
                <select class="custom-select d-block w-100" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              
              <div class="col-md-4 mb-3">
                <label for="state">Localidad</label>
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
    
            <h4 class="mb-3">Método de pago</h4>
    
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
                <label class="custom-control-label" for="credit">Tarjeta de crédito</label>
              </div>
              {/* <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                <label class="custom-control-label" for="debit">Tarjeta de débito</label>
              </div> */}
              
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
