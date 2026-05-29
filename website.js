
function scrollToTop(){
    window.scrollTo(0,0);
}

const header = document.querySelector(".header");
const navigation = document.querySelector(".navigation");
const subtitle = document.querySelector(".subtitle");
const navDivider1 = document.querySelector(".navDivider1");
const navDivider2 = document.querySelector(".navDivider2");
const footerButton = document.querySelector(".footer img");
const navButton = document.querySelector(".navigation .navButton");

footerButton.addEventListener("click", () => {
    footerButton.classList.toggle("active");
});

navButton.addEventListener("click", () => {
    navButton.classList.toggle("active");
});

window.addEventListener("scroll", function(){

    if(window.scrollY > 30){
        navDivider1.classList.add("collapse");
        navigation.classList.add("collapse");
        navDivider2.classList.add("collapse");
    }
    else if(window.scrollY <= 10){
        navDivider1.classList.remove("collapse");
        navigation.classList.remove("collapse");
        navDivider2.classList.remove("collapse");
    }

    if(window.scrollY > 5){
        header.classList.add("shrink");
    }
    else if(window.scrollY < 30){
        header.classList.remove("shrink");
    }

    if(window.scrollY > 5){
        subtitle.classList.add("disappear");
    }
    else if(window.scrollY < 15){
        subtitle.classList.remove("disappear");
    }

});

