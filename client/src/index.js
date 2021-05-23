import "./main.css";
import "./reset.css";
import "./app.css";
import { Skill } from "./pages/skills/Skill";
import { Education } from "./pages/education/Education";
import { Experiance } from "./pages/experiance/Experiance";
import { Settings } from "./pages/settings/Settings";
import { AboutMe } from "./pages/aboutMe/AboutMe";
import { Menu } from "./header/Header";

let header = document.getElementById("header-nav");
let main = document.getElementById("main");
let htmlMenu = async () => {
  const result = await Menu.renderMenu();
  header.innerHTML = result;
};
htmlMenu();
const observeItem = header;

let observer = new MutationObserver((mutationRecords) => {
  if (mutationRecords[0].addedNodes[0].className === "headerDiv") {
    const MenuBtn = header.querySelector(".menu-button");
    const changeHeaderId = (value) => {
      header.id = value;
    };
    const openMenu = () => {
      changeHeaderId("header-nav-active");
      let Item1 = header.querySelector(".navAni0");
      Item1.id = "navAni0start";
      let Item2 = header.querySelector(".navAni1");
      Item2.id = "navAni1start";
      let Item3 = header.querySelector(".navAni2");
      Item3.id = "navAni2start";
      let Item4 = header.querySelector(".navAni3");
      Item4.id = "navAni3start";
      let Item5 = header.querySelector(".navAni4");
      Item5.id = "navAni4start";
      setTimeout(() => {
        header.id = "header-nav-opened";
        Object.assign(MenuBtn, {
          disabled: false,
        });
      }, 1000);
    };
    const closeMenu = () => {
      changeHeaderId("header-nav-active-reverse");
      let Item1 = header.querySelector(".navAni0");
      Item1.id = "";
      let Item2 = header.querySelector(".navAni1");
      Item2.id = "";
      let Item3 = header.querySelector(".navAni2");
      Item3.id = "";
      let Item4 = header.querySelector(".navAni3");
      Item4.id = "";
      let Item5 = header.querySelector(".navAni4");
      Item5.id = "";
      setTimeout(() => {
        header.id = "header-nav";
        Object.assign(MenuBtn, {
          disabled: false,
        });
      }, 1000);
    };
    main.addEventListener("click", () => {
      const bool = header.id === "header-nav-opened";
      bool ? closeMenu() : null;
    });
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
      if (header.id === "header-nav-active" || header.id === "header-nav") {
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
      await setTheme(theme);
      window.scrollTo({ top: -100, left: 100, behavior: "smooth" });
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
          const modalWindow = main.querySelector(".modalWrapper");
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
        main.style.backgroundImage = 'url("/images/night.jpg")';
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
        main.style.backgroundImage = 'url("/images/nebo.jpg")';
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
    window.addEventListener(
      "scroll",
      (e) => {
        const h1 = main.querySelector("#H1");
        if (window.scrollY > 100 && h1) {
          h1.className = "currentH1Hidden";
        } else if (window.scrollY < 100 && h1) {
          h1.className = "currentH1";
        }
      },
      false
    );
    let htmlMain = async () => {
      // this function calls the current page and renders it to the body
      const result = await AboutMe.render();
      wrappedMain.innerHTML = result;
    };

    let htmlEducation = async () => {
      const result = await Education.render();
      wrappedMain.innerHTML = result;
    };

    let htmlExperience = async () => {
      const result = await Experiance.render();
      wrappedMain.innerHTML = result;
    };

    let htmlSkills = async () => {
      const result = await Skill.render();
      wrappedMain.innerHTML = result;
    };
  }
});
observer.observe(observeItem, {
  childList: true, // наблюдать за непосредственными детьми
  characterDataOldValue: false,
});
