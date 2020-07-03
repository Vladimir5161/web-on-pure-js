import "./experiance.css"

const workExp = [
    {
        company: "Aviacontant", img: "https://onlinebizfacts.com/wp-content/uploads/2018/12/home-office-setup.jpeg", position: "senior customer support agent, (04.2018 - 04.2019)", responsibilities: "--Advising and informing clients in writing and by phone about the company's services, in Ukrainian, Russian and Englis. --Solving urgent customer requests and problems --Negotiating with airlines and Kiwi.com partners to resolve issues or problems of passengers in favor of the client.", achievments: "-- received the award of the best Support Agent of the Kyiv ofice from Kiwi.com in January.--Received the position of senior agent 3 months after starting work - in March2019 oficially won the competition for the position of team manager (supervisor) of one of the company's departments (back-ofice) (the position was not obtained due to unplanned reduction of the department). --assistance to agents with dificult cases. -- work with problem clients. --- performance of organizational and other duties of the team manager (in his absence, or in case of a large number of requests) "
    },
    {
        company: "Aviacontant", img: "https://cxuniversity.com/wp-content/uploads/2020/03/Remote-Work-Homepage-Banner-1.jpg", position: "Team Leader, (04.2019 - 08.2019)", responsibilities: "--quality control of the department, and control of the implementation of thenecessary indicators, informing the employees of the department about updates in the company's work. --regulation of the work of the discipline department, implementation of the company's processes. --assistance to agents and senior agents in resolving dificult cases and working with problem clients. --work on improving the atmosphere in the team. --reporting on the work of the department, communication with other departments of Kiwi.com, and heads of other departments, respectively.", achievments: "--the position was obtained as a result of winning the competition for the position of his department (customer support). --The reason for the change of place of work - termination of the contract and cooperation of the employer's company Kiwi.com with the company Aviacontact"
    }
]

const projects = [
    {
        id: 1, projName: "About me Web", projLink: '', img: "/src/common/images/about.png", description: "--Web Page created on vanilla JS", techStack: "--HTML, CSS,--webpack, -- RestAPI, axios, --firebase, --Bootstrap css"
    },
    {
        id: 2, projName: "First web", projLink: 'https://my-vikings.web.app/', img: "/src/common/images/first.png", description: "--the first full web created with React. --it is about Vikings and The Game of Thrones, you can change the content by clicking the MOVIE button. --Read About the Page", techStack: "--HTML, CSS, --React, React Hooks, --Redux, Redux Thunk, -- RestAPI, axios, --firebase, lodash, --Bootstrap css, SlickSlider, --React-Player"
    },
    {
        id: 3, projName: "Tasks", projLink: 'https://tasks-project-12af2.web.app/', img: "/src/common/images/tasks.png", description: "Web on React where you can add, change, delete tasks", techStack: "--HTML, CSS, --React, React Hooks, --Redux, Redux Thunk, -- RestAPI, axios, --firebase,firebase API, lodash, --Material UI, momentJS"
    }
]

export class Experiance {
    static render() {
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
        workExp.map(item => {
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






        return exp.outerHTML
    }
}