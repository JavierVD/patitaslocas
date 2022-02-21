import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Nav';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { faSearch, faPaw } from '@fortawesome/free-solid-svg-icons';

const url = "./get";
const url2 = "api/getRaza";
const url3 = "api/getEspecies";
const url4 = "api/getProductos";
export default class Tienda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            searches: [],
            data: [],
            razas: [],
            especies: [],
            productos: [],
            modalAdoptar: false,
            upload_file: '',
            id_usuario: '',
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
                indiceraza: '',
                indiceespecie: ''
            }
        }
        this.peticionAdoptar = this.peticionAdoptar.bind(this)
        this.peticionId = this.peticionId.bind(this)
        this.buscarRaza = this.buscarRaza.bind(this)
        this.buscarEspecie= this.buscarEspecie.bind(this)
    }

    peticionAdoptar = () => {
        const packets = {
            id_mascota: this.state.form.id,
            id_usuario: this.state.id_usuario
        };
        const headers = {
            "Content-Type": "multipart/form-data"
        };
        const urladd = "api/storeAdopcion";
        axios.post(urladd, packets).then(response => {
            this.peticionGet();
            console.log(response.data)
        }).catch(error => {
            console.log(error.response.data)
        })
    }

    peticionId = () => {
        axios.get("./getID").then(response => {
            this.setState({ id_usuario: response.data });
        }).catch(error => {
            console.log(error.message);
        });
        console.log(this.state.id);
    }
    componentDidMount() {
        this.peticionGet();
        this.peticionId();
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

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        });

        axios.get(url2).then(response => {
            this.setState({ razas: response.data });
        }).catch(error => {
            console.log(error.message);
        });

        axios.get(url3).then(response => {
            this.setState({ especies: response.data });
        }).catch(error => {
            console.log(error.message);
        });

        axios.get(url4).then(response => {
            this.setState({ productos: response.data });
        }).catch(error => {
            console.log(error.message);
        });

    }
    
    buscarRaza(){
        const id ={
            id_raza: this.state.form.indiceraza
        }
        console.log(this.state.form.indiceraza);
        axios.post("./urlraza", id).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        });
    }

    buscarEspecie(){
        const id ={
            id_raza: this.state.form.indiceespecie
        }
        axios.post("./urlespecie", id).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        });
    }

    seleccionarMascota = (mascota) => {
        this.setState({
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
        console.log(mascota.foto + " " + mascota.nombre);
    }
    render() {
        const { form } = this.state;
        return (

            <Fragment>
                <Navbar />
                <div className="Con">
                    <section className="Mai">
                        <form className="Adopcion">
                            <h1>Tienda Online</h1>
                        </form>
                    </section>
                </div>
                


                <br></br>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', border: '1px blue solid', padding: '10px', margin: '10px' }}>
                    {this.state.productos.map(mascota => {
                        return (<Card style={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={mascota.description}
                                    title={mascota.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {mascota.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        SKU: {mascota.sku}.    {mascota.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        $ {mascota.price} XN    Cantidad: {mascota.quantity} pzs.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => { this.seleccionarMascota(mascota); this.setState({ modalAdoptar: true }) }} >
                                    Adquirir <FontAwesomeIcon icon={faPaw} />
                                </Button>
                            </CardActions>
                        </Card>)

                    })}
                    <Modal isOpen={this.state.modalAdoptar}>
                        <ModalBody>
                            <table>
                                <td>Enviarás una solicitud para adoptar a {form && form.nombre}. ¿Estás seguro de tu transacción?</td>
                                <td><img width="50%" src="./images/happydog.gif"></img></td>
                            </table>

                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-primary" onClick={() => this.peticionAdoptar()}>Sí</button>
                            <button className="btn btn-secundary" onClick={() => this.setState({ modalAdoptar: false })}>No</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Fragment>
        );
    }

}

if (document.getElementById('tiendita')) {
    ReactDOM.render(<Tienda />, document.getElementById('tiendita'));
}
