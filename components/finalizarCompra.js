import React from "react";
import Head from "next/head";
import Link from 'next/link';
import axios from 'axios';
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
      totalOk:this.props.carritoInfo.totalOk,
      formName:"",
      formSurName:"",
      formEmail:"",
      formDniCif:"",
      formDirectionOne:"",
      formDirectionTwo:"",
      formProvincia:"",
      formLocalidad:"",
      formCp:"",
      formNameCard:"",
      formCardNumber:"",
      formCardMonth:"",
      formCardYear:"",
      formCardCvv:"",
      formTerminos:""
    };

   this.cogerProductos=this.cogerProductos.bind(this);
   this.actualizarCupon=this.actualizarCupon.bind(this);
   this.handleInputChange = this.handleInputChange.bind(this);
   this.enviarCupon=this.enviarCupon.bind(this);
   this.enviarFormCompra=this.enviarFormCompra.bind(this);
   this.changeProvincia=this.changeProvincia.bind(this);
   this.changeCheckBox=this.changeCheckBox.bind(this);
  }
  changeCheckBox(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
 
  enviarCupon(event){
   
    
    
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
      }, 100);
       event.preventDefault();
    
    
      
      
 

}
  actualizarCupon(event){
    this.setState({codigoCupon: event.target.value});
  }

  enviarFormCompra(event){
    console.log(this.state)
    axios.post('http://localhost:5000/api/sendPurchaseData', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


    event.preventDefault();
  }



cogerProductos(){
  let miStorage = [...JSON.parse(localStorage.getItem('cartProducts'))];
let newArrayLimpio= miStorage.filter(element=>{
return element.added !==0;
})

  this.setState({cartItems:newArrayLimpio})

}
changeProvincia(event) {
  this.setState({formProvincia: event.target.value});
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
        <script src="https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV2.js"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
        <script src="/scripts/redsysValidation.js"></script>
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
              <span class="text-success">-{this.props.carritoInfo.descuento}%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Gastos de envío</h6>
                <small class="text-muted">{this.state.formProvincia}</small>
                
              </div>
              <span class="text-muted">{this.state.gastosEnvio}€</span>
              
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total + iva({this.state.impuesto}€)incl.</span>
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
         <form class="needs-validation" onSubmit={this.enviarFormCompra}>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label>Nombre</label>
                <input type="text" class="form-control" name="formName" placeholder="Nombre aquí" value={this.state.formName} onChange={this.handleInputChange} required />
              </div>
              <div class="col-md-6 mb-3">
                <label >Apellidos</label>
                <input type="text" class="form-control"  name="formSurName" placeholder="Apellidos aquí" value={this.state.formSurName} onChange={this.handleInputChange} required />
              </div>
            </div>
     
            <div class="mb-3">
              <label > DNI O CIF</label>
              <input type="text" class="form-control" name="formDniCif" placeholder="12345678P" value={this.state.formDniCif} onChange={this.handleInputChange} required/>
            </div>
    
            <div class="mb-3">
              <label >Email <span class="text-muted">(envío de factura)</span></label>
              <input type="email" class="form-control" name="formEmail" placeholder="ejemplo@tucorreo.com" value={this.state.formEmail} onChange={this.handleInputChange} required/>
            </div>
    
            <div class="mb-3">
              <label>Dirección</label>
              <input type="text" class="form-control" name="formDirectionOne" placeholder="calle ejemplo,51" value={this.state.formDirectionOne} onChange={this.handleInputChange} required />
            </div>
    
            <div class="mb-3">
              <label >Dirección 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" name="formDirectionTwo" placeholder="planta 4, puerta b" value={this.state.formDirectionTwo} onChange={this.handleInputChange} />
            </div>
    
            <div class="row">
              <div class="col-md-5 mb-3">
              <label>Provincia</label>
          <select class="custom-select d-block w-100" value={this.state.formProvincia} onChange={this.changeProvincia} required>
          <option disabled="" value="">Selecciona tu provincia</option>
            <option value="Araba/Álava">Araba/Álava</option>
            <option value="Albacete">Albacete</option>
            <option value="Alicante">Alicante</option>
            <option value="Almería"> Almería</option>
            <option value="Ávila">Ávila</option>
            <option value="Badajoz">Badajoz</option>
            <option value="Barcelona">Alicante</option>
            <option value="Burgos"> Burgos</option>
            <option value="Cáceres">Cáceres</option>
            <option value="Cádiz">Cádiz</option>
            <option value="Castellón">Castellón</option>
            <option value="Ciudad Real"> Ciudad Real</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Coruña">Coruña</option>
            <option value="Cuenca">Cuenca</option>
            <option value="Girona"> Girona</option>
            <option value="Granada"> Granada</option>
            <option value="Guadalajara">Guadalajara</option>
            <option value="Gipuzkoa">Gipuzkoa</option>
            <option value="Huelva">Huelva</option>
            <option value="Huesca"> Huesca</option>
            <option value="Jaén">Jaén</option>
            <option value="León">León</option>
            <option value="Lleida">Lleida</option>
            <option value="La Rioja"> La Rioja</option>
            <option value="Lugo">Lugo</option>
            <option value="Madrid">Madrid</option>
            <option value="Málaga">Málaga</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra"> Navarra</option>
            <option value="Ourense">Ourense</option>
            <option value="Asturias">Asturias</option>
            <option value="Palencia">Palencia</option>
            <option value="Pontevedra">Pontevedra</option>
            <option value="Salamanca">Salamanca</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Segovia">Segovia</option>
            <option value="Sevilla">Sevilla</option>
            <option value="Soria"> Soria</option>
            <option value="Tarragona">Tarragona</option>
            <option value="Teruel">Teruel</option>
            <option value="Toledo">Toledo</option>
            <option value="Valencia">Valencia</option>
            <option value="Valladolid">Valladolid</option>
            <option value="Bizkaia">Bizkaia</option>
            <option value="Zamora">Zamora</option>
            <option value="Zaragoza">Zaragoza</option>
           
          </select>
              </div>
              
              <div class="col-md-4 mb-3">
              <label>Localidad/ciudad</label>
                <input type="text" class="form-control" name="formLocalidad" placeholder="Madrid" value={this.state.formLocalidad} onChange={this.handleInputChange} required/>
              </div>
              <div class="col-md-3 mb-3">
                <label>Código postal</label>
                <input type="text" class="form-control" name="formCp" placeholder="28015" value={this.state.formCp} onChange={this.handleInputChange} required/>
              </div>
            </div>
            <hr class="mb-4"></hr>
    
            <h4 class="mb-3">Método de pago</h4>
    
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required/>
                <label class="custom-control-label" >Tarjeta de crédito, débito o prepago (100% seguro) <img style={{width:"30px",marginLeft:"4px"}} src="/amex.svg"></img><img style={{width:"30px",marginLeft:"4px"}} src="/visa.svg"></img><img style={{width:"30px",marginLeft:"4px"}} src="/mastercard.svg"></img></label>
              </div>
              {/* <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                <label class="custom-control-label" for="debit">Tarjeta de débito</label>
              </div> */}
              
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label >Nombre en la tarjeta</label>
                <input type="text" class="form-control" name="formNameCard" placeholder="Nombre en la tarjeta" value={this.state.formNameCard} onChange={this.handleInputChange} required/>
                <small class="text-muted">Nombre completo visible en la tarjeta física o virtual</small>
              </div>
              <div class="col-md-6 mb-3">
                <label >Número de tarjeta</label>
                <input type="text" class="form-control" name="formCardNumber" placeholder="1234 1234 1234 1234" value={this.state.formCardNumber} onChange={this.handleInputChange} required/>
                
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label >Fecha de caducidad</label>
                <div style={{display: "flex", alignItems: "center",fontSize: "28px"}}>
                <input style={{width: "50px",margin: "0px 8px 0px 0px"}} maxlength="2" type="text" class="form-control" name="formCardMonth" placeholder="MM" value={this.state.formCardMonth} onChange={this.handleInputChange} required/>
                /
                <input style={{width: "50px",margin: "0px 0px 0px 8px"}} maxlength="2" type="text" class="form-control" name="formCardYear" placeholder="AA" value={this.state.formCardYear} onChange={this.handleInputChange} required/>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label >CVV</label>
                <input type="text" class="form-control" name="formCardCvv" placeholder="123" value={this.state.formCardCvv} onChange={this.handleInputChange} required/>
              </div>
            </div>
            
            <hr class="mb-4"></hr>
            <p>* Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y otros propósitos descritos en nuestra  <Link href="/politica-de-privacidad">
          <a> política de privacidad</a>
        </Link>.</p>
          <input
            name="formTerminos"
            type="checkbox"
            checked={this.state.formTerminos}
            onChange={this.changeCheckBox} required/>
        <label>*  He leído y estoy de acuerdo con los  
        <Link href="/terminos-y-condiciones">
          <a> términos y condiciones</a>
        </Link> de la web </label>
            <button class="btn btn-primary btn-lg btn-block" type="submit" style={{backgroundColor: "#f1c545", border: "none" }}
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
