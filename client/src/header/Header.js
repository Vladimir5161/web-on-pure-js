import "./header.css";
import Basic from "../pages/Basic";

export class Menu extends Basic {
    static renderMenu() {
        const headerTop = this.createElement("div", "header-top");
        const nameUnderInfo = this.createElement("div", "nameUnderInfo", "My Resume");
        const menuButton = this.createElement("button", "menu-button");
        const buttonIcon = this.createElement("span", "iconify icon:feather:align-justify icon-inline:false");
        const nav = this.createElement("nav", "navigation-block");
        const ul = this.createElement("ul", "nav flex-column");
        const icons = [
            {
                class: "iconify icon:feather:home icon-inline:false",
                name: "About Me",
            },
            {
                class: "iconify icon:feather:book icon-inline:false",
                name: "My education",
            },
            {
                class: "iconify icon:feather:briefcase icon-inline:false",
                name: "My experience",
            },
            {
                class: "iconify icon:feather:box icon-inline:false",
                name: "My skills",
            },
            {
                class: "iconify icon:feather:settings icon-inline:false",
                name: "Settings",
            },
        ];


        icons.map((item) => {
            const itemAni = icons.indexOf(item)
            const li = this.createElement("li", `nav-item navigation-point navAni${itemAni}`);
            const a = this.createElement("a", "nav-link");
            Object.assign(a, {
                href: "#",
            });
            const span = this.createElement("span", item.class);
            const p = this.createElement("p", null, item.name);
            a.appendChild(span)
            a.appendChild(p);
            li.appendChild(a);
            ul.appendChild(li);
        });
        const createdByWrapper = this.createElement("div", "menu-bottom-div");
        const createdBy = this.createElement("div", "menu-bottom", "Created by");
        const spanName = this.createElement("span", "authorName", "Vladimir Vagaev");
        const header = this.createElement("div", "headerDiv");
        nav.appendChild(ul);
        headerTop.appendChild(nameUnderInfo);
        menuButton.appendChild(buttonIcon);
        createdBy.appendChild(spanName);
        createdByWrapper.appendChild(createdBy)
        header.appendChild(headerTop);
        header.appendChild(menuButton);
        header.appendChild(nav);
        header.appendChild(createdByWrapper);
        return header.outerHTML;
    }
}

const observeItem = document.querySelector(".app");
let observer = new MutationObserver((mutationRecords) => {
    if (mutationRecords[0].addedNodes[0].className === "main-div") {
        const device = window.innerHeight > window.innerWidth;
        device
            ? (observeItem.querySelectorAll(".header-top").className = "header-top")
            : (observeItem.querySelectorAll(".header-top").className =
                "header-top-horizontal");
    }
});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false,
});
