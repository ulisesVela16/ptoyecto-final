const nombreCache = "ProyectoUlises"
const archivosCache=[
    "/",
    "/welcome.html",
    "/index.html",
    "/css/index.css",
    "/css/welcome.css",
    "/js/index.js",
    "/js/welcome.js"
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