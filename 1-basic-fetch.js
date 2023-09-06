
const url = 'https://jsonplaceholder.typicode.com/users';

export const getData = () => {
    fetch(url)
        .then( response => {
            if (! response.ok) { // it means it was in the 200 to 299 `response.status` range
                throw new Error('was not a valid response')
            }

            console.log(response)
            return response.json() // still being a Promise
        })
        .then( jsonObject => {
            console.log(jsonObject)
        }) // when all that's done this function will be call
        .catch( error => {
            console.warn(error.message)
        })

    /* This code will always fail */
    // const response = fetch(url)
    // const json = response.json()
}
