document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("grid");

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell();
            cell.setAttribute("ondragover", "allowDrop(event)");
            cell.setAttribute("ondrop", "drop(event)");
            if (i === 0 && j === 0) {
                const button = document.createElement("button");
                cell.appendChild(button);
                button.innerText = "Drag Me!!";
                button.setAttribute("draggable", "true");
                button.setAttribute("ondragstart", "drag(event)");
                button.id = "dragbutton";
                button.style.resize = "horizontal";
            }
        }
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}