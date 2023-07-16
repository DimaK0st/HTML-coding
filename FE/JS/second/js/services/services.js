const postData = async (url, json) => {
    const res = await fetch(url, {
            method: 'POST',
            body: json,
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            }
        }
    )

    return await res.json()
}

const getResource = async (url, json) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`)
    }

    return await res.json()
}

export {postData,getResource}
