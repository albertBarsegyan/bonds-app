import { createBrowserRouter, Navigate } from "react-router";

import { LoginPage } from "../../auth/pages/sign-in.tsx";
import { innerRoutePath } from "../utils/route.ts";

export const GuestModeRoutes = createBrowserRouter([
  {
    path: innerRoutePath.getSignIn(),
    element: <LoginPage />,
  },
  {
    path: innerRoutePath.getAll(),
    element: <Navigate to={innerRoutePath.getSignIn()} />,
  },
]);
