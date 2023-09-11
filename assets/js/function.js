const createList = (list) => {
    let p = "";
    let html = "";
    
    list.forEach(element => {
        element.state == 'completed' ? p =`<p style="color:green">completed</p>` : p =`new`;
        html += `<tr>
                    <th class="id">${element.id}</th>
                    <th class="tasks">${element.task}</th>
                    <th class="state" id="stateJs">${p}</th>
                    <th class="modify"><input type="checkbox" id="check${element.id}" onclick="changeCheck(${element.id})"></th>
                    <th class="deleted"><input style="color:red; font-weight:bold" type="button" value="X" onclick="btnDeleted(${element.id})"></th>
                </tr>  
                `
    });
    trContent.innerHTML = html; 
}

// Botones desde javaScript
// Boton borrar 

const btnDeleted = (id) => {
    let count = listPrevious.length;
    let index = listPrevious.findIndex((element) => element.id === id);
        listPrevious.splice(index, 1);
        stasks.innerHTML = count -1;
        createList(listPrevious);
}
// Boton Checkbox y cambio de estado
const changeCheck = (id) =>{
    let countCompleted = 0;
    let index = listPrevious.findIndex((element) => element.id === id);
        listPrevious[index].state == "new" ? listPrevious[index].state = "completed" : listPrevious[index].state = "new";
        createList(listPrevious);
        let modify = document.getElementById(`check${id}`);
        listPrevious[index].state == "completed" ? modify.checked = "true" : modify.checked = "false";
    
        // Tareas completadas
        listPrevious.forEach((element) => {
            if(element.state == "completed"){
            countCompleted++
            };
        });
        scompleted.innerHTML = countCompleted;
}