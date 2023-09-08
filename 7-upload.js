
// How to upload one or more files 'from the browser' to a server
// FormData objects
// HTTP Methods POST, PATCH, PUT

// whe you Upload Data it could be a json file, it could be a string, it could be a javascript object
// that you do Json stringify on to add it into the body of your request that's being sent to the server
// or you can attach one or more files

export const setData = () => {
    document.querySelector('#myform')
        .addEventListener('submit', (evt) => {
           evt.preventDefault()

        })
}