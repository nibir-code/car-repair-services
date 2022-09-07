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
     const [isLoading , setIsLoading] = useState(true);

     const auth = getAuth();


     const signInUsingGoogle = () => {
          setIsLoading(true);
          const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    setUser(result.user);

               })
               .finally(()=> setIsLoading(false))
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
               setIsLoading(false);
          });
          return () => unsubscribed;
     }, [])

     const logOut = () => {
          setIsLoading(true);
          signOut(auth)
               .then(result => {}).catch((error) => {
                    // An error happened.
               })
               .finally(()=>setIsLoading(false));
     }
     return {
          user,
          isLoading,
          signInUsingGoogle,
          logOut

     }
}
export default useFirebase;