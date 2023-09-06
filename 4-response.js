
const jsonStream= 'https://jsonplaceholder.typicode.com/users'
const imgStream= 'https://picsum.photos/id/237/300/200'
const fontStream= 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'
const htmlStream= 'https://example.com'

const obj = {
    id: crypto.randomUUID(),
    name: 'the one who knocks',
    favoriteColor: 'blue'
}

export const getData = () => {
    fetch(imgStream).then( response => {
        if (! response.ok) {
            throw new Error('was not a valid request')
        }

        return response.blob() // binary large object, for img, font, video, audio
        return response.text() // for text, html, and xml files, and css, and js
        return response.json() // for json files
    }).then( blob => {
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        document.body.append(img)
    }).catch( error => {
        console.warn(error.message)
    })

    //
    console.log(JSON.stringify(obj))
    const file = new File(
        [JSON.stringify(obj)],
        'data.json',
        {
            type: 'application/json'
        }
    )

    const response = new Response(file, {
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': file.size,
            'x-beltran': 'Starts with x for a custom header name'
        }
    })

    console.log(response)
    console.log(response.headers.get('x-beltran'))

}