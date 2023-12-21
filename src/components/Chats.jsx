import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// Firebase
import { auth } from "../firebase";

// Components
import Navbar from "./Navbar";

// Style
import styles from "./Chats.module.css";

// chat engine
import { ChatEngine } from "react-chat-engine";

// context
import { AuthContext } from "../context/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "4f52d739-fbae-4afe-8141-9cf93d80aa0a",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then(avatar => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "0b1b351c-9180-44a9-b29a-1511eced5297",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpg" });
  };

  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />

      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="4f52d739-fbae-4afe-8141-9cf93d80aa0a"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
