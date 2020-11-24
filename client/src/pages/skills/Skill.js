import "./skills.css";

let skillsarr = [
    {
        id: 1,
        stars: 4,
        icon:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
        name: "JS",
    },
    {
        id: 2,
        stars: 5,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "CSS",
    },
    {
        id: 3,
        stars: 5,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "HTML",
    },
    {
        is: 4,
        stars: 4,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "React",
    },
    {
        id: 5,
        stars: 4,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "Redux",
    },
    {
        is: 6,
        stars: 4,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "React Hooks",
    },
    {
        id: 7,
        stars: 3,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "Redux Thunk",
    },
    {
        id: 8,
        stars: 4,
        icon:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
        name: "Redux Form",
    },
    {
        id: 9,
        stars: 3,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "axios",
    },
    {
        id: 10,
        stars: 2,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "lodash",
    },
    {
        is: 11,
        stars: 4,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "Git",
    },
    {
        id: 12,
        stars: 3,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "firebase",
    },
    {
        is: 13,
        stars: 3,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "OOP",
    },
    {
        is: 14,
        stars: 2,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "Next JS",
    },
    {
        is: 15,
        stars: 4,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "ES",
    },
    {
        is: 16,
        stars: 3,
        icon:
            "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png",
        name: "selectors",
    },
    {
        id: 17,
        stars: 4,
        icon:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
        name: "Rest Api",
    },
];

export class Skill {
    static render() {
        const skills = document.createElement("div");
        skills.className = "skills";
        const currentH1 = document.createElement("div");
        currentH1.className = "currentH1";
        currentH1.innerText = "My current Skills";
        const skillBlock = document.createElement("div");
        skillBlock.id = "skillBlock";
        skillsarr.map((item) => {
            const stars = document.createElement("div");
            const starsBack = document.createElement("div");
            for (let i = 0; i < item.stars; i++) {
                const star = document.createElement("img");
                Object.assign(star, {
                    alt: "",
                    width: "20",
                    heigth: "20",
                    src:
                        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
                    className: "starsDiv",
                });
                const starBack = document.createElement("img");
                Object.assign(starBack, {
                    alt: "",
                    width: "20",
                    heigth: "20",
                    src:
                        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
                    className: "starsDiv",
                });
                stars.appendChild(star);
                starsBack.appendChild(starBack);
            }
            if (!item.stars) return "";
            let skillName = document.createElement("div");
            let skillNameBack = document.createElement("div");

            skillName.className = "skillNameDiv";
            skillNameBack.className = "skillNameDiv";

            skillName.innerText = item.name;
            skillNameBack.innerText = item.name;
            let skillDiv = document.createElement("div");
            skillDiv.className = "skillDivStart";

            let skillDivContentBack = document.createElement("div");
            let skillDivContent = document.createElement("div");
            skillDivContent.className = "skillDivContent";
            skillDivContentBack.className = "skillDivContentBack";
            skillDivContent.appendChild(skillNameBack);
            skillDivContentBack.appendChild(skillName);
            skillDivContent.appendChild(starsBack);
            skillDivContentBack.appendChild(stars);
            skillDiv.addEventListener("click", () => {
                item.className = "skillDivAnimation";
            });
            skillDiv.appendChild(skillDivContentBack);
            skillDiv.appendChild(skillDivContent);
            skillBlock.appendChild(skillDiv);
        });
        skills.appendChild(currentH1);
        skills.appendChild(skillBlock);
        return skills.outerHTML;
    }
}

// this will add event listeners once content will be loaded
const observeItem = main.querySelector(".wrapper");
let observer = new MutationObserver((mutationRecords) => {
    const renderSkill = main.querySelectorAll(".skillDivStart");
    if (mutationRecords[0].addedNodes[0].className === "skills") {
        const rend = renderSkill.length;
        for (let i = rend - 1; i < rend && i >= 0; i--) {
            setTimeout(
                () => (renderSkill[i].className = "skillDiv"),
                1000 - i * 50
            );
        }
        for (let item of renderSkill) {
            item.addEventListener("click", () => {
                Object.assign(item, {
                    className:
                        item.className === "skillDivAnimation"
                            ? "skillDivAnimationRotate"
                            : "skillDivAnimation",
                });
            });
        }
    }
});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false,
});
