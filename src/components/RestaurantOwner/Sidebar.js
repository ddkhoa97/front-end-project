import React from "react";
import styles from "../styles/RestaurantOwner/RestaurantSidebar.module.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
export default function RestaurantSidebar() {
  return (
    <div className={styles.WrappedStyled}>
      <Menu>
        <Menu.Item>
          {" "}
          <Link to="/admin/dashboard"> Dashboard</Link>
        </Menu.Item>

        <Menu.Item>
          {" "}
          <Link to="/admin/category"> Category</Link>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <Link to="/admin/menu">Menu</Link>
        </Menu.Item>
        
      </Menu>
    </div>
  );
}
