import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './Styles/estilos.css';
import Navbar from './Nav';


const Admin =()=> {
  

    return (  <Fragment>
        <Navbar/>
    
    </Fragment>
    );
    
}
export default Admin;
if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}