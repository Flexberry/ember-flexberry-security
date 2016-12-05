/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flexberry-security',

  included: function(app) {
    this._super.included.apply(this._super, arguments);

    app.import('vendor/ember-flexberry-security/register-version.js');
  }
};
