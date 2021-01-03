import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store/store";

import Form from "./Components/Form.js";
// import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
