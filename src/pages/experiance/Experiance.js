import "./experiance.css"
import Basic from "../Basic"


export class Experiance extends Basic {
    static renderExperiance(projects, works) {
        const experianceDiv = document.createElement('div')
        experianceDiv.className = "experianceDiv"
        const currentH1 = document.createElement('div')
        currentH1.className = "currentH1"
        currentH1.innerText = "My current Experiance"
        const experianceId = document.createElement('div')
        experianceId.id = "experiance"
        const exp = document.createElement("div")
        exp.className = "expDivBlock"
        const workExpBlock = document.createElement("div") // block of works
        workExpBlock.className = "workExpBlock"
        const myProjectsBlock = document.createElement("div") // block of projects
        myProjectsBlock.className = "myProjectsBlock"

        const WorkExp = document.createElement("div")
        WorkExp.className = "H1"
        WorkExp.innerText = "My work experiance"
        const MyProj = document.createElement("div")
        MyProj.classList = "H1"
        MyProj.innerText = "My projects"
        exp.appendChild(WorkExp);
        exp.appendChild(workExpBlock);
        exp.appendChild(MyProj);
        exp.appendChild(myProjectsBlock);

        ///////////////////////////// Works Block
        works.map(item => {
            const company = document.createElement("div")
            company.className = "company"
            company.innerText = `Company: ` + item.company

            const position = document.createElement("div")
            position.className = "position"
            position.innerText = `Position: ` + item.position

            const responsibilities = document.createElement("div")
            responsibilities.className = "responsibilities"
            const spanResp = document.createElement("span")
            spanResp.className = 'spanResp'
            spanResp.innerText = `Responsibilities: `
            responsibilities.appendChild(spanResp)

            const array1 = item.responsibilities.split("--")
            array1.map(text => {
                if (text) {
                    const textDiv = document.createElement("p")
                    textDiv.className = "textDiv"
                    textDiv.textContent = `- ` + text
                    responsibilities.appendChild(textDiv)
                }
            })

            const achievments = document.createElement("div")
            achievments.className = "achievments"
            const spanAchi = document.createElement("span")
            spanAchi.className = 'spanAchi'
            spanAchi.innerText = `Achievments: `
            achievments.appendChild(spanAchi)

            const array2 = item.achievments.split("--")
            array2.map(text => {
                if (text) {
                    const textDiv = document.createElement("p")
                    textDiv.className = "textDiv"
                    textDiv.textContent = `- ` + text
                    achievments.appendChild(textDiv)
                }
            })

            const workInfo = document.createElement("div")
            workInfo.className = "workInfo"

            const workImg = document.createElement("img")
            Object.assign(workImg, {
                className: "workImg",
                src: item.img
            })


            const WorkInfoBlock = document.createElement("div")
            WorkInfoBlock.className = "WorkInfoBlock"
            WorkInfoBlock.appendChild(responsibilities)
            WorkInfoBlock.appendChild(achievments)

            workInfo.appendChild(workImg)
            workInfo.appendChild(WorkInfoBlock)

            workExpBlock.appendChild(company)
            workExpBlock.appendChild(position)
            workExpBlock.appendChild(workInfo)
        })

        ///////////////////////// Projects Block


        projects.map(proj => {
            const projName = document.createElement("div")
            projName.className = "projName"
            projName.innerText = `Project Name: ` + proj.projName

            const projImgLink = document.createElement("a")
            Object.assign(projImgLink, {
                className: "projImgLink",
                href: proj.projLink
            })
            const projWindow = document.createElement("img")
            Object.assign(projWindow, {
                className: "projWindow",
                src: proj.img
            })
            projImgLink.appendChild(projWindow)

            const projectInfoDiv = document.createElement("div")
            projectInfoDiv.className = "projectInfoDiv"

            const projDescr = document.createElement("div")
            projDescr.className = "projDescr"
            const spanResp = document.createElement("span")
            spanResp.className = 'spanResp'
            spanResp.innerText = `Description: `
            projDescr.appendChild(spanResp)

            const array1 = proj.description.split("--")
            array1.map(text => {
                if (text) {
                    const textDiv = document.createElement("p")
                    textDiv.className = "textDiv"
                    textDiv.textContent = `- ` + text
                    projDescr.appendChild(textDiv)
                }
            })

            const techStack = document.createElement("div")
            techStack.className = "techStack"
            const spanAchi = document.createElement("span")
            spanAchi.className = 'spanAchi'
            spanAchi.innerText = `Technology Stack: `
            techStack.appendChild(spanAchi)

            const array2 = proj.techStack.split("--")
            array2.map(text => {
                if (text) {
                    const textDiv = document.createElement("p")
                    textDiv.className = "textDiv"
                    textDiv.textContent = `- ` + text
                    techStack.appendChild(textDiv)
                }
            })
            const projInfoBlock = document.createElement("div")
            projInfoBlock.className = "projInfoBlock";
            projInfoBlock.appendChild(projDescr)
            projInfoBlock.appendChild(techStack)
            projectInfoDiv.appendChild(projInfoBlock)
            projectInfoDiv.appendChild(projImgLink)

            myProjectsBlock.appendChild(projName)
            myProjectsBlock.appendChild(projectInfoDiv)
        })
        experianceId.appendChild(exp)
        experianceDiv.appendChild(currentH1)
        experianceDiv.appendChild(experianceId)
        return experianceDiv
    }
    static async render() {
        const projects = await this.getContentApi("projects")
        const works = await this.getContentApi("works")
        const result = this.renderExperiance(projects, works)
        return result.outerHTML
    }
}