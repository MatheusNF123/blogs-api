module.exports = (error, req, res, _next) => {
  console.log('middleware de error');
  res.status(error.status || 500).json({ message: error.message || 'Server Internal Error' });
};