import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
import App from "./App";
import ClassComponentApp from "./ClassComponentApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    {/* <ClassComponentApp name="Sherzod" /> */}
  </StrictMode>
)