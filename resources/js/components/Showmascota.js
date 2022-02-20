import React, { Component } from 'react';
import './Styles/App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ReactDOM from 'react-dom'

const url = "api/getMascota";


export default class Showmascota extends Component{
    state = {
        data: [],
        modalInsertar: false,
        modalEliminar: false,
        form: {
            id: '',
            nombre: '',
            id_especie: '',
            id_raza: '',
            peso: '',
            estatura: ''
        }
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost2 = async () => {
        this.handleUpdate();
    }
    peticionPost = async () => {
        delete this.state.form.id;
        const packets = {
            id:  '3',
            nombre: this.state.form.nombre,
            id_especie: this.state.form.id_especie,
            id_raza: this.state.form.id_raza,
            peso: this.state.form.peso,
            estatura: this.state.form.estatura
        };
        const urladd = "api/store";
        await axios.post(urladd, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
            console.log(response.data)
        }).catch(error => {
            console.log(error.response.data)
        })
    }

    peticionPut = () => {
        const urlup = "api/updateMascota/";
        const packets = {
            id_mascota:  this.state.form.id,
            nombre: this.state.form.nombre,
            id_especie: this.state.form.id_especie,
            id_raza: this.state.form.id_raza,
            peso: this.state.form.peso,
            estatura: this.state.form.estatura
        };
          let uri = urlup + this.state.form.id;
          axios.patch(uri, packets).then((response) => {
                //this.props.history.push('/display-item');
          });
    }
    handleUpdate = async (e) => {
        e.preventDefault();
        let fdata = new FormData()
        fdata.append('id_mascota', this.state.form.id)
        fdata.append('nombre', this.state.form.nombre)
        fdata.append('id_especie', this.state.form.id_especie)
        fdata.append('id_raza', this.state.form.id_raza)
        fdata.append('peso', this.state.form.peso)
        fdata.append('estatura', this.state.form.estatura)
        await axios({
            method: "post",
            url: "api/updateMascota",
            data: fdata,
            config: { headers: { "Content-Type": "multipart/form-data" } },
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                console.log(response.data);
            });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let fdata = new FormData()
        fdata.append('id_mascota', this.state.data.length + 2)
        fdata.append('nombre', data.nombre)
        fdata.append('id_especie', data.id_especie)
        fdata.append('id_raza', data.id_raza)
        fdata.append('peso', data.peso)
        fdata.append('estatura', data.estatura)
        await axios({
            method: 'post',
            url: 'api/store',
            data: fdata,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(response => {
                this.peticionGet();
            })
            .catch(error => {
                this.peticionGet();
                console.log(error.response.data)
            })
    }
    peticionDelete = () => {
        const urldel = "/patitasfelices/public/mascotas/deleteMascota/";
        alert(this.state.form.nombre);
        axios.delete(urldel+ this.state.form.id).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

    seleccionarMascota = (mascota) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: mascota.id_mascota,
                nombre: mascota.nombre,
                id_especie: mascota.id_especie,
                id_raza: mascota.id_raza,
                peso: mascota.peso,
                estatura: mascota.estatura
            }
        })
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form.id);
    }

    componentDidMount() {
        this.peticionGet();
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }
      peopleListFromApi = () => {
        axios.get(url).then((response) => {
          const mascotaList = response.data.results || []
          this.setState({ mascotaList: mascotaList })
        })
      }
      onchange = (event) => {
        this.setState({ search: event.target.value })
      }
      
      filterFunction = (mascota) => {
        return mascota.id_raza.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1
      }
    render(){
        const { form } = this.state;
        return (

            <div className="App">
            <input type="text" placeholder="Buscar por especie" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
            {items}
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Peso</th>
                            <th>Estatura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(mascota => {
                            return (
                                <tr>
                                    <td>{mascota.nombre}</td>
                                    <td>{mascota.id_especie}</td>
                                    <td>{mascota.id_raza}</td>
                                    <td>{mascota.peso}</td>
                                    <td>{mascota.estatura}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarMascota(mascota); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{ display: 'block' }}>
                        <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">ID de la mascota</label>
                            <input className="form-control" type="text" name="id_mascota" id="id_mascota"  onChange={this.handleChange} value={form ? form.id : this.state.data.length + 2} />
                            <br />
                            <label htmlFor="nombre">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                            <br />
                            <label htmlFor="especie">Especie</label>
                            <input className="form-control" type="text" name="id_especie" id="id_especie" onChange={this.handleChange} value={form ? form.id_especie : ''} />
                            <br />
                            <label htmlFor="raza">Raza</label>
                            <input className="form-control" type="text" name="id_raza" id="id_raza" onChange={this.handleChange} value={form ? form.id_raza : ''} />
                            <br />
                            <label htmlFor="peso">Peso </label>
                            <input className="form-control" type="text" name="peso" id="peso" onChange={this.handleChange} value={form ? form.peso : ''} />
                            <br />
                            <label htmlFor="estatura">Estatura </label>
                            <input className="form-control" type="text" name="estatura" id="estatura" onChange={this.handleChange} value={form ? form.estatura : ''} />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal == 'insertar' ?
                            <button type = "submit" className="btn btn-success" onClick={() => this.peticionPost()}>
                                Insertar
                  </button> : <button type = "submit" className="btn btn-primary" onClick={() => this.handleUpdate()}>
                                Actualizar
                  </button>
                        }
                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        {form && form.nombre} será borrado de la base de datos
            </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                        <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById('showmascota')) {
    ReactDOM.render(<Showmascota />, document.getElementById('showmascota'));
}
