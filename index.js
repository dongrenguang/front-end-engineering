const express = require("express");
const app = express();

app.use(express.static("./public"));
// TODO Add cache control support

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`The server is running at port ${port} ...`);
});
