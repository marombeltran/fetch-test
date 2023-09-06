
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
    const response = await fetch(url)
    console.log(response)
    const jsonObject = await response.json()
    console.log(jsonObject)
}