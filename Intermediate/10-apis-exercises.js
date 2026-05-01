/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
/*fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => console.log(json))*/

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
/* fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok){
            throw new Error("La peticion ha fallado")
        }
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.log("Error", error)) */

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
/* async function getJson() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok){
            throw new Error("La peticion ha fallado")
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getJson() */

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
/* async function createPosts() {
    try {
        const newPost = {
            "userId": 11,
            "title": "Título de prueba",
            "body": "Body de prueba"
        }
        const post = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })

        const data = await post.json()

        if (!post.ok){
            throw new Error("La peticion post ha fallado")
        }
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

createPosts() */

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
/* async function actualizarPost() {
    try {
        const putPost = {
            "userId": 55,
            "title": "Título actualizado",
            "body": "Body actualizado"
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/55", {
            method: "PUT",
             headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(putPost)
        })
        const data = await response.json()

        if (!response.ok){
            throw new Error("La peticion put ha fallado")
        }
        console.log(data)
    } catch (error) {
        console.error(error.message)
    }
}

actualizarPost() */

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
/* async function patchPost() {
    try {
        const post = {
            "title": "Título actualizado"
        }
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/99", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        
        const data = await response.json()

        if(!response.ok){
            throw new Error("La petición patch ha fallado")
        }
        console.log(data)
    } catch (error) {
        console.error(error.message)
    }
    
}

patchPost() */

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
/* async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/55", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        
        if(!response.ok){
            throw new Error("La petición DELETE ha fallado")
        }
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

deletePost() */

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function pokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        if(!response.ok){
            throw new Error("La peticion GET ha fallado")
        }
        console.log(data)

        const urlSpecies = data.species.url
        const responseSpecies = await fetch(urlSpecies, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const dataSpecies = await responseSpecies.json()

        const urlEvolution = dataSpecies.evolution_chain.url
        const responseEvolution = await fetch(urlEvolution, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const dataEvolution = await responseEvolution.json()
        console.log(dataEvolution.chain.species.name)
        console.log(dataEvolution.chain.evolves_to[0].species.name)
        console.log(dataEvolution.chain.evolves_to[0].evolves_to[0].species.name)

    } catch (error) {
        console.error(error.message)
    }
}

pokemon("Charmander")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
