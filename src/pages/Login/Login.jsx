import { login } from "../../data/user";
import "./Login.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";

function Login({setToken}) {
  const userRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="login-container">
      <div class="mb-3" className="login-header"> 
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          ref={userRef}
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword5" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          ref={passwordRef}
        />
        
        <button className="btn btn-success"
        onClick={()=>{
          const user = userRef.current.value.trim();
          const password = passwordRef.current.value.trim();
          const userInfo = login(user, password);
          userRef.current.value = '';
          passwordRef.current.value = '';
          if(userInfo ===null){
            alert('User not found');
            useRef.current.focus();
          }else{
                    setToken(userInfo.token);
          }
        }}>Login</button>
      </div>
    </div>
  );
}

export default Login;
