import React from 'react'
import { Modal } from 'antd';
export default function CheckoutModal(props) {
   
    return (
        <div>
              <Modal title="CHECKOUT" visible={props.isModalVisible}   cancelButtonProps={{ style: { display: 'none' } }} okButtonProps={{ style: { display: 'none' } }}>
     <p> Thanks for ordering</p>
      </Modal>
        </div>
    )
}
