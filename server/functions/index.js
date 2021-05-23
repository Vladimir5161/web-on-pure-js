const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const serviceAccount = require("./cert.json");
const path = require("path");
const mainRoute = require("./routes/route.js");
const imagesRoute = require("./routes/route_images.js");
const functions = require('firebase-functions');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", mainRoute);
app.use("/images", imagesRoute);


const PORT = process.env.port || 5000;
const databaseURL = process.env.databaseURL;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL,
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "index.html")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "index.html"));
    });
}

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
exports.app = functions.https.onRequest(app);