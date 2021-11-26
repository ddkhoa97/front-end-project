import React from "react";
import { Row, Col, Card, Table, Tag, Space } from "antd";

export default function Dashboard() {
  const data = [
    {
      key: "1",
      name: "Mike",
      phone: 32,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "2",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "3",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "4",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "5",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "6",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street",
      tags: "Received",
    },
    {
      key: "1",
      name: "Mike",
      phone: 32,
      address: "10 Downing Street1",
      tags: "Received",
    },
    {
      key: "2",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Received",
    },
    {
      key: "3",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Received",
    },
    {
      key: "4",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Received",
    },
    {
      key: "5",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Received",
    },
    {
      key: "6",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Delivering",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Preparing",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Ready for delivery",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Delivered",
    },
    {
      key: "7",
      name: "John",
      phone: 42,
      address: "10 Downing Street1",
      tags: "Delivered",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => {
        let color = "null";
        if (tags === "Received") {
          color = "#ff4d4f";
        }
        if (tags === "Preparing") {
          color = "#40a9ff";
        }
        if (tags === "Ready for delivery") {
          color = "#ffa940";
        }
        if (tags === "Delivering") {
          color = "#36cfc9";
        }
        if (tags === "Delivered") {
          color = "#73d13d";
        }
        return (
          <Tag color={color} key={tags}>
            {tags.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => <a>Detail view</a>,
    },
  ];
  return (
    <div >
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col span={8}>
          <Card
            title="Total Sale"
            bordered={false}
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            10
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=" Total orders"
            bordered={false}
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            10
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title=" Total processing orders"
            bordered={false}
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            10
          </Card>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
