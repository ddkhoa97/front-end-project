import React from "react";
import { Input, Modal, Form } from "antd";
export default function LoginModal(props) {
  const handleSubmit = (values) => {
    props.handleLogin(values);
  };
  return (
    <div>
      <Modal
        title="Log in"
        visible={props.loginVisible}
        onOk={props.form.submit}
        confirmLoading={props.confirmLoading}
        onCancel={() => {
          props.handleCancel();
        }}
        okButtonProps={{ disabled: props.buttonDisabled }}
        afterClose={() => {
          props.handleAfterClose();
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          form={props.form}
          autoComplete="off"
          onFieldsChange={() =>
            props.submitButton(
              props.form
                .getFieldsError()
                .some((field) => field.errors.length > 0)
            )
          }
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
