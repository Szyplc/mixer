console.log("Czarrros")

const electron = require("electron")
const {ipcRenderer} = electron;

let inputs = document.querySelectorAll("input");
inputs.forEach(e => {
    e.addEventListener("input", changeInput)
})

function changeInput(e) {
    ipcRenderer.send("changeConfig", {id: e.target.id, value: e.target.value});
}