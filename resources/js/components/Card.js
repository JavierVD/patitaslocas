import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './Styles/card.css';
import './Styles/equipo.css';

const Cards =()=> {
    return (
        <Fragment>
            <div>
                    <div className="cd">
                <h3>Objetivos</h3>
                <p>Vertiente Animal: Protección, Rehabilitación, Atención médica, Cuidado,Salud,Adopción de mascotas y Legislación.</p>
                <p>Vertiente Humana: Concientización, Tenencia Responsable, Cuidado, Diversion,Talleres, Cursos, Pláticas y capacitaciones a autoridades y ONG´s.</p>
            </div>
            <div className="cd">
                <h3>Mision</h3>
                <p>•Brindar una vida digna y de respeto a los animales maltratados, abandonados o que han sufrido algún tipo de abuso.</p>
                <p>•Crear en la población una conciencia de cuidado y respeto a los animales a través de campañas masivas, pláticas y talleres de tenencia responsable.</p>
            </div>
            <div className="cd">
                <h3>Visión</h3>
                <p>•Un Mundo sin maltrato animal significa un Municipio más limpio,saludable, nuevo y amable al habitante en general.</p>
                <p>•Respetar a  todos los  animales del mundo al contar con una legislación efectiva y una autoridad eficiente y asi mejorando su calidad de vida.</p>
              
            </div>
            <div className="cd">
                <h3>Manifesto</h3>
                <p>Patitas Felices nace el 19 de septiembre de 2019, fundada por Javier Muñoz y Alejandro Vazquez.</p>
                <p> La Asociación se constituye legalmente con el nombre Patitas Felices  con el fin de proteger y salvar a gran cantidad de animales en todo el mundo, dandoles bienestar y  mejor hogar.
                  </p>
            </div>
            <div className="cd">
                <h3>Valores</h3>
                <p>Patitas Felices (PA) busca concientizar y generar valores a la humanidad para lograr felicidad a los animales entre ellos estan:</p>
                <p>•Respeto</p>
                <p>•Paz</p>
                <p>•Libertad</p>
                <p>•Amor</p>
            
                </div>

            <div class="label">
        <h4 className="s1">EQUIPO PATITAS FELICES</h4>
        <div className="sml">
            <p className="s2">"Voluntariado animal: humanos y animales juntos por un bienestar"</p>
        

        </div>
    </div>
    <div>
    <img alt="imagen aqui" src='/images/fondo12.jpg'></img></div>

            </div>
        </Fragment>
    );
}
export default Cards;

if (document.getElementById('cards')) {
    ReactDOM.render(<Cards />, document.getElementById('cards'));
}