import "./register.scss";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Register</button>
                </form>
            </div>
            <div className="left">
                <h1>My Social App</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ipsa tenetur. Placeat perspiciatis dolor esse aliquid. Impedit, at vero dolorem rem reprehenderit et commodi odit dolore deleniti consequatur, veniam nam odit quibusdam ipsam repudiandae rem, laudantium est!</p>
                <span>Do you have an account?</span>
                <Link to="/login">
                  <button>Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register