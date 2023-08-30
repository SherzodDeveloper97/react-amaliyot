import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
// import App from "./App";
import ClassComponentApp from "./practise/ClassComponentApp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ClassComponentApp />
    {/* <App /> */}
  </StrictMode>
)