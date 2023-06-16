import { auth, facebookProvider, googleProvider } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [curUser, setcurUser] = useState(null);

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        setcurUser(user);
        console.log("User registered:", user);
      })
      .catch((error) => {
        // Handle registration errors
        console.log("Registration error:", error);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setcurUser(user);
        console.log(user);
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
        setcurUser(user);

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
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth]);

  return (
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}> Register</button>
      <button onClick={handleGoogleSignUp}> Signin with google</button>
      <button onClick={handleFacebookSignUp}> Signin with Facebook</button>

      <button onClick={logOut}> logOut</button>
    </div>
  );
};

export default RegisterScreen;
