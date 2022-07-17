export class Miniature{ 
   

    constructor(challenge) {
        this.imgURL = challenge.baseLink + challenge.image
        this.element = document.createElement("article");
        this.setTags(challenge.id)
        this.setImageNode(this.imgURL)
  
    }

    setTags(id){
        this.element.classList.add("miniature")
        this.element.id = id;
        this.element.tabIndex = id;

    }
    setImageNode(imgURL){
        let MiniatureImg = document.createElement("img")
        this.element.appendChild(MiniatureImg);
        MiniatureImg.src = imgURL;

    }
    display(){
        return(this.element);
    }

}


