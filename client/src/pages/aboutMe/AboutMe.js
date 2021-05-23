import "./aboutMe.css";
import Basic from "../Basic";

export class AboutMe extends Basic {
    static async renderAboutPage(contactsArr) {
        const H1 = this.createElement("h1", "title", "Vladimir Vagaev");
        // logic with will count my current age
        const myDirthDate = new Date("1993-11-05");
        const dateBrthYears =
            new Date().getFullYear() - myDirthDate.getFullYear();
        const correctFullYears =
            new Date().getMonth() >= myDirthDate.getMonth()
                ? new Date().getDay() >= myDirthDate.getDay()
                    ? dateBrthYears
                    : dateBrthYears - 1
                : dateBrthYears - 1;
        const dateBrth = this.createElement("h1", "title dateBrth", `Date of Birth(Age): 05.11.1993(${correctFullYears})`);
        //
        const h1Row = this.createElement("div", "h1Row");
        h1Row.appendChild(H1);
        h1Row.appendChild(dateBrth);
        const row = this.createElement("div", "row");
        const imgBig = this.createElement("img", "blockImage", null, "https://vanilla-js-back-end.web.app/images/me.jpg");
        const imgSmall = this.createElement("img", "blockImageSmall", null, "https://vanilla-js-back-end.web.app/images/me.jpg");
        const textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio labore sit
            ullam, ipsa delectus dicta aut in voluptatibus hic ex dolore voluptates sint cumque quas omnis
            tempore? Voluptatibus, sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            delectus placeat laborum, libero beatae velit minus veniam ducimus quam totam veritatis rerumLorem ipsum dolor sit amet consectetur adipisicing elit. A odio labore sit
            ullam, ipsa delectus dicta aut in voluptatibus hic ex dolore voluptates sint cumque quas omnis
            tempore? Voluptatibus, sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            delectus placeat laborum, libero beatae velit minus veniam ducimus quam totam veritatis rerum
       `;
        const textBlock = this.createElement("div", "text-block", textContent);
        row.appendChild(imgBig);
        row.appendChild(imgSmall);
        row.appendChild(textBlock);

        // here we will create my contact icons
        const contacts = this.createElement("div", "contacts");
        for (let item in contactsArr) {
            const objKey = item;
            const objVal = contactsArr[item];
            const contact = this.createElement("a",  "contactStart");
            Object.assign(contact, {
                href: typeof objVal === "number" ? `tel:+${objVal}` : objVal,
                target: "_blank",
            });
            const contactImg = this.createElement("img", "contactImg", null, `https://vanilla-js-back-end.web.app/images/${objKey}.png`);
            contact.appendChild(contactImg);
            contacts.appendChild(contact);
        }
        const div = this.createElement("div", "main-div");
        div.appendChild(h1Row);
        div.appendChild(row);
        div.appendChild(contacts);
        return div;
    }
    static async render() {
        const contactsArr = await this.getContentApi(
            "contacts",
            "UwhT3lZgl8ZqcrISmc5r"
        );
        const result = await this.renderAboutPage(contactsArr);
        return result.outerHTML;
    }
}

// here we'll handle click on image to show full size image and will add this logic only after html will be loaded
const observeItem = main.querySelector(".wrapper");
let observer = new MutationObserver((mutationRecords) => {
    const render = main.querySelectorAll(".contactStart");
    if (mutationRecords[0].addedNodes[0].className === "main-div") {
        const rend = render.length;
        for (let i = rend - 1; i < rend && i >= 0; i--) {
            setTimeout(() => (render[i].className = "contact"), 1000 - i * 50);
        }
        const setNewImageClass = (element) => {
            element.className =
                element.className === "blockImageBig"
                    ? "blockImageSmall"
                    : "blockImageBig";
        };
        const blockImageBig = main.querySelector(".blockImageBig");
        const blockImageSmall = main.querySelector(".blockImageSmall");
        if (blockImageBig) {
            blockImageBig.addEventListener("click", () => {
                setNewImageClass(blockImageBig);
            });
        } else {
            blockImageSmall.addEventListener("click", () => {
                setNewImageClass(blockImageSmall);
            });
        }
    }
});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false,
});
