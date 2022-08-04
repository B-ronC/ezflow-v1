import './app.css';

import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Teamtasks from './pages/teamtasks/Teamtasks';
import Teammembers from './pages/teammembers/Teammembers';
import Teamsettings from './pages/teamsettings/Teamsettings';

import { Routes, Route } from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App({ signOut }) {
  return (
    <>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teamPage/:id/tasks' element={<Teamtasks />} />
          <Route path='/teamPage/:id/members' element={<Teammembers />} />
          <Route path='/teamPage/:id/settings' element={<Teamsettings />} />
        </Routes>
      </div>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
