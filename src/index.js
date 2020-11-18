import "../public/common/reset.css";
import "./header.css";
import "./main.css";
import "./app.css";
import { Skill } from "./pages/skills/Skill";
import { Education } from "./pages/education/Education";
import { Experiance } from "./pages/experiance/Experiance";
import { Settings } from "./pages/settings/Settings";
import { AboutMe } from "./pages/aboutMe/AboutMe";

let header = document.getElementById("header-nav");
let main = document.getElementById("main");

const MenuBtn = header.querySelector(".menu-button");
const changeHeaderId = (value) => {
    header.id = value;
};
const openMenu = () => {
    changeHeaderId("header-nav-active"),
        setTimeout(() => {
            header.id = "header-nav-opened";
            Object.assign(MenuBtn, {
                disabled: false,
            });
        }, 1000);
};
const closeMenu = () => {
    changeHeaderId("header-nav-active-reverse"),
        setTimeout(() => {
            header.id = "header-nav";
            Object.assign(MenuBtn, {
                disabled: false,
            });
        }, 1000);
};
MenuBtn.addEventListener("click", (event) => {
    event.preventDefault();
    MenuBtn.style.backgroundColor === "rgb(140,142,120)"
        ? (MenuBtn.style.backgroundColor = "#333333")
        : (MenuBtn.style.backgroundColor = "rgb(140,142,120)");
    Object.assign(MenuBtn, {
        disabled: true,
    });
    if (header.id === "header-nav") {
        openMenu();
    } else {
        closeMenu();
    }
});

const menuLink = header.querySelectorAll(".nav-link");

const wrappedMain = main.querySelector(".wrapper");

const getCurrentTheme = () => {
    return JSON.parse(localStorage.getItem("theme"));
};
const setCurrentPage = (currPage) => {
    localStorage.setItem("page", JSON.stringify(currPage)); //saving a string ref to a  last opened page without changing page's hash to a local storage
};
const getCurrentPage = () => {
    return JSON.parse(localStorage.getItem("page"));
};
const CloseMenuFunc = () => {
    if (header.id === "header-nav-opened" || header.id === "header-nav") {
        closeMenu();
    } else
        setTimeout(() => {
            closeMenu();
        }, 500);
};
const changePathname = async (currPage, html) => {
    // string value of last opened page,
    await html();
    setCurrentPage(currPage);
    CloseMenuFunc();
    const theme = await getCurrentTheme();
    setTheme(theme);
}; // function to change local address and to set html that needed on page

menuLink.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        if (element.textContent === "About Me") {
            changePathname("/", htmlMain);
        } else if (element.textContent === "My education") {
            changePathname("/myEducation", htmlEducation);
        } else if (element.textContent === "My experience") {
            changePathname("/myExperience", htmlExperience);
        } else if (element.textContent === "My skills") {
            changePathname("/mySkills", htmlSkills);
        } else if (element.textContent === "Settings") {
            const modalWindow = main.querySelector(".modalWindowDiv");
            if (main.contains(modalWindow)) {
                Settings.closeModal(), CloseMenuFunc();
            } else {
                Settings.openModal();
                CloseMenuFunc();
            }
        }
    });
}); // function calls prev func with props

const setTheme = async (theme) => {
    if (theme === "black") {
        main.style.backgroundColor = "rgba(0,0,0, 0.9)";
        main.style.color = "white";
        const WorkExpBlock = main.querySelectorAll(".workExpBlock");
        for (let item of WorkExpBlock) {
            item.style.color = "white";
        }
        const imageInfo = main.querySelectorAll(".showInfoImageDiv");
        for (let item of imageInfo) {
            item.style.color = "black";
        }
        const skillsContent = main.querySelectorAll(".skillDivContent");
        const skillsContentBack = main.querySelectorAll(".skillDivContentBack");
        for (let item of skillsContent) {
            item.style.color = "rgba(0,0,0, 0.9)";
        }
        for (let item of skillsContentBack) {
            item.style.color = "rgba(0,0,0, 0.9)";
        }
        const images = main.querySelectorAll(".educationImg");
        for (let item of images) {
            item.style.color = "rgba(0,0,0, 0.9)";
        }
    } else {
        main.style.backgroundColor = "white";
        main.style.color = "black";
        const WorkExpBlock = main.querySelectorAll(".workExpBlock");
        for (let item of WorkExpBlock) {
            item.style.color = "black";
        }
    }
};

window.addEventListener("load", async (event) => {
    const currentPage = await getCurrentPage();
    const currentHTML =
        currentPage === "/myEducation"
            ? htmlEducation
            : currentPage === "/myExperience"
            ? htmlExperience
            : currentPage === "/mySkills"
            ? htmlSkills
            : currentPage === "/settings"
            ? htmlSetting
            : htmlMain;

    changePathname(currentPage, currentHTML);
}); // loads default html

let htmlMain = async () => {
    // this function calls the current page and renders it to the body
    const result = await AboutMe.render();
    wrappedMain.innerHTML = result;
};

let htmlEducation = () => {
    const result = Education.render();
    wrappedMain.innerHTML = result;
};

let htmlExperience = async () => {
    const result = await Experiance.render();
    wrappedMain.innerHTML = result;
};

let htmlSkills = () => {
    const result = Skill.render();
    wrappedMain.innerHTML = result;
};
