let trContent = document.getElementById('content');
let newTask = document.getElementById('newTask');
let btnAdd = document.getElementById('btnAdd');
let stasks = document.getElementById('stasks');
let scompleted = document.getElementById('scompleted');


const listPrevious = [];



// Evento para agregar una nueva tarea

btnAdd.addEventListener('click', () =>{
    if(newTask.value !== ""){
    let count = listPrevious.length + 1;
    let addTask = {id: count, task: newTask.value, state: "new"}
    listPrevious.push(addTask);

    newTask.value = "";
    stasks.innerHTML = count;
    createList(listPrevious);
    }else{
        alert('Porfavor introduzca una tarea');
    };
});

