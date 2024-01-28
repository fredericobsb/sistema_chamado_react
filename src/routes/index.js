import { Routes, Route } from 'react-router-dom'

import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Signin/> } />
      <Route path="/register" element={ <Signup/> } />

      <Route path="/dashboard" element={ <Dashboard/> } />
    </Routes>
  )
}

export default RoutesApp;