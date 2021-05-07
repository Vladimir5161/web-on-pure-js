import Basic from "../Basic";
import "./skills.css";

export class Skill extends Basic {
  static renderSkills(skillsArr) {
    const skills = document.createElement("div");
    skills.className = "skills";
    const currentH1 = document.createElement("div");
    currentH1.className = "currentH1";
    currentH1.id = "H1";
    currentH1.innerText = "My current Skills";
    const skillBlock = document.createElement("div");
    skillBlock.id = "skillBlock";
    skillsArr.reverse().map((item) => {
      const starsBack = document.createElement("div");
      starsBack.className = "starsBack";
      for (let i = 0; i < item.stars; i++) {
        const starBack = document.createElement("img");
        Object.assign(starBack, {
          alt: "",
          width: "20",
          heigth: "20",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
          className: "starsDiv",
        });

        starBack.onload = starsBack.appendChild(starBack);
      }
      if (!item.stars) return "";
      let skillName = document.createElement("div");

      skillName.className = "skillNameDiv";

      skillName.innerText = item.name;
      let skillDiv = document.createElement("div");
      skillDiv.className = "skillDivStart";

      let skillDivContentBack = document.createElement("div");
      let skillDivContent = document.createElement("div");
      skillDivContent.className = "skillDivContent";
      skillDivContentBack.className = "skillDivContentBack";
      const img = document.createElement("img");
      img.src = "/images/star.png";
      img.className = "skillDivContent";
      const img2 = document.createElement("img");
      img2.src = "/images/star.png";
      img2.className = "skillDivContentBack";

      img.onload = skillDivContent.appendChild(img);
      img.onload = skillDivContentBack.appendChild(img2);
      skillDivContent.appendChild(skillName);
      skillDivContentBack.appendChild(starsBack);
      skillDiv.addEventListener("click", () => {
        item.className = "skillDivAnimation";
      });
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
    for (let i = rend - 1; i < rend && i >= 0; i--) {
      setTimeout(() => (renderSkill[i].className = "skillDiv"), 1000 - i * 50);
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
