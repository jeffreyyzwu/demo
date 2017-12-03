import React from "react";
import { Form, Col } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

export default class FormItem extends React.Component {
  render() {
    const { children, ...others } = this.props;
    return (
      <Col span={6}>
        <Form.Item {...formItemLayout}
          {...others}>
          {children}
        </Form.Item>
      </Col>
    );
  }


}