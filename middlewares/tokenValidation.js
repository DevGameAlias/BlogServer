//Token Validation
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const tokenValidation = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    const payload = jwt.verify(token, JWT_KEY);
    if (payload) {
      req.userId = payload.id;
      next();
    }
  } catch (err) {
    res.status(500).send(err);
    next();
  }
};

module.exports = tokenValidation;
