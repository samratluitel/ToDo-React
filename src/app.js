import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const Layout = (props)=>{
    return (
        <div>
            {props.children}
        </div>
    );
}
const template = (
    <div>
        <h1>Title</h1>
        <p>Small description</p>
    </div>
);
IndecisionApp.defaultProps ={
    options:[]
}

ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));