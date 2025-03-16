import "./Header.css";
import logo from "./assets/logo.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <span className="header-title">Ferramenta de aprendizagem de cálculo</span>
      </div>
      <span className="header-date">07/06/2022</span>
    </header>
  );
}

export default Header;