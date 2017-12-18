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
  static defaultProps = {
    span: 6
  };

  render() {
    const { children, span, ...others } = this.props;
    return (
      <Col span={span}>
        <Form.Item {...formItemLayout}
          {...others}>
          {children}
        </Form.Item>
      </Col>
    );
  }
}