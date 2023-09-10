import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
// import App from "./App";
// import ClassComponentApp from "./practise/ClassComponentApp";
import UseMemo from "./useMemo Hook/UseMemo";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <ClassComponentApp /> */}
    {/* <App /> */}
    <UseMemo />
  </StrictMode>
)