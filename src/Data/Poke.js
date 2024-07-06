const API = "https://pokeapi.co/api/v2/pokemon/"

function getUser() {
    fetch(API)
    .then((Response) => {
        console.log(Response);
    })
}


getUser()