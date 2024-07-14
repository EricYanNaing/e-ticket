import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Index from "./pages/Index";
import Detail from "./pages/Detail";
import EditEvent from "./pages/Edit-Event";
import CreateEvent from "./pages/Create-Event";
import Login from "./Login";
import Register from "./Register";

function App() {
  // routes array
  const routes = [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "/event/:id",
          element: <Detail />,
        },
        {
          path: "/create",
          element: <CreateEvent />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/edit/:id",
          element: <EditEvent />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
