import React from 'react'
import { Card,Modal } from "antd";
import styles from "../styles/Checkout.module.css";
export default function DetailOrderModal(props) {
  const handleOk = () => {
    props.handleOk(false);
   
  };
 
    return (
        <div>
             <Modal title={`Detail order ${props.orderID} `} visible={props.viewDetailOrderHistoryVisible}   onOk={handleOk}
        onCancel={() => {
          props.handleCancel();
        }}>
        
            <Card style={{marginBottom:"5px"}}>
              <div className={styles.ItemName}><span className={styles.ItemQuantity}>2x </span>Item name</div>
              <div className={styles.ItemDescription}>item description</div>
              <div className={styles.Total}>E19.80</div>
            </Card>
            <Card style={{marginBottom:"5px"}}>
              <div className={styles.ItemName}><span className={styles.ItemQuantity}>2x </span>Item name</div>
              <div className={styles.ItemDescription}>item description</div>
              <div className={styles.Total}>E19.80</div>
            </Card>
            <Card style={{marginBottom:"5px"}}>
              <div className={styles.ItemName}><span className={styles.ItemQuantity}>2x </span>Item name</div>
              <div className={styles.ItemDescription}>item description</div>
              <div className={styles.Total}>E19.80</div>
            </Card>
            <Card style={{marginBottom:"5px"}}>
              <div className={styles.ItemName}><span className={styles.ItemQuantity}>2x </span>Item name</div>
              <div className={styles.ItemDescription}>item description</div>
              <div className={styles.Total}>E19.80</div>
            </Card>
            
         
      </Modal>
        </div>
    )
}
