"use strict" 
function addTodo(text,time) {
 return `
       <li class="todo_li">
                <div>
                    <p class="activities">${text}</p>
                    <p class="time">${time}</p>
                </div>

                <img src="images/rubber.svg" alt="rubber svg" class="rubber_svg">
                <img src="images/rubberGif.gif" alt="rubber gif" class="rubber_gif hide">
            </li>    
` 
}


let input = document.querySelector("input");
let todoUl = document.querySelector(".todo_ul");
let activities = document.querySelector(".activities");
let minus = document.querySelector("fa-minus");
let check = document.querySelector("fa-check");
let doneNumbers = document.querySelector(".done_number");

// get exact time
let time = document.querySelector(".time");
let date = new Date();
let exactdate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`

// rubber gif and svg
function rubberFunction(){
    let rubberSvg = document.querySelector(".rubber_svg");
    let rubberGif = document.querySelector(".rubber_gif");

    rubberSvg.addEventListener("mouseover",()=>{
        rubberSvg.classList.add("hide")
        rubberGif.classList.remove("hide");
    })
    rubberSvg.addEventListener("mouseout",()=>{
        rubberSvg.classList.remove("hide")
        rubberGif.classList.add("hide");
    })
    
    rubberSvg.addEventListener("click",()=>{
        todoUl.innerHTML = "";
    })
    
    rubberGif.addEventListener("click",()=>{
        todoUl.innerHTML = "";
    })
    
}




// add activities 
document.addEventListener("keydown",(e) =>{

    if(e.key == "Enter"){
        todoUl.innerHTML += addTodo(input.value,exactdate);
    }

})





