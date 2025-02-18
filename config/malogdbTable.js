const createUserTable = require("../entity/userTable.js");
const createBlogTable = require("../entity/blogTable.js");

const createTables = async () => {
  await createUserTable();
  await createBlogTable();
  process.exit();
};

module.exports = createTables;