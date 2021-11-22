import { Divider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback,useEffect } from "react";
import Discovery_board from "./components/Content/Discovery_board.js";
import Restaurant_board from "./components/Content/Restaurant_board.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Restaurant_menu from "./components/Content/Restaurant_menu.js";
import Error from "./components/Content/Error.js";
import Index from "./components/Content/index.js";
import Checkout from "./components/Content/Checkout.js";
import data from './data.json';


function App() {
  const [RestaurantList,setRestaurantList]= useState(data);
  const [Restaurant, setRestaurant] = useState(false);
  const [Discovery, setDiscovery] = useState(true);
  const RestaurantClicked = useCallback(() => {
    setDiscovery(false);
    setRestaurant(true);
  });
  
  const DiscoveryClicked = useCallback(() => {
    setDiscovery(true);
    setRestaurant(false);
  });
  const getRestaurantInfo = (restaurantName) => {
   
    return (RestaurantList.restaurant.find(item => item.name === restaurantName));
  
  }
  const getMenuData=(restaurantID) =>{
    
    return (RestaurantList.category.filter(item => item.restaurantID === restaurantID));
  }

  return (
    <div>
      <BrowserRouter>
        <Header DiscoveryClicked={DiscoveryClicked}></Header>

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
          <Route path="/"element={<Discovery_board />} />
            <Route path="/discovery"element={<Discovery_board />} />
            <Route path="/restaurant" element={  <Restaurant_board restaurant_list={RestaurantList.restaurant}  />} />
          </Route>
          <Route path="/*" element={<Error />} />
          <Route path="/restaurant/:name/checkout" element={<Checkout />} />
          <Route
            path="/restaurant/:name"
            exactly
            element={<Restaurant_menu getRestaurantInfo={getRestaurantInfo} getMenuData={getMenuData} />}
          />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
