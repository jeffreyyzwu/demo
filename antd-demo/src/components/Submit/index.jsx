import React from "react";
import { Button, Col } from "antd";
import FormItem from "../FormItem";
import "./index.css";

export default class Submit extends React.Component {
  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (!errors) {

      }
    });
  }

  render() {

    return (
      <Col span={24}>
        {/* <FormItem {...formItemLayout} className="submit"> */}
          <Button onClick={this.handleSubmit}
            type="primary"
            className="submit"
          >
            提交
        </Button>
        {/* </FormItem> */}
      </Col>
    );
  }
}