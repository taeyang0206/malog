require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
// env 파일에 포트가 지정되어 있을 경우 env 파일에 있는 포트 번호를 사용
// 그렇지 않을 경우 3000번 사용
const port = process.env.PORT || 3000;
const connection = require("./config/malogdbConnection.js");
const createTables = require("./config/malogdbTable.js");

connection.connect();
createTables();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

// public 폴더에 정적이 파일이 들어있다는 표시
app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", require("./routes/main"));
app.use("/blog", require("./routes/blogRouter"));


app.listen(port, () =>
{
    console.log(`Application listen on port ${port}`);
});