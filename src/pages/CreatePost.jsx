import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate()

  const handlePost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: 
      { 
        name: auth.currentUser.displayName, 
        id: auth.currentUser.uid 
      },
    });
    navigate('/')
  };

  useEffect(() =>{
    if(!isAuth) navigate("/login")
  },[])

  return (
    <div
      className="createPostPage"
      style={{ display: "flex", justifyContent: "center", paddingTop: "30px" }}
    >
      <div className="createPostContainer">
        <h1>Create A Post</h1>
        <div className="inputDiv">
          <label>Title: </label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputDiv">
          <label>Post: </label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPost(event.target.value);
            }}
          />
        </div>
        <button onClick={handlePost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
