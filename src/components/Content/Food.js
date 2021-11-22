import React from "react";
import { Card } from "antd";
import styles from "../styles/Food.module.css";

export default function Food() {
  return (
    <div className={styles.WrappedStyled}>
      <div className={(styles.Food_card, styles.zoom)}>
        <Card
          hoverable
          cover={<img alt="example" src="/images/mcdonal.jpg" height="100%" />}
          bodyStyle={{ padding: "15px" }}
        >
          <div className={styles.Food_card_content}>
            <div className={styles.Card_header}>
            <h3 className={styles.Food_name}>Name</h3>
            <h3 style={{color: "#009de0"}}>12321<span>€</span></h3>
            </div>
            <div className={styles.Food_description}>Food description</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
