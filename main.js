const React = require('react');
const ReactDOM = require('react-dom');

class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
          Hello, I am a CommentBox.
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('example')
);
