import { Routes, Route } from 'react-router-dom'

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';
import Private from './Private';

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Signin/> } />
      <Route path="/register" element={ <Signup/> } />

      <Route path="/dashboard" element={ <Private><Dashboard/> </Private>} />
    </Routes>
  )
}

export default RoutesApp;