import React from 'react'
import Food from './Food'
import styles from "../styles/FoodCategory.module.css"
import { Card } from 'antd';
export default function Food_Category(props) {
    console.log(props.value.name)
    return (
     
          
            <Card title={props.value.name} bordered={false} style={{margin:"20px"}} id={props.value.id} >
                   <div className={styles.WrappedStyled} >
            <Food></Food>
            <Food></Food>
            <Food></Food>
            <Food></Food>
            </div>
        </Card>
       
    )
}
