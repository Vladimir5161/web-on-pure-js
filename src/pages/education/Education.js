import Basic from "../Basic";
import "./education.css";

const educationArray = [
    {
        name:
            "CRIMEAN UNIVERSITY FOR THE HUMANITIES, faculty of history, 2012 - 2014",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime deserunt inventore incidunt voluptatum perferendis quia ut illo magnam animi debitis rem accusantium, voluptatibus at atque hic aliquid velit voluptates!",
        data_title: "Crimean National University, Yalta city",
        src: "/public/common/images/kgu.jpg",
    },
    {
        name: "Lviv national University, faculty of history, 2014 - 2016",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime deserunt inventore incidunt voluptatum perferendis quia ut illo magnam animi debitis rem accusantium, voluptatibus at atque hic aliquid velit voluptates!",
        data_title: "Lviv National University, Lviv city",
        src: "/public/common/images/lnu.jpg",
    },
    {
        name: "Skill-up it, front-end courses",
        text:
            "Finished front end courses (08.2019 -12.2019), and after that continue to upgrade my skills by making new projects, learning new features and technologies",
        data_title: "",
        src: "/public/common/images/kgu.jpg",
    },
];
export class Education extends Basic {
    static render() {
        const divEducations = document.createElement("div");
        divEducations.className = "educations";
        const currentH1 = document.createElement("div");
        currentH1.className = "currentH1";
        currentH1.innerText = "My education";
        const educationId = document.createElement("div");
        educationId.id = "education";

        educationArray.map((item) => {
            const edu = document.createElement("div");
            edu.className = "educationBlockStart";
            const educationName = document.createElement("div"); // name
            educationName.className = "educationName";
            educationName.innerText = item.name;
            const educationText = document.createElement("div"); // text
            educationText.className = "educationText";
            educationText.innerText = item.text;

            const educationImageBlock = document.createElement("div");
            educationImageBlock.className = "educationImageBlock";
            const showInfoImageDiv = document.createElement("div");
            showInfoImageDiv.className = "showInfoImageDiv";
            Object.assign(showInfoImageDiv, {
                "data-title": item.data_title,
            });
            const educationImg = document.createElement("img");
            educationImg.className = "educationImg";
            Object.assign(educationImg, {
                src: item.src,
            });
            const educationImgClosed = document.createElement("img");
            educationImgClosed.className = "educationImgClosed";
            Object.assign(educationImgClosed, {
                src: item.src,
            });
            showInfoImageDiv.appendChild(educationImg);
            educationImageBlock.appendChild(showInfoImageDiv);
            educationImageBlock.appendChild(educationImgClosed);
            edu.appendChild(educationName);
            edu.appendChild(educationText);
            edu.appendChild(educationImageBlock);
            educationId.appendChild(edu);
        });
        divEducations.appendChild(currentH1);
        divEducations.appendChild(educationId);

        return divEducations.outerHTML;
    }
}

const observeItem = main.querySelector(".wrapper");
let observer = new MutationObserver((mutationRecords) => {
    const renderEducation = main.querySelectorAll(".educationImageBlock");
    if (mutationRecords[0].addedNodes[0].className === "educations") {
        const allBlocks = main.querySelectorAll(".educationBlockStart");
        for (let i = 0; i < allBlocks.length; i++) {
            setTimeout(
                () => (allBlocks[i].className = "educationBlock"),
                200 * i
            );
        }
        for (let item of renderEducation) {
            const imageDiv = item.querySelector(".showInfoImageDiv");
            imageDiv.addEventListener("mousedown", () => {
                const imageFull = item.querySelector(".educationImgClosed");
                imageFull.className = "educationImgOpened";
                imageFull.addEventListener("mousedown", () => {
                    imageFull.className = "educationImgClosed";
                });
            });
        }
    }
});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false,
});
