import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); // Unsubscribe when components unmount
  }, []);

  const handleGptSearch = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handlelanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  };

  return (
    <div className="w-full m-auto flex justify-between px-8 py-3 absolute left-0 right-0 bg-black bg-opacity-40 z-10">
      <img className="w-40" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex gap-5 z-40 items-center">
          {showGptSearch &&(<select className="px-2 py-2 rounded" onChange={handlelanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            className="bg-red-700 font-semibold text-white text-lg py-2 px-8"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img className="w-14" src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
