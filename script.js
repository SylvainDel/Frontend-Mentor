
import JsonData  from "./challenges.json" assert {type: 'json'} ;
import {Miniature} from "./MiniatureClass.js"


let challengeID = 0;
let articleWrapper = document.querySelector(".article-wrapper");


JsonData.challenges.forEach(challenge =>{
    let miniature = new Miniature(challenge);
    let article = miniature.display()
    articleWrapper.appendChild(article);
    article.addEventListener("click", e => setHeroElements(challenge.id));

});

function setHeroElements(targetId){
    const heroArticle = document.querySelector(".hero-article");
    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");
    const heroLink  = document.querySelector(".hero-link");
    const heroRepo  = document.querySelector(".hero-repo");
    const heroFrontendLink  = document.querySelector(".hero-frontendLink");
    
    console.log(heroLink);


    let challengeElements =  JsonData.challenges.filter(challenge => challenge.id === targetId)[0];
    
    heroArticle.style.backgroundImage = `url( ${challengeElements.baseLink}${challengeElements.image})`;
    heroTitle.innerHTML = challengeElements.title;
    heroDescription.innerHTML = challengeElements.description;
    heroLink.href = challengeElements.baseLink + challengeElements.index;
    heroRepo.href = challengeElements.github;
    heroFrontendLink.href = challengeElements.frontend;

}

