import Basic from "../Basic";
import "./education.css";

export class Education extends Basic {
  static renderEducation(educationArray) {
    const divEducations = this.createElement("div", "educations");
    const currentH1 = this.createElement("div", "currentH1", "My education", null, "H1");
    const education = this.createElement("div", null, null, null, "education");
    educationArray.map((item) => {
      const edu = this.createElement("div", "educationBlockStart");
      const educationName = this.createElement("div", "educationName", item.name);
      const educationText = this.createElement("div", "educationText", item.text);
      const educationImageBlock = this.createElement("div", "educationImageBlock");
      const educationImg = this.createElement("img", "educationImg" ,null, this.getImageURl(item.src));
      const educationImgDiv = this.createElement("div", "educationImgDivClosed", null, null, "educationImgDiv");
      const educationImgStart = this.createElement("img", "educationImgClosed", null,  this.getImageURl(item.src), "educationImgClosed");
      educationImgDiv.appendChild(educationImgStart);
      educationImageBlock.appendChild(educationImg);
      educationImageBlock.appendChild(educationImgDiv);
      edu.appendChild(educationName);
      edu.appendChild(educationText);
      if (item.src !== "") {
        edu.appendChild(educationImageBlock);
      }
      education.appendChild(edu);
    });
    divEducations.appendChild(currentH1);
    divEducations.appendChild(education);

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
