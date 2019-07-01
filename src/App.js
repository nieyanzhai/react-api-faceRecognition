import React, { Component } from "react";
import Clarifai from "clarifai";

import SignUp from "./components/SignUp/SignUp";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";
import Particles from "./components/Particles/Particles";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";

const clarifaiApp = new Clarifai.App({
  apiKey: "efb2be19c8304837a11c8fffb3c488ea"
});

class App extends Component {
  state = {
    imageUrl: "",
    faces: []
  };

  onImageUrlInputChange = event => {
    this.setState({ imageUrl: event.target.value, faces: [] });
  };

  onSubmit = () => {
    clarifaiApp.models
      .predict("a403429f2ddf4b49b307e318f00e528b", this.state.imageUrl)
      .then(
        response => {
          const image = document.querySelector("#human");
          const width = image.width;
          const height = image.height;

          const faces = response.outputs[0].data.regions
            .map(face => face.region_info.bounding_box)
            .map(face => {
              return {
                bottom_row: height - face.bottom_row * height,
                left_col: face.left_col * width,
                right_col: width - face.right_col * width,
                top_row: face.top_row * height,
                id: Math.random()
              };
            });

          this.setState({ faces: faces });
        },
        err => {
          console.log(err);
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles />
        <SignUp />
        <Logo />
        <Search
          imageUrl={this.state.imageUrl}
          changed={this.onImageUrlInputChange}
          clicked={this.onSubmit}
        />
        <FaceRecognition
          imageUrl={this.state.imageUrl}
          faces={this.state.faces}
        />
      </div>
    );
  }
}

export default App;
