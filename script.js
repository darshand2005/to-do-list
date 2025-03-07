const addButton = document.querySelector(".add_todo_button");
const taskWritten = document.querySelector(".adding_todo_task");
// console.log(taskWritten.textContent);
const taskList = document.querySelector(".task_section");
const demoList = document.querySelector(".demoList");
demoList.remove();
addButton.addEventListener("click",()=>{
    const div1 = document.createElement("div");
    const p1 = document.createElement("p");
    const li2 = document.createElement("li");
    p1.textContent = "Pending";
    li2.textContent = taskWritten.value;
    taskWritten.value = "";
    const buttonForDone = document.createElement("button");
    const buttonForDelete = document.createElement("button");
    buttonForDone.textContent = "Done";
    buttonForDone.classList.add("done_button");
    p1.classList.add("before_done");
    buttonForDelete.textContent = "Remove";
    buttonForDelete.classList.add("remove_button");
    div1.appendChild(p1);
    div1.appendChild(li2);
    div1.appendChild(buttonForDone);
    div1.appendChild(buttonForDelete);
    div1.classList.add('task_list_div_class');
    taskList.appendChild(div1);
})
taskList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done_button")){
        const statusParagraph = e.target.parentNode.childNodes[0];
        statusParagraph.textContent = "Completed";
        statusParagraph.classList.add("after_done");
    }
    if(e.target.classList.contains("remove_button")){
        const wholeDiv = e.target.parentNode;
        wholeDiv.remove();
    }
});