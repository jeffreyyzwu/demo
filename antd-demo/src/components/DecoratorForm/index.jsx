import React from "react";
import { Form } from "antd";

@Form.create()
export default class DecoratorForm extends React.Component {
  cloneDetailComponents = (children, form) => {
    return React.Children.map(children, child => {
      const subChildren = child.props.children;
      return React.cloneElement(child,
        { form: form },
        this.cloneDetailComponents(subChildren, form));
    });
  };

  render() {
    const { children, form } = this.props;
    const cloneChildren = this.cloneDetailComponents(children, form);

    return (
      <Form>
        {cloneChildren}
      </Form>
    );
  }
}