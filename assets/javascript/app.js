import {portfolio} from "./../../data/data.js"
const {username, role, resume, social} = portfolio

let portfolioName = document.querySelector(".js-portfolio-name")
let portfolioRole = document.querySelector(".js-portfolio-role")
let resumeText = document.querySelector(".js-resume-text")
let portfolioContacts = document.querySelector(".js-portfolio-contacts")
let btnProjects = document.querySelector(".js-btn-projects")

portfolioName.innerText = username
portfolioRole.innerText = role
resumeText.innerText = resume

for (let i = 0; i < social.length; i++) {
    let listItem = document.createElement("li")
    let lisItemImg = document.createElement("img")

    lisItemImg.src = social [i]
    listItem.appendChild(lisItemImg)
    portfolioContacts.appendChild(listItem)
}

btnProjects.addEventListener("click", ()=> {
    document.querySelector(".js-modal").style.display = "inline-block"
})

btnModalClose.addEventListener("click", ()=> {
    document.querySelector(".js-modal").style.display = "none"
})