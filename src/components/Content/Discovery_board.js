import React from "react";
import BigBoard from "./BigBoard";
import Categories from "./Categories";
import styles from "../styles/Content.module.css";
import Restaurant_board from "./Restaurant_board";
export default function Discovery_board(props) {
  return (
    <div className={styles.WrapperStyled}>
    <Restaurant_board restaurant_list={props.restaurant_list}/>
      <Categories></Categories>
    </div>
  );
}
