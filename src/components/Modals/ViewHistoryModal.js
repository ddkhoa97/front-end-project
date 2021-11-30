import React, { useCallback, useState, useEffect } from "react";
import { Button, Modal, Table, Tag } from "antd";

export default function ViewHistoryModal(props) {


  const [data, setData] = useState(props.ordersList);
  const [count, setCount] = useState(0);
  const handleOk = () => {
    props.handleOk(data);
  
  };
  
  const DetailOrderModal = (e) => {
   props.showDetailOrder(e);
  }

  //function Change Estimate time.
  
  useEffect(() => {
    var newArray1 = [...data];
    const timer = setTimeout(() => {
      newArray1 = newArray1.map((data) => {
        if (data.status < 4) {
          data.status=data.status+1
          
        }
       
      
      });
    
      setCount(count + 1);
    }, 5000);
   
    return () => clearTimeout(timer);
  }, [count,data]);
  //Handle confirm here
 
  const handleConfirm = useCallback((e) => {
    let newArray = [...data];
    newArray = newArray.map((data) =>
      data.key === e.key ? { ...data, confirm: true } : data
    );
    setData(newArray);
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Restaurant",
      dataIndex: "restaurant",
      key: "restaurant",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      render: (text) => <>{text} e</>,
    },
    {
      title: "Order Date",
      dataIndex: "ordertime",
      key: "ordertime",
    },
    {
      title: "Estimated Time",
      dataIndex: "estimate",
      key: "estimate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "null";
        let status2 = 0;
        if (status == 0) {
          color = "#ff4d4f";
          status2 = "RECEIVED";
        }
        if (status == 1) {
          color = "#40a9ff";
          status2 = "PREPARING";
        }
        if (status == 2) {
          color = "#ffa940";
          status2 = "READY FOR DELIVERY";
        }
        if (status == 3) {
          color = "#36cfc9";
          status2 = "DELIVERING";
        }
        if (status == 4) {
          color = "#73d13d";
          status2 = "DELIVERED";
        }
        return (
          <Tag color={color} key={status}>
            {status2}
          </Tag>
        );
      },
    },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "key",
      render: (detail,key) => { return (
        <Button
          key={key}

          onClick={() => {
            DetailOrderModal(key.key)
          }}
        >
        ABC
        </Button>
      );},
    },
    {
      title: "Action",
      dataIndex: "confirm",
      key: "key",
      render: (confirm, key) => {
        let flag = true;

        if (confirm === false && key.status == 4) {
          flag = false;
        }

        return (
          <Button
            key={key}
            disabled={flag}
            onClick={() => {
              handleConfirm(key);
            }}
          >
            {confirm === true ? "CONFIRMED" : "CONFIRM"}
          </Button>
        );
      },
    },
  ];

  return (
    <div>
     
      <Modal
        title="Your orders"
        visible={props.viewHistoryVisible}
        onOk={handleOk}
        onCancel={() => {
          props.handleCancel();
        }}
        width="1280px"
      >
        <Table dataSource={data} columns={columns} width="1280px" />
      </Modal>
    </div>
  );
}
