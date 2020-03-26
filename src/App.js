import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropdown: false
    };
  }

  handleToggle = () => {
    this.setState({ toggleDropdown: !this.state.toggleDropdown });
  };

  render() {
    console.log(this.state.toggleDropdown);
    return (
      <div className="wrap-div">
        <section className="background-img">
          <header>
            {/* first div is desktop */}
            <div className="row-header">
              <div className="logo">Start Bootstrap</div>
              {this.state.toggleDropdown ? (
                <>
                  <nav className="menu">
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>TEAM</span>
                    <span>CONTACT</span>
                  </nav>
                </>
              ) : (
                <span className="dropdown-toggle"></span>
              )}
            </div>
            <div className="hamburger" onClick={this.handleToggle}>
              &#9776;MENU
            </div>
            <nav className="menu-burger">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </nav>
          </header>
          <section className="middle-section">
            <div className="welcome">Welcome To Our Studio!</div>
            <div className="its-nice">IT'S NICE TO MEET YOU</div>
            <div className="yellow-button">
              <div className="tell-me-more">TELL ME MORE</div>
            </div>
          </section>
        </section>
        <footer>
          <div className="services">SERVICES</div>
          <div className="lorem">Lorem ipsum dolor sit amet consectetur.</div>
        </footer>
      </div>
    );
  }
}
