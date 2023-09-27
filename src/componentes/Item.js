// CONSIGNAS EN ITEM:  🚩
// 1- crear un <li> que tenga su click preparado para ejecutar el metodo heredado para seleccionar la plataforma como favorita
// 2- Presentar el nombre de la plataforma que le llega como prop

// El componente Item:
// ESTADO: Item no necesita manejar un estado.
// MÉTODOS: Item no requiere de métodos.
// PROPS: Item recibe como props el método para modificar la plataforma favorita y su respectivo nombre como contenido.
import { useContext } from "react";
import ThemeContext from "../componentes/context"

export default function Item(props) {
  
  
  const{temaOscuro} = useContext(ThemeContext,  handleTema);
  
  return (
      <>
          <ul>
            <li>
              <div style={{ background: temaOscuro.background, color: temaOscuro.font }}>
              <h1>{it}</h1>
              </div>
            </li>
          </ul>
      </>
    );
  }
  