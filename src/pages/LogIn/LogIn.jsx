import "./logIn.css";
import {Link} from 'react-router-dom';

export default function NewProduct() {
  return (
    <div className="newLogin">
      <h1 className="addLoginTitle">Log in to Freshmart</h1>
      <form className="addLoginForm">

        <div className="addLoginItem">

         
          <input type="text" placeholder="Email" />
        </div>

        <div className="addLoginItem">
          <input type="text" placeholder="Password" />
          <div class="forget">Forget Password?</div>
        </div>
      
         
        <button className="addLoginButton"><Link to="/home">Log in</Link></button>
        <div class="singup">Don't have an account? <Link to="/signup">Sign up</Link></div>
      </form>
    </div>
  );
}