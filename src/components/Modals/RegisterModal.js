import React from "react";
import { Input, Modal, Form } from "antd";
export default function RegisterModal(props) {
  // const usernameField = (e) => {
  //   console.log(e.target.value);
  // };
  const handleSubmit = (values) => {
    props.handleRegister(values);
  };
  return (
    <div>
      <Modal
        title="Register"
        visible={props.showRegisterModal}
        confirmLoading={props.confirmLoading}
        onCancel={() => {
          props.handleCancel();
        }}
        okButtonProps={{ disabled: props.buttonDisabled }}
        afterClose={() => {
          props.handleAfterClose();
        }}
        onOk={props.form.submit}
      >
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
            label="Your name"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
            value={""}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={"+354"}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
