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
    "/img/ingles.webp",
    "/img/js.svg",
    "/img/libreta.svg",
    "/img/mexico.svg",
    "/img/mongodb.svg",
    "/img/mysql-4.svg",
    "/img/node.svg",
    "/img/nube.png",
    "/img/nube.svg",
    "/img/perfilYo.jpg",
    "/img/php.svg",
    "/img/red.svg",
    "/img/redes.png",
    "/img/ropa.svg",
    "/img/tailwind-css-1-2.svg",
    "/img/tailwindcss2.svg",
    "/img/virt.png",
    "/img/virt.svg",
    "/img/icons"
   
]


self.addEventListener('install', e => {
    console.log('El service worker se instalo', e)
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada correctamente")
            cache.addAll(archivosCache);
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
