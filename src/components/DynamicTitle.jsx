import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();
  const params = useParams();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home | Mountain Explorer";
      case "/my_profile":
        return "My Profile | Mountain Explorer";
      case "/update_profile":
        return "Update Profile | Mountain Explorer";
      case `/adventureDetails/${params.id}`:
        return "Adventure Details | Mountain Explorer";
      case "/login":
        return "Log In | Mountain Explorer";
      case "/signup":
        return "Sign Up | Mountain Explorer";
      case "/forget_password":
        return "Forget Password | Mountain Explorer";
      default:
        return "Mountain Explorer";
    }
  };

  useEffect(() => {
    document.title = getTitle(location.pathname);
  }, [location.pathname]);

  return null;
};

export default DynamicTitle;
