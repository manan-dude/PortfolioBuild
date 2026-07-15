const stories = document.querySelectorAll(".story");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

    stories.forEach(slide=>{

        slide.classList.remove("active");

    });

    stories[index].classList.add("active");

}

next.addEventListener("click",()=>{

    current++;

    if(current >= stories.length){

        current = 0;

    }

    showSlide(current);

});

prev.addEventListener("click",()=>{

    current--;

    if(current < 0){

        current = stories.length - 1;

    }

    showSlide(current);

});

showSlide(current);