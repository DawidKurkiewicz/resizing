const square = document.createElement("div")
document.body.appendChild(square)
let size = 100
square.style.height = size + "px"
square.style.width = size + "px"
window.addEventListener("scroll", () => {
    size++
    square.style.width = size + "px"
    square.style.height = size + "px"

})