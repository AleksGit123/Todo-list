"use strict" 
function addTodo(text,time) {
 return `
        <li class="todo_li">
                  <div class="event_time">
                    <p class="activities">${text}</p>
                    <p class="time">${time}</p>
                </div>


                <div class="button_div">
                    <button class="rubber_btn">
                        <img src="images/rubber.svg" alt="rubber svg" class="rubber_svg">
                    </button>
                    <button class="target_btn">
                        <img src="images/target.svg" alt="target icon" class="target">
                    </button>
                </div>
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
let done = 0;

// rubber gif and svg
function rubberFunction(){
    let targetBtn = document.querySelectorAll(".target_btn");
    let rubberSvg = document.querySelectorAll(".rubber_svg");
    let todoLi = document.querySelectorAll(".todo_li");
    let accomplished = document.querySelector(".done_number");

    todoLi.forEach((element,index) =>{

        targetBtn[index].addEventListener("click",function hendler(){
            if (!this.disabled) {
                this.disabled = true;
                done++;
                doneNumbers.innerHTML = done;
            }
        })

        rubberSvg[index].addEventListener("click",()=>{
            element.remove();
            done--;
            doneNumbers.innerHTML = done;
        })

        

    })

    
}




// add activities 
document.addEventListener("keydown",(e) =>{

    if(e.key == "Enter"){
        todoUl.innerHTML += addTodo(input.value,exactdate);
        rubberFunction();
    }

})





