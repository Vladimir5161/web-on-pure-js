const express = require("express");
const config = require("config");
const admin = require("firebase-admin");
const cors = require("cors");
const path = require("path");

const serviceAccount = require("./cert.json");

const app = express();
app.use(cors());
app.use("/api", require("./routes/route"));
app.use("/images", require("./routes/route_images"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
const PORT = config.get("port") || 5000;
const databaseURL = config.get("databaseURL");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL,
});
async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch (e) {
        console.log("server error", e.message);
        process.exit(1);
    }
}
start();
