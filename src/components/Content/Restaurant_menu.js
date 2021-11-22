import React,{useEffect} from "react";
import { Col, Row, Menu, Input, Button } from "antd";
import styles from "../styles/Restaurant_menu.module.css";
import Food_Category from "./Food_Category";
import "antd/dist/antd.css";
import "../../App.module.css";
import { ShoppingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { useParams } from 'react-router';
const { Search } = Input;

const MyButton = styled(Button)`
  &&& {
    width: fit-content;
    margin:auto;
    padding: 0px;
    border:none;
    font-size: 20px;
    display:flex;
    justify-content: center ; 
    align-items: center;
    height:fit-content;
  }
`;

export default function Restaurant_menu(props) {
  const handleClick = (e) => {
    document.getElementById(e.key).scrollIntoView({ behavior: "smooth" });
  };
  const onSearch = (value) => console.log(value);
  const { name } = useParams();
 const restaurantData = props.getRestaurantInfo(Object.values({name})[0]);
 console.log(restaurantData.id)
 const menuData = props.getMenuData(restaurantData.id);
 console.log(menuData)
 useEffect(() => {
  window.scrollTo(0, 0)
 
}, [])
  return (
    <div className={styles.WrappedStyled}>
      <div
        className={styles.ImageWrappedStyled}
        style={{ backgroundImage: `url("../images/${restaurantData.image}")` }}
      >
        <div className={styles.WrappedHeader}>
          <div className={styles.HeaderCard}>
            <div className={styles.RestaurantName}>
              <span>{restaurantData.name}</span>
            </div>
            <div className={styles.RestaurantInfo}>
              <Row>
                <Col span={12}>
                  <div style={{ marginBottom: "20px" }}>{restaurantData.categoryID}</div>
                  <div>{restaurantData.address} {restaurantData.city}</div>
                </Col>

                <Col span={12} style={{ textAlign: "center" }}>
                  <div> {restaurantData.openHours.open} </div>
                  <div> {restaurantData.openHours.close} </div>
                </Col>
              </Row>
              <div style={{ marginTop: "20px", width: "300px" }}>
                {" "}
                <Search
                  placeholder="Search"
                  enterButton
                  size="large"
                  allowClear
                  onSearch={onSearch}
                />
              </div>
            </div>
          </div>
        </div>
     
      </div>
      <div className={styles.RestaurantMenu}>
        <Row>
          <Col span={4}>
            <div className={styles.RestaurantCategory}>
              <Menu
                style={{ textAlign: "center" }}
                mode="inline"
                onClick={handleClick}
              >
               {menuData.map(item =>  <Menu.Item key={item.id}>{item.name}</Menu.Item>)}
            
              </Menu>
              <div className={styles.WrappedShoppingCart}>
              <Link to ={`/restaurant/${restaurantData.name}/checkout`}>
                <MyButton
                  className={styles.WrappedButton}
                  icon={<ShoppingOutlined style={{ fontSize: "40px" }} />}
                 
                >
                 Price here
                </MyButton>
                </Link>
              </div>
            </div>
          </Col>

          <Col span={20}>
            <div className={styles.RestaurantMenuContent}>
            {menuData.map(item =>  <Food_Category key={item.id} value={item}/>)}
              
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
