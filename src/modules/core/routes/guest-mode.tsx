import { PricingPlansPage } from "@modules/finance/pages/pricing-plans";
import { createBrowserRouter, Navigate } from "react-router";

import { AuthPage } from "../../auth/pages/auth.tsx";
import { innerRoutePath } from "../utils/route.ts";

export const GuestModeRoutes = createBrowserRouter([
  {
    path: innerRoutePath.getSignIn(),
    element: <AuthPage />,
  },
  {
    path: innerRoutePath.getSignUp(),
    element: <AuthPage />,
  },
  {
    path: innerRoutePath.getPricing(),
    element: <PricingPlansPage />,
  },
  {
    path: innerRoutePath.getAll(),
    element: <Navigate to={innerRoutePath.getSignIn()} />,
  },
]);
