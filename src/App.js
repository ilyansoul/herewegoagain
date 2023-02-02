
import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import ImageUpload from './components/ImageUpload';
import EditUser from './pages/EditUser';
import Localisation from './components/Localisation/Localisation';
import EditProfile from './components/Edit/EditProfil';
import EditRange from './components/Edit/EditRange';
// import EditRangerUser from './components/Edit/EditRangerUser';
// import Btn from './components/Edit/Btn';
// import 'semantic-ui-css/semantic.min.css'
import EditDescription from './components/Edit/EditDescription';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/imageupload" element={<ImageUpload/>} />
      <Route path="/homepage/edituser" element={<EditUser/>} />
      <Route path="/homepage/edituser/localisation" element={<Localisation/>} />
      <Route path="/homepage/edituser/editprofile" element={<EditProfile/>} />
      <Route path="/homepage/edituser/editrange" element={<EditRange/>} />
      <Route path="/homepage/edituser/editdescription" element={<EditDescription/>} />
     </Routes>
    </div>
  );
}

export default App;
