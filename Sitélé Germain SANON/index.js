import { createElement } from "./tools.js"

/**
 * @type {HTMLInputElement}
 */
const input = document.querySelector('#todo')
/**
 * @type {HTMLButtonElement}
 */
const btn = document.querySelector('.body button')
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
    let task = createElement('li')
    let checkBox = createElement('input', {type: 'checkbox', name: 'checkbox', id: 'checkbox'})
    task.appendChild(checkBox)
    task.innerText = value
    listView.append(task)
    console.log(checkBox)
    input.value = ''
}

let testElement = createElement('', {}, 'task')
console.log(testElement)

btn.addEventListener('click', createTask)