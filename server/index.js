const express = require("express");
const config = require("config");
const admin = require("firebase-admin");
const cors = require("cors");
const serviceAccount = require("./cert.json");
const path = require("path");

const app = express();
app.use(cors({
    origin: ['https://vanilla-js-client.web.app']
}));
app.use("/api", require("./routes/route"));
app.use("/images", require("./routes/route_images"));

const PORT = config.get("port") || 5000;
const databaseURL = config.get("databaseURL");

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
