var React = require('react');
var C = require('style/colors');
var G = require('util/grid');

var time = require('components/time');
var weather = require('components/weather');

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
      <G.Container className="dashboard" style={style}>
        <G.Grid>
          <G.Unit fill={1} total={3}>
            <time.TimeWidget/>
          </G.Unit>
          <G.Unit fill={1} total={3}>
            <weather.WeatherWidget cityId={5391959}/>
          </G.Unit>
          <G.Unit fill={1} total={3}>
            <weather.WeatherWidget cityId={5327684}/>
          </G.Unit>
        </G.Grid>
        <G.Grid>
          <G.Unit fill={1} total={2}>
            <h1>SUP</h1>
          </G.Unit>
          <G.Unit fill={1} total={2}>
            <h1>SUP</h1>
          </G.Unit>
        </G.Grid>
      </G.Container>
    );
  }
});

window.onload = () => React.render(<ChooChooDash/>, document.body);
