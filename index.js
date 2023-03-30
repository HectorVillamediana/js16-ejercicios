const lukeSkyWalker = []

const starWars = fetch("https://swapi.dev/api/people");
starWars.then(response => response.json())
    .then(data => console.log(data.results))

const darkVader = fetch("https://swapi.dev/api/people/")
darkVader.then(response => response.json())
    .then(data => data.results.filter(e => {
        if (e.name == "Darth Vader") {
            console.log(e);
        }
    }))

const moviesStarWars = fetch("https://swapi.dev/api/films");
moviesStarWars.then(response => response.json())
    .then(data1 => {
        const luke = fetch("https://swapi.dev/api/people/")
        luke.then(response => response.json())
            .then(data => {
                let linkLuke = ""
                data.results.forEach(elm => {
                    if (elm.name == "Luke Skywalker") {
                        linkLuke = elm.url
                    }
                })
                data1.results.forEach(e => {
                    for (let char of e.characters) {
                        if (char == linkLuke) {
                            console.log(e.title);
                        }
                    }
                })
            })
    });

const organa = fetch("https://swapi.dev/api/people/");
organa.then(response => response.json())
    .then(data => {
        let leiaPlanetLink = "";
        data.results.forEach(e => {
            if (e.name == "Leia Organa") {
                leiaPlanetLink = e.homeworld
            }
        })
        const planetAlderaan = fetch(leiaPlanetLink);
        planetAlderaan.then(response => response.json())
            .then(data => {
                console.log("Planet data:", data);
            })
    })

const c3p0 = fetch("https://swapi.dev/api/people")
c3p0.then(response => response.json())
    .then(data => {
        const films = fetch("https://swapi.dev/api/films")
        films.then(response => response.json())
            .then(data1 => {
                let c3p0Link = "";
                data.results.forEach(e => {
                    if (e.name == "C-3PO") {
                        c3p0Link = e.url
                    }
                })
                data1.results.forEach(elm => {
                    for(let char of elm.characters){
                        if(char == c3p0Link){
                            console.log(elm);
                        }
                    }
                })
            })
    })