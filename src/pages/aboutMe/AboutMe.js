import "./aboutMe.css";
import Basic from "../Basic";
import anime from "animejs/lib/anime.es.js";

export class AboutMe extends Basic {
    static renderAboutPage(contactsArr) {
        const H1 = document.createElement("h1");
        H1.className = "title";
        H1.textContent = "Vladimir Vagaev";

        const row = document.createElement("div");
        row.className = "row";
        const img = document.createElement("img");
        Object.assign(img, {
            className: "blockImage",
            alt: "",
            src: "/public/common/images/me.jpg",
        });
        const img2 = document.createElement("img");
        Object.assign(img2, {
            className: "blockImageSmall",
            alt: "",
            src: "/public/common/images/me.jpg",
        });
        const textBlock = document.createElement("div");
        textBlock.className = "text-block";
        textBlock.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio labore sit
        ullam, ipsa delectus dicta aut in voluptatibus hic ex dolore voluptates sint cumque quas omnis
        tempore? Voluptatibus, sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        delectus placeat laborum, libero beatae velit minus veniam ducimus quam totam veritatis rerum
       `;

        row.appendChild(img);
        row.appendChild(img2);
        row.appendChild(textBlock);

        const contacts = document.createElement("div");
        contacts.className = "contacts";
        for (let item in contactsArr) {
            const objKey = item;
            const objVal = contactsArr[item];
            const contact = document.createElement("a");
            Object.assign(contact, {
                className: "contactStart",
                href: objVal,
                target: "_blank",
            });
            const contactImg = document.createElement("img");
            Object.assign(contactImg, {
                className: "contactImg",
                src: `/public/common/images/${objKey}.png`,
            });
            contact.appendChild(contactImg);
            contacts.appendChild(contact);
        }
        const div = document.createElement("div");
        div.className = "main-div";
        div.appendChild(H1);
        div.appendChild(row);
        div.appendChild(contacts);
        return div;
    }
    static async render() {
        const contactsArr = await this.getContentApi(
            "contacts",
            "UwhT3lZgl8ZqcrISmc5r"
        );
        const result = this.renderAboutPage(contactsArr);
        return result.outerHTML;
    }
}

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
