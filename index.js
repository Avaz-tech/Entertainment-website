arrows = document.querySelectorAll(".arrow");

console.log(arrows)

arrows.forEach((arrow,i) => {
    arrow.addEventListener('click',() =>{
        console.log("you clicked to " + i)
    })
});
