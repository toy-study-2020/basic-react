const toJson = (res) => {
    return res.json()
}

const fetchJson = (url) => {
    const fileName = `https://baekcode.github.io/APIs/${url}.json`

    return fetch(fileName)
    .then(toJson)
}

export {
    fetchJson
}