import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import '../css/Navbar.css';
import {Link } from 'react-router-dom';
function Navbar(){
  return(
    <>
<nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/home">
            <img src={require('../assets/logo.png')} alt='logo' height={70}/>
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
            <form className="d-flex ms-auto">
            <Link to="/home">
                <button className="btn btn-secondary my-2 my-sm-0" type="submit" >home</button>
              </Link>
              <Link to="/about">
                <button className="btn btn-secondary my-2 my-sm-0" type="submit" >About us</button>
              </Link>
            </form>
          </div>  </div>
</nav>    
</>
)
};
export default Navbar;