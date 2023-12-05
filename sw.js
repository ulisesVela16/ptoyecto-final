const nombreCache = "ProyectoUlises"
const archivosCache=[
    "/",
    "/welcome.html",
    "/index.html",
    "/css/welcome.css",
    "/css/index.css",
    "/js/app.js",
    "/js/welcome.js",
    "/js/index.js"
   
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