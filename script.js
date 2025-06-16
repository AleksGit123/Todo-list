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

//sort list 
let allTasks = document.querySelector(".all");
let doneTasks = document.querySelector(".completed");
let incompleteTasks = document.querySelector(".incomplete");

allTasks.addEventListener("click",function(){

})

//button icon change on hover
let deleteAllBtn = document.querySelector(".delete_all_btn");
let deleteAllSvg = document.querySelector(".delete_all_svg");


deleteAllBtn.addEventListener("mouseover",function(){
    deleteAllSvg.src = "images/trash.gif";
})
deleteAllBtn.addEventListener("mouseout",function(){
    deleteAllSvg.src = "images/trash.svg";
})

deleteAllBtn.addEventListener("click",function(){
    todoUl.innerHTML = "";
    done = 0;
    doneNumbers.innerHTML = done;
})



// rubber gif and svg
function rubberFunction(){
    let targetBtn = document.querySelectorAll(".target_btn");
    let rubberSvg = document.querySelectorAll(".rubber_svg");
    let todoLi = document.querySelectorAll(".todo_li");

    todoLi.forEach((element,index) =>{

        targetBtn[index].addEventListener("click",function hendler(){
            if (!this.disabled) {
                this.disabled = true;
                done++;
                doneNumbers.innerHTML = done;
                element.style.backgroundColor = "#69b27c93";
                element.classList.add("done");
            }
        })
       

        rubberSvg[index].addEventListener("click",()=>{
            element.remove();
            element.classList.remove("done");
            if(done > 0){
                done--;
                doneNumbers.innerHTML = done;
            }
            else{
                return;
            }
            
        })

    })


}

allTasks.addEventListener("click",function(){
    document.querySelectorAll(".todo_li").forEach(element => {
        element.classList.remove("hide");
    });
})

doneTasks.addEventListener("click",function(){
    document.querySelectorAll(".todo_li").forEach(element => {
        if(element.classList.contains("done")){
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
    });
})

incompleteTasks.addEventListener("click",function(){
    document.querySelectorAll(".todo_li").forEach(element => {
        if(!element.classList.contains("done")){
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
    });
})


// add activities 
document.addEventListener("keydown",(e) =>{

    if(e.key == "Enter"){
        todoUl.innerHTML += addTodo(input.value,exactdate);
        rubberFunction();
        input.value = "";

    }

})





