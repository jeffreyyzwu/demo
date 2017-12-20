import React from "react";

export default function HOCInput(WrappedComponent) {
  return class label extends WrappedComponent {

    fetchData = () => {
      this.setState({
        value: 'hoc override value'
      });
      console.log(this.state.name);
      this.test('dww');
    }

    render() {
      return (
        <div>
          <label>demo</label>
          {super.render()}
        </div>
      )
    }
  }
}

