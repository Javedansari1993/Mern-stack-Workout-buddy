const express = require("express");
const port = 8080;
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://javed:javed123@atlascluster.rjxql.mongodb.net/workoutDB"
  )
  .then(() => {
    //listen for requests
    app.listen(port, () => {
      console.log(`connect to db & listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
