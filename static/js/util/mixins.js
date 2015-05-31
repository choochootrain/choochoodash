var _ = require('lodash');

var ValidatePropsMixin = {
  componentWillMount: function() {
    if (!_.has(this, 'validateProps')) {
      throw new Error("Components using ValidatePropsMixin must implement validateProps");
    }
    this.validateProps();
  },

  componentWillRecieveProps: function() {
    if (!_.has(this, 'validateProps')) {
      throw new Error("Components using ValidatePropsMixin must implement validateProps");
    }
    this.validateProps();
  }
};

module.exports = {
  ValidatePropsMixin
}
