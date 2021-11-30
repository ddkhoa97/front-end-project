import { Divider,Row,Col } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import Discovery_board from "./components/Content/Discovery_board.js";
import Restaurant_board from "./components/Content/Restaurant_board.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Restaurant_menu from "./components/Content/Restaurant_menu.js";
import Error from "./components/Content/Error.js";
import Index from "./components/Content/index.js";
import Checkout from "./components/Content/Checkout.js";
import data from "./data.json";
import OwnerLogin from "./components/RestaurantOwner/OwnerLogin.js";
import Category from "./components/RestaurantOwner/Category.js";
import Menu from "./components/RestaurantOwner/Menu.js";
import Dashboard from "./components/RestaurantOwner/Dashboard.js";
import RestaurantHeader from "./components/RestaurantOwner/Header.js";
import RestaurantFooter from "./components/RestaurantOwner/Footer.js";
import RestaurantSidebar from "./components/RestaurantOwner/Sidebar.js";


function App() {
  const [RestaurantList, setRestaurantList] = useState(data);
  const [orderList, setOrderList] = useState(data.orders);
  const [Restaurant, setRestaurant] = useState(false);
  const [Discovery, setDiscovery] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const RestaurantClicked = useCallback(() => {
    setDiscovery(false);
    setRestaurant(true);
  });

  const DiscoveryClicked = useCallback(() => {
    setDiscovery(true);
    setRestaurant(false);
  });
  const getRestaurantInfo = (restaurantName) => {
    return RestaurantList.restaurant.find(
      (item) => item.name === restaurantName
    );
  };
  const getMenuData = (restaurantID) => {
    return RestaurantList.category.filter(
      (item) => item.restaurantID === restaurantID
    );
  };

  const updateConfirm = useCallback((e) =>{
     setOrderList(e)
  });

  function CustomerView() {
    return (
      <>
        <Header DiscoveryClicked={DiscoveryClicked} ordersList={orderList} updateConfirm={updateConfirm}></Header>

        <Divider style={{ margin: "0" }} />
        <Routes>
          <Route
            path="/"
            element={
              <Index
                Restaurant={Restaurant}
                Discovery={Discovery}
                DiscoveryClicked={DiscoveryClicked}
                RestaurantClicked={RestaurantClicked}
              />
            }
          >
            <Route
              path="/"
              element={
                <Discovery_board restaurant_list={RestaurantList.restaurant} />
              }
            />
            <Route
              path="/discovery"
              element={
                <Discovery_board restaurant_list={RestaurantList.restaurant} />
              }
            />
            <Route
              path="/restaurant"
              element={
                <Restaurant_board restaurant_list={RestaurantList.restaurant} />
              }
            />
          </Route>
          <Route path="/*" element={<Error />} />
          <Route
            path="/restaurant/:name/checkout"
            element={<Checkout DiscoveryClicked={DiscoveryClicked} />}
          />
          <Route
            path="/restaurant/:name"
            exactly
            element={
              <Restaurant_menu
                getRestaurantInfo={getRestaurantInfo}
                getMenuData={getMenuData}
              />
            }
          />
        </Routes>

        <Footer></Footer>
      </>
    );
  }
  function AdminView() {
    return (
      <>
       <RestaurantHeader/>
       <Row style={{minHeight:"90vh"}}>
         <Col span={4}>
       <RestaurantSidebar/>
       </Col>
       <Col span={16} style={{padding:"20px", background:"#ececec"}}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/category" element={<Category />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        </Col>
        </Row>
        <RestaurantFooter/>
      </>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CustomerView />} />
          <Route exact path="admin/" element={<OwnerLogin />} />
          <Route path="admin/*" element={<AdminView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
