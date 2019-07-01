import React, { Component } from "react";
import Clarifai from "clarifai";

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
    imageUrl:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562597194&di=846d18302463f32dd8fc85749363d52a&imgtype=jpg&er=1&src=http%3A%2F%2F08.imgmini.eastday.com%2Fmobile%2F20170918%2F20170918153644_d41d8cd98f00b204e9800998ecf8427e_4.jpeg",
    faces: [],
    loading: false
  };

  componentDidMount() {
    this.onSubmit();
  }

  onImageUrlInputChange = event => {
    this.setState({ imageUrl: event.target.value, faces: [] });
  };

  onClearImageUrlInput = () => {
    this.setState({ imageUrl: "" });
  };

  onSubmit = () => {
    this.setState({ loading: true });
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

          this.setState({ faces: faces, loading: false });
        },
        err => {
          console.log(err);
          this.setState({ loading: false });
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles />
        {/* <SignUp /> */}
        <Logo />
        <Search
          imageUrl={this.state.imageUrl}
          changed={this.onImageUrlInputChange}
          clear={this.onClearImageUrlInput}
          clicked={this.onSubmit}
          loading={this.state.loading}
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
