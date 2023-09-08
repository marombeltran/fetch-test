
// API Keys, Authorization, Credentials, Content-Security-Policy

export const getData = async () => {
    const url = new URL('http://localhost/app.php?nick=marombeltran')
    const params = url.searchParams

    params.append('age', '35')

    const request = new Request(url, {

    });

    const jsonObject = await (await fetch(request)).json()
    console.log(jsonObject)
}
