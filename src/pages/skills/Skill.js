
import "./skills.css"

let skills = [
    { id: 1, stars: 3, icon: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png", name: "JS" },
    { id: 2, stars: 5, icon: "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png", name: "css" },
    { id: 3, stars: 2, icon: "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png", name: "html" },
    { is: 4, stars: 1, icon: "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png", name: "react" },
    { id: 5, icon: "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png", name: "redux" },
    { is: 6, stars: 1, icon: "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png", name: "react" },
    { id: 7, icon: "https://freeiconshop.com/wp-content/uploads/edd/html-outline.png", name: "redux" }
]


export class Skill {
    static render() {
        return skills.map(item => {

            const stars = document.createElement("div")
            const starsBack = document.createElement("div")
            for (let i = 0; i < item.stars; i++) {
                const star = document.createElement("img")
                Object.assign(star, {
                    alt: '',
                    width: '20',
                    heigth: '20',
                    src: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
                    className: "starsDiv"
                })
                const starBack = document.createElement("img")
                Object.assign(starBack, {
                    alt: '',
                    width: '20',
                    heigth: '20',
                    src: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Star_Icon.png",
                    className: "starsDiv"
                })
                stars.appendChild(star)
                starsBack.appendChild(starBack)
            }
            if (!item.stars) return ""
            let skillName = document.createElement("div")
            let skillNameBack = document.createElement("div")
            Object.assign(skillName, {
                className: "skillNameDiv"
            })
            Object.assign(skillNameBack, {
                className: "skillNameDiv"
            })
            skillName.innerText = item.name
            skillNameBack.innerText = item.name
            let skillDiv = document.createElement("div")
            Object.assign(skillDiv, {
                className: "skillDiv"
            })
            let skillDivContentBack = document.createElement("div")
            let skillDivContent = document.createElement("div")
            skillDiv.appendChild(skillDivContentBack);
            skillDiv.appendChild(skillDivContent);


            Object.assign(skillDivContent, {
                className: "skillDivContent"
            })

            Object.assign(skillDivContentBack, {
                className: "skillDivContentBack"
            })

            skillDivContent.appendChild(skillNameBack);
            skillDivContentBack.appendChild(skillName);
            skillDivContent.appendChild(starsBack);
            skillDivContentBack.appendChild(stars);
            skillDiv.addEventListener("click", () => {
                console.log("bla")
                Object.assign(item, {
                    className: "skillDivAnimation"
                })
            })
            return skillDiv.outerHTML
        }).join('')
    }

}
const observeItem = main.querySelector(".wrapper")
let observer = new MutationObserver((mutationRecords) => {
    const renderSkill = main.querySelectorAll("#skillBlock")
    if (mutationRecords[0].addedNodes[0].className === "skills") {
        for (let item of renderSkill[0].childNodes) {
            item.addEventListener("click", () => {

                Object.assign(item, {
                    className: item.className === "skillDivAnimation" ? "skillDivAnimationRotate" : "skillDivAnimation"
                })
            })
        }
    }

});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false
})