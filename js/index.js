document.addEventListener('DOMContentLoaded', function () {
    // Agrega la funcionalidad para mostrar la alerta con el enlace del proyecto
    const verProyectoBtns = document.querySelectorAll('.btn-primary');

    verProyectoBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const enlaceProyecto = btn.getAttribute('href');
            
            // Utiliza confirm en lugar de alert
            const confirmacion = confirm('¿Estás seguro de ver el proyecto?');

            // Verifica la respuesta del usuario
            if (confirmacion) {
                // Redirige a la dirección del proyecto si el usuario hace clic en "Aceptar"
                window.location.href = enlaceProyecto;
            } else {
              
            }
        });
    });
});
