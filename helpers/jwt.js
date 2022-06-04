const jwt = require("jsonwebtoken");
const CreateToken = (user) => {
  const payload = {
    userid: user._id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return token;
};
module.exports = CreateToken;
