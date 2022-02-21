import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Styles/card.css';
import './Styles/equipo.css';
import Caro from './Carrusel';

const Navuser = () => {
    return (
        <Fragment>
            <div align="center">
                <nav>
                    <div className="ColorNav logo-nav-cont">
                        <span className="Menu-Icon"><img src="../public/images/menu_white_24dp.svg" ></img></span>
                        <ul className="uln" >
                            <li className="uli"><a href="home" className="Menu">Home</a></li>
                            <li className="uli"><a href="administrarMascotas" className="Menu">Gestión de Mascotas</a></li>
                            <li className="uli"><a href="gestion" className="Menu">Aprobación de solicitudes</a></li>
                            <li className="uli"><a href="verdenuncia" className="Menu">Ver denuncias</a></li>
                            <li className="uli"><a href="crmpatitasfelices.azurewebsites.net" className="Menu">Abrir CRM</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}
export default Navuser;

if (document.getElementById('navuser')) {
    ReactDOM.render(<Navuser />, document.getElementById('navuser'));
}