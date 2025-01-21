const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal("h1", { delay: 100 });

// ScrollReveal().reveal("#book", { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal("#airplain", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal("h1", { ...scrollRevealOption, delay: 100 });

const menu = document.querySelector(".bi-list");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", showSidebar);

function showSidebar(e) {
    e.preventDefault();
    sidebar.classList.add("active");
}

const hideMenu = document.querySelector(".bi-x-lg");

hideMenu.addEventListener("click", hideSideBar);

function hideSideBar() {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
    }
}
