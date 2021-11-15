import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";
import {
  Input,
  Menu,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Dropdown,
  Avatar,
} from "antd";
import LoginModal from "./Modals/LoginModal";
import RegisterModal from "./Modals/RegisterModal";

const menu = (
  <Menu>
    <Menu.Item key="0" className={styles.dropdown_menu_content}>
      <a href="#">Profile</a>

      <div>Dinh dang Khoa</div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" className={styles.dropdown_menu_content}>
      <a href="#">Log out</a>
    </Menu.Item>
  </Menu>
);

const Search = Input.Search;
const onSearch = (value) => console.log(value);

export default function Header(props) {
  const [Loginform] = Form.useForm();
  const [Registerform] = Form.useForm();
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loginInputs, setLoginInputs] = useState("");
  const [registerInputs, setRegisterInputs] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //Function to handle login here
  const handleLogin = useCallback((e) => {
    const value = e;
    setLoginInputs(value);

    setConfirmLoading(true);
    setTimeout(() => {
      setLoginVisible(false);
      setConfirmLoading(false);
    }, 2000);
    console.log("xu ly");
  });

  //Function to handle Register here
  const handleRegister = useCallback((e) => {
    const value = e;
    setRegisterInputs(value);
    setConfirmLoading(true);
    setTimeout(() => {
      setRegisterVisible(false);
      setConfirmLoading(false);
    }, 2000);
  });

  //Show modals
  const showLoginModal = useCallback(() => {
    setLoginVisible(true);
  });
  const showRegisterModal = useCallback(() => {
    setRegisterVisible(true);
  });
  //
  const submitButton = useCallback((e) => {
    setButtonDisabled(e);
  });
  const handleCancel = useCallback(() => {
    Loginform.resetFields();
    Registerform.resetFields();
    setLoginVisible(false);
    setRegisterVisible(false);
  });

  const handleAfterClose = useCallback(() => {
    setButtonDisabled(true);
    Loginform.resetFields();
    Registerform.resetFields();
  });

  return (
    <div className={styles.WrapperStyled}>
      <Row>
        <Col span={8}>
          <div className={styles.Header_left}>
            <Link to="/discovery" onClick={() => props.DiscoveryClicked()}>
              <img src="../images/wolt.png" height="61" width="110"></img>
            </Link>
          </div>
        </Col>
        <Col span={8}>
          {" "}
          <div className={styles.Header_center}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{ width: 300 }}
              size="large"
              allowClear
            />
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.Header_right}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <div>
                <Button
                  size="large"
                  style={{ marginRight: "10px" }}
                  onClick={showLoginModal}
                >
                  {" "}
                  Log in
                </Button>
                <Button size="large" onClick={showRegisterModal}>
                  Sign up
                </Button>

                <LoginModal
                  loginVisible={loginVisible}
                  handleLogin={handleLogin}
                  handleCancel={handleCancel}
                  confirmLoading={confirmLoading}
                  handleAfterClose={handleAfterClose}
                  form={Loginform}
                  submitButton={submitButton}
                  buttonDisabled={buttonDisabled}
                ></LoginModal>
                <RegisterModal
                  showRegisterModal={registerVisible}
                  handleRegister={handleRegister}
                  handleCancel={handleCancel}
                  confirmLoading={confirmLoading}
                  handleAfterClose={handleAfterClose}
                  form={Registerform}
                  submitButton={submitButton}
                  buttonDisabled={buttonDisabled}
                ></RegisterModal>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Avatar
                    size="large"
                    style={{
                      backgroundColor: "#FAEFD0",
                      color: "Black",
                      cursor: "pointer",
                    }}
                  >
                    DD
                  </Avatar>
                </Dropdown>
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
