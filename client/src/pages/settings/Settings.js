import "./settings.css";
import Basic from "../Basic";

export class Settings extends Basic{
  static openModal() {
    const modalWrapper = this.createElement("div", "modalWrapper");
    const modalWindow = this.createElement("div", "modalWindow");
    const modalText = this.createElement("div", "modalText", "Choose Theme");
    const buttonYes = this.createElement("button", "buttonYes",  "Black");
    const buttonNo = this.createElement("button", "buttonNo", "White");
    const buttonsBlock = this.createElement("div", "buttonsBlock");
    modalWrapper.appendChild(modalWindow);
    modalWindow.appendChild(modalText);
    buttonsBlock.appendChild(buttonYes);
    buttonsBlock.appendChild(buttonNo);
    modalWindow.appendChild(buttonsBlock);
    main.appendChild(modalWrapper);
  }
  static closeModal() {
    const modal = main.querySelector(".modalWrapper");
    modal.className = "modalWrapperRemove";
    setTimeout(() => {
      modal.remove();
    }, 1000);
  }
}
// this will add event listeners once content will be loaded
const observeItem = main;
let observer = new MutationObserver((mutationRecords) => {
  if (
    mutationRecords[0].addedNodes[0] &&
    mutationRecords[0].addedNodes[0].className === "modalWrapper"
  ) {
    const buttonYes = observeItem.querySelector(".buttonYes");
    const setCurrentTheme = (currTheme) => {
      localStorage.setItem("theme", JSON.stringify(currTheme)); //saving a string ref to a  last opened page without changing page's hash to a local storage
    };
    buttonYes.addEventListener("mousedown", () => {
      main.style.backgroundImage = 'url("https://vanilla-js-back-end.web.app/images/night.jpg")';
      main.style.color = "white";
      const WorkExpBlock = main.querySelectorAll(".workExpBlock");
      for (let item of WorkExpBlock) {
        item.style.color = "white";
      }
      setCurrentTheme("black");
      Settings.closeModal();
    });
    const buttonNo = observeItem.querySelector(".buttonNo");
    buttonNo.addEventListener("mousedown", () => {
      main.style.backgroundImage = 'url("https://vanilla-js-back-end.web.app/images/nebo.jpg")';
      main.style.color = "black";
      const WorkExpBlock = main.querySelectorAll(".workExpBlock");
      for (let item of WorkExpBlock) {
        item.style.color = "black";
      }
      setCurrentTheme("white");
      Settings.closeModal();
    });
  }
});

observer.observe(observeItem, {
  childList: true, // наблюдать за непосредственными детьми
  characterDataOldValue: false,
});
