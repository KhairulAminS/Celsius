import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./pages/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import DashboardContent from "./components/dashboardContent";

function App() {


 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           >
             <Route path="profile" element={<ProfilePage/>}/>
             <Route path="file-manager" element={<DashboardContent/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;
