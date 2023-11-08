
let imageList = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]
let everyImage = ""

for (let i = 0; i < imageList.length; i++) {
    const element = imageList[i];
    everyImage += `<img src="${element}">` 
}
document.getElementById("myImages").innerHTML += everyImage


let images = document.querySelectorAll("#myImages img")
console.log(images.length);
let btnUp = document.getElementById("btnUp")
let currentImg = 0
images[currentImg].classList.add("my_display")

btnUp.addEventListener("click", function() {
    console.log("avanti");
    currentImg+1;
    console.log(currentImg+1)

    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("my_display");
        currentImg++;
        images[currentImg].classList.add("my_display");
        console.log(images[currentImg])
    } else {
        images[currentImg].classList.remove("my_display");
        currentImg = 0;
        images[currentImg].classList.add("my_display");
        console.log(images[currentImg]);
    }
    
})

let btnDown = document.getElementById("btnDown")

btnDown.addEventListener("click", function() {
    console.log("indetro");
    console.log(currentImg-1)

    if (currentImg > 0) {
        images[currentImg].classList.remove("my_display");
        currentImg--;
        images[currentImg].classList.add("my_display");
    } else {
        images[currentImg].classList.remove("my_display");
        currentImg = images.length - 1;
        images[currentImg].classList.add("my_display");
    }
    
})