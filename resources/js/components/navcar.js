import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';

import Caro from './Carrusel';
import './Styles/card.css';

const NavCar =()=> {
    return (
        <Fragment>
        
        <div className="Con">
          <section className="Mai">
          <section className="titulo">
                <h1>¡CAMBIA UNA VIDA Y ADOPTA!</h1>
            </section>
            </section>
            <Caro></Caro>
        
        </div>
        <div className="cda">
                <h3>PATITAS FELICES DEDICADO A:</h3>
                <p>.Patitas Felices (PA) cuenta con una clinica especial para todo tipo de animales, ya sean aves, reptiles, caninos, bobinos y mas, ademas de esterilización para mascotas del hogar.</p>
                <p>.Apadrinamiento: Conciste en darle un hogar temporal a mascotas que se encuentran dentro de nueste organización, con el fin de protegerlo de cualquier tipo de maltrato o abandonados.</p>
                <p>.Servicio Social: Tu puedes comuncarte con nosotros a travez de facebook: "PATITAS FELICES" o acudir a nuestras instalaciónes para que nosotros te liberemos tu servicio social a traves de distintos programas.</p>
                <p>.Veterinaria general: Contamos con una veterinaria general en aguascalientes, donde tu puedes acuidr y salvar a tu animalitoo, costos accesibles, higienico y apto para su mascota.</p>
            </div>
        </Fragment>
    );
}
export default NavCar;
if (document.getElementById('navcar')) {
    ReactDOM.render(<NavCar />, document.getElementById('navcar'));
}