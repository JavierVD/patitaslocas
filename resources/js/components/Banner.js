import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './Styles/banner.css';


const Banner =()=> {
    return (
    
        


        <div className="bg">
            <div className="text">   Patitas  Felices</div>
            <div className="box"><a className="btngreen">PROTECCIÓN ANIMAL</a></div>
        </div>
    
    );
}
export default Banner;
if (document.getElementById('banner')) {
    ReactDOM.render(<Banner />, document.getElementById('banner'));
}