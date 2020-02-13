import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// const HtmlToReactParser = require('html-to-react').Parser;

class Runner extends Component {
  constructor() {
    super();
    this.canvas = null;
  }
  componentDidMount() {
    if (this.canvas !== null) {
      ReactDOM.findDOMNode(this).appendChild(this.canvas);
    }
  }

  render() {
    let outputValue;
    try {
      outputValue = eval(this.props.code);
    } catch (errorMessage) {
      return <p style="color: red">{errorMessage}</p>;
    }
    if (outputValue !== undefined && outputValue.$canvas !== undefined) {
        this.canvas = outputValue.$canvas;
        return <div></div>;
    } else if (outputValue !== undefined) {
      return <p>{outputValue}</p>;
    }
  }

  // props.callBack();
}

export default Runner;
