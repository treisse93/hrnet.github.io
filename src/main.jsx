import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

// Creating a root element in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application
root.render(
  <React.StrictMode>
    {/* Provider makes Redux store available to any nested components */}
    <Provider store={store}>
      {/* BrowserRouter enables navigation and routing in the application */}
      <BrowserRouter>
        {/* Main App component is rendered here */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
