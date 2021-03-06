var React = require('react');
var _ = require('lodash');
var classNames = require('classnames');
var M = require('util/mixins');

var Container = React.createClass({
  mixins: [ M.ValidatePropsMixin ],

  validateProps: function() {
    React.Children.forEach(this.props.children, (child) => {
      if (child.type != Grid) {
        throw new Error("container children must be grids");
      }
    });
  },

  render: function() {
    var classes = classNames("g_container", this.props.className);

    return (
      <div className={classes} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

var Grid = React.createClass({
  mixins: [ M.ValidatePropsMixin ],

  validateProps: function() {
    let gridWidth = 0;
    React.Children.forEach(this.props.children, (child) => {
      if (child.type != Unit) {
        throw new Error("grid children must be units");
      }
      gridWidth += child.props.fill / child.props.total;
    });

    if (gridWidth > 1) {
      throw new Error(`grid is too wide: ${gridWidth * 100}%`); 
    } else if (gridWidth < 1) {
      throw new Error(`grid is too narrow: ${gridWidth * 100}%`); 
    }
  },

  render: function() {
    var classes = classNames("pure_g", this.props.className);

    return (
      <div className={classes} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

var Unit = React.createClass({
  mixins: [ M.ValidatePropsMixin ],

  propTypes: {
    fill: React.PropTypes.number,
    total: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      fill: 1,
      total: 1
    }
  },

  _validColumnSizes: [1, 2, 3, 4, 5, 6, 8, 12, 14],

  validateProps: function() {
    if (this.props.fill > this.props.total) {
      throw new Error(`invalid unit size ${this.props.fill}/${this.props.total}`);
    } else if (!_.contains(this._validColumnSizes, this.props.total)) {
      throw new Error(`invalid total size ${this.props.total}`);
    }
  },

  render: function() {
    var classes = classNames(`pure-u-${this.props.fill}-${this.props.total} `, this.props.className);

    return (
      <div className={classes} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = {
  Container,
  Grid,
  Unit
}
