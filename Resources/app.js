var App, _;

require('vendor/require').monkeypatch(this);

App = {
  Styles: {}
};

_ = require('vendor/underscore')._;

require('vendor/titanium_utils');

App.Styles = require('ui/styles').Styles;

App.tests_enabled = false;

require('test/enabled');

if (App.tests_enabled) {
  require('test/tests');
} else {
  require('initialize').initApp();
}
