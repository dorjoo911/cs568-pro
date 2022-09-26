const jwt = require("jsonwebtoken");
const User = require("./userModel");
const Response = require("./responseObj");

const SECRET = "1234567890";

exports.login = async (req, res, rnext) => {
  const { name, password } = req.body;
  if (name && password) {
    let result;
    try {
      result = await User.findOne({ name, password });
    } catch (error) {
      return next(new Error("User NOT found"));
    }
    if (result) {
      const accessToken = jwt.sign(
        {
          id: result._id,
          name: result.name,
          iat: Date.now(),
        },
        SECRET
      );
      res.status(200).json(new Response(false, null, { accessToken }));
    } else {
      res
        .status(400)
        .json(new Response(true, "Invalid username and password", null));
    }
  } else {
    res
      .status(400)
      .json(new Response(true, "Please input username and password", null));
  }
};
