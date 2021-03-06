"use strict";

const Express = require("express");
const router = require("./lib");

const app = Express();
const port = process.env.PORT || 4000;

app.use("/api/", router);

app.listen(port, () => {
  console.log("Server started on port", port);
});
