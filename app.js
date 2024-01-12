let typed = new Typed(".text", {
    strings: ["Front-End Developer","Backend-Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const head = document.querySelector(".header");
window.addEventListener("scroll", () => {

    if (window.scrollY > head.offsetHeight + 150) {
        head.classList.add("active")
    } else {
        head.classList.remove("active")
    }
});


function git() {
    window.open("https://github.com/sachinsingh29", "_blank");
}



function amazon() {
    window.open("https://sachinsingh29.github.io/Amazon-clone/", "_blank");
}


function portfolio() {
    window.open("", "_blank");
}

// sidebar

let sidebar = document.querySelector(".sidebar");
const ham = document.querySelector(".icon2");
ham.addEventListener("click", () => {
    sidebar.style.right = "0";
})

let x = document.querySelector(".iconx");
x.addEventListener("click", () => {
    sidebar.style.right = "-250px"
})




