import React, { Component } from 'react';
import './Styles/App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ReactDOM from 'react-dom'
import { data } from 'jquery';

const url = "api/getAll";
const url2 = "api/getRazas";

export default class Gestion extends Component {
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

        axios.get(url2).then(response => {
            this.setState({ razas: response.data });
            console.log(this.state.razas);
        }).catch(error => {
            console.log(error.message);
        });

        axios.get("api/getEspecies").then(response => {
            this.setState({ especies: response.data });
            console.log(this.state.especies);
        }).catch(error => {
            console.log(error.message);
        });
    }

    peticionPut = () => {
        const urlup = "api/aprobar";
        const packets = {
            folio: this.state.form.folio,
            estado: this.state.estado,
            id_mascota: this.state.form.id
        };
        axios.post(urlup, packets).then((response) => {
            //this.props.history.push('/display-item');
        });
        this.peticionGet();
    }

    seleccionarMascota = (mascota) => {
        console.log(this.state.modalEliminar);
        if (this.state.modalEliminar) {
            this.setState({
                modalEliminar: false,
                estado: 'Rechazada',
                form: {
                    id: mascota.id_mascota,
                    folio: mascota.id_adopcion
                }
            });
        } else {
            this.setState({
                estado: 'Ok',
                modalEliminar: false,
                form: {
                    id: mascota.id_mascota,
                    folio: mascota.id_adopcion
                }
            });
        }
        this.peticionPut();
        console.log(this.state.estado + " " + this.state.form.folio);
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
                            <th>Mascota</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Adoptante</th>
                            <th>Fecha</th>
                            <th>Fotografía</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(mascota => {
                            return (
                                <tr>
                                    <td>{mascota.nombre}</td>
                                    <td>{mascota.descripcionespecie}</td>
                                    <td>{mascota.descripcionraza}</td>
                                    <td>{mascota.adoptante}</td>
                                    <td>{mascota.fecha}</td>
                                    <td><img alt="" style={{ width: '20%', height: 'auto' }} src={"./images/" + mascota.foto} /></td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarMascota(mascota); }}><FontAwesomeIcon icon={faCheck} /></button>
                                        {"   "}
                                        <button className="btn btn-danger" onClick={() => { this.seleccionarMascota(mascota); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
if (document.getElementById('gestion')) {
    ReactDOM.render(<Gestion />, document.getElementById('gestion'));
}



