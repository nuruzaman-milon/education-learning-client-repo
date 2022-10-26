// import { useState } from "react";
// import { useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
// import Header from "./shared/Header/Header";

function App() {

  // const [toggle, setToggle] = useState(false)
  // const handleThemeToggle = () =>{
  //       setToggle(!toggle);
  // }
  // <Header handleThemeToggle={handleThemeToggle} toggle={toggle}></Header>
  // const context = useContext(toggleContext);
  //className={`App font-roboto ${context ? 'dark' : ''}`}
  // <Header handleThemeToggle={handleThemeToggle} toggle={toggle}></Header>
  return (
    // <toggleProvider>
      <div className="font-roboto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    // </toggleProvider>
  );
}

export default App;
