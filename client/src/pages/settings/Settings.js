import "./settings.css";

export class Settings {
  static openModal() {
    const Modal = document.createElement("div");
    Modal.className = "modalWindowDiv";
    const modalWindow = document.createElement("div");
    modalWindow.className = "modalWindow";
    Modal.appendChild(modalWindow);

    const modalText = document.createElement("div");
    modalText.className = "modalText";
    modalText.innerText = "Choose Theme";

    const buttonYes = document.createElement("button");
    buttonYes.className = "buttonYes";
    buttonYes.innerText = "Black";
    const buttonNo = document.createElement("button");
    buttonNo.className = "buttonNo";
    buttonNo.innerText = "White";

    modalWindow.appendChild(modalText);

    const buttonsBlock = document.createElement("div");
    buttonsBlock.className = "buttonsBlock";
    buttonsBlock.appendChild(buttonYes);
    buttonsBlock.appendChild(buttonNo);

    modalWindow.appendChild(buttonsBlock);

    main.appendChild(Modal);
  }
  static closeModal() {
    const modal = main.querySelector(".modalWindowDiv");
    modal.className = "modalWindowDivRemove";
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
    mutationRecords[0].addedNodes[0].className === "modalWindowDiv"
  ) {
    const buttonYes = observeItem.querySelector(".buttonYes");
    const setCurrentTheme = (currTheme) => {
      localStorage.setItem("theme", JSON.stringify(currTheme)); //saving a string ref to a  last opened page without changing page's hash to a local storage
    };
    buttonYes.addEventListener("mousedown", () => {
      main.style.backgroundImage = 'url("/images/night.jpg")';
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
      main.style.backgroundImage = 'url("/images/nebo.jpg")';
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
