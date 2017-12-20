import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import SelectList from './components/SelectList';
import DecoratorForm from "./components/DecoratorForm";
import Submit from "./components/Submit";
import HOCDemo from "./components/HocComponent";
import {Row} from "antd";

import registerServiceWorker from './registerServiceWorker';

const bgProps  = {
    id:'bg',
    label:'BG',
    require:true,
    data:[{
        code:'WXG',
        name:'WXG'
    }]
};
const xbgProps  = {
    id:'xbg',
    label:'虚拟BG',
    require:true,
    data:[{
        code:'XWXG',
        name:'XWXG'
    }]
};

ReactDOM.render((
    <div>
        <DecoratorForm>
            <Row >
                <SelectList {...bgProps}/>
                <SelectList {...xbgProps}/>
            </Row>
            <Row>
                <Submit/>
            </Row>
        </DecoratorForm>
        <DecoratorForm>
            <Row >
                <SelectList {...bgProps}/>
                <SelectList {...xbgProps}/>
            </Row>
            <Row>
                <Submit/>
            </Row>
        </DecoratorForm>
        <HOCDemo/>
    </div>
), document.getElementById('root'));

registerServiceWorker();