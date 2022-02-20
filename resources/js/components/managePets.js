import React, { Component } from 'react';
import './Styles/App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ReactDOM from 'react-dom'
import { data } from 'jquery';

const url = "api/getMascota";
const url2 = "api/getRazas";

export default class ManagePets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            searches: [],
            data: [],
            razas: [],
            especies: [],
            modalInsertar: false,
            modalEliminar: false,
            upload_file: '',
            id: '',
            nombre: '',
            id_especie: '',
            id_raza: '',
            peso: '', 
            estatura: '',
            form: {
                id: '',
                nombre: '',
                id_especie: '',
                id_raza: '',
                peso: '', 
                estatura: '',
                foto: '',
            }
      }
      this.peticionGet = this.peticionGet.bind(this)
      this.getRazas = this.getRazas.bind(this)
      this.peticionPost = this.peticionPost.bind(this)
      this.onChange = this.onChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    }

    createImage(file){
        let reader = new FileReader();
        this.state.id = this.state.form.id;
        this.state.nombre=this.state.form.nombre;
        this.state.id_especie=this.state.form.id_especie;
        this.state.id_raza=this.state.form.id_raza;
        this.state.peso=this.state.form.peso;
        this.state.estatura=this.state.form.estatura;
        reader.onload = (e) => {
          this.setState({            
            form:{foto: e.target.result, 
                [e.target.name]: e.target.value}
          })
        };   
        reader.readAsDataURL(file);
    }
    
    getRazas = () =>{
        console.log(this.state.form.id_especie);
        const pac ={
            id_especie: this.state.form.id_especie
        }
        axios.post(url2,pac).then(response => {
            this.setState({ razas: response.data});
            console.log(this.state.razas);
        }).catch(error => {
            console.log(error.message);
        });
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data});
        }).catch(error => {
            console.log(error.message);
        });    
        const ca ={
            id_especie: 1
        }
        axios.post(url2,ca).then(response => {
            this.setState({ razas: response.data});
            console.log(this.state.razas);
        }).catch(error => {
            console.log(error.message);
        });
        console.log(this.state.razas);

        axios.get("api/getEspecies").then(response => {
            this.setState({ especies: response.data});
            console.log(this.state.especies);
        }).catch(error => {
            console.log(error.message);
        });
    }


    peticionPost = async () => {
        delete this.state.form.id;
        const packets = {
            id_mascota: (this.state.id),
            nombre: this.state.nombre,
            id_especie: this.state.id_especie,
            id_raza: this.state.id_raza,
            peso: this.state.peso,
            estatura: this.state.estatura,
            foto: this.state.form.foto
        };
        const headers = {
            "Content-Type":"multipart/form-data"
        };
        const urladd = "api/store";
        await axios.post(urladd, packets).then(response => {
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
            id_mascota: this.state.id_mascota,
            nombre: this.state.nombre,
            id_especie: this.state.id_especie,
            id_raza: this.state.id_raza,
            peso: this.state.peso,
            estatura: this.state.estatura
        };
        let uri = urlup + this.state.form.nombre;
        axios.patch(uri, packets).then((response) => {
            //this.props.history.push('/display-item');
        });
    }

    handleUpdate = async (e) => {
        e.preventDefault();
        let fdata = new FormData()
        fdata.append('id_mascota', this.state.id)
        fdata.append('nombre', this.state.nombre)
        fdata.append('id_especie', this.state.id_especie)
        fdata.append('id_raza', this.state.id_raza)
        fdata.append('peso', this.state.peso)
        fdata.append('estatura', this.state.estatura)
        fdata.append('foto', this.state.form.foto)
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
        console.log("Valor del estado: " + this.state.foto)
    
        let fdata = new FormData()
        fdata.append('id_mascota', this.state.id)
        fdata.append('nombre', this.state.form.nombre)
        fdata.append('id_especie', this.state.form.id_especie)
        fdata.append('id_raza', this.state.form.id_raza)
        fdata.append('peso', this.state.form.peso)
        fdata.append('estatura', this.state.form.estatura)
        fdata.append('foto', this.state.foto);
        
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
        const urldel = "api/deleteMascota/";
        axios.delete(urldel + this.state.form.id).then(response => {
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
                estatura: mascota.estatura,
                foto: mascota.foto
            }
        });
        console.log(mascota.foto+" "+mascota.nombre);
    }

    handleOnFileChange = async e => {
        e.persist();
        if (e.target.files.length) {
            this.state.foto = e.target.files[0];
        }
        console.log(this.state.foto);
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });

        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }

    filtrarElementor = () => {
        var search = this.state.form.filter(item => {
            if (this.state.busqueda == "") {
                searches = data;
            } else
                if (item.id_especie.includes(this.state.busqueda)) {
                    return item;
                }
        });
        this.setState({ searches: search });
    }

    render() {
        const { form } = this.state;
        return (

            <div className="App">
                
                <br /><br /><br />
                <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Añadir Mascota</button>
                <br /><br />
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Peso</th>
                            <th>Estatura</th>
                            <th>Fotografía</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(mascota => {
                            return (
                                <tr>
                                    <td>{mascota.nombre}</td>
                                    <td>{mascota.especie.descripcion}</td>
                                    <td>{mascota.raza.descripcion}</td>
                                    <td>{mascota.peso} gr.</td>
                                    <td>{mascota.estatura} cm.</td>
                                    <td><img alt="" style = {{ width:'20%', height: 'auto'}}src={"./images/"+ mascota.foto}/></td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { this.seleccionarMascota(mascota); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                        {"   "}
                                        <button className="btn btn-danger" onClick={() => { this.seleccionarMascota(mascota); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
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
                    <ModalBody className='home-card-view flex-center'
           style={{ backgroundImage: `url(${"./images/michifas.jpg"})`,
           backgroundSize: 'cover' }} >
                        <div className="form-group" >
                            <label htmlFor="id">ID de la mascota</label>
                            <input className="form-control" type="text" name="id_mascota" id="id_mascota"  onChange={this.handleChange} value={form ? form.id : ''} />
                            <br />
                            <label htmlFor="nombre">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                            <br />
                            <label htmlFor="especie">Especie</label>
                            <select className="form-control" name="id_especie" id="id_especie" onChange={this.handleChange} onClick ={this.getRazas} value={form ? form.id_especie : ''} >
                                {this.state.especies.map((e, key) => {
                                    return <option key={key} value={e.id_especie}>{e.descripcion}</option>;
                                })}
                            </select>
                            <br />
                            <label htmlFor="raza">Raza</label>
                            <select className="form-control" name="id_raza" options = {this.state.razas} id="id_raza" onChange={this.handleChange} value={form ? form.id_raza : ''}>
                                {this.state.razas.map((e, key) => {
                                    return <option key={key} value={e.id_raza}>{e.descripcion}</option>;
                                })}
                            </select>
                            <br />
                            <label htmlFor="peso">Peso</label>
                            <input className="form-control" type="text" name="peso" id="peso" onChange={this.handleChange} value={form ? form.peso : ''} />
                            <br />
                            <label htmlFor="estatura">Estatura</label>
                            <input className="form-control" type="text" name="estatura" id="estatura" onChange={this.handleChange} value={form ? form.estatura : ''} />
                            <br />
                            <label htmlFor="foto">Foto</label>
                            <input className="form-control" type="file" name="fotos" id="fotos" onChange={this.onChange }  />
                            <br />
                            <label htmlFor="imagen">Imagen</label>
                            <img name="imagen" width="30%" id="imagen" src={"./images/"+(form ? form.foto : 'shrek.png')} />
                        </div>
                    </ModalBody>

                        <ModalFooter>
                            {this.state.tipoModal == 'insertar' ?
                                <button type="submit" className="btn btn-success" onClick={() => this.peticionPost()}>
                                    Insertar
                  </button> : <button className="btn btn-primary" onClick={() => this.handleUpdate(event)}>
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
                        <ModalFooter  style={{ backgroundImage: `url(${"./images/mascas.jpg"})`,
           backgroundSize: 'cover' }}>
                            <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                            <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                        </ModalFooter>
                    </Modal>
            </div>
        );
    }
}
if (document.getElementById('adminPets')) {
    ReactDOM.render(<ManagePets />, document.getElementById('adminPets'));
}



