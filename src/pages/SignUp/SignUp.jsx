import "./signUp.css";
import {Link} from 'react-router-dom';

export default function NewProduct() {
  return (
    <div className="newSignup">
      <h1 className="addSignupTitle">Create Account</h1>
      <form className="addSignupForm">

        <div className="addSignupItem">
          <input type="text" placeholder="Full name" />
        </div>

        <div className="addSignupItem">
          <input type="text" placeholder="Email address" />
        </div>

        <div className="addSignupItem">
          <input type="text" placeholder="Password" />
        </div>

        <div className="addSignupItem">
          <input type="text" placeholder="Confirm password" />
        </div>


      
         
        <button className="addSignupButton"><Link to="/">Sign up</Link></button>
      </form>
    </div>
  );
}