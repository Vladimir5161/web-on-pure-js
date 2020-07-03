import "./education.css"

export class Education {
    static render() {
        return `<div class="educationBloks">
                        <div class="educationText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime deserunt inventore incidunt voluptatum perferendis quia ut illo magnam animi debitis rem accusantium, voluptatibus at atque hic aliquid velit voluptates!</div>
                        <div class="educationImageBlock" >
                            <div class="showInfoImageDiv" data-title="Crimean National University, Yalta city">
                                <img src='https://lh3.googleusercontent.com/proxy/cHF_gon9vGyY_eqC7VmcREsay_ZJjjMIIHMDpyZGud6nYYL6Z0buFi7WkntQ3Xh3UB_dy1WsDVdj5UznkwJsGsig3yrVQwlnr0Yd7N-d9FDVD2o'  class="educationImg"/>
                            </div> 
                            <img src='https://lh3.googleusercontent.com/proxy/cHF_gon9vGyY_eqC7VmcREsay_ZJjjMIIHMDpyZGud6nYYL6Z0buFi7WkntQ3Xh3UB_dy1WsDVdj5UznkwJsGsig3yrVQwlnr0Yd7N-d9FDVD2o'  class="educationImgClosed"/>
                        </div>
                            <div class="educationText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit maxime deserunt inventore incidunt voluptatum perferendis quia ut illo magnam animi debitis rem accusantium, voluptatibus at atque hic aliquid velit voluptates!</div>
                        <div class="educationImageBlock" >
                            <div class="showInfoImageDiv" data-title="Lviv National University, Lviv city">    
                                <img src='https://upload.wikimedia.org/wikipedia/commons/b/bf/%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D1%8C%D0%BA%D0%B0%2C_1_%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B3%D0%B0%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%B5%D0%B9%D0%BC%D1%83.JPG' class="educationImg" />
                            </div> 
                            <img src='https://upload.wikimedia.org/wikipedia/commons/b/bf/%D0%A3%D0%BD%D1%96%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D1%81%D1%8C%D0%BA%D0%B0%2C_1_%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B3%D0%B0%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D1%81%D0%B5%D0%B9%D0%BC%D1%83.JPG'  class="educationImgClosed"/>   
                        </div>
             </div>`


    }
}

const observeItem = main.querySelector(".wrapper")
let observer = new MutationObserver((mutationRecords) => {
    const renderEducation = main.querySelectorAll(".educationImageBlock")
    if (mutationRecords[0].addedNodes[0].className === "educations") {
        for (let item of renderEducation) {
            const imageDiv = item.querySelector(".showInfoImageDiv")
            imageDiv.addEventListener("mousedown", () => {
                const imageFull = item.querySelector(".educationImgClosed")
                Object.assign(imageFull, {
                    className: "educationImgOpened"
                })
                imageFull.addEventListener('mousedown', () => {
                    Object.assign(imageFull, {
                        className: "educationImgClosed"

                    })
                })
            })
        }
    }

});

observer.observe(observeItem, {
    childList: true, // наблюдать за непосредственными детьми
    characterDataOldValue: false
})
