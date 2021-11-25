import React from 'react'
import {Outlet} from "react-router-dom"
import styles from "../styles/RestaurantOwner/LoginOwner.module.css";
import { Form, Input, Button, Checkbox } from 'antd';

export default function OwnerLogin() {
    const onFinish = (values) => {
        console.log('Success:', values);
        //check authentication here
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      return (
          <div className={styles.WrappedStyled}  style={{backgroundImage: `url("/images/background.jpg")`}} >
              <div className={styles.LoginStyled}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
       
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Outlet></Outlet>
        </div>
        </div>
      
      );
      
}
