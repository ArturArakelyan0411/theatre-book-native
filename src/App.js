import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from "react-redux";

import AppBar from "./components/AppBar";
import Home from "./pages/home";

import store from "./store/configureStore";

export const API_URL = process.env.API_URL;

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <AppBar />
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;