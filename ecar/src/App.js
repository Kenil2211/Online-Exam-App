import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Employee } from './components/employee/Employee';
import { AddProduct } from './components/Tasks/AddProduct';
import { EmployeeAddress } from './components/Tasks/EmployeeAddress';
import { Form } from './components/Tasks/Form';
import { Home } from './components/Tasks/Navbar/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactUs } from './components/Tasks/Navbar/ContactUs';
import { AboutUs } from './components/Tasks/Navbar/AboutUs';
import { Manager } from './components/Tasks/Navbar/Manager';
import { AddUser } from './components/Tasks/Navbar/AddUser';
import { UserDashboard } from './query/UserDashboard';
import { Navbar } from 'react-bootstrap';
import { UpdateUser } from './components/Tasks/Navbar/UpdateUser';
import { HomeProduct } from './components/Tasks/Product/HomeProduct';
import { Cart } from './components/Tasks/Product/Cart';
import { Exam } from './components/ExamTask/Exam';
import { Dashboard } from './components/ExamTask/Dashboard';
import { AttemptExam1 } from './components/ExamTask/AttemptExam1';
import { Welcome } from './components/ExamTask/Welcome';
import { ExamScore } from './components/ExamTask/ExamScore';
import { MyExams } from './components/ExamTask/MyExams';
import ProtectedRoutes from './components/ExamTask/ProtectedRoutes';
import { LoginUser } from './components/ExamTask/LoginUser';
import { Questions_M } from './components/ExamTask/Questions_M';
import { CreateExam } from './components/ExamTask/CreateExam';
import { Questions_F } from './components/ExamTask/Questions_F';
import { DependentDopDown } from './components/DependentDopDown';

function App() {
  return (
    <div className="App">


      {/* <Home/> */}

      {/* <HomeProduct /> */}

      {/* <DependentDopDown/> */}

      <Dashboard />
      <Routes>

        <Route element={<ProtectedRoutes />} >

        <Route path='/' element={<Dashboard />} />
        <Route path='/student' element={<Dashboard />} />
        <Route path='/getexams' element={<Exam />} />
          <Route path='/exam/:id' element={<AttemptExam1 />} />
          <Route path='/examscore/:id' element={<ExamScore />} />
          <Route path='/myexams' element={<MyExams />} />
          <Route path='/newexam' element={<CreateExam />} />
          <Route path='/questions/manual/:ename' element={<Questions_M />} />
          <Route path='/questions/file/:ename' element={<Questions_F />} />

        </Route>


        {/* <UserDashboard /> */}

        {/* <Route path='/cart' element={<Cart />} />
        <Route path='/product/home' element={<HomeProduct />} /> */}



      
          {/* <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact/manager' element={<Manager />} />
          <Route path='/addnewuser' element={<AddUser />} />
          <Route path='/updateuser/:id' element={<UpdateUser />} /> */}
       



        {/* {<Form/>} */}
        {/* <EmployeeAddress/> */}
        {/* <AddProduct /> */}
        {/* <Employee/> */}
      </Routes>
    </div >
  );
}

export default App;
