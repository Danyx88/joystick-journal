import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import Articles from "./components/Articles";
import Reviews from "./components/Reviews";
import Footer from "./components/footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="Home">
          <div>
            <Hero />
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <Articles />
                  <Reviews />
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
