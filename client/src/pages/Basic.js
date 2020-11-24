export default class Basic {
    static async getContentApi(col, doc) {
        if (doc) {
            try {
                const result = await fetch(`api/doc/` + col + "/" + doc, {
                    method: "GET",
                    headers: {
                        "Content-Type": "text/plain",
                    },
                });
                const res = await result.json();
                console.log(res);
                return res;
            } catch (e) {
                console.log("calling api error: ", e.message);
            }
        } else {
            try {
                const result = await fetch(`api/col/` + col, {
                    method: "GET",
                    headers: {
                        "Content-Type": "text/plain",
                    },
                });
                const res = await result.json();
                return res;
            } catch (e) {
                console.log("calling api error: ", e.message);
            }
        }
    }
}
