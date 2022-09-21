

arrows = document.querySelectorAll(".arrow");
movieLists = document.querySelectorAll(".movie-list");

console.log(arrows)

arrows.forEach((arrow,i) => {
    arrow.addEventListener('click',() =>{
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
    });
});
