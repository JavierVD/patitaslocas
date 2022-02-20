import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Adminregister =()=> {
    return (
      <h1>admin component</h1>
    );
}

export default Adminregister ;
if (document.getElementById('adminregister')) {
    ReactDOM.render(<Adminregister />, document.getElementById('adminregister'));
}
