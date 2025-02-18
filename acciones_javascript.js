console.log("Bienvenido al portafolio de [Tu Nombre y Apellido]");

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        alert('Abriendo el proyecto: ' + this.href);
    });
});
