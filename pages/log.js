import Login from "../components/auth/login/index";
import Register from "../components/auth/register/index";

import Header from "../components/header/index";


import { AuthProvider } from "../contexts/authContext";
import { useRoutes } from "react-router-dom";

function Log() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default Log;