import './index.css';
import ReactDOM from "react-dom"
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';
import React from "react"

ReactDOM.render(
    <Router>
        <App />
     </Router>, document.getElementById('root'));
registerServiceWorker();
