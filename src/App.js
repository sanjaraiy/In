import './App.css';
import {useSelector} from "react-redux";
import Homepage from './Components/Homepage/Homepage';
import Authentication from './Components/Authentication/Authentication';
function App() {
  const user=useSelector(state=>state.data.user.user)

  return (
    <div className="App">
    {user ? (<Homepage></Homepage>):(<Authentication></Authentication>)}
    
    </div>
  );
}

export default App;
