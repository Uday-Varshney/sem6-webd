const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => {
    console.log("Connection Open!!");
  })
  .catch((err) => {
    console.log("Something Went Wrong");
    console.log(err);
  });

// This is the schema structure must to degine before making the document.
const nameSchema = new mongoose.Schema({
  name: String,
  lname: String,
  age: Number,
  studying: Boolean,
});
// here after the model in the "its the name of the table or collection" and second one is the schema.
const Names = new mongoose.model("Name", nameSchema);
