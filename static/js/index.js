var React = require('react');

var ChooChooDash = React.createClass({
  render: function() {
    return (
      <div className="dashboard">
        <center>
          <h1>SUP</h1>
        </center>
      </div>
    );
  }
});

React.render(<ChooChooDash/>, document.getElementById("root"));
