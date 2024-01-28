import { Routes, Route } from 'react-router-dom'

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Private from './Private';
import Profile from '../pages/Profile';

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Signin/> } />
      <Route path="/register" element={ <Signup/> } />

      <Route path="/dashboard" element={ <Private><Dashboard/> </Private>} />
      <Route path="/profile" element={<Private><Profile/></Private>}/>
    </Routes>
  )
}

export default RoutesApp;