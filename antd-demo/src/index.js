import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from "./components/HocDemo";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <div>
      <Demo/>
    </div>
), document.getElementById('root'));

registerServiceWorker();