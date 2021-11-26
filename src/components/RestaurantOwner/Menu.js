import React from 'react'
import {  Table, Button} from "antd";
import { PlusOutlined } from '@ant-design/icons';
export default function Menu() {
    const data = [
        {
          key: "17",
          food: "ABC",
          category: "Buffet",
          price: "123456",
          description: "This is a description",
          image:"mcdonal.jpg"
        },
        {
            key: "18",
            food: "ABC",
            category: "Buffet",
            price: "123456",
            description: "This is a description",
            image:"mcdonal.jpg"
          },
          {
            key: "19",
            food: "ABC",
            category: "Buffet",
            price: "123456",
            description: "This is a description",
            image:"mcdonal.jpg"
          }
      ];
      const columns = [
        {
            title: "Name Food",
            dataIndex: "food",
            key: "food",
         
            width: '10%',
          },
          {
            title: "Name Category",
            dataIndex: "category",
            key: "category",
            // render: (text) => <a>{text}</a>,
            width: '20%',
          },
          {
            title: "Price",
            dataIndex: "price",
            key: "price",
          render: (text) => (<>{text}e</>),
            width: '15%',
          },
          {
            title: "Description",
            dataIndex: "description",
            key: "description",
          
            width: '25%',
          },
        {
          title: "Image",
          dataIndex: "image",
          key: "image",
          render: (text) => <a><img src={`/images/${text}`} style={{height:"100px"}}></img></a>,
          width: '10%',
        },
       
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
              <>
            <a>Change</a> ---  
          <a>Delete</a>
          </>
          ),
          width: '20%',
          
        },
      ];

    

    return (
        <div>
               <Button type="primary" shape="round" icon={<PlusOutlined />} style={{marginBottom:"10px"}}>
            Add new menu
            </Button>
                 <Table columns={columns} dataSource={data}  pagination={{ pageSize: 15 }} />
        </div>
    )
}
