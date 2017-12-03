import React from "react";
import { Select } from "antd";
import shortid from "shortid"
import FormItem from "../FormItem";
//import "./index.css"

const Option = Select.Option;

export default class SelectList extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    const { id, label, require, data } = this.props;

    return (
      <FormItem label={label}>
        {getFieldDecorator(`${id}`, {
          rules: [{ required: { require }, message: `请选择${label}` }],
        })(
          <Select>
            {
              data.map(item => {
                return <Option key={shortid.generate()}
                          value={`${item.code}`}>
                          {`${item.name}`}
                        </Option>;
              })
            }
          </Select>
          )}
      </FormItem>
    );

  }
}
