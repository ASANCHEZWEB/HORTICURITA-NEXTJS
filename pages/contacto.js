import React from "react";
import Head from "next/head";
import axios from "axios";
import Recaptcha from "react-google-invisible-recaptcha";

class Contacto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      tel: "",
      description: "",
      checkBox: "",
      formPage: "contacto",
      enviado: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onResolved = this.onResolved.bind(this);
  }
  handleChange(event) {
    this.setState({ description: event.target.value });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "checkBox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.recaptcha.execute();
    event.preventDefault();
  }
  onResolved() {
    let tokenCaptcha = this.recaptcha.getResponse();
    let data = {
      token: tokenCaptcha,
    };

    axios
      .post("https://gestorhorticurita.herokuapp.com/api/send-recaptcha", data)
      .then((res) => {
        if (res.data.success === true && res.data.score >= 0.5) {
          axios
            .post(
              "https://gestorhorticurita.herokuapp.com/api/formContacts/",
              this.state
            )
            .then((response) => {
              this.setState({ enviado: response.data.enviado });
            })
            .catch((response) => {
              this.setState({ enviado: false });
            });
          this.setState({
            enviado: true,
            name: "",
            email: "",
            tel: "",
            description: "",
            checkBox: "",
          });
        }
      });
  }
  render() {
    return (
      <>
        <Head>
          <title>Contacto | Horticurita |</title>
          <meta
            name="description"
            content="Escribenos o llámanos para lo que necesites , ¡estaremos encantados de ayudarte! 😉"
          ></meta>
        </Head>
        <div className="oficinaFormContainer">
          <div className="infoOficina">
            <h1>Contacto</h1>
            <p>
              Escríbenos o llámanos para lo que necesites , ¡estaremos
              encantados de ayudarte! 😉
            </p>
          </div>

          <div className="formDiv">
            <form onSubmit={this.handleSubmit}>
              <h2>Formulario de contacto</h2>
              <hr></hr>
              <div>
                <label>Nombre:</label>
                <input
                  name="name"
                  type="text"
                  placeholder=" Nombre"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  name="email"
                  type="text"
                  placeholder=" Ejemplo@empresa.com"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Teléfono de contacto:</label>
                <input
                  name="tel"
                  type="text"
                  placeholder=" Ej. 612345678"
                  value={this.state.tel}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Descripción:</label>
                <textarea
                  className="textAreaOfi"
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder="¿Que necesitas?"
                  required
                />
              </div>
              <div>
                <label className="rgpdCheckbox">
                  <input
                    name="checkBox"
                    type="checkbox"
                    checked={this.state.checkBox}
                    onChange={this.handleInputChange}
                    required
                  />{" "}
                  He leído y acepto los terminos y condiciones de esta web.
                </label>
              </div>

              <div>
                <input className="buttonOfiForm" type="submit" value="ENVIAR" />
              </div>
              {this.state.enviado == true ? (
                <span
                  style={{
                    margin: "0 auto",
                    marginBottom: "40px",
                    textAlign: "center",
                  }}
                >
                  <img src="/icono-stock-disponible.png"></img>Mensaje enviado
                  correctamente
                </span>
              ) : (
                ""
              )}
              <Recaptcha
                ref={(ref) => (this.recaptcha = ref)}
                sitekey="6LcHZ7oZAAAAAJe250_R2rtP_h7CO8SZRvwna1JU"
                onResolved={this.onResolved}
              />
            </form>
          </div>
          <h3>O utiliza un botón :</h3>
          <div className="buttonsContactOfi">
            <a href="tel:+34612345678">
              <img
                src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594757149/iconosHorticurita/icono_telefono_xhpkyd.png"
                alt="icono teléfono"
              />
              Teléfono
            </a>
            <a href="https://api.whatsapp.com/send?phone=34612345678">
              <img
                src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594578040/iconosHorticurita/whatsapp-64_wdhynx.png"
                alt="icono whatsapp"
              />
              Whatsapp
            </a>
            <button className="buttonChatLinea">
              <img
                src="https://res.cloudinary.com/dfsni6m2x/image/upload/c_scale,h_33,q_10,w_33/v1594578971/iconosHorticurita/icono-charla_znjdc4.png"
                alt="icono chat en línea"
              />{" "}
              Chat en línea
            </button>
          </div>
        </div>
        <style jsx>{`
          .infoOficina {
            padding: 20px;
            font-family: montserrat;
          }

          .infoOficina > h1 {
            text-align: center;
            color: green;
          }

          .infoOficina > p {
            max-width: 874px;
            text-align: center;
            margin: auto;
          }

          .oficinaFormContainer > .formDiv {
            padding: 20px;
            margin: auto;
            max-width: 874px;
            padding-top: 30px;
          }

          .oficinaFormContainer > h3 {
            text-align: center;
            font-family: Montserrat;
          }

          .formDiv > form > h2 {
            text-align: center;
            font-size: 18px;
            font-family: Montserrat;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .formDiv > form {
            margin: auto;
            max-width: 454px;
            background-color: #2ecc71;
            display: flex;
            font-family: Montserrat;
            color: white;
            flex-wrap: wrap;
            box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.75);
          }

          .formDiv > form > hr {
            width: 60%;
            margin: auto;
            border: none;
            height: 1px;
            background-color: white;
          }

          .formDiv > form > div {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 15px 40px 15px 40px;
          }

          .formDiv > form > div > input {
            border: none;
            height: 30px;
            margin-top: 10px;
          }

          .buttonOfiForm {
            width: 80px;
            margin: auto;
            color: #2ecc71;
            background-color: white;
            border-radius: 6px;
          }

          .rgpdCheckbox {
            font-size: 12px;
          }

          .buttonsContactOfi {
            display: flex;
            justify-content: center;
            max-width: 350px;
            padding-top: 11px;
            justify-content: space-evenly;
            margin: 0 auto;
            padding-bottom: 30px;
          }

          .buttonChatLinea {
            border: none;
            background: none;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 0px;
            font-size: 14px;
            outline: none;
          }

          .buttonsContactOfi > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: black;
          }
          .textAreaOfi {
            border: none;
            margin-top: 10px;
          }
        `}</style>
      </>
    );
  }
}

export default Contacto;
