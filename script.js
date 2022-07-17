
import JsonData  from "./challenges.json" assert {type: 'json'} ;
import {Miniature} from "./MiniatureClass.js"


let articleWrapper = document.querySelector(".article-wrapper");

/* Loop through the hardcoded data in the Json and create a miniature for each challenge */
JsonData.challenges.forEach(challenge =>{
    let miniature = new Miniature(challenge);
    let article = miniature.display()
    articleWrapper.appendChild(article);
    article.addEventListener("click", e => setHeroElements(challenge.id));

});

/* On click, set the corresponding data into the hero displaying thing on the right*/
function setHeroElements(targetId){
    /* SELECTORS */
    const heroArticle = document.querySelector(".hero-article");
    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");
    const heroLink  = document.querySelector(".hero-link");
    const heroRepo  = document.querySelector(".hero-repo");
    const heroFrontendLink  = document.querySelector(".hero-frontendLink");

    /* Filter based on the ID provided by the eventListener target */
    let challengeElements =  JsonData.challenges.filter(challenge => challenge.id === targetId)[0];


    
    /* Corresponding Selectors with Class properties */
    heroArticle.style.backgroundImage = `url( ${challengeElements.baseLink}${challengeElements.image})`;
    heroTitle.innerHTML = challengeElements.title;
    heroDescription.innerHTML = challengeElements.description;
    heroLink.href = challengeElements.baseLink + challengeElements.index;
    heroRepo.href = challengeElements.github;
    heroFrontendLink.href = challengeElements.frontend;

}


/* By Default (on loading ) display the first challenge in the hero  */
setHeroElements(1);
