import React from 'react'
import Food from './Food'
import styles from "../styles/FoodCategory.module.css"
import { Card } from 'antd';
export default function Food_Category(props) {
   
    return (
     
          
            <Card title={props.value.name} bordered={false} style={{margin:"20px"}} id={props.value.id} >
                   <div className={styles.WrappedStyled} >
            <Food id="1" ></Food>
            <Food  id="2"></Food>
            <Food  id="3"></Food>
            <Food  id="4"></Food>
            </div>
        </Card>
       
    )
}
