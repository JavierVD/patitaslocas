import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Nav';




const Acercade =()=> {
    return (
        <Fragment>
            <Navbar/>

       
        </Fragment>

    );
}
export default Acercade;
if (document.getElementById('acercade')) {
    ReactDOM.render(<Acercade />, document.getElementById('acercade'));
}