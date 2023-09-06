
const url = 'https://jsonplaceholder.typicode.com/users';

export const getData = async () => {
    // fetch(url).then().then().catch()

    // const response = fetch(url)
    // const jsonObject = await (await response).json()
    // console.log(jsonObject)

    // ...
    // const jsonObject = await (await fetch(url)).json()
    // console.log(jsonObject)

    // ...the code above is the same as
    // const response = await fetch(url)
    // const jsonObject = await response.json()
    // console.log(jsonObject)

    // ... now look at this
    // const response = await fetch(url)
    // console.log(response)
    // const jsonObject = await response.json()
    // console.log(jsonObject)

    try {
        // const response = await fetch(url)
        // if (! response.ok) {
            // throw new Error('was not a valid response')
        // }

        //. it is the same as
        if (! (await fetch(url)).ok) {
            throw new Error('was not a valid response')
        }

        const jsonObject = await (await fetch(url)).json()
        console.log(jsonObject)
    } catch (error) {
        console.warn(error.message)
    }

}