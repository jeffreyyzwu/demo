import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App';
import SelectList from './components/SelectList';
import DecoratorForm from "./components/DecoratorForm";
import Submit from "./components/Submit";
import {Form, Row, Col, Select, Button} from "antd";

import registerServiceWorker from './registerServiceWorker';

const Option = Select.Option;
const FormItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 }
  },
};

@Form.create()
export default class OrderForm extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (!errors) {

      }
    });
  }
  
  render(){
    const {getFieldDecorator} = this.props.form;

    return (
      <div>
      <Form>
        <Row>
          <Col span={4}>
            <Form.Item label={'BG'}
              {...FormItemLayout}>
                {getFieldDecorator('BG', {
                  rules: [{
                    required: true, message: '请选择BG',
                  }],
                })(
                  <Select>
                    <Option key='1' value='WXG'>WXG</Option>
                  </Select>
                )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label={'XBG'}
              {...FormItemLayout}>
                {getFieldDecorator('XBG', {
                  rules: [{
                    required: true, message: '请选择虚拟BG',
                  }],
                })(
                  <Select>
                    <Option key='1' value='XWXG'>XWXG</Option>
                  </Select>
                )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Button onClick={this.handleSubmit} >提交</Button>
        </Row>
      </Form>
      <Form>
      <Row>
        <Col span={4}>
          <Form.Item label={'BG'}
            {...FormItemLayout}>
              {getFieldDecorator('BG', {
                rules: [{
                  required: true, message: '请选择BG',
                }],
              })(
                <Select>
                  <Option key='1' value='WXG'>WXG</Option>
                </Select>
              )}
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label={'XBG'}
            {...FormItemLayout}>
              {getFieldDecorator('XBG', {
                rules: [{
                  required: true, message: '请选择虚拟BG',
                }],
              })(
                <Select>
                  <Option key='1' value='XWXG'>XWXG</Option>
                </Select>
              )}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Button onClick={this.handleSubmit} >提交</Button>
      </Row>
    </Form>
    </div>      
    );
  }
}


ReactDOM.render((
  <div>
    <OrderForm/>
    <OrderForm/>
    </div>
), document.getElementById('root'));

registerServiceWorker();