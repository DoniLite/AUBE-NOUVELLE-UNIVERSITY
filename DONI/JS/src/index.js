

const p = document.querySelector('.js');

p.addEventListener('click', (e) => {
    const el = e.currentTarget
    el.innerHTML = 'Hello world'
    console.log(el)
})

if(typeof p === 'Element') {
    p.innerHTML = ''
} else {

}


// while (true) {
//     console.log('boucle infinii')
// }

const t = ['Ce tableau', ' jk jk', 'zkczc']

for (let index = 0; index < t.length; index++) {
    const element = t[index];
    console.log(element)
}
