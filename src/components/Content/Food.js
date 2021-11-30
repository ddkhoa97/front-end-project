import React from "react";
import { Card,Button } from "antd";
import styles from "../styles/Food.module.css";

export default function Food(props) {
  //The function to handle add to cart
  const AddtoCart = () =>{
    console.log(props.id)
    console.log("handle add to cart");
    localStorage.setItem('myValueInLocalStorage', props.id);
  }

  return (
    <div className={styles.WrappedStyled}>
      <div className={(styles.Food_card, styles.zoom)}>
        <Card
          hoverable
          cover={<img alt="example" src="/images/mcdonal.jpg" height="100%" />}
          bodyStyle={{ padding: "15px" }}
          key={props.id}
        >
          <div className={styles.Food_card_content}>
            <div className={styles.Card_header}>
            <h3 className={styles.Food_name}>Name</h3>
            <h3 style={{color: "#009de0"}}>12321<span>€</span></h3>
            </div>
            <div className={styles.Food_description}>Food description</div>
          </div>
        </Card>
       <Button onClick={()=>AddtoCart()}>Add to cart</Button>
      </div>
    </div>
  );
}
