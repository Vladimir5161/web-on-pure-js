import "./aboutMe.css";
import Basic from "../Basic";

export class AboutMe extends Basic {
    static renderAboutPage(contactsArr) {
        const H1 = document.createElement("h1");
        H1.className = "title";
        H1.textContent = "Vladimir Vagaev";
        const dateBrth = document.createElement("h1");
        dateBrth.className = "title dateBrth";
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
        dateBrth.textContent = `Date of Birth(Age): 05.11.1993(${correctFullYears})`;
        //
        const h1Row = document.createElement("div");
        h1Row.className = "h1Row";
        h1Row.appendChild(H1);
        h1Row.appendChild(dateBrth);
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
        delectus placeat laborum, libero beatae velit minus veniam ducimus quam totam veritatis rerumLorem ipsum dolor sit amet consectetur adipisicing elit. A odio labore sit
        ullam, ipsa delectus dicta aut in voluptatibus hic ex dolore voluptates sint cumque quas omnis
        tempore? Voluptatibus, sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        delectus placeat laborum, libero beatae velit minus veniam ducimus quam totam veritatis rerum
       `;

        row.appendChild(img);
        row.appendChild(img2);
        row.appendChild(textBlock);

        // here we will create my contact icons
        const contacts = document.createElement("div");
        contacts.className = "contacts";
        const contactsTitle = document.createElement("h1");
        contacts.appendChild(contactsTitle);
        contactsTitle.className = "title";
        contactsTitle.textContent = "Contacts: ";
        for (let item in contactsArr) {
            const objKey = item;
            const objVal = contactsArr[item];
            const contact = document.createElement("a");
            Object.assign(contact, {
                className: "contactStart",
                href: typeof objVal === "number" ? `tel:+${objVal}` : objVal,
                target: "_blank",
            });
            const contactImg = document.createElement("img");
            Object.assign(contactImg, {
                className: "contactImg",
                src: `../public/common/images/${objKey}.png`,
            });
            contact.appendChild(contactImg);
            contacts.appendChild(contact);
        }
        const div = document.createElement("div");
        div.className = "main-div";
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
        const result = this.renderAboutPage(contactsArr);
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
