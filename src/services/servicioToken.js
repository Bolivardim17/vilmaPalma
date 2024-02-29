//1. Url
let url="https://accounts.spotify.com/api/token"

//2. CONFIGURE LA PETICION
let grantType="grant_type=client_credentials"
let clientId="client_id=4129b8f57eb24704bdf7a29f282f9900"
let clientSecret="client_secret=f2c1f6f98ce0439a8aeeca0e5b7b4ac3"

let datosBody=grantType+'&'+clientId+'&'+clientSecret

//3. EJECUTE EL CONSUMO ATRAVES DE FETCH 

let peticion={
    method:"POST",
    headers:{
        "content-type":"application/x-www-form-urlencoded"
    },
    body: datosBody
}

fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})//Todo ok
.then(function(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token
    let urlCanciones="https://api.spotify.com/v1/artists/5VQCk9RiLwri99OgOT34kq/top-tracks?market=US"

    let peticionCanciones={
        method:"GET",
        headers:{
            Authorization:token
        }
    }

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[0].name)
        console.log(respuesta.tracks[0].preview_url)
        console.log(respuesta.tracks[0].album.images[0].url)

        let titulo1=document.getElementById("titulo1")
        titulo1.textContent=respuesta.tracks[0].name

        let imagen1=document.getElementById("imagen1")
        imagen1.src=respuesta.tracks[0].album.images[0].url

        let audio1=document.getElementById("audio1")
        audio1.src=respuesta.tracks[0].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[1].name)
        console.log(respuesta.tracks[1].preview_url)
        console.log(respuesta.tracks[1].album.images[1].url)

        let titulo2=document.getElementById("titulo2")
        titulo2.textContent=respuesta.tracks[1].name

        let imagen2=document.getElementById("imagen2")
        imagen2.src=respuesta.tracks[1].album.images[1].url

        let audio2=document.getElementById("audio2")
        audio2.src=respuesta.tracks[1].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[2].name)
        console.log(respuesta.tracks[2].preview_url)
        console.log(respuesta.tracks[2].album.images[2].url)

        let titulo3=document.getElementById("titulo3")
        titulo3.textContent=respuesta.tracks[2].name

        let imagen3=document.getElementById("imagen3")
        imagen3.src=respuesta.tracks[2].album.images[2].url

        let audio3=document.getElementById("audio3")
        audio3.src=respuesta.tracks[2].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    

})//Todo ok
.catch(function(respuesta){
    console.log(respuesta)
})//Fallaste