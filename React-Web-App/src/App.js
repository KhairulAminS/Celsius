import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./pages/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import FileManager from "./pages/FileManager";
import MainPage from "./pages/MainPage";
import AnalysisPage from "./pages/AnalysisPage";

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
             <Route path="main" element={<MainPage/>}/>
             <Route path="profile" element={<ProfilePage/>}/>
             <Route path="file-manager" element={<FileManager/>}/>
             <Route path="analysis/:id" element={<AnalysisPage/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;
