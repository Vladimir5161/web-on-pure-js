import "./experiance.css";
import Basic from "../Basic";

export class Experiance extends Basic {
  static renderExperiance(projects, works) {
    const experianceWrapper = this.createElement("div", "experianceWrapper");
    const currentH1 = this.createElement("div", "currentH1", "My current Experiance", null, "H1");
    const experiance = this.createElement("div", null,null,null, "experiance");
    const exp = this.createElement("div", "expDivBlock");
    const workExpBlock = this.createElement("div", "workExpBlock");
    const myProjectsBlock = this.createElement("div", "myProjectsBlock");
    const workExp = this.createElement("div", "H1", "My work experiance");
    const myProj = this.createElement("div", "H1", "My projects");
    exp.appendChild(workExp);
    exp.appendChild(workExpBlock);
    exp.appendChild(myProj);
    exp.appendChild(myProjectsBlock);

    ///////////////////////////// Works Block
    works.map((item) => {
      const company = this.createElement("div", "company", `Company: ` + item.company);
      const position = this.createElement("div", "position",  `Position: ` + item.position);
      const responsibilities = this.createElement("div", "responsibilities");
      const spanResp = this.createElement("span", "spanResp", `Responsibilities: `);
      responsibilities.appendChild(spanResp);

      const array1 = item.responsibilities.split("--");
      array1.map((text) => {
        if (text) {
          const textDiv = this.createElement("p", "textDiv", `- ` + text);
          responsibilities.appendChild(textDiv);
        }
      });

      const achievments = this.createElement("div", "achievments");
      const spanAchiev = this.createElement("span", "spanAchiev", `Achievments: `);
      achievments.appendChild(spanAchiev);

      const techArray = item.achievments.split("--");
      techArray.map((text) => {
        if (text) {
          const textDiv = this.createElement("p","textDiv", `- ` + text);
          achievments.appendChild(textDiv);
        }
      });

      const workInfo = this.createElement("div", "workInfo");
      const workInfoWrapper = this.createElement("div", "workInfoWrapper");
      const workImg = this.createElement("img", "workImg", null, item.img);
      const workInfoBlock = this.createElement("div", "workInfoBlockHidden", null, null,  "workInfoBlock");
      const showMoreBtn = this.createElement("button", "showMoreBtn", "Show Info");
      workInfo.appendChild(workInfoWrapper);
      workInfoBlock.appendChild(responsibilities);
      workInfoBlock.appendChild(achievments);

      workImg.onload = workInfoWrapper.appendChild(workImg);
      workInfoWrapper.appendChild(workInfoBlock);
      workInfo.appendChild(showMoreBtn);
      workExpBlock.appendChild(company);
      workExpBlock.appendChild(position);
      workExpBlock.appendChild(workInfo);
    });

    ///////////////////////// Projects Block

    projects.map((proj) => {
      const projectName = this.createElement("div", "projectName", `Project Name: ` + proj.projectName);
      const imageWrapper = this.createElement("div", "imageWrapper");
      const projectImgLink = this.createElement("a", "projectImgLink", null, null ,"projectImgLink");
      Object.assign(projectImgLink, {
        href: proj.projLink,
      });
      const projectWindow = this.createElement("img", "projectWindow", "Open", this.getImageURl(proj.img) ,"projectWindow");
      projectWindow.onload = imageWrapper.appendChild(projectWindow);
      const techDivBlock = this.createElement("div", "techDivBlock");
      for (let i = 0; i < proj.arr.length; i++) {
        const techDiv = this.createElement("div", `techDiv techDiv${i}`, proj.arr[i]);
        techDivBlock.appendChild(techDiv);
      }
      const projectInfoDiv = this.createElement("div", "projectInfoDiv");
      const projectDescription = this.createElement("div", "projectDescription");
      const spanResp = this.createElement("span", "spanResp", `Description: `);
      imageWrapper.appendChild(projectImgLink);
      imageWrapper.appendChild(techDivBlock);
      projectDescription.appendChild(spanResp);

      const array1 = proj.description.split("--");
      array1.map((text) => {
        if (text) {
          const textDiv = this.createElement("p", "textDiv",  `- ` + text);
          projectDescription.appendChild(textDiv);
        }
      });

      const techStack = this.createElement("div", "techStack");
      const spanAchiev = this.createElement("span", "spanAchiev", `Technology Stack: `);
      techStack.appendChild(spanAchiev);

      const techArray = proj.techStack.split("--");
      techArray.map((text) => {
        if (text) {
          const textDiv = this.createElement("p",  "textDiv", `- ` + text);
          techStack.appendChild(textDiv);
        }
      });
      const projectInfoBlock = this.createElement("div","projectInfoBlockHidden", null, null,"projectInfoBlock");
      projectInfoBlock.appendChild(projectDescription);
      projectInfoBlock.appendChild(techStack);

      const projectInfoWrapper = this.createElement("div", "projectInfoWrapper");

      projectInfoWrapper.appendChild(imageWrapper);
      projectInfoWrapper.appendChild(projectInfoBlock);
      const showMoreBtn = this.createElement("button", "showMoreBtn",  "Show Info");
      projectInfoDiv.appendChild(projectInfoWrapper);
      projectInfoDiv.appendChild(showMoreBtn);
      myProjectsBlock.appendChild(projectName);
      myProjectsBlock.appendChild(projectInfoDiv);
    });
    experiance.appendChild(exp);
    experianceWrapper.appendChild(currentH1);
    experianceWrapper.appendChild(experiance);
    return experianceWrapper;
  }
  static async render() {
    const projects = await this.getContentApi("projects");
    const works = await this.getContentApi("works");
    const result = this.renderExperiance(projects, works);
    return result.outerHTML;
  }
}

const observeItem = main.querySelector(".wrapper");
let observer = new MutationObserver((mutationRecords) => {
  const render = main.querySelectorAll(".experianceWrapper");
  if (mutationRecords[0].addedNodes[0].className === "experianceWrapper") {
    const WorkInfo = main.querySelectorAll(".workInfo");
    for (let i of WorkInfo) {
      const showMore = i.querySelector(".showMoreBtn");
      const workInfoBlock = i.querySelector("#workInfoBlock");
      const setShowWorkInfo = () => {
        if (workInfoBlock.className === "workInfoBlock") {
          workInfoBlock.className = "workInfoBlockHidden";
        } else {
          const openedInfo = i.querySelector(".workInfoBlock");
          if (openedInfo) {
            openedInfo.className = "workInfoBlockHidden";
          }
          workInfoBlock.className = "workInfoBlock";
        }
      };
      showMore.addEventListener("click", () => {
        setShowWorkInfo();
      });
    }
    const projectsImages = main.querySelectorAll(".imageWrapper");
    for (let i of projectsImages) {
      const ProjImage = i.querySelector("#projectWindow");
      const ProjInfo = i.querySelector(".techDivBlock");
      const projectImgLink = i.querySelector("#projectImgLink");
      const SetProjOpen = () => {
        ProjImage.className =
          ProjImage.className === "projectWindowOpened"
            ? "projectWindow"
            : "projectWindowOpened";
        ProjInfo.style.display =
          ProjImage.className === "projectWindowOpened" ? "grid" : "none";
        projectImgLink.style.display =
          ProjImage.className === "projectWindowOpened" ? "block" : "none";
      };
      ProjImage.addEventListener("click", () => {
        SetProjOpen();
      });
    }
    const projects = main.querySelectorAll(".projectInfoDiv");
    for (let i of projects) {
      const projectInfoBlock = i.querySelector("#projectInfoBlock");
      const showMore = i.querySelector(".showMoreBtn");
      const setShowProjInfo = () => {
        if (projectInfoBlock.className === "projectInfoBlock") {
          projectInfoBlock.className = "projectInfoBlockHidden";
        } else {
          const openedInfo = i.querySelector(".projectInfoBlock");
          if (openedInfo) {
            openedInfo.className = "projectInfoBlockHidden";
          }
          projectInfoBlock.className = "projectInfoBlock";
        }
      };
      showMore.addEventListener("click", () => {
        setShowProjInfo();
      });
    }
  }
});

observer.observe(observeItem, {
  childList: true, // наблюдать за непосредственными детьми
  characterDataOldValue: false,
});
