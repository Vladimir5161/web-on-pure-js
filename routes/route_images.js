const { Router } = require("express");
const router = Router();
const fs = require("fs");

const getData = (url) => {
    const ob = url.split("images/");
    const name = ob[1];
    return name;
};

router.get("/", async (req, res) => {
    let name = getData(req.url);
    const image = path.join(
        __dirname,
        "client",
        "public",
        "common",
        "images",
        `${name}`
    );
    try {
        res.writeHead(200, { "content-type": "image/png" });
        fs.createReadStream(image, "utf-8").pipe(res);
    } catch (e) {
        res.status(500).json("unable to get data");
    }
});
module.exports = router;
