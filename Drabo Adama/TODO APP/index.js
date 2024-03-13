import { createElement } from "./tools.js"

/**
 * @type {HTMLInputElement}
 */
const input = document.querySelector('#todo')
/**
 * @type {HTMLButtonElement}
 */
const btn = document.querySelector('.body button')
const btnSupp = document.querySelector('.body .supprimer')
/**
 * @type {HTMLUListElement}
 */
const listView = document.querySelector('.view ul')

/**
 * Fonction permettant de créer une nouvelle tâche
 * @param {Event} e 
 */
function createTask(e) {
    e.preventDefault()
    let value = input.value
    let task = createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    task.appendChild(checkbox)
    task.innerText = value
    listView.append(task)
    input.value = ''
}

function removeTask() {
    let listView = document.getElementById("#todo")
    let value = input.value
    let task = listView.getElementsByTagName("li")
    if (task.textContent === value) {
        listView.remove()
    }
}

btnSupp.removeEventListener("click", removeTask)
btn.addEventListener('click', createTask)