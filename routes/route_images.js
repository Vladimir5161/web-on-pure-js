const { Router } = require("express");
const router = Router();
const admin = require("firebase-admin");

const getData = (url) => {
    const ob = url.split("images/");
    const name = ob[1];
    return name;
};

router.get("/", async (req, res) => {
    let name = getData(req.url);
    const image = path.join(__dirname, "client", "public", `${name}`);
    try {
        res.status(200).json(image);
    } catch (e) {
        res.status(500).json("unable to get data");
    }
});
module.exports = router;
