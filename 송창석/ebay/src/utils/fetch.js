const toJson = res => res.json()

export const fetchJson = (name) => {
    const api = fetch(`https://baekcode.github.io/APIs/${name}.json`).then(toJson)
    return api;
}