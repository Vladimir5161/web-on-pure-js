import Basic from "../Basic";
import "./education.css";

export class Education extends Basic {
  static renderEducation(educationArray) {
    const divEducations = document.createElement("div");
    divEducations.className = "educations";
    const currentH1 = document.createElement("div");
    currentH1.className = "currentH1";
    currentH1.id = "H1";
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
      const educationImg = document.createElement("img");
      educationImg.className = "educationImg";

      Object.assign(educationImg, {
        src: item.src,
      });
      const educationImgDiv = document.createElement("div");
      educationImgDiv.className = "educationImgDivClosed";
      educationImgDiv.id = "educationImgDiv";
      const educationImgStart = document.createElement("img");
      educationImgStart.className = "educationImgClosed";
      educationImgStart.id = "educationImgClosed";
      Object.assign(educationImgStart, {
        src: item.src,
      });
      educationImgDiv.appendChild(educationImgStart);
      educationImageBlock.appendChild(educationImg);
      educationImageBlock.appendChild(educationImgDiv);
      edu.appendChild(educationName);
      edu.appendChild(educationText);
      if (item.src !== "") {
        edu.appendChild(educationImageBlock);
      }
      educationId.appendChild(edu);
    });
    divEducations.appendChild(currentH1);
    divEducations.appendChild(educationId);

    return divEducations;
  }
  static async render() {
    const educationArray = await this.getContentApi("education");
    const result = this.renderEducation(educationArray);
    return result.outerHTML;
  }
}
// this will add event listeners once content will be loaded
const observeItem = main.querySelector(".wrapper");
let observer = new MutationObserver((mutationRecords) => {
  const renderEducation = main.querySelectorAll(".educationImageBlock");
  if (mutationRecords[0].addedNodes[0].className === "educations") {
    const allBlocks = main.querySelectorAll(".educationBlockStart");
    for (let i = 0; i < allBlocks.length; i++) {
      setTimeout(() => (allBlocks[i].className = "educationBlock"), 200 * i);
    }
    // logic about showing or hiding full size image window on eductation page, and do not running animation when pahe is loaded
    for (let item of renderEducation) {
      const imageBig = item.querySelector("#educationImgClosed");
      const educationImgDiv = item.querySelector("#educationImgDiv");
      const setClassname = (value) => {
        if (value) {
          educationImgDiv.className = "educationImgDiv";
          imageBig.className = "educationImgOpened";
        } else {
          educationImgDiv.className = "educationImgDivClosed";
          imageBig.className = "educationImgClosed";
        }
      };
      educationImgDiv.addEventListener("mousedown", (event) => {
        console.log(event);
        if (
          educationImgDiv.className === "educationImgDiv" &&
          event.target.className !== "educationImgOpened"
        ) {
          setClassname(false);
        } else {
          setClassname(true);
        }
      });
    }
  }
});

observer.observe(observeItem, {
  childList: true, // наблюдать за непосредственными детьми
  characterDataOldValue: false,
});
