const runCar = document.querySelector(".red-car");
const sectionBg = document.querySelector(".section2");
const body = document.body;

let carPos = 0;
let isId = null;

document.addEventListener("keydown", (e) => {
    if (e.key === "r" && !isId) {
        body.style.backgroundColor = ""; 
        
        isId = setInterval(() => {
            carPos += 10;
            runCar.style.transform = `translateX(${carPos}px)`;

            if (carPos >= 1100) {
                clearInterval(isId); 
                isId = null;
                sectionBg.style.backgroundColor = "green"; 
            }
        }, 50);
    }
    if (e.key === "s") {
        clearInterval(isId);
        isId = null;
        

        carPos = 0;
        runCar.style.transform = `translateX(0px)`;
        sectionBg.style.backgroundColor = "";
    }
});

// 2


const topElement = document.querySelector(".top-car");
const topBody = document.body;

let posX = 0; 
let posY = 0; 
let driveId = null;

document.addEventListener("keydown", (e) => {

    if (e.key === "b" && !driveId) {
        driveId = setInterval(() => {
            posY -= 5; 
            if (posY < -600) {
                posY = 90;

            }
            topElement.style.transform = `translate(${posX}px, ${posY}px)`;
        }, 30);
    }

    if (e.key === "ArrowRight") {
        posX += 300;
        if(posX > 300){
            posX = 300
        } 
    }
    if (e.key === "ArrowLeft") {
        posX -= 300; 
        if(posX < -300){
            posX = -300
        } 
    }
    topElement.style.transform = `translate(${posX}px, ${posY}px)`;
});
