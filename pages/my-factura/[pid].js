import React from "react"
import Head from 'next/head'
import { jsPDF } from "jspdf";
import axios from 'axios';


class MyFactura extends React.Component{
    constructor(props){
        super(props)
       
        this.state = {
            urlFactura:"",
            infoFactura:"",
            listadoIVAS : {
              frutas:4
            }
        }
        
       this.getFacturaInfo=this.getFacturaInfo.bind(this)

    }


jsPdfGenerator = () => {

    let doc = new jsPDF();
    doc.setDrawColor(0);
    doc.setFillColor(46, 204, 113);
    doc.rect(0, 0, 210, 5, "F");
    doc.setFontSize(30);
    doc.setTextColor(100);
    doc.text("Factura", 20, 20);


    doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1596472684/imagenCabecera.png", "PNG", 125, 30, 0, 20);

    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text("Laura Sánchez Plaza", 20, 80);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("ayuda@horticurita.es", 20, 90);
    doc.text("Calle caballeros,10,13120,Porzuna", 20, 100);
    doc.text("Tfno.: (+34) 612345678", 20, 110);
    doc.text("NIF/CIF: 12345678E", 20, 120);


    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text(`${this.state.infoFactura.formName} ${this.state.infoFactura.formSurName}`, 115, 80);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`${this.state.infoFactura.formEmail}`, 115, 90);
    doc.text(`${this.state.infoFactura.formDirectionOne},${this.state.infoFactura.formCp},${this.state.infoFactura.formProvincia}`, 115, 100);
    doc.text(`Piso/puerta: ${this.state.infoFactura.formDirectionTwo}`, 115, 110);
    doc.text(`Tfno.: ${this.state.infoFactura.formTel}`, 115, 120);
    doc.text("NIF/CIF: 43434545P", 115, 130);

    doc.setDrawColor(150, 150, 150);
    doc.line(20, 140, 185, 140);

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`Número: ${this.state.urlFactura}`, 20, 150);
    
    
    doc.text(`Fecha: ${this.state.infoFactura.createdAt.slice(0,10)}; Hora: ${this.state.infoFactura.createdAt.slice(11,19)}`, 20, 155);
    doc.text("Condiciones: 5 días", 20, 160);

    let date = new Date(this.state.infoFactura.createdAt.slice(0,10));
    let numberOfDaysToAdd = 5;
    date.setDate(date.getDate() + numberOfDaysToAdd);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let y = date.getFullYear();
    let dateExpire = y + '-'+ mm + '-'+ dd;
    doc.text(`Debido: ${dateExpire}`, 20, 165);



    // TABLA PRIMERA PÁGINA
    //rectangulo verde tabla
    doc.setDrawColor(0);
    doc.setFillColor(46, 204, 113);
    doc.rect(18, 180, 170, 10, "F");
    
    //textos de tabla
    doc.setTextColor(255, 255, 255);
    doc.text("Descripción", 25, 186);
    
    doc.setTextColor(255, 255, 255);
    doc.text("Precio (    )", 100, 186);
    doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1599850771/icono-euro_ysmnxb.png", "PNG", 112, 183, 0, 4);

    doc.setTextColor(255, 255, 255);
    doc.text("Cantidad", 128, 186);

    doc.setTextColor(255, 255, 255);
    doc.text("IVA (%)", 150, 186);
    
    doc.setTextColor(255, 255, 255);
    doc.text("Importe", 170, 186);
    
    //lineas tabla
    let lineasAlturaPrimera=200;
 for(i=0;i<5;i++){
  doc.setDrawColor(46, 204, 113);
  doc.line(18, lineasAlturaPrimera, 188, lineasAlturaPrimera);
  lineasAlturaPrimera+=10
 }
    
  //productos y paginado

  //PRESENTACION UNICAMENTE DE LOS 5 PRIMEROS PRODUCTOS
  let alturaInicialName=196;
    for(i=0;i<5;i++){
      if(this.state.infoFactura.cartItems[i]){
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`${this.state.infoFactura.cartItems[i].name}`, 20, alturaInicialName);
    if(this.state.infoFactura.cartItems[i].type=="kilogramos"){
      doc.text(this.state.infoFactura.cartItems[i].price + '/Kg', 100, alturaInicialName);
      doc.text(this.state.infoFactura.cartItems[i].added/2+' Kgs', 130, alturaInicialName);
      doc.text(`${this.state.listadoIVAS[this.state.infoFactura.cartItems[i].category]} %`, 154, alturaInicialName);
      doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1600008080/icono_euro_negro_jkmtrf.png", "PNG", 170, alturaInicialName-3.5, 0, 5);
      doc.text(`${((this.state.infoFactura.cartItems[i].price*this.state.infoFactura.cartItems[i].added)/2).toFixed(2)}`, 174, alturaInicialName);
      
    }else{
      doc.text(this.state.infoFactura.cartItems[i].price  + '/Ud', 100, alturaInicialName);
      doc.text(this.state.infoFactura.cartItems[i].added+' Uds', 130, alturaInicialName);
      doc.text(`${this.state.listadoIVAS[this.state.infoFactura.cartItems[i].category]} %`, 154, alturaInicialName);
      doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1600008080/icono_euro_negro_jkmtrf.png", "PNG", 170, alturaInicialName-3.5, 0, 5);
      doc.text(`${(this.state.infoFactura.cartItems[i].price*this.state.infoFactura.cartItems[i].added).toFixed(2)}`, 174, alturaInicialName);
   
    }
    

    alturaInicialName+=10;
  }
  }
  
  
//PRESENTACION por encima de los  5 productos
if(this.state.infoFactura.cartItems.length>5 ){
  //generate new page
  doc.addPage("a4", "0");
  //rectangulo verde tabla
  doc.setDrawColor(0);
  doc.setFillColor(46, 204, 113);
  doc.rect(18, 10, 170, 10, "F");
  
  //textos de tabla
  doc.setTextColor(255, 255, 255);
  doc.text("Descripción", 25, 16);
  
  doc.setTextColor(255, 255, 255);
  doc.text("Precio (    )", 100, 16);
  doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1599850771/icono-euro_ysmnxb.png", "PNG", 112, 13, 0, 4);

  doc.setTextColor(255, 255, 255);
  doc.text("Cantidad", 128, 16);

  doc.setTextColor(255, 255, 255);
  doc.text("IVA (%)", 150, 16);
  
  doc.setTextColor(255, 255, 255);
  doc.text("Importe", 170, 16);
  
 //lineas tabla
 let lineasAltura=30;
 for(i=0;i<22;i++){
  doc.setDrawColor(46, 204, 113);
  doc.line(18, lineasAltura, 188, lineasAltura);
  lineasAltura+=10
 }

 

  //bucle de pintado
   alturaInicialName=27;

  for(i=5;i<27;i++){
    
if(this.state.infoFactura.cartItems[i]){
doc.setFontSize(10);
      doc.setTextColor(150);
      doc.text(`${this.state.infoFactura.cartItems[i].name}`, 20, alturaInicialName);
      if(this.state.infoFactura.cartItems[i].type=="kilogramos"){
        doc.text(this.state.infoFactura.cartItems[i].price + '/Kg', 100, alturaInicialName);
        doc.text(this.state.infoFactura.cartItems[i].added/2+' Kgs', 130, alturaInicialName);
        doc.text(`${this.state.listadoIVAS[this.state.infoFactura.cartItems[i].category]} %`, 154, alturaInicialName);
        doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1600008080/icono_euro_negro_jkmtrf.png", "PNG", 170, alturaInicialName-3.5, 0, 5);
        doc.text(`${((this.state.infoFactura.cartItems[i].price*this.state.infoFactura.cartItems[i].added)/2).toFixed(2)}`, 174, alturaInicialName);
        
      }else{
        doc.text(this.state.infoFactura.cartItems[i].price  + '/Ud', 100, alturaInicialName);
        doc.text(this.state.infoFactura.cartItems[i].added+' Uds', 130, alturaInicialName);
        doc.text(`${this.state.listadoIVAS[this.state.infoFactura.cartItems[i].category]} %`, 154, alturaInicialName);
        doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1600008080/icono_euro_negro_jkmtrf.png", "PNG", 170, alturaInicialName-3.5, 0, 5);
        doc.text(`${(this.state.infoFactura.cartItems[i].price*this.state.infoFactura.cartItems[i].added).toFixed(2)}`, 174, alturaInicialName);
     
      }
      
    
      alturaInicialName+=10;
  

}
    
      
      

    }
  

}
  
//PRESENTACION por encima de los  5 productos
if(this.state.infoFactura.cartItems.length>27 ){
  //generate new page
  doc.addPage("a4", "0");
  //rectangulo verde tabla
  doc.setDrawColor(0);
  doc.setFillColor(46, 204, 113);
  doc.rect(18, 10, 170, 10, "F");
  
  //textos de tabla
  doc.setTextColor(255, 255, 255);
  doc.text("Descripción", 25, 16);
  
  doc.setTextColor(255, 255, 255);
  doc.text("Precio (    )", 100, 16);
  doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1599850771/icono-euro_ysmnxb.png", "PNG", 112, 13, 0, 4);

  doc.setTextColor(255, 255, 255);
  doc.text("Cantidad", 128, 16);

  doc.setTextColor(255, 255, 255);
  doc.text("IVA (%)", 150, 16);
  
  doc.setTextColor(255, 255, 255);
  doc.text("Importe", 170, 16);
  
 //lineas tabla
 let lineasAltura=30;
 for(i=0;i<22;i++){
  doc.setDrawColor(46, 204, 113);
  doc.line(18, lineasAltura, 188, lineasAltura);
  lineasAltura+=10
 }

 

  //bucle de pintado
   alturaInicialName=27;

  for(i=27;i<49;i++){
    
if(this.state.infoFactura.cartItems[i]){
doc.setFontSize(10);
      doc.setTextColor(150);
      doc.text(`${this.state.infoFactura.cartItems[i].name}`, 20, alturaInicialName);
      if(this.state.infoFactura.cartItems[i].type=="kilogramos"){
        doc.text(this.state.infoFactura.cartItems[i].price + '/Kg', 100, alturaInicialName);
        doc.text(this.state.infoFactura.cartItems[i].added/2+' Kgs', 130, alturaInicialName);
        doc.text(`${this.state.listadoIVAS[this.state.infoFactura.cartItems[i].category]} %`, 154, alturaInicialName);
        doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1600008080/icono_euro_negro_jkmtrf.png", "PNG", 170, alturaInicialName-3.5, 0, 5);
        doc.text(`${((this.state.infoFactura.cartItems[i].price*this.state.infoFactura.cartItems[i].added)/2).toFixed(2)}`, 174, alturaInicialName);
        
      }else{
        doc.text(this.state.infoFactura.cartItems[i].price  + '/Ud', 100, alturaInicialName);
        doc.text(this.state.infoFactura.cartItems[i].added+' Uds', 130, alturaInicialName);
        doc.text(`${this.state.listadoIVAS[this.state.infoFactura.cartItems[i].category]} %`, 154, alturaInicialName);
        doc.addImage("https://res.cloudinary.com/dfsni6m2x/image/upload/v1600008080/icono_euro_negro_jkmtrf.png", "PNG", 170, alturaInicialName-3.5, 0, 5);
        doc.text(`${(this.state.infoFactura.cartItems[i].price*this.state.infoFactura.cartItems[i].added).toFixed(2)}`, 174, alturaInicialName);
     
      }
      
    
      alturaInicialName+=10;
  

}
    
      
      

    }
  

}


  

  //CALCULO DEL TOTAL AL FINAL DE LA  ULTIMA PÁGINA
  doc.setTextColor(0);


  let newArrayBruto= Number(this.state.infoFactura.cartItems.map(element=>{
    if(element.type!=="kilogramos"){
      return element.price*element.added;
    }else{
      return (element.price*element.added)/2
    }
    
  }).reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2))



  doc.text(`BRUTO:   ${newArrayBruto} euros`, 120, 260);
  

let totalFactura = Number((newArrayBruto+this.state.infoFactura.impuesto).toFixed(2));


  doc.text(`IMPUESTOS(IVA):   ${this.state.infoFactura.impuesto} euros`, 120, 265);
  if(this.state.infoFactura.cuponEncontrado=="true"){
    let calcularDescuento=Number((totalFactura*(this.state.infoFactura.descuento/100)).toFixed(2));
    totalFactura-=calcularDescuento;
    doc.text(`DESCUENTOS(${this.state.infoFactura.descuento}%): -${calcularDescuento} euros`, 120, 270);
  }else{
    doc.text(`DESCUENTO: 0 euros`, 120, 270);
  }
  

  doc.text(`GASTOS DE ENVÍO: ${this.state.infoFactura.gastosEnvio} euros`, 120, 275);
  totalFactura+=this.state.infoFactura.gastosEnvio;
  doc.line(120, 280, 180, 280);
  doc.text(`TOTAL FACTURA: ${totalFactura.toFixed(2)} euros`, 120, 285);
    //GUARDAR PDF
    
 doc.save(`${this.state.urlFactura}.pdf`);



}

getFacturaInfo(){
    axios.post('https://gestorhorticurita.herokuapp.com/api/getFacturaInfo', {
        _id: this.state.urlFactura
      })
      .then(response=> {
          console.log(response.data)
        this.setState({infoFactura:response.data})
      })
      .catch(error=> {
        console.log(error);
      });
    
}


componentDidMount(){
        document.querySelector('nav').style.display ="none";
        document.querySelector('footer').style.display ="none";
        this.setState({urlFactura:(window.location.pathname).slice(12)}, () => { 
            this.getFacturaInfo()
            
        });
        
}



    render(){
        return (
        <>
        <Head>
        <meta name="robots" content="noindex" />
        </Head>

        <button onClick={this.jsPdfGenerator}>descargar</button>
            </>)
        
        
    }
}

export default MyFactura