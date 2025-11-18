import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
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

  const handleGitHubSignIn = () => {
    console.log("github button clicked");
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log(error));
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
        <div>
          <button onClick={handleGoogleSignIn}>Sign in With Google</button>
          <button onClick={handleGitHubSignIn}>Sign in With Github</button>
        </div>
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
        </div>
      )}
    </div>
  );
};

export default Login;
