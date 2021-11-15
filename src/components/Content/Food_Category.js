import React from 'react'
import Food from './Food'
import styles from "../styles/FoodCategory.module.css"
import { Card } from 'antd';
export default function Food_Category(props) {
    return (
     
          
            <Card title="Category" bordered={false} style={{margin:"20px"}} id={props.ID} >
                   <div className={styles.WrappedStyled} >
            <Food></Food>
            <Food></Food>
            <Food></Food>
            <Food></Food>
            </div>
        </Card>
       
    )
}
