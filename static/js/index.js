var React = require('react');
var C = require('style/colors');

var ChooChooDash = React.createClass({
  render: function() {
    var style = {
      height: "100%",
      backgroundColor: C.BLACK,
      color: C.WHITE,
      padding: "20px"
    };

    return (
      <div className="dashboard" style={ style }>
        <center>
          <h1>SUP</h1>
        </center>
      </div>
    );
  }
});

window.onload = () => React.render(<ChooChooDash/>, document.body);
