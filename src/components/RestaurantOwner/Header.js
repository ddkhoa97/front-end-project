import React from 'react'
import styles from "../styles/RestaurantOwner/RestaurantHeader.module.css"
import {
    Menu,
    Row,
    Col,
    Dropdown,
    Avatar,
  } from "antd";
export default function RestaurantHeader() {
    const menu = (
        <Menu>
          <Menu.Item key="1" className={styles.dropdown_menu_content}>
            <a href="#">Log out</a>
          </Menu.Item>
        </Menu>
      );
      
    return (
        <div className={styles.WrapperStyled}>
           <Row>
        <Col span={8}>
          <div className={styles.Header_left}>
              <img src="/images/wolt.png" height="61" width="110"></img>
          </div>
        </Col>
        <Col span={8}>
          {" "}
          <div className={styles.Header_center}>
          
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.Header_right}>
            Hello,  <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar
                    size="large"
                    style={{
                      backgroundColor: "#FAEFD0",
                      color: "Black",
                      cursor: "pointer",
                    }}
                  >
                    DD
                  </Avatar>
                </Dropdown>
          </div>
        </Col>
      </Row>
        </div>
    )
}
