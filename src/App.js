
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/home';
import TeacherSignUp from './components/RegisterPage/TeacherSignUp'
import OtherRoute from './routes/OtherRoute'
import StudentRoutes from './routes/StudentRoutes'
import TeacherRoutes from './routes/TeacherRoutes'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProtectStudentRoute } from './routes/ProtectStudentRoute';
import { ProtectTeacherRoute } from './routes/ProtectTeacherRoute';
import { TeacherDetails } from './Contexts/ContextProvider'
function App() {
  return (

    <div className="App">


      <BrowserRouter>
        <Routes>

          {/* <Route path="/" exact element={<HomePage />} />
            <Route path="/register*" element={<RegisterPage />} />
            <Route path='/teacher*' element={<TeacherSignUp/>}></Route> */}

          <Route path="/*" element={<OtherRoute />} />
          <Route path="/teacher/*" element={
            <ProtectTeacherRoute> 
                <TeacherRoutes />  
            </ProtectTeacherRoute>

          } />
          <Route path="/student/*" element={

            <ProtectStudentRoute>
              <StudentRoutes />
            </ProtectStudentRoute>

          } />
          <Route path="*" element={<div><h2>404 PAGE NOT FOUND</h2></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
