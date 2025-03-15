import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { VistaNoticias } from "./VistaNoticias";

export const Noticias = () => {
  
  const [Categorias, setCategorias] = useState("Technology");

  const [SwitchActivo, setSwitchActivo] = useState(false);

  const traerCategorias = (e) => {
    const nuevaOpcion = e.target.value;
    setCategorias(nuevaOpcion);
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

            <option value="business" className="text-black">Business</option>
            <option value="crime" className="text-black">Crime</option>
            <option value="domestic" className="text-black">domestic</option>
            <option value="education" className="text-black">education</option>
            <option value="entertainment" className="text-black">entertainment</option>
            <option value="entertainment" className="text-black">entertainment</option>
            <option value="health" className="text-black">health</option>
            <option value="lifestyle" className="text-black">lifestyle</option>
            <option value="politics" className="text-black">politics</option>
            <option value="science" className="text-black">science</option>
            <option value="sports" className="text-black">sports</option>
            <option value="technology" className="text-black">technology</option>
            <option value="top" className="text-black">top</option>
            <option value="tourism" className="text-black">tourism</option>
            <option value="world" className="text-black">world</option>
            <option value="other" className="text-black">other</option>
  

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
        <VistaNoticias categorias={Categorias}   />
      </section>
    </section>
  );
};
