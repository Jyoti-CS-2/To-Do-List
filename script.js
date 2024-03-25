document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    const taskList = document.createElement("ul");

    document.querySelector(".mainpart").appendChild(taskList);

    searchIcon.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const dueDate = document.getElementById("dueDate").value;

        if (taskText === "" || dueDate === "") {
            alert("Please enter a task and select a due date.");
            return;
        }

        const li = document.createElement("li");
        const spanTask = document.createElement("span");
        spanTask.style.color="white";
        spanTask.style.fontSize = "30px";
        spanTask.style.paddingRight = "15px";
        document.body.appendChild(spanTask); 
        spanTask.textContent = taskText;

        const spanDate = document.createElement("span");
        spanDate.style.color="black";
        spanDate.style.fontSize = "20px";
        spanDate.style.paddingRight = "15px";
        document.body.appendChild(spanDate);
        spanDate.textContent = " - Due Date: " + dueDate;

        const editButton = document.createElement("button");
        editButton.style.backgroundColor = "rgb(134, 53, 67)";
        editButton.style.color = "white";
        editButton.style.border = "solid";
        editButton.style.borderRadius = "50%";
        editButton.style.padding = "10px 15px";
        editButton.style.margin = "10px 15px";
        editButton.style.fontSize = "16px";
        editButton.style.textContent = "Delete";
        editButton.textContent = "Edit";
        document.body.appendChild(editButton); 
        editButton.addEventListener("click", function() {
            const newTaskText = prompt("Enter the updated task:", spanTask.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                spanTask.textContent = newTaskText;
            }

            const newDueDate = prompt("Enter the updated due date:", spanDate.textContent.replace(" - Due Date: ", ""));
            if (newDueDate !== null && newDueDate.trim() !== "") {
                spanDate.textContent = " - Due Date: " + newDueDate;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.style.backgroundColor = "rgb(134, 53, 67)";
        deleteButton.style.color = "white";
        deleteButton.style.border = "solid";
        deleteButton.style.borderRadius = "50%";
        deleteButton.style.padding = "10px 15px";
        deleteButton.style.fontSize = "16px";
        deleteButton.style.textContent = "Delete";
        document.body.appendChild(deleteButton); 
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(spanTask);
        li.appendChild(spanDate);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
        document.getElementById("dueDate").value = ""; 
    }
});
