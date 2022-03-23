const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const authRoutes = require("./routes/api/auth");
const adminRoutes = require("./routes/admin");
const config = require("config");

const dbURI = config.get("dbURI");

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/admin", adminRoutes);

// if (process.env.NODE_ENV === "production") {
//   // set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const port = process.env.port || 5000;

mongoose
  .connect(dbURI)
  .then((res) => {
    app.listen(port, () => {
      console.log(`connected to server 127.0.0.0:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.connection.on("open", () => {
  console.log("connected to database");
});
