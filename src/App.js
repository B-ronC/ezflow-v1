import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Teamtasks from "./pages/teamtasks/Teamtasks";
import Teammembers from "./pages/teammembers/Teammembers";
import Teamsettings from "./pages/teamsettings/Teamsettings";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teamPage/:currTeamID/tasks" element={<Teamtasks />} />
          <Route
            path="/teamPage/:currTeamID/members"
            element={<Teammembers />}
          />
          <Route
            path="/teamPage/:currTeamID/settings"
            element={<Teamsettings />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
