export const getNews = async (categorias,orden) => {
  const API = "a46ff5f69c0145a095f159c044d2a78c";
  const cantidad = 20
  const url = `https://newsapi.org/v2/everything?q=${categorias}&sortBy=${orden}&apiKey=${API}&pageSize=${cantidad}&language=es`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};