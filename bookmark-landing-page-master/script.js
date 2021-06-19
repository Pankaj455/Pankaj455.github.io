const hamburger = document.querySelector(".hamburger")
const body = document.querySelector("body")
const mobileNav = document.querySelector("nav")
const icon = document.querySelector(".icon")
const icon_i = document.querySelector(".icon i")
const bookmark = document.querySelector("header .logo h3")
const tabs = document.querySelectorAll(".tabs div");
const illustration_tab = document.querySelector(".about-tabs img");
const h1 = document.querySelector(".about-tabs h1");
const p = document.querySelector(".about-tabs p");
const question = document.querySelectorAll(".question")
const submit = document.querySelector("#submit")

const tabs_info = {
    tab1: {
        h1: "Bookmark in one click",
        p: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
    },
    tab2: {
        h1: "Intelligent search",
        p: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
    },
    tab3: {
        h1: "Share your bookmarks",
        p: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`
    }
}

let isActive = false

hamburger.addEventListener("click", (e) => {
    if (!isActive) {
        mobileNav.style.transform = "translateX(0)"
        // mobileNav.style.visibility = "visible"
        e.target.src = "./images/icon-close.svg"
        icon.style.backgroundColor = "whitesmoke"
        icon_i.style.color = "hsl(229, 31%, 21%)"
        bookmark.style.color = "whitesmoke"
        bookmark.style.fontWeight = "400"
        disableScroll()
    }
    else {
        mobileNav.style.transform = "translateX(-100%)"
        // mobileNav.style.visibility = "hidden"
        e.target.src = "./images/icon-hamburger.svg"
        icon.style.backgroundColor = "hsl(231, 69%, 60%)"
        icon_i.style.color = "white"
        bookmark.style.color = "black"
        bookmark.style.fontWeight = "500"
        enableScroll()
    }
    isActive = !isActive
})

// question.addEventListener("click", ()=>{
//     question.classList.toggle("toggle")
// })

question.forEach(q => {
    q.addEventListener("click", () => {
        q.classList.toggle("toggle");
    })
})

tabs[0].addEventListener("click", simpleBookmark)
tabs[1].addEventListener("click", speedSearch)
tabs[2].addEventListener("click", easySharing)

let si = 0

function simpleBookmark() {
    if (si !== 0) {
        tabs[si].classList.remove("active");
        si = 0;
        tabs[si].classList.add("active");
        illustration_tab.src = `./images/illustration-features-tab-${si + 1}.svg`
        h1.innerText = `${tabs_info.tab1.h1}`
        p.innerText = `${tabs_info.tab1.p}`
    }
}

function speedSearch() {
    if (si !== 1) {
        tabs[si].classList.remove("active");
        si = 1;
        tabs[si].classList.add("active");
        illustration_tab.src = `./images/illustration-features-tab-${si + 1}.svg`
        h1.innerText = `${tabs_info.tab2.h1}`
        p.innerText = `${tabs_info.tab2.p}`
    }
}

function easySharing() {
    if (si !== 2) {
        tabs[si].classList.remove("active");
        si = 2;
        tabs[si].classList.add("active");
        illustration_tab.src = `./images/illustration-features-tab-${si + 1}.svg`
        h1.innerText = `${tabs_info.tab3.h1}`
        p.innerText = `${tabs_info.tab3.p}`
    }
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling")
}

function disableScroll() {
    document.body.classList.add("stop-scrolling")
}