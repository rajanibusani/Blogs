// mongodb+srv://rbusani:<password>@blogs.hcdvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require("express");
const app = express();
const dotenv= require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected to MongoDB"))
.catch((err)=>console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });

  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);



app.listen("8000", ()=>{
    console.log("Server is running")
})