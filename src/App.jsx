import React from "react";
import styles from "./App.module.scss";
import { InfoBox } from "./components/InfoBox/InfoBox";

export class App extends React.Component {
  render() {
    return (
      <div>
        <InfoBox />
      </div>
    );
  }
}

export default App;
