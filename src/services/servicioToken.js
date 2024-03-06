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
        imagen2.src=respuesta.tracks[1].album.images[0].url

        let audio2=document.getElementById("audio2")
        audio2.src=respuesta.tracks[1].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })
    
    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[2].name)
        console.log(respuesta.tracks[2].preview_url)
        console.log(respuesta.tracks[2].album.images[2].url)

        let titulo3=document.getElementById("titulo3")
        titulo3.textContent=respuesta.tracks[2].name

        let imagen3=document.getElementById("imagen3")
        imagen3.src=respuesta.tracks[2].album.images[0].url

        let audio3=document.getElementById("audio3")
        audio3.src=respuesta.tracks[2].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[3].name)
        console.log(respuesta.tracks[3].preview_url)
        console.log(respuesta.tracks[3].album.images[3])

        let titulo4=document.getElementById("titulo4")
        titulo4.textContent=respuesta.tracks[3].name

        let imagen4=document.getElementById("imagen4")
        imagen4.src=respuesta.tracks[3].album.images[0].url

        let audio4=document.getElementById("audio4")
        audio4.src=respuesta.tracks[3].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[4].name)
        console.log(respuesta.tracks[4].preview_url)
        console.log(respuesta.tracks[4].album.images[4])

        let titulo5=document.getElementById("titulo5")
        titulo5.textContent=respuesta.tracks[4].name

        let imagen5=document.getElementById("imagen5")
        imagen5.src=respuesta.tracks[4].album.images[0].url

        let audio5=document.getElementById("audio5")
        audio5.src=respuesta.tracks[4].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[5].name)
        console.log(respuesta.tracks[5].preview_url)
        console.log(respuesta.tracks[5].album.images[5])

        let titulo6=document.getElementById("titulo6")
        titulo6.textContent=respuesta.tracks[5].name

        let imagen6=document.getElementById("imagen6")
        imagen6.src=respuesta.tracks[5].album.images[0].url

        let audio6=document.getElementById("audio6")
        audio6.src=respuesta.tracks[5].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[6].name)
        console.log(respuesta.tracks[6].preview_url)
        console.log(respuesta.tracks[6].album.images[6])

        let titulo7=document.getElementById("titulo7")
        titulo7.textContent=respuesta.tracks[6].name

        let imagen7=document.getElementById("imagen7")
        imagen7.src=respuesta.tracks[6].album.images[0].url

        let audio7=document.getElementById("audio7")
        audio7.src=respuesta.tracks[6].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[7].name)
        console.log(respuesta.tracks[7].preview_url)
        console.log(respuesta.tracks[7].album.images[7])

        let titulo8=document.getElementById("titulo8")
        titulo8.textContent=respuesta.tracks[7].name

        let imagen8=document.getElementById("imagen8")
        imagen8.src=respuesta.tracks[7].album.images[0].url

        let audio8=document.getElementById("audio8")
        audio8.src=respuesta.tracks[7].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[8].name)
        console.log(respuesta.tracks[8].preview_url)
        console.log(respuesta.tracks[8].album.images[8])

        let titulo9=document.getElementById("titulo9")
        titulo9.textContent=respuesta.tracks[8].name

        let imagen9=document.getElementById("imagen9")
        imagen9.src=respuesta.tracks[8].album.images[0].url

        let audio9=document.getElementById("audio9")
        audio9.src=respuesta.tracks[8].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    fetch(urlCanciones,peticionCanciones)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta.tracks[9].name)
        console.log(respuesta.tracks[9].preview_url)
        console.log(respuesta.tracks[9].album.images[9])

        let titulo10=document.getElementById("titulo10")
        titulo10.textContent=respuesta.tracks[9].name

        let imagen10=document.getElementById("imagen10")
        imagen10.src=respuesta.tracks[9].album.images[0].url

        let audio10=document.getElementById("audio10")
        audio10.src=respuesta.tracks[9].preview_url

    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

    

})//Todo ok
.catch(function(respuesta){
    console.log(respuesta)
})//Fallaste