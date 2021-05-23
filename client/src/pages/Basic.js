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
    static createElement(element, className, textContent, src, id) {
        const tag = document.createElement(element);
        Object.assign(tag, {
            ...(className && {className}),
            ...(id && {id}),
            ...(src && {src}),
            ...(textContent && {textContent})
        });
        return tag;
    }
}
