import React from "react";
import styles from "./InfoBox.module.scss";
import { Slide } from "../Slide/Slide";

export class InfoBox extends React.Component {
  state = {
    activeIndex: 0,
    slides: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://my-json-server.typicode.com/gorhel5/infobox-server/banner"
    );
    const data = await response.json();
    this.setState({
      slides: data,
    });
  }

  renderSlide() {
    return this.state.slides.map((slide, i) => {
      const key = Math.floor(Math.random() * 1000).toString();
      const isActive = this.state.activeIndex === i;
      const onButtonClick = (data) => {
        console.log(data);
      };
      return <Slide {...{ isActive, key, ...slide, onButtonClick }} />;
    });
  }

  decreaseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex >= 1
          ? this.state.activeIndex - 1
          : this.state.slides.length - 1,
    });
  }

  increaseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex + 1 < this.state.slides.length
          ? this.state.activeIndex + 1
          : 0,
    });
  }

  render() {
    const slidesJsx = this.renderSlide();
    return (
      <div className={styles.infoBox}>
        <div className={styles.slides}>{slidesJsx}</div>
        <div className={styles.controls}>
          <button className={styles.control}>{"<<<"}</button>
          <button
            className={styles.control}
            onClick={() => {
              this.decreaseIndex();
            }}
          >
            {"<"}
          </button>
          <button
            className={styles.control}
            onClick={() => {
              this.increaseIndex();
            }}
          >
            {">"}
          </button>
          <button className={styles.control}>{">>>"}</button>
        </div>
      </div>
    );
  }
}
