import React from "react";
import styles from "../styles/Content.module.css";
import BigBoard from "./BigBoard";

export default function Restaurant_board() {
  return (
    <div className={styles.WrapperStyled}>
      <BigBoard />
    </div>
  );
}
