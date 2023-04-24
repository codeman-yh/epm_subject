module.exports = (req, res, next) => {
  console.log(req.method, req.path);
  if (req.method == "POST" && req.path == "/login") {
    console.log(req.body.username, req.body.password);
    if (req.body.username === "郭先生" && req.body.password === "123456") {
      res.status(200).json({
        user: {
          token: "xxx",
        },
      });
    } else {
      res.status(400).json({
        msg: "登录失败",
      });
    }
  }
  next();
};
