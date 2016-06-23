var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="commentBox">
          Hello, I am a CommentBox.
        </div>
      );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('example')
);
