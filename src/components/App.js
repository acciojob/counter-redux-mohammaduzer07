
import React from "react";
import './../styles/App.css';
import { Provider } from "react-redux";
import store from "../Store/store";
import Home from "./Home";
const App = () => {

  return (
    <div>
        {/* Do not remove the main div */}
        <Provider store={store}>
          <Home />
        </Provider>
    </div>
  )
}

export default App
