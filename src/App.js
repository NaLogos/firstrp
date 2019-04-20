import React from "react";
import { render } from "react-dom";
import Pet from "./pet";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Embrace Me!</h1>
        <Pet name="Leo" animal="Lion" breed="African" />
        <Pet name="Kermit" animal="Frog" breed="Golden Poisonous" />
        <Pet name="Julius Squeezer" animal="Boa" breed="Anaconda" />
        <Pet name="Rawr" animal="Bear" breed="Grizzly" />
      </div>
    );
    /*return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.clickTitle }, "Embrace Me!"),
      React.createElement(pet, {
        name: "Leo",
        animal: "Lion",
        breed: "African"
      }),
      React.createElement(pet, {
        name: "Kermit",
        animal: "Frog",
        breed: "Golden Poisonous"
      }),
      React.createElement(pet, {
        name: "Julius Squeezer",
        animal: "Boa",
        breed: "Anaconda"
      }),
      React.createElement(pet, {
        name: "Rawr",
        animal: "Bear",
        breed: "Grizzly"
      })
    ]);*/
  }
}

render(React.createElement(App), document.getElementById("root"));

/*const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Embrace Me!"),
    React.createElement(pet, {
      name: "Leo",
      animal: "Lion",
      breed: "African"
    }),
    React.createElement(pet, {
      name: "Kermit",
      animal: "Frog",
      breed: "Golden Poisonous"
    }),
    React.createElement(pet, {
      name: "Julius Squeezer",
      animal: "Boa",
      breed: "Anaconda"
    }),
    React.createElement(pet, {
      name: "Rawr",
      animal: "Bear",
      breed: "Grizzly"
    })
  ]);
};*/
