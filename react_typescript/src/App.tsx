import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import Rootlayout from "rootlayout/Rootlayout";

// outlet
import Main from "outlets/main/Main";
import Signup from "outlets/auth/signup/Signup";
import Login from "outlets/auth/login/Login";
import PracticeCss from "outlets/practice/practice_css/PracticeCss";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/css", element: <PracticeCss /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
