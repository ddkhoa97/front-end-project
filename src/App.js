import { Divider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discovery_board from "./components/Content/Discovery_board.js";
import Restaurant_board from "./components/Content/Restaurant_board.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { useState, useCallback } from "react";
import Restaurant_menu from "./components/Content/Restaurant_menu.js";
import Error from "./components/Content/Error.js";
import Index from "./components/Content/index.js";

function App() {
  const [Restaurant, setRestaurant] = useState(false);
  const RestaurantClicked = useCallback(() => {
    setDiscovery(false);
    setRestaurant(true);
  });
  const [Discovery, setDiscovery] = useState(true);
  const DiscoveryClicked = useCallback(() => {
    setDiscovery(true);
    setRestaurant(false);
  });
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
            <Route path="/restaurant" element={<Restaurant_board />} />
          </Route>
          <Route path="/*" element={<Error />} />
          <Route
            path="/restaurant/:name"
            exactly
            element={<Restaurant_menu />}
          />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
