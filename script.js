function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${task}
        </span>

        <button onclick="this.parentElement.remove()">❌</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function toggleTask(element){
    element.classList.toggle("completed");
}