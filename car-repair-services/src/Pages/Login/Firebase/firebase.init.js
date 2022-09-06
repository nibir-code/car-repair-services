import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config.js"

const initializeAuthentication = () => {
     initializeApp(firebaseConfig);
}
export default initializeAuthentication;