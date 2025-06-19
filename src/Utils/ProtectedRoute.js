import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";

import { RouteProtectionContext } from "../Components/Context/RouteProtectionContext";

const ProtectedRoute = () =>{
    const {hasVisitedHome} = useContext(RouteProtectionContext);

    return hasVisitedHome ? <Outlet /> : <Navigate to="/" />;
}
export default ProtectedRoute;