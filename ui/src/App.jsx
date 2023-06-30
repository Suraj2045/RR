import logo from './logo.svg';
import './App.css';
import rrImage from './image/rr.jpeg';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import Register from './Register';


function App() {
  return (
    <div >
      <header id="header" class="fixed-top">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <h1 class="logo me-auto me-lg-0"><Link to="/">Rudra roopam</Link></h1>
          {/* <nav style={{marginLeft:"1200px"}} class="navbar order-last order-lg-10 ">
          <ul >
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/Register">Register</Link></li>
          </ul>
          <BiMenu className="mobile-nav-toggle" />
        </nav> */}
        </div>
      </header>
      {/* <div>
        <img alt="" style={{ border: '0', width: '100%', height: '1000px', paddingTop: '40px' }} src={""} frameborder="0" allowfullscreen />
      </div> */}
      <Register/>
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Rudra-roopam</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
