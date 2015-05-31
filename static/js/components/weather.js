var React = require('react');
var classnames = require('classnames');
var G = require('util/grid');
var request = require('superagent');
var moment = require('moment');

var WeatherWidget = React.createClass({
  propTypes: {
    cityId: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return { data: undefined };
  },

  componentDidMount: function() {
    request
      .get(`api/weather/${this.props.cityId}`)
      .accept('application/json')
      .end((err, res) => {
        if (res.ok) {
          this.setState({data: JSON.parse(res.text)});
        } else {
          console.error(res.text);
        }
      });
  },

  render: function() {
    var classNames = classnames("weather", this.props.className);

    var content;
    if (this.state.data) {
      var description = this.state.data.weather[0].description;
      var iconCode = this.state.data.weather[0].icon;
      var iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      var temperature = Math.floor(this.state.data.main.temp);

      var sunrise = moment.unix(this.state.data.sys.sunrise).format("h:mm a");
      var sunset = moment.unix(this.state.data.sys.sunset).format("h:mm a");

      content = (
        <G.Container>
          <G.Grid>
            <G.Unit>
              <center>
                <h2>{this.state.data.name}</h2>
              </center>
            </G.Unit>
          </G.Grid>
          <G.Grid>
            <G.Unit>
              <center>
                <h1 style={{margin: 0}}>
                  <img style={{verticalAlign: "middle", margin: "5px"}} src={iconUrl}/>
                  <span>{`${temperature} °F`}</span>
                </h1>
              </center>
            </G.Unit>
          </G.Grid>
          <G.Grid>
            <G.Unit>
              <center>
                <h5>{description}</h5>
                <h5>Sunrise at {sunrise}, sunset at {sunset}</h5>
              </center>
            </G.Unit>
          </G.Grid>
        </G.Container>
      );
    }

    return (
      <div className={classNames}>
        {content}
      </div>
    );
  }
});

module.exports = {
  WeatherWidget
};
