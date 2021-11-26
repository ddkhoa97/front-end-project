import React from 'react'
import {  Table, Button} from "antd";
import { PlusOutlined } from '@ant-design/icons';
export default function Category() {
    const data = [
        {
          key: "1",
          namecategory: "Mike",
          productquantity: 32,
          address: "10 Downing Street",
          tags: "Received",
        },
       
      ];
      const columns = [
        {
            title: "Name Category",
            dataIndex: "namecategory",
            key: "namecategory",
            render: (text) => <a>{text}</a>,
          },
        {
          title: "Product Quantity",
          dataIndex: "productquantity",
          key: "productquantity",
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
            Add new category
            </Button>
                 <Table columns={columns} dataSource={data}  pagination={{ pageSize: 15 }} />
        </div>
    )
}
