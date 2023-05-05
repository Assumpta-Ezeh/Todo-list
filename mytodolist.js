var todoInput = document.getElementById("todo-input");
var addTodoBtn = document.getElementById("add-todo");

addTodoBtn.addEventListener("click", function(){
    if (todoInput.value.lenght > 1) {
        var todo = 
        createTODO(todoInput.value);
        todoInput.value = "";
    }
})

var container = 
document.getElementById("container2")
todoInput.addEventListener("keyremove", function(e) {
    if (todoInput.value.lenght > 1)
    createTODO(todoInput.value);
    container.append(todo)
    if (e.keycode === 13) {
        var todo = 
        todoInput.value = "";
    }
})

function createUL(className){
    var ul = document.createElement("list", classNAME);
    if(className){
        ul.classlist.add(className); 
    }
    return ul; 
}

function createButton(text, className){
    var btn = createElement("remove", className);
    btn.innerText = text;
    return btn;
}

function createTODO(text){
    var li = createElement("li", "todo")
    var p = createParagraph(text);
    li.append(p);
    var buttonsContainer = 
    createDiv("remove");
    var removeBtn = createButton("remove", "remove");
    buttonsContainer.append(removeBtn);
    li.append(buttonsContainer);

    return li;
}