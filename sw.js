const nombreCache = "ProyectoUlises"
const archivosCache=[
    "/",
    "/welcome.html",
    "/index.html",
    "/css/welcome.css",
    "/css/index.css",
    "/js/app.js",
    "/js/welcome.js",
    "/js/index.js",
    "/img",
    "/img/android-logo.svg",
    "/img/android.svg",
    "/img/api.svg",
    "/img/barco.svg",
    "/img/bootstrap-5-1.svg",
    "/img/bootstrap-xx.svg",
    "/img/c--4.svg",
    "/img/c-logo.svg",
    "/img/code.svg",
    "/img/cordova.svg",
    "/img/csharp.svg",
    "/img/css.svg",
    "/img/españa.svg",
    "/img/html.svg",
    "/img/ingles.svg",
    "/img/js.svg",
    "/img/libreta.svg",
    "/img/mexico.svg",
    "/img/mongodb.svg",
    "/img/mysql-4.svg",
    "/img/node-js.svg",
    "/img/nube.png",
    "/img/nube.svg",
    "/img/perfilYo.jpg",  
    "/img/php.svg",
    "/img/red.svg",
    "/img/ropa.svg",
    "/img/tailwind-css-1-2.svg",
    "/img/virt.png",
    "/bootstrap-5.3.2-dist",
    "/img/tailwindcss2.svg",
    "/files/certificadoRedes.pdf",
    "/files/curriculumUlisesUVV.pdf",
    "/files/fundamentosNube.pdf",
]


self.addEventListener('install', e => {
    console.log('El service worker se instalo', e)
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada correctamente")
            cache.addAll(archivosCache)
            .cache(error =>{
                console.error('Error al añadir archivos a la caché:', error);
            });
})
    )
})

self.addEventListener('activate', e =>{
    console.log('El servicio worker activo', e)
})

self.addEventListener('fetch', e=>{
    console.log('fetch.. ',e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache
        })
    )
})
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/sw.js")
        .then(registrado => console.log("El service worker se registró", registrado))
        .catch(error => console.log("Error al registrar el servicio worker", error));
} else {
    console.log("El service worker no es compatible");
}
