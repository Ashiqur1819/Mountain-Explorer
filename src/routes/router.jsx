import { createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AdventureDetails from "../components/AdventureDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventures.json")
      },
      {
        path: "/my_profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/update_profile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/adventureDetails/:id',
        element: <AdventureDetails></AdventureDetails>,
        loader: async({params}) => {
          const res = await fetch("adventures.json");
          const adventures = await res.json()
          
          const adventure = adventures.find(adventure => adventure.id === params.id)
          return adventure
        }
      }
    ]
  },
]);

export default router;