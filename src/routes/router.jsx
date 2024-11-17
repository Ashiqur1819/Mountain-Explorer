import { createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/my_profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/update_profile",
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
]);

export default router;