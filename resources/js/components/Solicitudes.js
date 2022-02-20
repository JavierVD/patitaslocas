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
import { faBan, faPaw } from '@fortawesome/free-solid-svg-icons';

const url = "./misadopciones";

export default class Solicitudes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            searches: [],
            data: [],
            razas: [],
            especies: [],
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
                folio: '',
                nombre: '',
                id_especie: '',
                id_raza: '',
                peso: '',
                estatura: '',
                foto: '',
            }
        }
        this.peticionCancelar= this.peticionCancelar.bind(this)
        this.peticionId= this.peticionId.bind(this)
    }

    peticionCancelar = () =>{
        const urldel = "api/deleteSolicitud/";
        axios.delete(urldel + this.state.form.folio).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }

    peticionId = () =>{
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

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        });
    }

    seleccionarMascota = (mascota) => {
        this.setState({
            form: {
                folio: mascota.id_adopcion,
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
    render() {
        const { form } = this.state;
        return (
            <Fragment>
                <Navbar />
                <div className="Con">
                    <section className="Mai">
                        <form className="Adopcion">
                            <h1>MIS SOLICITUDES DE ADOPCIÓN</h1>
                        </form>
                    </section>
                </div>
                <br></br>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', border: '1px blue solid', padding: '10px', margin: '10px' }}>
                    {this.state.data.map(mascota => {
                        return (<Card style={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={'./images/' + mascota.foto}
                                    title={mascota.nombre}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {mascota.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Raza: {mascota.descripcionraza}.    Estatura: {mascota.estatura} cm.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Especie: {mascota.descripcionespecie}.  Peso: {mascota.peso} gr.
                                    </Typography>
                                    <Typography variant="body2" color="gray" component="p">
                                        Fecha de solicitud: {mascota.fecha}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="red" onClick={() => { this.seleccionarMascota(mascota); this.setState({ modalAdoptar: true }) }} >
                                    Cancelar solicitud <FontAwesomeIcon icon={faBan}/>
                                </Button>
                            </CardActions>
                        </Card>)

                    })}
                    <Modal isOpen={this.state.modalAdoptar}>
                        <ModalBody>
                            <table>
                                <td>¿Estás seguro de tu transacción?</td>
                                <td><img width = "50%" src="./images/saddog.gif"></img></td>
                            </table>
                            
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-primary" onClick={() => this.peticionCancelar()}>Sí</button>
                            <button className="btn btn-secundary" onClick={() => this.setState({ modalAdoptar: false })}>No</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Fragment>
        );
    }

}

if (document.getElementById('misadopciones')) {
    ReactDOM.render(<Solicitudes />, document.getElementById('misadopciones'));
}
