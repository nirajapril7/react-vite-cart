import React from 'react';
import ReactDOM from 'react-dom';


import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
