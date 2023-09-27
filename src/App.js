import { useState } from "react";
import ThemeContext, {themes} from "./componentes/context"
import Tarjeta from "./componentes/Tarjeta"
import "./index.css";

// CONSIGNAS EN APP:
// 1- Implementar 2 estados, uno para manejar el tema claro/oscuro del sitio y otro estado que maneje la plataforma favorita seleccionada
// 2- Desarrollar los métodos que me permitan asignarle valor correspondiente a esas variables.
// 3- Incorporar el componete Tarjeta en 🚩

// ESTADO: App tiene dos estados, uno para manejar el tema Claro/Oscuro, y otro para guardar como texto la Plataforma favorita.
// MÉTODOS: App tiene dos métodos, uno para cambiar el color del tema y otro para setear la plataforma favorita.
// PROPS: App no tiene props.

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [favorita, setFavorita] = useState("");
  
  

  const handleTema = () => {
    temaOscuro === themes.dark ? setTemaOscuro(themes.light) : setTemaOscuro(themes.dark);
   
  };

  const handleFavorita = (favs) => {

    setFavorita([...favorita, favs])

    

     

  
  };

  return (
    <ThemeContext.Provider value={{ temaOscuro, handleTema}}>
    <div id="App" 
    className={temaOscuro ? "dark" : ""}
    >
      <h1>¡Bienvenidos!</h1>
      <h2>Contanos, ¿cuál es tu plataforma favorita?</h2>
      { favorita !== "" ? (<h4 className={ favorita === "Twitter" ? "tw" : favorita === "Facebook" ? "fb" : "yt" }> {favorita}</h4>) : ("")}

      {/* 🚩 Implementar acá */}

      <Tarjeta handleFavoritas={handleFavorita}/>

      <button
       onClick={handleTema}
       style={{ background: temaOscuro.background, color: temaOscuro.font }}
      >
        Cambiar tema
        </button>
    </div>
    </ThemeContext.Provider>
  );
}


export default App;
