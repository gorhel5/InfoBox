import React from "react";
import styles from "./Slide.module.scss";

export class Slide extends React.Component {
  render() {
    const { isActive, img, title, description, onButtonClick } = this.props;
    return (
      <div className={`${styles.slide} ${isActive ? styles.active : ""}`}>
        <img src={img} alt="" className={styles.img} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          className={styles.btn}
          onClick={() => {
            onButtonClick("Hello" + title);
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

// export const Slide = (props) => {
//   return (
//     <div
//       className={`${styles.slide} ${
//         this.state.activeIndex === props.i ? styles.active : ""
//       }`}
//     >
//       <img src={props.slide.img} alt="" className={styles.img} />
//       <h2>{props.slide.title}</h2>
//       <p>{props.slide.description}</p>
//     </div>
//   );
// };
