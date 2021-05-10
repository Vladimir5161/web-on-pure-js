import "./experiance.css";
import Basic from "../Basic";

export class Experiance extends Basic {
  static renderExperiance(projects, works) {
    const experianceDiv = document.createElement("div");
    experianceDiv.className = "experianceDiv";
    const currentH1 = document.createElement("div");
    currentH1.className = "currentH1";
    currentH1.id = "H1";
    currentH1.innerText = "My current Experiance";
    const experianceId = document.createElement("div");
    experianceId.id = "experiance";
    const exp = document.createElement("div");
    exp.className = "expDivBlock";
    const workExpBlock = document.createElement("div"); // block of works
    workExpBlock.className = "workExpBlock";
    const myProjectsBlock = document.createElement("div"); // block of projects
    myProjectsBlock.className = "myProjectsBlock";

    const WorkExp = document.createElement("div");
    WorkExp.className = "H1";
    WorkExp.innerText = "My work experiance";
    const MyProj = document.createElement("div");
    MyProj.classList = "H1";
    MyProj.innerText = "My projects";
    exp.appendChild(WorkExp);
    exp.appendChild(workExpBlock);
    exp.appendChild(MyProj);
    exp.appendChild(myProjectsBlock);

    ///////////////////////////// Works Block
    works.map((item) => {
      const company = document.createElement("div");
      company.className = "company";
      company.innerText = `Company: ` + item.company;

      const position = document.createElement("div");
      position.className = "position";
      position.innerText = `Position: ` + item.position;

      const responsibilities = document.createElement("div");
      responsibilities.className = "responsibilities";
      const spanResp = document.createElement("span");
      spanResp.className = "spanResp";
      spanResp.innerText = `Responsibilities: `;
      responsibilities.appendChild(spanResp);

      const array1 = item.responsibilities.split("--");
      array1.map((text) => {
        if (text) {
          const textDiv = document.createElement("p");
          textDiv.className = "textDiv";
          textDiv.textContent = `- ` + text;
          responsibilities.appendChild(textDiv);
        }
      });

      const achievments = document.createElement("div");
      achievments.className = "achievments";
      const spanAchi = document.createElement("span");
      spanAchi.className = "spanAchi";
      spanAchi.innerText = `Achievments: `;
      achievments.appendChild(spanAchi);

      const array2 = item.achievments.split("--");
      array2.map((text) => {
        if (text) {
          const textDiv = document.createElement("p");
          textDiv.className = "textDiv";
          textDiv.textContent = `- ` + text;
          achievments.appendChild(textDiv);
        }
      });

      const workInfo = document.createElement("div");
      workInfo.className = "workInfo";
      const workInfoWrapper = document.createElement("div");
      workInfoWrapper.className = "workInfoWrapper";
      workInfo.appendChild(workInfoWrapper);
      const workImg = document.createElement("img");
      Object.assign(workImg, {
        className: "workImg",
        src: item.img,
      });
      const WorkInfoBlock = document.createElement("div");
      WorkInfoBlock.className = "WorkInfoBlockHidden";
      WorkInfoBlock.id = "WorkInfoBlock";
      WorkInfoBlock.appendChild(responsibilities);
      WorkInfoBlock.appendChild(achievments);

      const ShowMoreBtn = document.createElement("button");
      ShowMoreBtn.className = "ShowMoreBtn";
      ShowMoreBtn.innerText = "Show Info";

      workImg.onload = workInfoWrapper.appendChild(workImg);
      workInfoWrapper.appendChild(WorkInfoBlock);
      workInfo.appendChild(ShowMoreBtn);

      workExpBlock.appendChild(company);
      workExpBlock.appendChild(position);
      workExpBlock.appendChild(workInfo);
    });

    ///////////////////////// Projects Block

    projects.map((proj) => {
      const projName = document.createElement("div");
      projName.className = "projName";
      projName.innerText = `Project Name: ` + proj.projName;
      const ImageDiv = document.createElement("div");
      const projImgLink = document.createElement("a");
      projImgLink.id = "projImgLink";
      Object.assign(projImgLink, {
        className: "projImgLink",
        href: proj.projLink,
      });
      const projWindow = document.createElement("img");
      projWindow.id = "projWindow";
      Object.assign(projWindow, {
        className: "projWindow",
        src: proj.img,
      });
      projWindow.onload = ImageDiv.appendChild(projWindow);
      projImgLink.innerText = "Open";
      ImageDiv.className = "ImageDiv";
      ImageDiv.appendChild(projImgLink);

      const techDivBlock = document.createElement("div");
      techDivBlock.className = "techDivBlock";
      for (let i = 0; i < proj.arr.length; i++) {
        const techDiv = document.createElement("div");
        techDiv.className = `techDiv techDiv${i}`;
        techDiv.innerText = proj.arr[i];
        techDivBlock.appendChild(techDiv);
      }
      ImageDiv.appendChild(techDivBlock);

      const projectInfoDiv = document.createElement("div");
      projectInfoDiv.className = "projectInfoDiv";

      const projDescr = document.createElement("div");
      projDescr.className = "projDescr";
      const spanResp = document.createElement("span");
      spanResp.className = "spanResp";
      spanResp.innerText = `Description: `;
      projDescr.appendChild(spanResp);

      const array1 = proj.description.split("--");
      array1.map((text) => {
        if (text) {
          const textDiv = document.createElement("p");
          textDiv.className = "textDiv";
          textDiv.textContent = `- ` + text;
          projDescr.appendChild(textDiv);
        }
      });

      const techStack = document.createElement("div");
      techStack.className = "techStack";
      const spanAchi = document.createElement("span");
      spanAchi.className = "spanAchi";
      spanAchi.innerText = `Technology Stack: `;
      techStack.appendChild(spanAchi);

      const array2 = proj.techStack.split("--");
      array2.map((text) => {
        if (text) {
          const textDiv = document.createElement("p");
          textDiv.className = "textDiv";
          textDiv.textContent = `- ` + text;
          techStack.appendChild(textDiv);
        }
      });
      const projInfoBlock = document.createElement("div");
      projInfoBlock.className = "projInfoBlockHidden";
      projInfoBlock.id = "projInfoBlock";
      projInfoBlock.appendChild(projDescr);
      projInfoBlock.appendChild(techStack);

      const projectInfoDivWrapper = document.createElement("div");
      projectInfoDivWrapper.className = "projectInfoDivWrapper";

      projectInfoDivWrapper.appendChild(ImageDiv);
      projectInfoDivWrapper.appendChild(projInfoBlock);
      const ShowMoreBtn = document.createElement("button");
      ShowMoreBtn.className = "ShowMoreBtn";
      ShowMoreBtn.innerText = "Show Info";
      projectInfoDiv.appendChild(projectInfoDivWrapper);
      projectInfoDiv.appendChild(ShowMoreBtn);

      myProjectsBlock.appendChild(projName);
      myProjectsBlock.appendChild(projectInfoDiv);
    });
    experianceId.appendChild(exp);
    experianceDiv.appendChild(currentH1);
    experianceDiv.appendChild(experianceId);
    return experianceDiv;
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
  const render = main.querySelectorAll(".experianceDiv");
  console.log(mutationRecords[0].addedNodes[0]);
  if (mutationRecords[0].addedNodes[0].className === "experianceDiv") {
    const WorkInfo = main.querySelectorAll(".workInfo");
    for (let i of WorkInfo) {
      const showMore = i.querySelector(".ShowMoreBtn");
      const workInfoBlock = i.querySelector("#WorkInfoBlock");
      const setShowWorkInfo = () => {
        if (workInfoBlock.className === "WorkInfoBlock") {
          workInfoBlock.className = "WorkInfoBlockHidden";
        } else {
          const openedInfo = i.querySelector(".WorkInfoBlock");
          if (openedInfo) {
            openedInfo.className = "WorkInfoBlockHidden";
          }
          workInfoBlock.className = "WorkInfoBlock";
        }
      };
      showMore.addEventListener("click", () => {
        setShowWorkInfo();
      });
    }
    const projectsImages = main.querySelectorAll(".ImageDiv");
    for (let i of projectsImages) {
      const ProjImage = i.querySelector("#projWindow");
      const ProjInfo = i.querySelector(".techDivBlock");
      const projImgLink = i.querySelector("#projImgLink");
      const SetProjOpen = () => {
        ProjImage.className =
          ProjImage.className === "projWindowOpened"
            ? "projWindow"
            : "projWindowOpened";
        ProjInfo.style.display =
          ProjImage.className === "projWindowOpened" ? "grid" : "none";
        projImgLink.style.display =
          ProjImage.className === "projWindowOpened" ? "block" : "none";
      };
      ProjImage.addEventListener("click", () => {
        SetProjOpen();
      });
    }
    const projects = main.querySelectorAll(".projectInfoDiv");
    for (let i of projects) {
      const projInfoBlock = i.querySelector("#projInfoBlock");
      const showMore = i.querySelector(".ShowMoreBtn");
      const setShowProjInfo = () => {
        if (projInfoBlock.className === "projInfoBlock") {
          projInfoBlock.className = "projInfoBlockHidden";
        } else {
          const openedInfo = i.querySelector(".projInfoBlock");
          if (openedInfo) {
            openedInfo.className = "projInfoBlockHidden";
          }
          projInfoBlock.className = "projInfoBlock";
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
