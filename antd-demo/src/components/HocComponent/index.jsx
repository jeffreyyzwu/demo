import React from "react";
import HOCInput from "./HOCInput";

@HOCInput
export default class HocComponent extends React.Component {
  state = {
    value: '',
    name:'lolo'
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData =()=>{
    this.setState({
      value:'demo input default value'
    })
  }

  test = (a)=>{
    console.log(a);
  }

  render() {
    return <input value={this.state.value} {...this.props} />;
  }
}