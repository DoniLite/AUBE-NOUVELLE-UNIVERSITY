


/**
 * Fonction retournant un élément HTML en fonction du tagName et de options
 * @param {string} tagName - Le tag HTML que l'on souhaite générer
 * @param {Object} options - L'objet d'option que l'on rajoute (optionel)
 * @param {'task' | 'otherComponent'} componentType
 * @returns {HTMLElement}
 */
export function createElement(tagName = '', options={}, componentType = '') {
    switch (componentType) {
        case 'task' : 
            return components.task
    }
    let element = document.createElement(tagName)
    for(const [key, value] of Object.entries(options)) {
        element.setAttribute(key, value)
    }
    
    return element
}

