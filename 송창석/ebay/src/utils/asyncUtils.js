const { fetchJson } = require("./fetch")

const fetchAsyncDispatcher = async (dispatch, type, key) => {
  const res = await fetchJson(key)
  
  dispatch({
    type,
    res,
    key
  })
}

export default fetchAsyncDispatcher