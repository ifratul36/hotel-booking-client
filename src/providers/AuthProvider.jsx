// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// import axios from "axios";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   const logOut = async () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     });
//   };

//   // onAuthStateChange
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("State captured", currentUser?.email);

//       if (currentUser?.email) {
//         const user = { email: currentUser?.email };

//         axios
//           .post("http://localhost:3000/jwt", user, { withCredentials: true })
//           .then((res) => {
//             console.log(res.data);
//             setLoading(false);
//           });
//       } else {
//         axios
//           .post(
//             "http://localhost:3000/logout",
//             {},
//             {
//               withCredentials: true,
//             }
//           )
//           .then((res) => {
//             console.log("logout", res.data);
//             setLoading(false);
//           });
//       }
//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     setUser,
//     loading,
//     setLoading,
//     createUser,
//     signIn,
//     signInWithGoogle,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;



/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Log out the user
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      localStorage.removeItem("jwt-token"); // Remove the JWT token on logout
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Monitor authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log("State captured:", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser?.email };

        try {
          const { data } = await axios.post("http://localhost:3000/jwt", user, {
            withCredentials: true,
          });
          // Save the token in localStorage
          localStorage.setItem("jwt-token", data.token);
        } catch (error) {
          console.error("Error fetching JWT token:", error);
        }
      } else {
        // User logged out, remove JWT token
        try {
          await axios.post("http://localhost:3000/logout", {}, {
            withCredentials: true,
          });
          localStorage.removeItem("jwt-token");
        } catch (error) {
          console.error("Error during logout:", error);
        }
      }

      setLoading(false); // Ensure loading state is updated
    });

    return () => unsubscribe();
  }, []);

  // Auth information provided to the entire application
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
