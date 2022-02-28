let addToDoButton = document.getElementById("addToDo");
let inputField = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let noTaskHere = document.getElementById("noTaskHere");
let deleteAllButton = document.getElementById("deleteAll");
let i = 0;
addToDoButton.addEventListener(`click`, () => {
    if (inputField.value === "") {
        alert(`Please enter a task`);
    } else {
        let paragraph = document.createElement(`p`);
        paragraph.innerHTML = ++i + "&nbsp;&nbsp;" + inputField.value;
        paragraph.classList.add(`paragraph-styling`);
        taskList.appendChild(paragraph);
        inputField.value = ``;
        paragraph.addEventListener(`click`, () => {
            paragraph.style.textDecoration = `line-through`;
            paragraph.style.color = `#ccc`;
        });
        paragraph.addEventListener(`dblclick`, () => {
            taskList.removeChild(paragraph);
            --i;
        });
        deleteAllButton.disabled = false;
        deleteAllButton.innerHTML = `Delete All Tasks`;
        deleteAllButton.addEventListener(`click`, () => {
            taskList.innerHTML = ``;
            i = 0;
            deleteAllButton.disabled = true;
            deleteAllButton.innerHTML = ``;
            taskList.appendChild(noTaskHere);
        });
        taskList.removeChild(noTaskHere);
    }
});
