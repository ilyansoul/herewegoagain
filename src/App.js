
import './App.css';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import ImageUpload from './components/ImageUpload';
import EditUser from './pages/EditUser';
import Localisation from './components/Localisation/Localisation';
import EditProfil from './components/Edit/EditProfil';
import EditRange from './components/Edit/EditRange';
// import EditRangerUser from './components/Edit/EditRangerUser';
// import Btn from './components/Edit/Btn';
// import 'semantic-ui-css/semantic.min.css'
import EditDescription from './components/Edit/EditDescription';
import Acceuil from './pages/Acceuil';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import OnBoarding from './pages/OnBoarding';
import Chat from './components/Chat/Chat';


function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken

  return (
    <div className="App">
              

      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
         <Route path="/homepage" element={<HomePage/>}/>
         <Route path="/imageupload" element={<ImageUpload />} />
         <Route path="/homepage/edituser" element={<EditUser />} />
         <Route path="/homepage/edituser/localisation" element={<Localisation />} />
          <Route path="/homepage/edituser/editprofil" element={<EditProfil />} />
         <Route path="/homepage/edituser/editrange" element={<EditRange />} />
          <Route path="/homepage/edituser/editdescription" element={<EditDescription />} />
      </Routes>
      
    </div>
  );
}

export default App;
