import React, { Component } from 'react';
import './Styles/App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ReactDOM from 'react-dom'
import { data } from 'jquery';

const url = "api/getDenuncia";

export default class Verdenuncia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            searches: [],
            data: [],
            razas: [],
            especies: [],
            modalEliminar: false,
            upload_file: '',
            id: '',
            nombre: '',
            id_especie: '',
            id_raza: '',
            peso: '',
            estatura: '',
            estado: '',
            form: {
                id: '',
                folio: '',
                nombre: '',
                id_especie: '',
                id_raza: '',
                peso: '',
                estatura: '',
                foto: '',
            }
        }

    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        });

    }


    componentDidMount() {
        this.peticionGet();
    }

    render() {
        const { form } = this.state;
        return (
            <div className="App">
                <br /><br /><br />
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Motivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(mascota => {
                            return (
                                <tr>
                                    <td>{mascota.nombrecom}</td>
                                    <td>{mascota.email}</td>
                                    <td>{mascota.Dden}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
if (document.getElementById('verdenuncia')) {
    ReactDOM.render(<Verdenuncia />, document.getElementById('verdenuncia'));
}



