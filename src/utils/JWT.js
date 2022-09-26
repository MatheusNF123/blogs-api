const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '20h',
};

const { JWT_SECRET } = process.env;

const generateToken = (payload) => 
    jwt.sign(payload, JWT_SECRET, jwtConfig);

const authTokenValidation = (token) => {
    const instrospection = jwt.verify(token, JWT_SECRET);
    return instrospection;
};

module.exports = {
    generateToken,
    authTokenValidation,
};