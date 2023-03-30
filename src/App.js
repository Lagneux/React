import React from 'react';
import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue à React!</h1>
        <p>Identifiez-vous!</p>
        <img src={logo} className="App-logo" alt="logo" />
        
      <form>
        <div class="row align-items-center g-3">
        <div class="col-md-auto col-12">
            <label class="form-label d-md-none" for="inputEmail">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
        </div>
        <div class="col-md-auto col-12">
            <label class="form-label d-md-none" for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
        </div>
        <div class="col-md-auto col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="checkRemember" />
                <label class="form-check-label" for="checkRemember">Remember me</label>
            </div>
        </div>
        <div class="col-md-auto col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </div>
</form>
      </header>
      <>
      <Contact />
      </>
    </div>
  );
}

export default App;
