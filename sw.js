const nombreCache = "ProyectoUlises"
const archivosCache = [
    "/",
    "/welcome.html",
    "/index.html",
    "/css/welcome.css",
    "/css/index.css",
    "/js/app.js",
    "/js/welcome.js",
    "/js/index.js",
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
    "/img/tailwindcss2.svg",
    "/files/certificadoRedes.pdf",
    "/files/curriculumUlisesVV.pdf",
    "/files/fundamentosNube.pdf",
    "/bootstrap-5.3.2-dist/css/bootstrap.min.css"
]


self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(nombreCache).then((cache) => {
            return Promise.all(
                archivosCache.map((url) => {
                    return fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch: ${url}`);
                        }
                        return cache.put(url, response);
                    })
                    .catch((error) => {
                        console.error(`Error fetching and caching ${url}: ${error}`);
                    });
                })
                );
            })
            );
        });
        
        
        self.addEventListener('activate', e => {
            // console.log("el service worker activado " + e)
        })
        
        self.addEventListener('fetch', e => {
            // console.log("fetch " + e)
            e.respondWith(
                caches.match(e.request)
                .then(response => {
                    return response || fetch(e.request)
                })
                    )
            })
            