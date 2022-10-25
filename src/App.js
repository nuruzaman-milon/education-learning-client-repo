import { useState } from "react";
import { RouterProvider } from "react-router-dom";
// import Header from "./shared/Header/Header";
import { router } from "./Routes/Routes";
import Header from "./shared/Header/Header";

function App() {

  // const [toggle, setToggle] = useState(false)
  // const handleThemeToggle = () =>{
  //       setToggle(!toggle);
  // }
  // <Header toogle={handleThemeToggle}></Header>
  return (
    <div className="App font-roboto dark {toggle}">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
