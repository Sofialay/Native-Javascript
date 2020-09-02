const shareSocialMedia = event => {
switchDisplay();
}

/*(function(style) {
    style.display = style.display === 'flex' ? 'none' : 'flex';
})(document.querySelector("#michelle-reference").style);*/

//primer caso ---> este funciona dentro de la funcion shareSocialMedia
/*
const michelleInfo = document.querySelector("#michelle-reference");
const socialMedia = document.querySelector("#social-media");

michelleInfo.style.display = "none";
socialMedia.style.display = "flex";*/

// segundo caso ---> llamo a esta funcion dentro de shareSocialMedia

/*function switchDisplay () {
    const michelleInfo = document.querySelector("#michelle-reference");
    const socialMedia = document.querySelector("#social-media");

    if(michelleInfo.style.display === "flex") {
        michelleInfo.style.display = "none";
        socialMedia.style.display = "flex";
    }
}*/

//tercer caso ---> lo mismo que el segundo caso
const switchDisplay = () => {
    const michelleInfo = document.querySelector("#michelle-reference");
    const socialMedia = document.querySelector("#social-media");

    michelleInfo.style.display = michelleInfo.style.display === 'flex' ? 'none' : 'flex';
    socialMedia.style.display = socialMedia.style.display === 'none' ? 'flex' : 'none';
}


const loadEvents = () =>{
    document.querySelector("#share").addEventListener("click", shareSocialMedia);
    //Para que funcione el addEventListener en mas de una card deberia llamaar al id de cada uno en
    //particular y añadirle la misma funcion? hay una manera mas dinamica de hacerlo?

    //Si necesito hacer que en la version mobile y en la desktop pase la misma accion (la de display flex / none)
    // pero en esta card en desktop que no desaparezca el nombre /foto de michelle como puedo hacer usando el mismo icon share?
}

