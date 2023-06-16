import { auth, facebookProvider, googleProvider } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import "../css/login.css";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import loginImg from "../images/loginImg.png";
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};
const RegisterScreen = ({ onToggle, onShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("User registered:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // saveUserToFirestore(user);
        onShow();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleFacebookSignUp = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // saveUserToFirestore(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  return (
    <div className="loginDiv">
      <div className="formDiv">
        <button className="cross" onClick={onShow}>
          X
        </button>
        <div className="loginTop">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="loginHead">
          <h5>Create Account</h5>
          <p>
            Already have an account? <a onClick={onToggle}>Sign In</a>{" "}
          </p>
        </div>
        <div className="loginBottom">
          <form action="" className="form">
            <input
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              className="inputName"
              required
            />
            <input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              className="inputName"
              required
            />
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="inputEmail"
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="inputPassword"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
              className="inputPassword"
              required
            />

            <button
              onClick={handleRegister}
              disabled={!(password === confirmPass)}
              className="registerButton"
            >
              {" "}
              Create Account
            </button>
            <a onClick={onToggle} className="onlySmall">
              or,Sign In
            </a>
            <button onClick={handleFacebookSignUp} className="socialButton">
              <img src={facebook} alt="" />
              Sign up with Facebook
            </button>
            <button onClick={handleGoogleSignUp} className="socialButton">
              <img src={google} alt="" />
              Sign up with Google
            </button>
          </form>
          <div className="imageDiv">
            <img src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
