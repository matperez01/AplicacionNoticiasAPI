export const getNews = async (categorias) => {
  const API = "pub_74578266d7bf4c8e06e29ddc6616b4f1b5f49";
  const cantidad = 20
  const url = `https://newsdata.io/api/1/latest?apikey=${API}&category=${categorias}&language=es&country=ar`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};


