import { Routes, Route } from 'react-router-dom'

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Private from './Private';
import Profile from '../pages/Profile';
import Customers from '../pages/costumers';

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Signin/> } />
      <Route path="/register" element={ <Signup/> } />

      <Route path="/dashboard" element={ <Private><Dashboard/> </Private>} />
      <Route path="/profile" element={<Private><Profile/></Private>}/>
      <Route path="/customers" element={<Private><Customers/></Private>}/>
    </Routes>
  )
}

export default RoutesApp;