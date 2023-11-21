document.addEventListener('DOMContentLoaded', function () {
    // Bloque para la sección de proyectos
    const verProyectoBtns = document.querySelectorAll('.btn-primary');

    verProyectoBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            const enlaceProyecto = btn.getAttribute('href');
            window.location.href = enlaceProyecto;
        });
    });

    // Bloque para la sección de cursos
    const verCursoBtns = document.querySelectorAll('.neon-button');

    verCursoBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            const enlaceCurso = btn.getAttribute('href');
            window.location.href = enlaceCurso;
        });
    });
});
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_qzb5ygn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});