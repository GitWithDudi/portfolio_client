import { Navigate } from "react-router-dom";
import React from "react";
import { ProtectedRouteProps } from "./Types/Interfaces";

export function ProtectedRoute({ children }: ProtectedRouteProps): React.JSX.Element {

    const token = localStorage.getItem("token");


    if (!token) {
        <div> 
            <h2>Access Denied</h2>
            <p>You must be logged in to view this page.</p>
            <p>Please log in to continue.</p>
        </div>
        
        return <Navigate to="/login" replace />;
      }
    

    return children;
}
