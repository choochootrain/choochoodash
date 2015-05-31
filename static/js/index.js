var React = require('react');
var C = require('style/colors');
var G = require('util/grid');

var ChooChooDash = React.createClass({
  render: function() {
    var style = {
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      color: C.WHITE,
      backgroundColor: C.BLACK,
    };

    return (
      <G.Grid className="dashboard" style={ style }>
        <G.Unit fill={1} total={3}>
          <h1>SUP</h1>
        </G.Unit>
        <G.Unit fill={1} total={3}>
          <h1>SUP</h1>
        </G.Unit>
        <G.Unit fill={1} total={3}>
          <h1>SUP</h1>
        </G.Unit>
      </G.Grid>
    );
  }
});

window.onload = () => React.render(<ChooChooDash/>, document.body);
