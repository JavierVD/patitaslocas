import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './Styles/prueba.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom'
import './Styles/equipo.css';
import { Callbacks } from 'jquery';
import { Redirect } from 'react-router';

export default class Denuncia extends Component {

    constructor(props) {

        super(props);

        // Defino los estados locales 
        this.state = {
            campo: {},
            error: {},
            enviado: false,
            last:[],
            verificado: false,
            id_usuario: '',
            form: {
                folio: '',
                nombrecom: '',
                email: '',
                Dden: '',
            }
        }
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.enviarFormulario = this.enviarFormulario.bind(this);
        this.peticionId = this.peticionId.bind(this)
    }

    peticionId = (e) =>{
        console.log("charging? ._.");
        axios.get("./getID").then(response => {
            this.setState({ id_usuario: response.data });
        }).catch(error => {
            console.log(error.message);
        });
        console.log(this.state.id_usuario);
    }
    // Valido los campos del formulario 
    validarFormulario() {
        let campo = this.state.form;
        let error = {};
        let formularioValido = true;
       ;
        // Nombres y Apellidos 
        if (!campo["nombrecom"]) {
            formularioValido = false;
            error["nombrecom"] = "Ingresa tu Nombre Completo.";
        }

        // Email
        if (!campo["email"]) {
            formularioValido = false;
            error["email"] = "Por favor, ingresa tu correo.";
        }

        // Validamos si el formato del Email es correcto 
        if (typeof campo["email"] !== "undefined") {
            let posicionArroba = campo["email"].lastIndexOf('@');
            let posicionPunto = campo["email"].lastIndexOf('.');

            if (!(posicionArroba < posicionPunto && posicionArroba > 0 && campo["email"].indexOf('@@') == -1 && posicionPunto > 2 && (campo["email"].length - posicionPunto) > 2)) {
                formularioValido = false;
                error["email"] = "Por favor, ingresa un correo válido.";
            }
        }

        // Dden
        if (!campo["Dden"]) {
            formularioValido = false;
            error["Dden"] = "Por favor, ingresa un Asunto.";
        }

        // Seteo el estado de error 
        this.setState({
            error: error
        });

        return formularioValido;
    }

    // Una vez que los campos del formulario han sido llenado correctamente 
    // Mostramos un mensaje al usuario diciendo: 'Mensaje Enviado Satisfactoriamente !'
    enviarFormulario = (e) => {
        e.preventDefault();
        console.log(this.validarFormulario());
        if(this.state.verificado){
            if (this.validarFormulario()) {

                // Cambio el estado de 'enviado' a 'true'
                this.setState({ enviado: true });
                this.peticionPost();

                // Muestro el mensaje que se encuentra en la función mensajeEnviado()
                return this.mensajeEnviado();
                <Redirect to="/"/>
            }
        }else{
            alert("reCaptcha requerido.");
        }
        

        // Si la validación de los campos del formulario ha sido realizada 


    }
    peticionPost = async () => {
        console.log(Number(this.state.last));
        const packets = {
            folio: (Number(this.state.last) + 1),
            id_usuario: 1,
            nombrecom: this.state.form.nombrecom,
            email: this.state.form.email,
            Dden: this.state.form.Dden,
        };
        const headers = {
            "Content-Type": "multipart/form-data"
        };

        const urladd = "api/storedenuncia";
        await axios.post(urladd, packets).then(response => {
            console.log(response.data)
            alert("Mensaje enviado exitosamente");
        }).catch(error => {
            console.log(error.response.data)
        })
    }




    // Función para mostrar un mensaje al usuario 
    mensajeEnviado(state) {
        // la variable enviado por defecto esta en 'false' pero cuando se
        // termina de validar los datos del formulario, la variable enviado
        // cambia a 'true' 
        const enviado = this.state.enviado;
        /** console.log(enviado); **/
        // Si el valor de la variable enviado es 'true' pues mostramos el mensaje 
        if (enviado == true) {
            return {
                __html: '<div className="alert alert-success mt-3" role="alert">Mensaje Enviado Satisfactoriamente !</div>'
            };

        }
    };

    // Detectamos cuando un campo del formulario es llenado y por ende cambia de estado 
    detectarCambio = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
        console.log(this.state.id_usuario);
    }


    getlast = () => {
        axios.get("api/getlastdenuncia").then(response => {
            this.setState({ last: response.data});
        }).catch(error => {
            console.log(error.message);
        });

        console.log(this.state.last[0]);
    }
    // Cuando el componente ha sido Montado 
    componentDidMount() {
        this.peticionId();
        axios.get("api/getlastdenuncia").then(response => {
            this.setState({ last: response.data});
        }).catch(error => {
            console.log(error.message);
        });
        console.log("charging? ._.");
        axios.get("api/getID").then(response => {
            this.setState({ id_usuario: response.data });
        }).catch(error => {
            console.log(error.message);
        });
        console.log(this.state.id_usuario);
        console.log(this.state.last);
    }

    // Cuando el componente ha sido Desmontado  
    componentWillUnmount() {

    }

    recaptchaLoaded = () => {
        console.log('ok captcha');
    }

    verifyCallback=()=>{
        this.setState({
            verificado: true
        });
        console.log("awevo");
    }
    // Renderizamos el formulario 
    render() {
        const { form } = this.state;
        return (

            <div className="App">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-66">
                        <center>
                            <h1>DENUNCIA AL MALTRATO ANIMAL </h1>
                        </center>
                        <div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="nombrecom">Ingresa tu Nombre Completo</label>
                                <input type="text" className="form-control" name = "nombrecom" id="nombrecom" aria-describedby="nyaHelp" onChange={this.detectarCambio} value={form ? form.nombrecom : ''} />
                                <span style={{ color: "red" }}>{this.state.error["nombrecom"]}</span>
                                <small id="emailHelp" className="form-text text-muted">Nota: Los datos almacenados no seran publicos y la denuncia sera anonima. </small>
                            </div>


                            <div className="form-group">
                                <label className="negrita2" htmlFor="email">Correo Electronico</label>
                                <input type="text" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={this.detectarCambio} value={form ? form.email : ''} />
                                <small id="emailHelp" className="form-text text-muted">Ejemplo: correo@email.com </small>
                                <span style={{ color: "red" }}>{this.state.error["email"]}</span>
                            </div>


                            <div className="form-group">
                                <label className="negrita2" htmlFor="Dden">Motivo de Denuncia (Respondiendo a : ¿donde? ¿cuando? y ¿porque?)</label>
                                <textarea className="form-control" id="Dden" name="Dden" rows="3" onChange={this.detectarCambio} value={form ? form.Dden : ''}></textarea>
                                <span style={{ color: "red" }}>{this.state.error["Dden"]}</span>

                            </div>
                            <br />
                            <div align="center">
                                <Recaptcha
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    render="explicit"
                                    verifyCallback={this.verifyCallback}
                                    onClick={this.verifyCallback}
                                    onloadCallback={this.recaptchaLoaded}
                                />
                            </div>

                            <br />
                            <button className="btn btn-primary" onClick={ this.enviarFormulario}>ENVIAR DENUNCIA </button>
                        </div>
                        <br></br><br></br>
                        {/* Si el formulario no ha sido validado aún, no mostramos el mensaje */}
                        {/* Y cuando el formulario es validado, pues mostramos el mensaje */}
                        <div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} />

                    </div>
                </div>
                <div align="center">


                </div>
            </div>

        )

    };


}


if (document.getElementById('denuncia')) {
    ReactDOM.render(<Denuncia />, document.getElementById('denuncia'));
}