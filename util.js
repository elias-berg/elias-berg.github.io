/* Utility Functions */

const fetchJSON = async (url) => {
  const resp = await fetch(url);
  const json = await resp.json();
  return json;
}