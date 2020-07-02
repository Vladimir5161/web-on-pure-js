import './common/reset.css'
import "./header.css"
import "./main.css"
import "./app.css"
import { Skill } from './pages/skills/Skill'
import { Education } from "./pages/education/Education"


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
const changePathname = (currPage, html) => { // string value of last opened page, 

    wrappedMain.innerHTML = html;
    setCurrentPage(currPage)
    if (header.id === "header-nav-opened" || header.id === "header-nav") {
        closeMenu()
    } else (setTimeout(() => { closeMenu() }, 500))

} // function to change local address and to set html that needed on page

const setCurrentPage = (currPage) => {
    localStorage.setItem("page", JSON.stringify(currPage)) //saving a string ref to a  last opened page without changing page's hash to a local storage
}
const getCurrentPage = () => {
    return JSON.parse(localStorage.getItem("page"))
}
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
            changePathname("/settings", htmlSetting)
        }
    });
}); // function calls prev func with props


window.addEventListener('load', async (event) => {
    const currentPage = await getCurrentPage()
    const currentHTML = currentPage === "/myEducation" ? htmlEducation
        : currentPage === "/myExperience" ? htmlExperience :
            currentPage === "/mySkills" ? htmlSkills :
                currentPage === "/settings" ? htmlSetting :
                    htmlMain

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

let htmlExperience = `<h1>experiance</h1>`

let htmlSetting = `<h1>settings</h1>`



let htmlSkills = `<div class="skills">
                    <div class="currentH1">My current Skills</div>
                    <div id="skillBlock">${Skill.render()}</div>
                </div>`






