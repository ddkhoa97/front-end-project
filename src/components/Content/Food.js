import React from "react";
import { Card } from "antd";
import styles from "../styles/Card.module.css";

export default function Food() {
  return (
    <div className={styles.WrappedStyled}>
      <div className={(styles.Restaurant_card, styles.zoom)}>
        <Card
          hoverable
          cover={<img alt="example" src="/images/mcdonal.jpg" height="100%" />}
          bodyStyle={{ padding: "15px" }}
        >
          <div className={styles.Restaurant_card_content}>
            <h3 className={styles.Restaurant_name}>Pasta</h3>

            <div className={styles.Restaurant_type}>9 Venues</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
