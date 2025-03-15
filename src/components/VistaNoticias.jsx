import React, { useEffect, useState } from "react";
import { getNews } from "../helpers/noticiasApi";

export const VistaNoticias = ({ categorias,   }) => {
  const [Noticias, setNoticias] = useState([]);

  useEffect(() => {

    getNoticias();
  }, [categorias ]);

  const getNoticias = async () => {
    const data = await getNews(categorias);
    console.log(data);
    setNoticias(data.results);
  };

  return (
    <>
      {Noticias.map((noticia) => (
        <section
          key={noticia.source_id}
          className="flex justify-around flex-col p-2 w-70 h-150 border-1 m-1.5 rounded-lg"
        >
          {noticia.image_url && (
            <img
              src={noticia.image_url}
              alt="Imagen de la noticia"
              className="w-full h-40 rounded-sm"
            />
          )}

          <h6 className="font-semibold text-lg">{noticia.title}</h6>

          {noticia.description && noticia.description.length <= 350 && (
            <p className="m-1 text-sm/6 font-light">
              {noticia.description.length > 300
                ? noticia.description.slice(0, 100) + "..."
                : noticia.description}
            </p>
          )}

          {noticia.author && <p>{noticia.author}</p>}

          <button
            onClick={() => window.open(noticia.source_url, "_blank")}
            className="w-full bg-sky-400 rounded-lg text-lg m-1 font-light drop-shadow-md cursor-pointer"
          >
            Ir al sitio
          </button>
        </section>
      ))}
    </>
  );
};
