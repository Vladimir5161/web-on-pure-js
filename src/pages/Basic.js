import app from "../api/firebase"
export default class Basic {
    static async getContentApi(col, doc) {
        if (doc) {
            const data = await app.firestore()
                .collection(col)
                .doc(doc)
                .get().then(function (querySnapshot) {
                    return querySnapshot.data()
                })
            return data
        } else {
            const arr = []
            await app.firestore()
                .collection(col)
                .get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        arr.push(doc.data())
                    });
                })
            return arr
        }
    }

}
