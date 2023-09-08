
// API Keys, Authorization, Credentials, Content-Security-Policy

export const getData = async () => {
    const url = new URL('http://localhost/app.php?nick=marombeltran')
    const params = url.searchParams

    params.append('age', '35')

    const request = new Request(url, {
        headers: {
            // 'origin': 'https://cia.org', // this is not allowed because the key corresponds to the web browser
            // Forbidden header names: https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
            'x-api-key': 'fasdfasdfasdf', // API key
            'Authorization': 'Bearer akjfaksjfakdfklajsdfkj', // JWToken
        },
        cache: "default",
        credentials: "same-origin", // the opposite "include"
    });

    const jsonObject = await (await fetch(request)).json()
    console.log(jsonObject)
}
