import React from "react"
import Head from 'next/head'
import { jsPDF } from "jspdf";
import axios from 'axios';


class MyFactura extends React.Component{
    constructor(props){
        super(props)
       
        this.state = {
            urlFactura:"",
            infoFactura:""
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
    doc.text(`Piso/planta/puerta: ${this.state.infoFactura.formDirectionTwo}`, 115, 110);
    doc.text("Tfno.: 4234342343", 115, 120);
    doc.text("NIF/CIF: 43434545P", 115, 130);

    doc.setDrawColor(150, 150, 150);
    doc.line(20, 140, 185, 140);

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Número: 87yug87huyt87g78", 20, 150);
    doc.text("Fecha: 06/09/2020", 20, 155);
    doc.text("Condiciones: 5 días", 20, 160);
    doc.text("Debido: 11/09/2020", 20, 165);


    doc.setDrawColor(0);
    doc.setFillColor(46, 204, 113);
    doc.rect(18, 180, 170, 10, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.text("Descripción", 25, 186);
    
    doc.setTextColor(255, 255, 255);
    doc.text("Precio", 110, 186);
    
    doc.setTextColor(255, 255, 255);
    doc.text("Cantidad", 128, 186);

    doc.setTextColor(255, 255, 255);
    doc.text("IVA (%)", 150, 186);
    
    doc.setTextColor(255, 255, 255);
    doc.text("Importe", 170, 186);
    
    //lineas tabla
    doc.setDrawColor(46, 204, 113);
    doc.line(18, 200, 188, 200);
    
    doc.setDrawColor(46, 204, 113);
    doc.line(18, 210, 188, 210);
    
    doc.setDrawColor(46, 204, 113);
    doc.line(18, 220, 188, 220);
    
    doc.setDrawColor(46, 204, 113);
    doc.line(18, 230, 188, 230);
    
    doc.setDrawColor(46, 204, 113);
    doc.line(18, 240, 188, 240);
  //nueva pagina
  
  doc.setTextColor(150);
  doc.addPage("a4", "0");
  doc.text("Do you like that?", 20, 20);
  
    //GUARDAR PDF

  doc.save(`${this.state. urlFactura}.pdf`);



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