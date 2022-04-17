import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Home/Service/Service';
import CheckOut from './Components/CheckOut/CheckOut';
import Blog from './Components/Blogs/Blog';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/checkout' element={

          <CheckOut/>
        }></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
