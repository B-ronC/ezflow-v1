import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Teamtasks from './pages/teamtasks/Teamtasks';
import Teammembers from './pages/teammembers/Teammembers';
import Teamsettings from './pages/teamsettings/Teamsettings';
import './app.css';

import { Routes, Route } from "react-router-dom";

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teamPage/:id' element={<Teamtasks />} />
          <Route path='/teamPage/tasks' element={<Teamtasks />} />
          <Route path='/teamPage/members' element={<Teammembers />} />
          <Route path='/teamPage/settings' element={<Teamsettings />} />
        </Routes>
      </div>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
