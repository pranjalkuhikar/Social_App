const dotenv = require("dotenv");
dotenv.config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

const port = process.env.PORT;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
