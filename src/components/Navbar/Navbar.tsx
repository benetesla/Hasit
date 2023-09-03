import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { MenuItems } from "./MenuItens";
import "./NavbarStyle.css";

class Navbar extends Component {
  state = {
    isMobile: false,
    clicked: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth <= 850) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItens">
        <h1 className="navbarLogo">
          <img src={logo} alt="logo da hasit" />
        </h1>
        {this.state.isMobile ? (
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        ) : null}
        <ul className={this.state.isMobile && this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                  <i className={item.icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
