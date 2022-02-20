import 'bootstrap/dist/css/bootstrap.css';
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Card } from 'reactstrap';
const stripePromise = loadStripe("pk_test_51Izx7SJb3Rvkd5JwHJsDYe11bw0WiqcbQZpZXKMpswVeRJsGNWEmvC6FENsllkbuwbt7s66LfAZGGXO27OICp1vJ00UfwOAyr7")

const CheckoutForm = () => {
    const stripe  = useStripe();
    const elements = useElements();

    const handleSubmit  = async (e) => { 
        e.preventDefault();
    
        
    
        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
    
        if (!error){
            console.log(paymentMethod)
            const {data} = await axios.post('ruta', {
                id,
                amount: 100,


            });
            console.log(data); //aqui esta la informacion del pago
        };
        
    
    };



    return (
        <form onSubmit={handleSubmit} className='card card-body'>
            <img src="https://noticiascyber.com/wp-content/uploads/2021/02/02-20-21-Dalila-y-Danilo.jpeg" alt="Apoyanos" className="img-fluid"/>

            <h3 className='text-center my-12'>Ayudanos con $1usd</h3>
            <div className="form-group mt-2">
                <CardElement className='form-control'/>
            </div>
            <button className="btn btn-success">
                Apoyar
            </button>
        </form>     
    )




}





const Index =()=> {
    return (
        <Elements stripe={stripePromise}>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <CheckoutForm/>
                    </div>
                </div>
            </div>
        </Elements>
    );
}
export default Index;
if (document.getElementById('payment')) {
    ReactDOM.render(<Index />, document.getElementById('payment'));
}