import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postsCollectionRef = collection(db, "posts"); //To get the reference to the collection named posts in forestore
  let navigate = useNavigate()// To navigate

  // Function called after the form is submitted
  const handlePost = async () => {
   

    await addDoc(postsCollectionRef, { //creates a new document within a specified collection by auto-generating an ID.
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
  // For more info: setDoc() is used to create a documnet if we specify an ID


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
