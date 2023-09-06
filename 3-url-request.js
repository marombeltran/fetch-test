
const urlString = 'https://jsonplaceholder.typicode.com/users'

export const getData = async () => {
    const url = new URL(urlString)
    console.log(url)
    const request = new Request(url, {
        headers: {
            'x-beltran': 'hello'
        },
        method: 'GET',
        cache: 'no-store'
    })

    fetch(request)
        .then( response => {
            if (! response.ok) {
                throw new Error('was not a valid response')
            }

            // ... this is not allowed
            // return await response.json()

            return response.json()
        })
        .then( jsonObject => {
            console.log(jsonObject)
        })
        .catch( error => {
            console.warn(error.message)
        })
}