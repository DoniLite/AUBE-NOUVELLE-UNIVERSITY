const p = document.querySelector('.text10');

p.addEventListener('click', (e) =>{
    const el = e.currentTarget
    el.innerHTML = 'Hello world'
    console.log('el')
    
})

if(typeof p == 'Element') {
    p.innerHTML = ''
}else {

}

//while (true) {
    console.log
//}

const t = ['tableau', 'jk' , 'hhijhhg']

for( let index = 0; index< t.length; index++) {
    const element = t[index];
    console.log(element);
}

