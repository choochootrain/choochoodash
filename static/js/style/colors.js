var _ = require("lodash");

var HEX_REGEX = /^[0-9A-F]{3}([0-9A-F]{3})?$/;

class Color {
  constructor(options) {
    if (!_.isUndefined(options.r) && !_.isUndefined(options.g) && !_.isUndefined(options.b)) {
      try {
        this.r = parseInt(options.r);
        this.g = parseInt(options.g);
        this.b = parseInt(options.b);
      } catch (e) {
        throw new Error(`invalid color codes ${options.r} ${options.g} ${options.b}`);
      }
    } else {
      var color;
      if (!_.isUndefined(options.color)) {
        color = options.color;
      } else if (_.isString(options)) {
        color = options;
      } else {
        throw new Error("no color specified");
      }

      color = color.toUpperCase();
      if (_.startsWith(color, "#")) {
        color = color.substr(1);
      }
      
      if (!color.match(HEX_REGEX)) {
        throw new Error(`invalid color ${color}`);
      }

      var r, g, b;
      if (color.length === 3) {
        [r, g, b] = color.split("");
      } else {
        r = color.substring(0, 2);
        g = color.substring(2, 4);
        b = color.substring(4, 6);
      }

      this.r = Math.min(parseInt(r, 16), 0xFF);
      this.g = Math.min(parseInt(g, 16), 0xFF);
      this.b = Math.min(parseInt(b, 16), 0xFF);
    }
  }

  lighter(amt) {
    return new Color({
      r: Math.min(this.r + amt, 0xFF),
      g: Math.min(this.g + amt, 0xFF),
      b: Math.min(this.b + amt, 0xFF)
    });
  }

  darker(amt) {
    return new Color({
      r: Math.max(this.r - amt, 0),
      g: Math.max(this.g - amt, 0),
      b: Math.max(this.b - amt, 0)
    });
  }

  toString() {
    return "#" + _.padLeft(this.r.toString(16), 2, "0")
               + _.padLeft(this.g.toString(16), 2, "0")
               + _.padLeft(this.b.toString(16), 2, "0");
  }
}

module.exports = {
  Color,

  //from clrs.cc
  NAVY:    new Color("001F3F"),
  BLUE:    new Color("0074D9"),
  AQUA:    new Color("7FDBFF"),
  TEAL:    new Color("39CCCC"),
  OLIVE:   new Color("3D9970"),
  GREEN:   new Color("2ECC40"),
  LIME:    new Color("01FF70"),
  YELLOW:  new Color("FFDC00"),
  ORANGE:  new Color("FF851B"),
  RED:     new Color("FF4136"),
  MAROON:  new Color("85144B"),
  FUCHSIA: new Color("F012BE"),
  BLACK:   new Color("111111"),
  GRAY:    new Color("AAAAAA"),
  SILVER:  new Color("DDDDDD"),
  WHITE:   new Color("FFFFFF")
}
