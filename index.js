
const arrows = document.querySelectorAll(".arrow");
const movieLists  = document.querySelectorAll("main-list");

arrows.addEventListener("click", ()=> {
   movieLists.scrollLeft -=300
});
