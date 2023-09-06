
const jsonStream= 'https://jsonplaceholder.typicode.com/users'
const imgStream= 'https://picsum.photos/id/237/300/200'
const fontStream= 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'
const htmlStream= 'https://example.com'

export const getData = () => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const header = document.createElement('header')

    fetch(imgStream).then( response => {
        if (! response.ok) {
            throw new Error('was not a valid request')
        }

        return response.blob()
    }).then( blob => {
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        console.log(img.src)

        document.body.append(img)
    }).catch( error => {
        console.warn(error.message)
    })
}
