const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const companyRouter = require("./routes/company");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ company: [] }).write();

const app = express();

app.db = db;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("", companyRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
