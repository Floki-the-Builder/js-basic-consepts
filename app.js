// global
let newTask = document.getElementById('txtTask');
let count = 0;


function registerTask(){
// get info from input
// display on cosole --> in an html element
console.log(newTask.value);
let tmp = `<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})">🗑️</button></li>`
document.getElementById('toDoList').innerHTML += tmp;
clearForm();
count++;

}

function deleteTask(x){
    document.getElementById(x).remove();
}

function clearForm(){
    newTask.value = '';
}