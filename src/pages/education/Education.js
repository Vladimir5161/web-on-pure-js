import "./education.css"

export class Education {
    static render() {
        return `<div class="educationBlockStart">
                            <div class="educationName">CRIMEAN UNIVERSITY FOR THE HUMANITIES, faculty of history, 2012 - 2014</div>
                            <div class="educationText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime deserunt inventore incidunt voluptatum perferendis quia ut illo magnam animi debitis rem accusantium, voluptatibus at atque hic aliquid velit voluptates!</div>
                            <div class="educationImageBlock" >
                                <div class="showInfoImageDiv" data-title="Crimean National University, Yalta city">
                                    <img src='/src/common/images/kgu.jpg'  class="educationImg"/>
                                </div> 
                                <img src='/src/common/images/kgu.jpg'  class="educationImgClosed"/>
                            </div>
                        </div>
                        <div class="educationBlockStart">
                            <div class="educationName">Lviv national University, faculty of history, 2014 - 2016</div>
                            <div class="educationText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime deserunt inventore incidunt voluptatum perferendis quia ut illo magnam animi debitis rem accusantium, voluptatibus at atque hic aliquid velit voluptates!</div>
                            <div class="educationImageBlock" >
                                <div class="showInfoImageDiv" data-title="Lviv National University, Lviv city">    
                                    <img src='/src/common/images/lnu.jpg' class="educationImg" />
                                </div> 
                                <img src='/src/common/images/lnu.jpg'  class="educationImgClosed"/>   
                            </div>
                        </div>
                        <div class="educationBlockStart">
                            <div class="educationName">Skill-up it, front-end courses</div>
                            <div class="educationText">Finished front end courses (08.2019 -12.2019), and after that continue to upgrade my skills by making new projects, learning new features and technologies </div>
                            <div class="educationImageBlock" >
                                <div class="showInfoImageDiv" data-title="Lviv National University, Lviv city">    
                                    <img src='https://comers.com.ua/wp-content/uploads/2016/09/SkillUP-auditorium.jpg' class="educationImg" />
                                </div> 
                                <img src='https://comers.com.ua/wp-content/uploads/2016/09/SkillUP-auditorium.jpg'  class="educationImgClosed"/>   
                            </div>
                        </div>
             </div>`


    }
}

const observeItem = main.querySelector(".wrapper")
let observer = new MutationObserver((mutationRecords) => {
    const renderEducation = main.querySelectorAll(".educationImageBlock")
    if (mutationRecords[0].addedNodes[0].className === "educations") {
        const allBlocks = main.querySelectorAll(".educationBlockStart")
        for (let i = 0; i < allBlocks.length; i++) {
            setTimeout(() => allBlocks[i].className = 'educationBlock', 200 * i)
        }
        for (let item of renderEducation) {
            const imageDiv = item.querySelector(".showInfoImageDiv")
            imageDiv.addEventListener("mousedown", () => {
                const imageFull = item.querySelector(".educationImgClosed")
                imageFull.className = "educationImgOpened"
                imageFull.addEventListener('mousedown', () => {
                    imageFull.className = "educationImgClosed"
                })
            })
        }
    }

});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false
})
