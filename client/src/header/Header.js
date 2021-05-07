import "./header.css";

export class Menu {
    static renderMenu() {
        const headerTop = document.createElement("div");
        headerTop.className = "header-top";
        const nameUnderInfo = document.createElement("div");
        nameUnderInfo.className = "nameUnderInfo";
        nameUnderInfo.innerText = "My Resume"
        const menuButton = document.createElement("button");
        menuButton.className = "menu-button";
        const buttonIcon = document.createElement("span");
        buttonIcon.className =
            "iconify icon:feather:align-justify icon-inline:false";
        const nav = document.createElement("nav");
        nav.className = "navigation-block";
        const ul = document.createElement("ul");
        ul.className = "nav flex-column";
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
            const li = document.createElement("li");
            let itemAni = icons.indexOf(item)
            li.className = `nav-item navigation-point navAni${itemAni}`;
            const a = document.createElement("a");
            a.className = "nav-link";
            Object.assign(a, {
                href: "#",
            });
            const span = document.createElement("span");
            span.className = item.class;

            a.appendChild(span);
            const p = document.createElement("p");
            p.innerText = item.name;
            a.appendChild(p);
            li.appendChild(a);
            ul.appendChild(li);
        });
        const createdBy = document.createElement("div");
        createdBy.className = "menu-bottom";

        createdBy.innerText = "Created by";
        const spanName = document.createElement("span");
        spanName.className = "authorName";
        spanName.innerText = "Vladimir Vagaev";
        createdBy.appendChild(spanName);
        nav.appendChild(ul);
        headerTop.appendChild(nameUnderInfo);
        const header = document.createElement("div");
        menuButton.appendChild(buttonIcon);
        const createdByDiv = document.createElement("div");
        createdByDiv.className = "menu-bottom-div";
        createdByDiv.appendChild(createdBy)
        header.className = "headerDiv";
        header.appendChild(headerTop);
        header.appendChild(menuButton);
        header.appendChild(nav);
        header.appendChild(createdByDiv);
        return header.outerHTML;
    }
}

const observeItem = document.querySelector(".app");
let observer = new MutationObserver((mutationRecords) => {
    mutationRecords[0].addedNodes[0].className === "main-div";
    const device = window.innerHeight > window.innerWidth;
    device
        ? (observeItem.querySelectorAll(".header-top").className = "header-top")
        : (observeItem.querySelectorAll(".header-top").className =
              "header-top-horizontal");
});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false,
});
