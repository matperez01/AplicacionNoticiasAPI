import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { VistaNoticias } from "./VistaNoticias";

export const Noticias = () => {
  
  const [Categorias, setCategorias] = useState("Technology");
  const [Orden, setOrden] = useState("relevancy");
  const [SwitchActivo, setSwitchActivo] = useState(false);

  const traerCategorias = (e) => {
    const nuevaOpcion = e.target.value;
    setCategorias(nuevaOpcion);
  };

  const traerOrden = (e) => {
    const nuevaOpcion = e.target.value;
    setOrden(nuevaOpcion);
  };

  

  const toggleSwitch = () => {
    setSwitchActivo(!SwitchActivo);
  };

  return (
    <section className={SwitchActivo ? "bg-gray-900 text-amber-50": "bg-amber-50 text-black"}>
      <section className="md:flex md:justify-between p-3 md:items-center sm:flex sm:justify-center sm:items-center">
        <article className="flex-col items-center justify-center">
          <h1 className={`text-2xl ml-2 font-stretch-condensed font-sans mb-4 text-center `}>
            Categoría: {Categorias}
          </h1>

          
        </article>

        <section className={`flex-col items-center justify-center text-center ${SwitchActivo ? "text-white" : "text-black"}` }>
          <select
            onChange={traerCategorias}
            name="categoria"
            className={`p-1.5 h-10 border rounded-2xl mb-4 mr-3 `}>

            <option value="Business" className="text-black">Business</option>
            <option value="Entertainment" className="text-black">Entertainment</option>
            <option value="General" className="text-black">General</option>
            <option value="Health" className="text-black">Health</option>
            <option value="Science" className="text-black">Science</option>
            <option value="Sports" className="text-black">Sports</option>
            <option value="Technology" className="text-black">Technology</option>

          </select>

        

          <select
            name="Relevancia"
            onChange={traerOrden}
            className="p-1.5 h-10 border rounded-2xl mb-4"
          >
            <option value="relevancy" className="text-black">Mas Relevancia</option>
            <option value="popularity" className="text-black">Populares</option>
            <option value="publishedAt" className="text-black">Reciente</option>
          </select>

          <article className="flex justify-center">
            <p className="mr-2 ">{SwitchActivo ? "Modo oscuro" : "Modo Claro"}  </p>
            {
              SwitchActivo ?   <FontAwesomeIcon icon={faMoon} style={{ color: 'white', fontSize: '20px' }} /> : <FontAwesomeIcon icon={faSun} style={{ color: 'black', fontSize: '20px' }} />
            }
           
           
            <label className="ml-2 items-center cursor-pointer">
              <input
                type="checkbox"
                className="switchbox w-5 h-5"
                checked={SwitchActivo}
                onChange={toggleSwitch}
              />
              
              
            </label>
          </article>
        </section>
        
      </section>
      <section className="w-full flex flex-wrap justify-around items-center">
        <VistaNoticias categorias={Categorias} orden={Orden}  />
      </section>
    </section>
  );
};
