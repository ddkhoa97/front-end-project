import React from 'react'
import { BrowserRouter,Routes, Route, NavLink,Outlet } from "react-router-dom";
import {SearchOutlined,HomeOutlined} from "@ant-design/icons"

import { Divider, Button } from "antd";
import styles from "../../App.module.css";
import Discovery_board from "./Discovery_board.js";
import Restaurant_board from "./Restaurant_board.js";
import Restaurant_menu from "./Restaurant_menu.js";

export default function Index(props) {
  
    return (

     <>
        <div>
        <div className={styles.WrapperStyled} >
          <NavLink to="/discovery"  onClick={()=>{props.DiscoveryClicked()}} >
            {" "}
            <Button
              type={props.Discovery ? "primary" : ""}
              shape="round"
              
              size="large"
             
              style={{marginRight:"20px"}}
              icon={<SearchOutlined />}
                
            >
              Discovery
            </Button>
          </NavLink>
          <NavLink to="restaurant"  onClick={()=>{props.RestaurantClicked()}}>
            <Button
              type={props.Restaurant ? "primary" : ""}
              shape="round"
             
              size="large"
             icon={<HomeOutlined />}
            >
              Restaurant
            </Button>
          </NavLink>
        </div>
      </div>
      
       <Outlet></Outlet>
     
      
   
  </>
    )
}
