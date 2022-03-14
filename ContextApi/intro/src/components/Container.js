import Button from "./Button";
import { useContext } from "react"; //usecontext tanımı
import ThemeContext from "../context/ThemeContext"; //KULLANMAK İSTEDİGİMİZ YERİN(CONTEXT)  İMPORTU

function Container() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <h3>Container components</h3>
      <div>
        {" "}
        <button onClick={() => setTheme(theme === "Dark" ? "Red" : "Dark")}>
          {" "}
          {theme}{" "}
        </button>
      </div>

      <Button />
    </div>
  );
}

export default Container;
