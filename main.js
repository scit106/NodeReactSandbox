const React = require('react');
const ReactDOM = require('react-dom');

class GreeterBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: "Hello"};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <label> Name: </label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />

        <div className="greeterBox">
            Hello, I am a {this.state.value}.
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <GreeterBox />,
  document.getElementById('example')
);
