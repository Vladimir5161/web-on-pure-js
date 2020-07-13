import "./aboutMe.css"
import Basic from "../Basic"

export class AboutMe extends Basic {
    static renderAboutPage(contactsArr) {
        const H1 = document.createElement('h1')
        H1.className = 'title'
        H1.textContent = 'Vladimir Vagaev'

        const row = document.createElement("div")
        row.className = 'row'
        const img = document.createElement('img')
        Object.assign(img, {
            className: 'blockImage',
            alt: '',
            src: '/src//common/images/me.jpg'
        })
        const textBlock = document.createElement('div')
        textBlock.className = "text-block"
        textBlock.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio labore sit
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
        numquam. Distinctio provident aspernatur corporis molestiae earum?`

        row.appendChild(img)
        row.appendChild(textBlock)


        const contacts = document.createElement('div')
        contacts.className = 'contacts'
        for (let item in contactsArr) {
            const objKey = item
            const objVal = contactsArr[item]
            const contact = document.createElement("a")
            Object.assign(contact, {
                className: "contactStart",
                href: objVal,
                target: '_blank'
            })
            const contactImg = document.createElement('img')
            Object.assign(contactImg, {
                className: 'contactImg',
                src: `/src/common/images/${objKey}.png`
            })
            contact.appendChild(contactImg)
            contacts.appendChild(contact)
        }
        const div = document.createElement("div")
        div.className = "main-div"
        div.appendChild(H1)
        div.appendChild(row)
        div.appendChild(contacts)
        return div

    }
    static async render() {
        const contactsArr = await this.getContentApi("contacts", "UwhT3lZgl8ZqcrISmc5r")
        const result = this.renderAboutPage(contactsArr)
        return result.outerHTML
    }
}


const observeItem = main.querySelector(".wrapper")
let observer = new MutationObserver((mutationRecords) => {
    const render = main.querySelectorAll(".contactStart")
    if (mutationRecords[0].addedNodes[0].className === "main-div") {
        const rend = render.length
        for (let i = rend - 1; i < rend && i >= 0; i--) {
            setTimeout(() => render[i].className = "contact", 1000 - (i * 50))
        }
    }

});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false
})