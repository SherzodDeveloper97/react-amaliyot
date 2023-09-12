import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
// import App from "./App";
// import ClassComponentApp from "./practise/ClassComponentApp";
// import UseMemo from "./useMemo Hook/UseMemo";
// import UseRef from "./useRef Hook/UseRef";
import PersonalHook from "./Personal-Hook/PersonalHook";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <ClassComponentApp /> */}
    {/* <App /> */}
    {/* <UseMemo /> */}
    {/* <UseRef /> */}
    <PersonalHook />
  </StrictMode>
)