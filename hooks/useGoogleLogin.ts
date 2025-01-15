import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../libs/firebase/firebase";

export const useGoogleLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Get the Google access token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // Get user info
      const user = result.user;

      return {
        user,
        token,
      };
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
  };
};

export default useGoogleLogin;
