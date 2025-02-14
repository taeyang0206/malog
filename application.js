require("dotenv").config();
const express = require("express");

const app = express();
// env 파일에 포트가 지정되어 있을 경우 env 파일에 있는 포트 번호를 사용
// 그렇지 않을 경우 3000번 사용
const port = process.env.PORT || 3000;

app.use("/", require("./routes/main"));

app.listen(port, () =>
{
    console.log(`Application listen on port ${port}`);
});