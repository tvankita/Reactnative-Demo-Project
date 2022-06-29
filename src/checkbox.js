import React, { Component } from "react";
import { Text, CheckBox, } from "react-native";

class CheckBoxDemo extends from Component {
constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }
  handleChange = (e) => {
    const { checked } = e.target
    this.setState({
      checked: checked
    })
  }
  render() {
    return (
      <div>
        <input type="checkbox"
               onChange={e => this.handleChange(e)}
               defaultChecked={this.state.checked}/>
        {this.state.checked.toString()}
      </div>
    )
  }
}
  ReactDOM.render(<App/>)