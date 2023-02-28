
const skill = document.getElementById('skill');
const contenidoEsconder = document.getElementById('contenidoesconder');
const btn = document.getElementById('btn')

skill.addEventListener('click', function() { 
    contenidoEsconder.classList.toggle('skills-content-1')
})

btn.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
    
})