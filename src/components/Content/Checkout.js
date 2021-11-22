import React, { useState } from "react";
import styles from "../styles/Checkout.module.css";
import { Col, Row } from "antd";
import { Card, Input, Button,Modal } from "antd";
import {PlusOutlined,ShopOutlined} from "@ant-design/icons"
import "../styles/Checkout.css";
import { useNavigate  } from 'react-router-dom';
import CheckoutModal from "../Modals/CheckoutModal";

export default function Checkout(props) {
  
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      props.DiscoveryClicked()
      navigate("/discovery")
    }, 2000);

  };
  const ModalVisible = (e)=>{
    setIsModalVisible(e)
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
              <Button icon={<PlusOutlined />}  size="large" onClick={()=>navigate(-1)}>Add more items</Button>
            </Card>
        </Col>
        <Col span={8} >
          <div className={styles.PriceTag}> 
        <Card >
             <div className={styles.PriceTagHeader}>
                Prices include VAT
             </div>
             <div className={styles.PriceTagContent}>
             <span className={styles.PriceTagSmallHeader}> Items total </span>
               <div>
                 </div>
                 <span>E15.10</span>
               </div>
              
               <div className={styles.PriceTagContent}>
                 <span className={styles.PriceTagSmallHeader}>Delivery </span>
               <div>
               <span>E1.90</span>
                 </div>
               </div>
               <div className={styles.PriceTagContent}>
                 <span className={styles.PriceTotal}>Total </span>
               <div>
               <span className={styles.PriceTotal}>E1.90</span>
                 </div>
               </div>
            
              <Button icon={<ShopOutlined />} onClick={()=>showModal()}  size="large" style={{width:"100%",marginTop:"10px",fontSize:"20px"}}>Checkout</Button>
           
            </Card>
            </div>
        </Col>
      </Row>
      <CheckoutModal isModalVisible={isModalVisible} ModalVisible={ModalVisible} />
    </div>
  );
}
