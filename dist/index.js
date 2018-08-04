'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _env;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize NODE_ENV variable
(function _initENV() {
    process.env.NODE_ENV = (process.env.NODE_ENV || 'test').toLowerCase();
})();

function GetENV() {
    return process.env.NODE_ENV;
}

var env = (_env = {}, (0, _defineProperty3.default)(_env, 'IsENV' + process.env.NODE_ENV[0].toUpperCase() + process.env.NODE_ENV.slice(1), true), (0, _defineProperty3.default)(_env, 'GetENV', GetENV), _env);

module.exports = env;