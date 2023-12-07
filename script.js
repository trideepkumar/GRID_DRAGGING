document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("grid");

    for (let i = 0; i < 10; i++) {
        const row = table.insertRow();

        for (let j = 0; j < 10; j++) {
            const cell = row.insertCell();
            cell.innerHTML = " ";
            cell.setAttribute("ondrop", "drop(event)");
            cell.setAttribute("ondragover", "allowDrop(event)");

            // Add a resizable button to the first cell
            if (i === 0 && j === 0) {
                const button = document.createElement("button");
                button.innerText = "Drag";
                button.setAttribute("draggable", "true");
                button.setAttribute("ondragstart", "drag(event)");
                button.id = "dragbutton";
                button.style.resize = "both";
                button.style.overflow = "auto";
                button.style.minWidth = "50px";
                button.style.minHeight = "20px";
                cell.appendChild(button);
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
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}