import { RouterProvider } from "react-router-dom";
// import Header from "./shared/Header/Header";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div className="App font-roboto dark">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
