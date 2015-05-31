var React = require('react');
var classnames = require('classnames');
var moment = require('moment');

var TimeWidget = React.createClass({
  getInitialState: function() {
    return { moment: moment() };
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 60 * 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  tick: function() {
    this.setState({ moment: moment() });
  },

  render: function() {
    var date = this.state.moment.format("MMM Do YYYY");
    var time = this.state.moment.format("h:mm a");
    var classNames = classnames("time", this.props.className);

    return (
      <div className={classNames}>
        <center>
          <h3>{date}</h3>
          <h1>{time}</h1>
        </center>
      </div>
    );
  }
});

module.exports = {
  TimeWidget
};
