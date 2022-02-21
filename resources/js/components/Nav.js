import { holdReady } from "jquery";
import React from "react";
import './Styles/estilos.css';
const Navbar = () =>{
    return (
        <div align="center">
             <nav>
            <div className ="ColorNav logo-nav-cont">
                  

                    <span className="Menu-Icon"><img  src="../public/images/menu_white_24dp.svg" ></img></span>  
                    <ul className="uln" >
                        <li className="uli"><a href="home"className="Menu">Home</a></li>
                        <li className="uli"><a href="faq"className="Menu">¿Quiénes somos?</a></li>
                        <li className="uli"><a href="faq2" className="Menu">Socios y programas</a> </li>
                        <li className="uli"><a href="denuncia"className="Menu">Denuncia</a></li>
                        <li className="uli"><a href="adopcion"className="Menu">Adopción</a></li>
                        <li className="uli"><a href="solicitudes"className="Menu">Mis solicitudes</a></li>
                        <li className="uli"><a href="certificados"className="Menu">Mis certificados</a></li>
                        <li className="uli"><a href="checkout"className="Menu">Apóyanos</a></li>
                        <li className="uli"><a href="tiendita" className="Menu">Productos</a></li>
                  </ul>
            </div>
          </nav>
        </div>
    );
}


export default Navbar;