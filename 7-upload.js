
// How to upload one or more files 'from the browser' to a server
// FormData objects
// HTTP Methods POST, PATCH, PUT

// when you Upload Data it could be a json file, it could be a string, it could be a javascript object
// that you do Json stringify on to add it into the body of your request that's being sent to the server
// or you can attach one or more files

export const setData = () => {
    document.querySelector('#myform')
        .addEventListener('submit', (evt) => {
            evt.preventDefault() // don't do the default thing, don't send the data

            const imgFile = document.querySelector('#imgfile')
            const jsonFile = document.querySelector('#jsonfile')

            // const jsonObject = JSON.stringify({
                // id: 134,
                // name: "beltran"
            // })

           const form = new FormData()
            // console.log(imgFile.value)
            // console.log(imgFile.files[0].name, imgFile.size)
           form.append(imgFile.files[0].name, imgFile.files[0])

            const request = new Request('http://localhost/app.php', {
                method: 'POST', // Insert or adding new data
                // I'm not getting json back, i'm uploading json
                // body: jsonObject, // it can be a string or FormData object or some iterable object
                body: form,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            fetch(request).then( response => {
                return response.text()
            }).then( text => {
                console.log(text)
            } )

        })
}