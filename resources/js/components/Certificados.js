import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Nav';
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { faEdit, faTrashAlt, faPaw } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';



const url = "./getMis";

export default class Certificados extends React.Component {

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
                nombre: '',
                id_especie: '',
                id_raza: '',
                peso: '',
                estatura: '',
                foto: '',
            }
        }
        this.peticionId = this.peticionId.bind(this)
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

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        });
        console.log(this.state.form);
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
        const { classes } = this.props;
        return (
            <div>
                <center>
                    {this.state.data.map(mascota => {
                        return (
                            <Card style={{
                                backgroundImage: `url(${"./images/marco.jpg"})`, minWidth: 275,
                                width: 500,
                                height: 380
                            }}>
                                <br></br><br></br>
                                <CardContent>
                                    <center>
                                        <Typography style={{
                                            fontSize: 25,
                                            color: "#f50057",
                                            fontFamily: "Roboto",
                                            fontStyle: 'normal',
                                        }} color="textSecondary" gutterBottom>
                                            Certificado de Adopción
                                        </Typography>
                                      
                                    </center>
                                    <Typography style={{
                                        fontSize: 15,
                                        color: "#ff4081",
                                        fontFamily: "Roboto",
                                        fontStyle: 'normal',
                                    }} variant="h5" component="h2">
                                        Este documento certifica que: <img src={"./images/"+mascota.foto}
                                            style={{
                                                borderRadius: "50%",
                                                width: 50,
                                                height: 50,
                                                background: "red",
                                                display: "block"
                                            }}
                                        />
                                    </Typography>
                                 
                                    <Typography style={{ marginBottom: '8' }} color="textSecondary">
                                        { mascota.nombre}
                                    </Typography>
                                    <Typography style={{
                                        fontSize: 15,
                                        color: "#ff4081",
                                        fontFamily: "Roboto",
                                        fontStyle: 'normal'
                                    }} variant="h5" component="h2">
                                        Fue oficialmente adoptado/a por:
                                    </Typography>
                                   
                                    <Typography style={{ marginBottom: '8' }} color="textSecondary">
                                        {mascota.adoptante}
                                    </Typography>
                                    <br/>
                                    <Typography style={{
                                        fontSize: 11,
                                        color: "#ff4081",
                                        fontFamily: "Roboto",
                                        fontStyle: 'normal'
                                    }} variant="body2" component="p">
                                        Por este medio me comprometo a cuidar a mi mascota para siempre. Prometo ser responsable y darle una aliemtación y adecuada, ademas
                                        de mantenerlo siempre sano, jugar con el y sobre todo mantenerlo feliz por el resto de su vida.
                                    </Typography>
                                    
                                    <Typography style={{
                                        fontSize: 11.5,
                                        color: "#ff4081",
                                        fontFamily: "Roboto",
                                        fontStyle: 'normal'
                                    }} variant="body2" component="p"> <br></br>
                                        <FontAwesomeIcon icon={faPaw} /> www.patitasfelices.com<FontAwesomeIcon icon={faPaw} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        )
                    })}
                </center>
            </div>

        );
    }

}

if (document.getElementById('certificadoss')) {
    ReactDOM.render(<Certificados />, document.getElementById('certificadoss'));
}
