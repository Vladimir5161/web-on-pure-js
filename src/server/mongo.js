const mongoose = require("mongoose");
const fs = require("fs");

const cert = fs.readFileSync(__dirname + "/client.pem");

mongoose
    .connect(
        "mongodb+srv://Vladimir:europe1234@cluster0.kcj7q.mongodb.net/Project+1?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    )
    .then(() => {
        console.log("server has been started");
    })
    .catch((error) => console.log("error"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("we are connected");
});
setTimeout(() => {
    process.exit(1), 4000;
});
