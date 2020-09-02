const shareSocialMediaDesktop = event => {
    const socialMedia = document.querySelector("#social-media");
    socialMedia.style.display = socialMedia.style.display === 'none' ? 'flex' : 'none';
}

const shareSocialMediaMobile = event => {
switchDisplay();
}

const switchDisplay = () => {
    const michelleInfo = document.querySelector("#michelle-reference");
    const socialMedia = document.querySelector("#social-media");

    michelleInfo.style.display = michelleInfo.style.display === 'flex' ? 'none' : 'flex';
    socialMedia.style.display = socialMedia.style.display === 'none' ? 'flex' : 'none';
}


const loadEvents = () =>{
    document.querySelector("#share").addEventListener("touchend", shareSocialMediaMobile);
    document.querySelector("#share").addEventListener("click", shareSocialMediaDesktop);
}

