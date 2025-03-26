import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className="hero bg-dark text-white py-5">
        <div className="container mt-5">
          <h1>Joystick Journal</h1>
          <p className="lead">
            Le ultime notizie sui videogiochi, recensioni e molto altro.
          </p>
        </div>
      </section>
    );
  }
}

export default Hero;
