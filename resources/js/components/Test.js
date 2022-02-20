import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Nav';
import Caro from './Carrusel';

const Test =()=> {
    return (
        <Fragment>
        <Navbar/>
    <div className="Con">  
      <section className="Mai">

           <form className="Adopcion">
           <h1>LISTA DE CATALOGO DE ADOPCIÓN</h1>
            
           </form>
          </section>
            <div id='mostrarMascota'></div>
    </div>
    </Fragment>
    );
}
export default Test;
if (document.getElementById('test')) {
    ReactDOM.render(<Test />, document.getElementById('test'));
}