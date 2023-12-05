if('serviceWorker' in navigator){
    navigator.serviceWorker.register("/sw.js")
    .then(registrado => console.log("El service worker se resgistro",
    registrado))
    .catch(error=>console.log("Error al registrar el servicio worker",
    error));
}else{
    console.log("el service worker no es compatible")
}