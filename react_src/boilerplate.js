// Generated by CoffeeScript 1.10.0
(function() {
  var React, _, c;

  c = function() {
    return console.log.apply(console, arguments);
  };

  React = require('react');

  _ = require('lodash');

  module.exports = function() {
    return {
      _: _,
      React: React,
      rr_0: function() {
        return React.createFactory(React.createClass.apply(React, arguments));
      },
      rr: function() {
        return React.createClass.apply(React, arguments);
      },
      c: c,
      assign: function() {
        return _.assign.apply(_, arguments);
      },
      keys: function() {
        return _.keys.apply(_, arguments);
      }
    };
  };

}).call(this);