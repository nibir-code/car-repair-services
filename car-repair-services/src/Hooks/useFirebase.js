import {
     getAuth,
     signInWithPopup,
     GoogleAuthProvider,
     signOut,
     onAuthStateChanged
} from "firebase/auth";
import {
     useState,
     useEffect
} from "react";
import initializeAuthentication from "./../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

     const [user, setUser] = useState({});
     const auth = getAuth();
     const signInUsingGoogle = () => {
          const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user);

               })
     }
     //observe user state change
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    setUser(user)
                    // ...
               } else {
                    // User is signed out
                    // ...
                    setUser({});
               }
          });
          return () => unsubscribed;
     }, [])

     const logOut = () => {
          signOut(auth)
               .then(result => {}).catch((error) => {
                    // An error happened.
               });
     }
     return {
          user,
          signInUsingGoogle,
          logOut

     }
}
export default useFirebase;