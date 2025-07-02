console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
const labelBox = document.querySelector("#label-box");
const resetBtn = document.querySelector("#reset-btn");
let currentDraggedElement = null;

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (this.children.length > 0) {
        return;
    }
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function resetThegame() {
    labels.forEach(label => {
        labelBox.appendChild(label);
    });
}

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});

resetBtn.addEventListener("click", resetThegame);
