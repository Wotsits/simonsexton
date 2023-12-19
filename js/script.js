function openCloseNav() {
    const nav = document.getElementById("mobile-nav-menu");
    nav.classList.toggle("open");
    const body = document.querySelector("body");
}

const blobColors = [
    "#f2f2f2",
    "#2f2e41",
    "#fff",
    "#e6e6e6",
    "#6c63ff",
]

document.addEventListener("DOMContentLoaded", () => {
    const blobs = document.querySelectorAll(".blob");
    const headAndHair = document.querySelector(".head-and-hair");
    const headphones = document.querySelector(".headphones");

    setInterval(() => {
        blobs.forEach(blob => {
            const randomColor = Math.floor(Math.random() * blobColors.length);
            blob.style.fill = blobColors[randomColor];
        })
    }, 500)

    let counter = 0;

    setInterval(() => {

        const rectHeadAndHair = headAndHair.getBoundingClientRect();
        const rectHeadphones = headphones.getBoundingClientRect();
        
        const centerXHeadAndHair = rectHeadAndHair.left + rectHeadAndHair.width;
        const centerYHeadAndHair = rectHeadAndHair.top + rectHeadAndHair.height;

        const centerXHeadphones = rectHeadphones.left + rectHeadphones.width;
        const centerYHeadphones = rectHeadphones.top + rectHeadphones.height;


        if (counter % 2 === 0) {
            headAndHair.setAttribute("transform", "");
            headphones.setAttribute("transform", "");
        }
        else {
            headAndHair.setAttribute("transform", `rotate(-3 ${centerXHeadAndHair} ${centerYHeadAndHair})`);
            headphones.setAttribute("transform", `rotate(-3 ${centerXHeadphones} ${centerYHeadphones})`);
        }

        counter++;
    }, 2000)

})