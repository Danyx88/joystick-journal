import { Component } from "react";
import Playstation from "./piattaforme/Playstation";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchOn: false,
    };
  }
  toggleSearch = () => {
    this.setState((prevState) => ({
      SearchOn: !prevState.SearchOn,
    }));
  };
  render() {
    const { SearchOn } = this.state;

    return (
      <nav className="nav">
        <h1 href="#home">Joystick Journal</h1>
        <div className="menu">
          <div className="dropdown">
            <button className="nav-btn">Piattaforme</button>
            <div className="dropdown-content">
              <a href="">PLAYSTATION</a>
              <a href="#">PC</a>
              <a href="#">XBOX</a>
              <a href="#">NINTENDO</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="nav-btn">NEWS</button>
            <div className="dropdown-content">
              <a href="#">Notizia 1</a>
              <a href="#">Notizia 2</a>
              <a href="#">Notizia 3</a>
              <a href="#">Notizia 4</a>
              <a href="#">Notizia 5</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="nav-btn">Recensioni</button>
            <div className="dropdown-content">
              <a href="#">Recensione 1</a>
              <a href="#">Recensione 2</a>
              <a href="#">Recensione 3</a>
              <a href="#">Recensione 4</a>
              <a href="#">Recensione 5</a>
            </div>
          </div>
          <button className="nav-btn">Giochi</button>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className={`search-input ${SearchOn ? "active" : ""}`}
            />
            <button className="nav-btn search" onClick={this.toggleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
          <div>
            <button className="nav-btn login-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="login-logo bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
