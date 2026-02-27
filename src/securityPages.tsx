import { Navigate } from "react-router-dom";
import React from "react";
import { ProtectedRouteProps } from "./Types/Interfaces";

export function ProtectedRoute({ children }: ProtectedRouteProps): React.JSX.Element {

    const token = localStorage.getItem("token");


    if (!token) {
        return <Navigate to="/login" replace />;
    }
    

    return children;
}
