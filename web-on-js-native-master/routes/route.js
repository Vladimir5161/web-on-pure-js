const { Router } = require("express");
const router = Router();
const admin = require("firebase-admin");

const getData = (url) => {
    const ob = url.split("/");
    const col = ob[2];
    if (ob[1] === "doc") {
        const doc = ob[3];
        return {
            col,
            doc,
        };
    } else {
        return { col };
    }
};

router.get("/col/*", async (req, res) => {
    let { col, doc } = getData(req.url);
    try {
        const arr = [];
        await admin
            .firestore()
            .collection(col)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    arr.push(doc.data());
                });
            });
        res.status(200).json(arr);
    } catch (e) {
        res.status(500).json("unable to get data");
    }
});

router.get("/doc/*", async (req, res) => {
    let { col, doc } = getData(req.url);
    try {
        const data = await admin
            .firestore()
            .collection(col)
            .doc(doc)
            .get()
            .then(function (querySnapshot) {
                try {
                    return querySnapshot.data();
                } catch (e) {
                    console.log("error when getting data: ", e.message);
                }
            });
        res.status(200).json(data);
    } catch (e) {
        res.status(500).json("unable to get data");
    }
});
module.exports = router;
