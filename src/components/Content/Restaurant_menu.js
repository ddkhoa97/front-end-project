import React from "react";
import { Col, Row, Menu } from "antd";
import styles from "../styles/Restaurant_menu.module.css";
import Food_Category from "./Food_Category";
import {Link} from "react-router-dom"
export default function Restaurant_menu() {
  const handleClick = e => {
    console.log(e.key)
    document.getElementById(e.key).scrollIntoView({  behavior: 'smooth' })
  };
  return (
    <div className={styles.WrappedStyled}>
      <div
        className={styles.ImageWrappedStyled}
        style={{ backgroundImage: `url("../images/mcdonal.jpg")` }}
      >
        <div className={styles.WrappedHeader}>
          <div className={styles.HeaderCard}>
            <div className={styles.RestaurantName}>
              <span>Restaurant Name</span>
            </div>
            <div className={styles.RestaurantInfo}>
              <Row>
                <Col span={12}>
                  <div style={{ marginBottom: "20px" }}>Restaurant Type</div>
                  <div>Restaurant Address</div>
                </Col>

                <Col span={12} style={{ textAlign: "center" }}>
                  <span> Working hours</span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.RestaurantMenu}>
        <Row>
          <Col span={4}>
            <div className={styles.RestaurantCategory}>
              <Menu style={{ textAlign: "center" }} mode="inline" onClick={handleClick}>
                <Menu.Item key="1" >Option 1
                
                </Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>

                <Menu.Item key="3">Option 3</Menu.Item>
             
              </Menu>
            </div>
          </Col>

          <Col span={20}>
            <div className={styles.RestaurantMenuContent}>
              <Food_Category ID={'1'}></Food_Category>
              <Food_Category ID={'2'}></Food_Category>
              <Food_Category ID={'3'}></Food_Category>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
