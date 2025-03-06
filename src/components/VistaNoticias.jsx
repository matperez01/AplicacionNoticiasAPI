import React, { useEffect, useState } from "react";
import { getNews } from "../helpers/noticiasApi";

export const VistaNoticias = ({ categorias,  orden }) => {
  const [Noticias, setNoticias] = useState([]);

  useEffect(() => {
    getNoticias();
  }, [categorias, orden]);

  const getNoticias = async () => {
    const data = await getNews(categorias, orden);
    console.log(data);
    setNoticias(data.articles);
  };

  return (
    <>
      {Noticias.map((noticia) => (
        <section
          key={noticia.publishedAt}
          className="flex  justify-around flex-col p-2 w-70 h-140 border-1 m-1.5 rounded-lg "
        >
          <img src={noticia.urlToImage} alt="" className="w-full h-40 rounded-sm" />
          <h6 className="font-semibold text-lg">{noticia.title}</h6>
          <p className="m-1 text-sm/6 font-light">{noticia.description}</p>
          <p className=" text-end font-normal">{noticia.author}</p>
          <button
            onClick={() => window.open(noticia.url, "_blank")}
            className="w-full bg-sky-400 rounded-lg text-lg m-1 font-light drop-shadow-md cursor-pointer">
            Ir al sitio
          </button>
        </section>
      ))}
    </>
  );
};