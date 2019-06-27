import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById('root'));

$("#menu-toggle").click(function() {
    $("#wrapper").toggleClass("toggled");
});