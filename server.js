const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const authRoutes = require("./routes/api/auth");
const adminRoutes = require("./routes/admin");
const config = require("config");
const multer = require("multer");
const cors = require("cors");

const updload = multer({ dest: "/public" });

const dbURI = config.get("dbURI");

dotenv.config({ path: "./.env" });

const app = express();
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage }).single("image"));

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
  .catch(
    (err) => {
      console.log(err);
    },
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );

mongoose.connection.on("open", () => {
  console.log("connected to database");
});
