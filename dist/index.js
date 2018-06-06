'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Initialize NODE_ENV variable
(function _initENV() {
    process.env.NODE_ENV = (process.env.NODE_ENV || 'dev').toLowerCase();
})();

var IsENVTest = process.env.NODE_ENV === 'test';
var IsENVDev = process.env.NODE_ENV === 'dev';
var IsENVProd = process.env.NODE_ENV === 'prod';

function GetENV() {
    return process.env.NODE_ENV;
}

exports.IsENVTest = IsENVTest;
exports.IsENVDev = IsENVDev;
exports.IsENVProd = IsENVProd;
exports.GetENV = GetENV;