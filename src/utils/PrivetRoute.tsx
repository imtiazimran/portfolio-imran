import { selectToken } from "@/redux/features/authentication/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(selectToken);
  const location = { pathname: "/dashboard" };

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
