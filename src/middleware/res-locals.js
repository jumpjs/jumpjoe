module.exports = (req, res, next) => {
  res.locals = {
    title: 'JumpJoe'
  };
  next();
};
