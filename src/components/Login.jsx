import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    console.log("google button clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out complete");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Login</h2>

      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in With Google</button>
      )}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.photoURL}
            alt="profile"
            width="80"
            style={{ borderRadius: "50%" }}
          />
          <h2> {user.displayName} </h2>
          <p> Email: {user.email} </p>
          <div style={{ marginTop: "20px" }}></div>
        </div>
      )}
    </div>
  );
};

export default Login;
