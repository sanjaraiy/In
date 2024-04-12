import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Homepage from './Components/Homepage/Homepage';
import Authentication from './Components/Authentication/Authentication';
import { useEffect } from 'react';
import { auth } from './firebase';
import {loginUser,setLoading} from './Features/userSlice';
function App() {
  const user=useSelector(state=>state.data.user.user)
  const dispatch=useDispatch()
  useEffect(()=>{
          auth.onAuthStateChanged(authUser=>{
            if(authUser){
               dispatch(loginUser({
                uid:authUser.uid,
                username:authUser.displayName,
                email:authUser.email,
               }));
               dispatch(setLoading(false));
            }else{
               console.log("User is not loggged in");
            }
          })
  },[])
  return (
    <div className="App">
    {user ? (<Homepage></Homepage>):(<Authentication></Authentication>)}
    
    </div>
  );
}

export default App;
