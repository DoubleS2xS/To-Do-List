let input = document.querySelector(".input");
let listContainer = document.querySelector(".list-container");

document.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        addTask();
    }
});

function addTask(){
  if(input.value === ""){
    alert("Please enter some task");
  }
  else{
    let li = document.createElement("li");
    li.innerText = input.value;
    listContainer.appendChild(li);
    li.classList.add("list-task");

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    span.classList.add("span");
  }
  saveList();
}

listContainer.addEventListener("click", function(e){
    if(e.target.className == "list-task"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.className == "span"){
        e.target.parentElement.remove();
        saveList();
    }
},false);

function saveList(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("tasks");
}

showList();