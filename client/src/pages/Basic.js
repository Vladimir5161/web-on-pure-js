export default class Basic {
    static backendURL = `https://us-central1-vanilla-js-about-me.cloudfunctions.net/app`;
    static getImageURl(name) {
        return name.includes('images') ? this.backendURL + name : this.backendURL + "/images/" + name;
    }
    static async getContentApi(col, doc) {
        if (doc) {
            try {
                const result = await fetch(`${this.backendURL}/api/doc/` + col + "/" + doc, {
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
                const result = await fetch(`${this.backendURL}/api/col/` + col, {
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
