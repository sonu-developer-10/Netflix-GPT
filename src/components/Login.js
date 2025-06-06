import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { imageUrl } from "../utils/constants";

const Login = () => {
  console.log("imageUrl:", imageUrl);
  const [isSignInForm, setIsSignINForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    setErrorMessage(message);
    if (message) return;
    // Sign In / Sign Up Logic

    if (!isSignInForm) {
      //Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignINForm(!isSignInForm);
    setErrorMessage(null);
  };
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg)] bg-blend-multiply min-h-screen bg-center bg-cover bg-black bg-opacity-50">
      <div className="w-4/5 m-auto">
        <Header />
        <div className="p-8 bg-black bg-opacity-65 m-auto w-5/12">
          <form
            className="max-w-sm mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-4xl text-white font-semibold mb-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <div className="mb-5">
                <input
                  ref={name}
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-sm text-white bg-gray-400 bg-opacity-40 border"
                  placeholder="Full Name"
                />
              </div>
            )}
            <div className="mb-5">
              <input
                ref={email}
                type="text"
                id="email"
                className="w-full p-3 rounded-sm text-white bg-gray-400 bg-opacity-40 border"
                placeholder="Email or mobile number"
              />
            </div>

            <div className="mb-5">
              <input
                ref={password}
                type="password"
                id="password"
                className="w-full p-3 rounded-sm text-white bg-gray-400 bg-opacity-40 border"
                placeholder="Password"
              />
            </div>
            <p className="text-red-500 font-semibold pb-3">{errorMessage}</p>

            <button
              className="text-white font-semibold bg-red-700 w-full p-3 rounded-md"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex items-start mb-5 mt-5">
              <p
                className="text-white cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Neflix? Sign Up Now"
                  : "Already registered? Sign In Now."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
