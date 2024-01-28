import {Routes, Route} from 'react-router-dom';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

function RoutesApp(){
    return(
       <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/register' element={<Signup/>}/>
       </Routes>
    );
}
export default RoutesApp;