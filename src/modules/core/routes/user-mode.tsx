import { createBrowserRouter } from "react-router";

import { WentWrongContent } from "../components/went-wrong";
import { innerRoutePath } from "../utils/route.ts";

export const UserModeRoutes = createBrowserRouter([
  {
    path: innerRoutePath.getMain(),
    errorElement: <WentWrongContent />,
    element: <div />,
  },
]);
