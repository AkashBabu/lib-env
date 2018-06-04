// Initialize NODE_ENV variable
(function _initENV() {
    process.env.NODE_ENV = (process.env.NODE_ENV || 'dev').toLowerCase();
}());

const IsENVTest = process.env.NODE_ENV === 'test';
const IsENVDev = process.env.NODE_ENV === 'dev';
const IsENVProd = process.env.NODE_ENV === 'prod';

function GetENV() {
    return process.env.NODE_ENV;
}

export {
    IsENVTest,
    IsENVDev,
    IsENVProd,
    GetENV,
};
