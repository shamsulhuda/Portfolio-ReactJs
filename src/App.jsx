import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Main from "./layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
