const  openMenu = document.getElementById('hamburger');

const closeMenu = document.getElementById('close');

const menuBig = document.getElementById('menu');


openMenu.addEventListener('click', 

function () {
    menuBig.classList.add('active');
}
)

closeMenu.addEventListener('click', 

function () {
    menuBig.classList.remove('active');
}
)




//per scrivere un testo e far cambiare in questo caso il titolo col valore che scriviamo nell input

const testo = document.getElementById('testo');

const testo2 = document.getElementById('testo2')

const button = document.getElementById('inviatesto');

const titolo = document.getElementById('titolo');

const reset = document.getElementById('reset');


document.getElementById('inviatesto').addEventListener('click', function()
{
    document.getElementById('titolo').innerHTML=document.getElementById('testo').value + " " + testo2.value;   
}
)



reset.addEventListener('click', function()

{
    testo.value = '';
    testo2.value = ''; 
}

)