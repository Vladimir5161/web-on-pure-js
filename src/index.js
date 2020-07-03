import './common/reset.css'
import "./header.css"
import "./main.css"
import "./app.css"
import { Skill } from './pages/skills/Skill'
import { Education } from "./pages/education/Education"
import { Experiance } from './pages/experiance/Experiance'
import { Settings } from './pages/settings/Settings'


let header = document.getElementById("header-nav")
let main = document.getElementById("main")


const MenuBtn = header.querySelector(".menu-button")


const changeHeaderId = (value) => {
    header.id = value
}
const openMenu = () => {
    changeHeaderId("header-nav-active"),
        setTimeout(() => { header.id = "header-nav-opened" }, 1000)
}
const closeMenu = () => {
    changeHeaderId("header-nav-active-reverse"),
        setTimeout(() => { header.id = "header-nav" }, 1000)
}
MenuBtn.addEventListener('click', (event) => {
    event.preventDefault()
    MenuBtn.style.backgroundColor === "rgb(140,142,120)" ? MenuBtn.style.backgroundColor = "#333333" : MenuBtn.style.backgroundColor = "rgb(140,142,120)"
    if (header.id === "header-nav") {
        openMenu()
    } else {
        closeMenu()
    }
})

const menuLink = header.querySelectorAll(".nav-link");

const wrappedMain = main.querySelector('.wrapper')

const getCurrentTheme = () => {
    return JSON.parse(localStorage.getItem("theme"))
}
const setCurrentPage = (currPage) => {
    localStorage.setItem("page", JSON.stringify(currPage)) //saving a string ref to a  last opened page without changing page's hash to a local storage
}
const getCurrentPage = () => {
    return JSON.parse(localStorage.getItem("page"))
}
const CloseMenuFunc = () => {
    if (header.id === "header-nav-opened" || header.id === "header-nav") {
        closeMenu()
    } else (setTimeout(() => { closeMenu() }, 500))
}
const changePathname = (currPage, html) => { // string value of last opened page, 
    wrappedMain.innerHTML = html;
    setCurrentPage(currPage)
    const theme = getCurrentTheme()
    setTheme(theme)
    CloseMenuFunc()

} // function to change local address and to set html that needed on page


menuLink.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(element)
        if (element.textContent === "About Me") {
            changePathname("/", htmlMain)
            console.log(event)
        } else if (element.textContent === "My education") {
            changePathname("/myEducation", htmlEducation)
        } else if (element.textContent === "My experience") {
            changePathname("/myExperience", htmlExperience)
        } else if (element.textContent === "My skills") {
            changePathname("/mySkills", htmlSkills)
        } else if (element.textContent === "Settings") {
            const modalWindow = main.querySelector(".modalWindowDiv")
            if (main.contains(modalWindow)) {
                Settings.closeModal(),
                    CloseMenuFunc()
            } else {
                Settings.openModal()
                CloseMenuFunc()
            }
        }
    });
}); // function calls prev func with props


const setTheme = (theme) => {
    if (theme === "black") {
        main.style.backgroundColor = "rgba(0,0,0, 0.9)"
        main.style.color = "white"
        const WorkExpBlock = main.querySelectorAll(".workExpBlock")
        for (let item of WorkExpBlock) {
            item.style.color = "white"
        }
    } else {
        main.style.backgroundColor = "white"
        main.style.color = "black"
        const WorkExpBlock = main.querySelectorAll(".workExpBlock")
        for (let item of WorkExpBlock) {
            item.style.color = "black"
        }
    }
}

window.addEventListener('load', async (event) => {
    const currentPage = await getCurrentPage()
    const currentHTML = currentPage === "/myEducation" ? htmlEducation
        : currentPage === "/myExperience" ? htmlExperience :
            currentPage === "/mySkills" ? htmlSkills :
                currentPage === "/settings" ? htmlSetting :
                    htmlMain

    const theme = await getCurrentTheme()
    setTheme(theme)
    changePathname(currentPage, currentHTML)

}) // loads default html 




let htmlMain = ` <div class="main-div">
<h1 class="title">Vladimir Vagaev</h1>
<div class="row">
    <img alt="" src="/src//common/images/me.jpg" class="blockImage" />
    <div class="text-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio labore sit
        ullam, ipsa delectus dicta aut in voluptatibus hic ex dolore voluptates sint cumque quas omnis
        tempore? Voluptatibus, sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        delectus placeat laborum, libero beatae velit minus veniam ducimus quam totam veritatis rerum
        enim
        assumenda sed ipsum neque, sapiente quibusdam suscipit! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Reprehenderit aut explicabo, aperiam sapiente soluta cum commodi amet
        dignissimos
        nulla laboriosam maxime delectus, voluptas perspiciatis veritatis tenetur deserunt minima
        ratione
        corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam ut
        voluptates
        labore, quam perspiciatis. Sint eum eius expedita enim totam veniam, delectus, quibusdam quidem
        qui
        porro recusandae repellendus quia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur unde saepe quam,
        repellendus cum inventore impedit reprehenderit tempora soluta totam necessitatibus excepturi
        harum quibusdam. Vel dignissimos inventore culpa maxime!Lorem
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, nam tenetur eaque ullam
        dignissimos quisquam illum, similique maxime architecto doloremque, aut voluptatum iste?
        Provident odio odit labore nobis aliquam nihil.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati atque magnam
        repudiandae perspiciatis ipsa vero laudantium, nostrum delectus dolores voluptatibus sed placeat
        numquam. Distinctio provident aspernatur corporis molestiae earum?
    </div>
</div>
</div>`





let htmlEducation = `<div class="educations">
                        <div class="currentH1">My education</div>
                        <div id="education">
                            ${Education.render()}
                        </div>
                    </div>`

let htmlExperience = `<div class="experiance">
                        <div class="currentH1">My current Experiance</div>
                        <div id="experiance">
                            ${Experiance.render()}
                        </div>
                    </div>`


let htmlSkills = `<div class="skills">
                    <div class="currentH1">My current Skills</div>
                    <div id="skillBlock">${Skill.render()}</div>
                </div>`






