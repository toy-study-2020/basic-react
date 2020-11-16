const loadData = async (PATH, API) => {
  const response = await fetch(`${PATH}${API}.json`);
  return response.json();
};

export {
  loadData
}