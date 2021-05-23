import Basic from "../Basic";
import "./skills.css";

export class Skill extends Basic {
  static renderSkills(skillsArr) {
    const skills = this.createElement("div", "skills");
    const currentH1 = this.createElement("div", "currentH1", "My current Skills", null, "H1");
    const skillBlock = this.createElement("div", null, null, null, "skillBlock");
    skillsArr.reverse().map((item) => {
      const starsBack = this.createElement("div", "starsBack");
      for (let i = 0; i < item.stars; i++) {
        const starBack = this.createElement("img", "starsDiv", null, "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png");
        Object.assign(starBack, {
          alt: "",
          width: "20",
          heigth: "20",
        });
        starBack.onload = starsBack.appendChild(starBack);
      }
      if (!item.stars) return "";
      let skillName = this.createElement("div", "skillNameDiv", item.name);
      let skillDiv = this.createElement("div", "skillDivStart");
      let skillDivContentBack = this.createElement("div",  "skillDivContentBack");
      let skillDivContent = this.createElement("div",  "skillDivContent");
      const imgFront = this.createElement("img", "skillDivContent", null, this.getImageURl('star.png'));
      const imgBack = this.createElement("img", "skillDivContentBack", null, this.getImageURl('star.png'));
      imgFront.onload = skillDivContent.appendChild(imgFront);
      imgFront.onload = skillDivContentBack.appendChild(imgBack);
      skillDivContent.appendChild(skillName);
      skillDivContentBack.appendChild(starsBack);
      skillDiv.appendChild(skillDivContentBack);
      skillDiv.appendChild(skillDivContent);
      skillBlock.appendChild(skillDiv);
    });
    skills.appendChild(currentH1);
    skills.appendChild(skillBlock);
    return skills;
  }
  static async render() {
    const skillsArr = await this.getContentApi("skills");
    const result = this.renderSkills(skillsArr);
    return result.outerHTML;
  }
}

// this will add event listeners once content will be loaded
const observeItem = main.querySelector(".wrapper");
let observer = new MutationObserver((mutationRecords) => {
  const renderSkill = main.querySelectorAll(".skillDivStart");
  if (mutationRecords[0].addedNodes[0].className === "skills") {
    const rend = renderSkill.length;
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
    for (let i = rend - 1; i < rend && i >= 0; i--) {
      setTimeout(() => (renderSkill[i].className = "skillDiv"), 1000 - i * 50);
    }
  }
});

observer.observe(observeItem, {
  childList: true, // наблюдать за непосредственными детьми
  characterDataOldValue: false,
});
