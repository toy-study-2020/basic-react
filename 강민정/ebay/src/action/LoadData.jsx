const LoadData = async (PATH, API) => {
  const response = await fetch(`${PATH}${API}.json`);
  return await response.json();
};

export default LoadData;
