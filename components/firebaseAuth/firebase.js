import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "../../firebaseConfig";

const app = initializeApp({
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
});

export const auth = getAuth();
export default app;
