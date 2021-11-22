import React from "react";
import styles from "../styles/Checkout.module.css";
import { Col, Row } from "antd";
import { Card, Input, Button } from "antd";
import {PlusOutlined} from "@ant-design/icons"
import "../styles/Checkout.css";
import { useNavigate } from 'react-router-dom';
export default function Checkout() {
  const navigate = useNavigate();
  const BuyMore = () =>{

  }
  return (
    <div className={styles.WrappedStyled}>
      <Row>
        <Col span={16}>
          <Card
            title="Customer Information"
            bordered={false}
            style={{ marginBottom: "20px" }}
          >
            <Input.Group size="large">
              <Row gutter={8}>
                <Col span={12}>
                  <span>Customer Name</span>
                  <Input placeholder="Enter your name" />
                </Col>
                <Col span={12}>
                  <span>Customer Phone</span>
                  <Input placeholder="Phone" />
                </Col>
              </Row>
              <Row>
                <span>Customer Address</span>
                <Input placeholder="Enter your address" />
              </Row>
            </Input.Group>
          </Card>

          <Card title="Selected Items" bordered={false}>
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
            
          </Card>
          <Card style={{marginBottom:"5px"}}>
              <Button icon={<PlusOutlined />}  size="large" onClick={()=>BuyMore()}>Add more items</Button>
            </Card>
        </Col>
        <Col span={8}>hihih</Col>
      </Row>
    </div>
  );
}
