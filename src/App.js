import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AppProvider } from "./context/AppContext";

import AllRoutes from "./routes";

import configureStore from "./redux/store";

import "./styles/main.scss";
const { store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <div className="App">
            <AllRoutes />
          </div>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
