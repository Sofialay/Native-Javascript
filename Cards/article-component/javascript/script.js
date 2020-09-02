const shareSocialMediaDesktop = event => {
    const socialMedia = document.querySelector("#social-media");
    socialMedia.style.display = socialMedia.style.display === 'none' ? 'flex' : 'none';
}

const shareSocialMediaMobile = event => {
    const michelleInfo = document.querySelector("#michelle-reference");
    const socialMedia = document.querySelector("#social-media");

    michelleInfo.style.display = michelleInfo.style.display === 'flex' ? 'none' : 'flex';
    socialMedia.style.display = socialMedia.style.display === 'none' ? 'flex' : 'none';
}



const loadEvents = () =>{
    //add the rest of the cards on the html
    document.querySelector("#share").addEventListener("touchend", shareSocialMediaMobile);
    document.querySelector("#share").addEventListener("click", shareSocialMediaDesktop);
}

