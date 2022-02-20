import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './Styles/estilos.css';
import Navbar from './Nav';

const Donation =()=> {
  

    return (  
    <Fragment>
        <Navbar/>
        <div class="container">
            <div className="row">
            <div class="col-3"></div>
            <div class="col-6">

            <div class="form-floating mb-3">

            <label for="floatingInput">Nombre Completo</label>
            <input type="text" class="form-control" id="floatingInput" placeholder="Jose Lopez"></input>
       
            <label for="floatingInput">Correo Electronico</label>
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
       
        </div>
        <label for="floatingInput">Cantidad</label>
        <div class="input-group">
        
        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
        <span class="input-group-text">$</span>
        <span class="input-group-text">0.00</span>
        </div>
        <label className="indicador">  <b>INDIQUE LA CATEGORIA DEL PROGRAMA A LA QUE DESEA AYUDAR</b>        </label>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label class="form-check-label" for="flexRadioDefault1">Programa Adopta y Cambia Vidas</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label class="form-check-label" for="flexRadioDefault1">Centro de Adopcion Patitas Felices</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
            <label class="form-check-label" for="flexRadioDefault1">Programa Cinica Feliz</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
            <label class="form-check-label" for="flexRadioDefault2">Programa Amigos Por Siempre
        </label>
        <a class="btn btn-primary" href="donacion/tnk" role="button">ENVIAR DONACIÓN</a>
        </div>



            </div>
           
            </div>
            
        </div>

    </Fragment>
    
    );
}
export default Donation;
if (document.getElementById('donation')) {
    ReactDOM.render(<Donation />, document.getElementById('donation'));
}


