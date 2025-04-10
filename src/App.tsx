import { GuestModeRoutes } from "@core/routes/guest-mode.tsx";
import { UserModeRoutes } from "@core/routes/user-mode.tsx";
import { RouterProvider } from "react-router";

function App() {
  const isAuth = false;

  return <RouterProvider router={isAuth ? UserModeRoutes : GuestModeRoutes} />;
}

export default App;
