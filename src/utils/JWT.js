const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '20h',
};

const { JWT_SECRET } = process.env;

const generateToken = (payload) => 
    jwt.sign(payload, JWT_SECRET, jwtConfig);

const authTokenValidation = async (token) => {
    if (!token) {
        const e = new Error('missing auth token');
        e.status = 401;
        throw e;
    }

    try {
        const instrospection = await jwt.verify(token, JWT_SECRET);
        return instrospection;
    } catch (e) {
        console.log('Err', e);
        const err = new Error('jwt malformado');
        err.status = 401;
        throw err;
    }
};

module.exports = {
    generateToken,
    authTokenValidation,
};