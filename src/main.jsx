import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterProvider, { CounterContext } from "./context/CounterContext.jsx";
import { Provider } from "react-redux";
import store from "./store/rtkStore.js";
// import store from "./store/store.js";

export const MyStore = createContext(null);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <MyStore value={{ store }}> */}
    <CounterProvider>
      <App />
    </CounterProvider>
    {/* </MyStore> */}
  </Provider>
);
