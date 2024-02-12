const btnEl = document.querySelector('.btn');
const paragrafoEl = document.querySelector('.contador');
const btnReset = document.querySelector('.btnReset')
btnEl.addEventListener("click", contador);
btnReset.addEventListener('click', resetar);
let contar = 0;

function contador(){
    contar++;
    paragrafoEl.innerHTML = contar 

    if ( contar % 4 === 0) {
        alert(`${contar} é um multiplo de 4`)
    }
}

function resetar(){
    contar = 0
    paragrafoEl.innerHTML = contar
}








