const { Router } = require("express");
const router = Router();
const path = require("path");

const getData = (url) => {
    const ob = url.split("/");
    const name = ob[1];
    return name;
};

router.get("*", async (req, res) => {
    let name = getData(req.url);
    const image = path.join(
        path.resolve("images"),
        `${name}`
    );
    try {
        res.status(200).sendFile(image);
    } catch (e) {
        res.status(500).json("unable to get data");
    }
});
module.exports = router;
