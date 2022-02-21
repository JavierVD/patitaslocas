import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';



const Car =()=> {
    return (
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 ImagenBanner"
                src="/images/IMG1.png   "
                alt="animal" width="640" height="550"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Canina</h1>
            </section>
            <section className="nombre">
            <h1>Nombre: Pinky </h1>
            </section>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 ImagenBanner"
                src="/images/IMG2.png"
                alt="animal" width="640" height="500"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Felina</h1>
            </section>
            <section className="nombre">
            <h1>Nombres: Micky y Guero </h1>
            </section>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="/images/f132647-2-h.jpeg"
               alt="animal" width="640" height="560"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Equino</h1>
            </section>
            <section className="nombre">
            <h1>Nombres: Gabiota </h1>
            </section>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="/images/IMG5.png"
               alt="animal" width="640" height="500"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Aves</h1>
            </section>
            <section className="nombre">
            <h1>Nombres: Flofy,Pinky,Max,Negro</h1>
            </section>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="/images/IMG8.png"
               alt="animal" width="640" height="500"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Porcino</h1>
            </section>
            <section className="nombre">
            <h1>Nombres: Chenchito</h1>
            </section>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="/images/IMG9.png"
               alt="animal" width="640" height="500"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Felino</h1>
            </section>
            <section className="nombre">
            <h1>kira</h1>
            </section>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="/images/IMG4.png"
               alt="animal" width="640" height="500"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: Canino</h1>
            </section>
            <section className="nombre">
            <h1>Cloe</h1>
            </section>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="/images/IMG11.png"
               alt="animal" width="640" height="500"
                />
                <Carousel.Caption>
                <section className="especie">
            <h1>ESPECIE: AVE</h1>
            </section>
            <section className="nombre">
            <h1>Lia</h1>
            </section>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
    );
}
export default Car;
