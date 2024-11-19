import { createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layouts/AuthLayout";
import AdventureDetailsLayout from "../layouts/AdventureDetailsLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/my_profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/update_profile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
  {
    path: "/adventureDetails/:id",
    element: (
      <PrivateRoute>
        <AdventureDetailsLayout></AdventureDetailsLayout>
      </PrivateRoute>
    ),
    loader: async ({ params }) => {
      const res = await fetch("/adventures.json");
      const adventures = await res.json();

      const adventure = adventures.find(
        (adventure) => adventure.id === params.id
      );
      return adventure;
    },
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;