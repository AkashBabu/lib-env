// Initialize NODE_ENV variable
(function _initENV() {
    process.env.NODE_ENV = (process.env.NODE_ENV || 'test').toLowerCase();
}());

function GetENV() {
    return process.env.NODE_ENV;
}

const env = {
    [`IsENV${process.env.NODE_ENV[0].toUpperCase()}${process.env.NODE_ENV.slice(1)}`]: true,
    GetENV,
};

module.exports = env;
