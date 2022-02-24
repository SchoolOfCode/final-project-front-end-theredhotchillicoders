import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/router";

const LoginForm = ({ setIsLoggedIn, setUser }) => {
  const router = useRouter();
  // create state variables for each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        setIsLoggedIn(true);
        setUser(authentication.currentUser);
        router.push("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
      });
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      router.push("/");
    }
  }, []);

  return (
    <form className={styles.loginWrapper} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.buttons}>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Button variant="contained">Cancel</Button>
      </div>
    </form>
  );
};

export default LoginForm;
